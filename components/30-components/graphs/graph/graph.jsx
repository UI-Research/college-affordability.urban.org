'use strict';

import React, { Component } from 'react';
import d3 from 'd3';
import _ from 'lodash';
import Actions from '30-components/basic/actions/actions.jsx';
import ActionButton from '30-components/basic/action_button/action_button.jsx';
const LazyLoad = require('30-components/basic/lazyload/lazyload.jsx');

import util from 'util.jsx';
import formatting from 'formatting.jsx';

if (util.canUseDOM()) {
  require('./graph.scss');
}

// Keep graphing piece separate - need its own DOM interaction events.
export class BaseGraph extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    if (util.canUseDOM) {
      const c3 = require('c3');

      // Acquire graph data.
      let data = this.props.file;

      // Identify DOM element we want to apply the graph to.
      data.bindto = '#' + this.props.id;

      // Set max number of axis ticks on y axis
      // TODO: There is a bug that's not allowing C3 to align the values correctly.
        // We can't tap into this feature until it gets fixed on their end.
      // if (data.axis && data.axis.y && data.axis.y.tick && !data.axis.y.tick.count) {
      //  data.axis.y.tick.count = 10;
      //  data.axis.y.tick.fit = true;
      // }

      // Detect any possible instances of the key 'format' and convert it into the specified format.
      if (data.data && data.data.labels && data.data.labels.format) {
        // Account for per set, or one global formatting.
        if (_.isObject(data.data.labels.format)) {
          _.each(data.data.labels.format, (entry, index) => {
            // Check if we've already processed this.
            if (!_.isFunction(entry)) {
              data.data.labels.format[index] = formatting.f(entry);
            }
          });
        }
        else {
          if (!_.isFunction(data.data.labels.format)) {
            data.data.labels.format = formatting.f(data.data.labels.format);
          }
        }
      }

      if (data.axis) {
        if (data.axis.x && data.axis.x.tick && data.axis.x.tick.format) {
          if (!_.isFunction(data.axis.x.tick.format)) {
            data.axis.x.tick.format = formatting.f(data.axis.x.tick.format);
          }
        }
        if (data.axis.y && data.axis.y.tick && data.axis.y.tick.format) {
          if (!_.isFunction(data.axis.y.tick.format)) {
            data.axis.y.tick.format = formatting.f(data.axis.y.tick.format);
          }
        }
        if (data.axis.y2 && data.axis.y2.tick && data.axis.y2.tick.format) {
          if (!_.isFunction(data.axis.y2.tick.format)) {
            data.axis.y2.tick.format = formatting.f(data.axis.y2.tick.format);
          }
        }
      }

      // Relocate the x axis to the bottom outer center of the graph.
      // We expect implementers to assign a string to data.axis.x.label.
      // e.g.
      // ...
      // axis {
      //   x {
      //     label: "My x axis label"
      //   }
      // }
      // }
      if (data.axis && data.axis.rotated && data.axis.y && data.axis.y.label && typeof data.axis.y.label === 'string') {
        data.axis.y.label = {
          text: data.axis.y.label,
          position: 'outer-center'
        };
      }
      if (data.axis && data.axis.x && data.axis.x.label && typeof data.axis.x.label === 'string') {
        data.axis.x.label = {
          text: data.axis.x.label,
          position: 'outer-center'
        };
      }

      // Increase padding at top of the graph
      // (To prevent the graph from getting cut off)
      if (!data.padding) {
        data.padding = {
          top: 10,
          bottom: 20,
          left: 50,
          right: 50
        }
      }

      // Always have the y axis start at 0
      if (data.axis && data.axis.y && !data.axis.y.padding) {
        data.axis.y.padding = {
          top: 50,
          bottom: 1
        };
        data.axis.y.min = 0;
      }

      if (data.axis && data.axis.x && !data.axis.x.padding) {
        data.axis.x.padding = {
          left: 0,
          right: 0.3
        };
      }


      // Relocate legend to top of the graph.
      if (!data.legend) {
        data.legend = {
          position: 'bottom',
          item: {
            onclick: function () { return false; }
          }
        };
      }

      // Hide data points on area graphs
      if (data.data.type && data.data.type === 'area') {
        data.point = {
          show: false
        };
      }

      if (_.includes(['line', 'area'], data.data.type)) {
        // Line and area graphs should not show data points.
        data.data.labels = false;

        // Line and area graphs must flush to left and right.
        if (data.axis && data.axis.x) {
          if (data.axis.x.type == 'indexed') {
            data.axis.x.padding = {
              left: 0.15,
              right: 0.15
            };
          }
          else {
            data.axis.x.padding = {
              left: -0.35,
              right: -0.35
            };
          }
        }

        // Add additional padding to display values.
        if (!data.padding) {
          data.padding = {
            top: 20,
            bottom: 20,
            left: 50,
            right: 50
          };
        }
      }
      else if (data.data.type == 'bar' && data.axis && data.axis.x && data.axis.x.type == 'indexed') {
        data.axis.x.padding = {
          left: 0.4,
          right: 0.4
        };
      }
      else if (data.data.type == 'area-spline') {
        data.axis.x.padding = {
          left: 0.2,
          right: 0.2
        };
      }

      // Show grid lines by default
      if (!data.grid) {
        data.grid = {};
        // This we enable by default for most graphs.
        if (!data.grid.y) {
          data.grid.y = {
            show: 'true',
            // Make 0 on the y axis the base line.
            // In most cases, this gridline will sit nicely
            // on the axis itself...unless there are negative values
            // in the dataset... in which case we intentionally want
            // the black line to cut in the middle of the canvas
            // to prove where the 0 value is.
            lines: [{
              value: 0,
              class: 'grid-base'
            }]
          };
        }
      }

      // Hide tooltip.
      data.tooltip = {
        show: true
      };

      // Set default colors.
      data.color = {
        pattern: [
          '#1696d2',
          '#d2d2d2',
          '#000000',
          '#fdbf11',
          '#ec008b',
          '#55b748'
        ]
      };

      // If sets are available but columns aren't, attempt to
      // set the graph's initial data with the first set.
      if (data.data.sets) {
        if (!data.data.columns) {
          let first = _.keys(data.data.sets)[0];
          let dataset = (typeof data.data.sets[first][1] == 'object') ? data.data.sets[first][1] : data.data.sets[first];
          data.data.columns = dataset;
        }
      }

      // We're doing a lot of hacks post-chart generation.
      // So we need to just slash the chart and force it to
      // regenerate.
      data.onresized = () => {
        chart.destroy();
        this.checkVerticalLabels();
        chart = c3.generate(data);
        this.polishChart(this);
      };


      // If small flag is set on <Graph />,
      // apply special formatting for small graph sizes!
      if (this.props.small == 'true') {
        if (!data.data.size) {
          data.size = {
            'height': 210,
            'width': 210
          };
        }

        // Hide points, especially on area graphs.
        if (!data.point) {
          data.point = {};
        }
        if (!data.point.show) {
          data.point.show = false;
        }
      }

      // Generate the graph!
      this.checkVerticalLabels();
      let chart = c3.generate(data);

      // Make it available to other scopes.
      const polishChart = this.polishChart;
      polishChart(this);

      // If sets are available, reveal them as options
      if (data.data.sets) {
        // For use with the done() method later...
        let object = this;
        let sets = data.data.sets;

        let swapSet = () => {
          chart.destroy();
          this.checkVerticalLabels();

          // Toggles the dataset chosen from the dropdown.
          let target = d3.select(`${data.bindto}_dropdown select`).property('value');
          let dataset = (typeof sets[target][1] == 'object') ? sets[target][1] : sets[target];
          data.data.columns = dataset;

          chart = c3.generate(data);
          this.polishChart(this);
        }

        // Create select box for toggles
        let options = d3.select(`${data.bindto}_dropdown`);
        let select = options.append('select')
          .attr('class', 'select')
          .on('change', swapSet);

        _.map(data.data.sets, (set, index) => {
          let dropdown_label = (typeof set[0] == 'object') ? set[0][0] : set[0];
          select.append('option')
            .attr('class', util.machineName(index))
            .attr('value', index)
            .text(dropdown_label);
        });
      }
    }
  }
  polishChart(object) {
    const setLegend = object.setLegend;
    setLegend(object);
    const setTick = object.setTick;
    setTick(object);
    const moveAxisLabel = object.moveAxisLabel;
    moveAxisLabel(object);
    const lineChartFormatting = object.lineChartFormatting;
    lineChartFormatting(object);
    const barChartFormatting = object.barChartFormatting;
    barChartFormatting(object);
    const formatDataLabel = object.formatDataLabel;
    formatDataLabel(object);
    const createCSV = object.createCSV;
    createCSV(object);
  }
  createCSV(object) {
    const toCSV = (arr) => {
      let s ='';
      _.each(arr, (object) => {
        s += object.join(',');
        s += "\r\n";
      });

      return encodeURIComponent(s);
    }
    let encodedUri = 'data:Application/octet-stream,' + toCSV(object.props.file.data.columns);
    d3.select(`.c-${object.props.id}-container a.button-download_data__csv_`)
      .attr('href', encodedUri)
      .attr('download', `${util.machineName(object.props.file.title)}.csv`);
  }
  checkVerticalLabels() {
    // Remove following line to enable vertical labels.
    return;

    // Make bottom axis labels vertical for tablet/mobile.
    const width = window.innerWidth;
    let data = this.props.file;
    if (!data.axis.rotated) {
      if (data.axis.x) {
        if (!data.axis.x.tick) {
          data.axis.x.tick = {};
        }
        if (width <= util.breakpointWidth('large')) {
          data.axis.x.tick.rotate = 90;
          data.axis.x.tick.multiline = false;
        }
        else {
          data.axis.x.tick.rotate = 0;
          data.axis.x.tick.multiline = true;
        }
      }
    }
    else {
      if (data.axis.y) {
        if (!data.axis.y.tick) {
          data.axis.y.tick = {};
        }
        if (width <= util.breakpointWidth('large')) {
          data.axis.y.tick.rotate = 90;
          data.axis.y.tick.multiline = false;
        }
        else {
          data.axis.y.tick.rotate = 0;
          data.axis.y.tick.multiline = true;
        }
      }
    }
  }
  static stylesToObject(style) {
    // Break style attributes into an array;
    var styles = style.split(';');
    var style_array = {};
    // Build array for styles.
    for (var i = 0; i < styles.length; i++) {
      var single_style = styles[i].split(':');
      if (single_style[0].trim() && single_style[1].trim()) {
        style_array[single_style[0].trim()] = single_style[1].trim();
      }
    }
    return style_array;
  }
  setLegend(object) {
    // Clean up (just in case);
    d3.select(`#${object.props.id}_legend`).selectAll('*').remove();

    let legend = d3.selectAll(`#${object.props.id} .c3-legend-item`);
    // If there's only one data set, don't bother listing the legend.
    if (legend[0].length <= 1) {
      legend.remove();
    }
    else {
      // Set up the legend above the graph
      let svg = d3.select(`#${object.props.id}_legend`)
        .append('svg')
        .attr('width', '100%');
      legend.each(function() {
        svg.node().appendChild(this);
      });
    }

  }
  moveAxisLabel(object) {
    // Transform Y axis to not be so vertical...
    let data = object.props.file;

    // TODO: This should probably be a util/helper method.
    // For now, it's only used for this purpose.
    d3.selection.prototype.last = function() {
      var last = this.size() - 1;
      return d3.select(this[0][last]);
    };

    if (data.axis) {
      if (!data.axis.rotated && data.axis.y && data.axis.y.label) {
        // Create container for y axis
        const container = d3.select(`#${object.props.id}`).insert('svg', ':first-child')
          .attr('width', '100%')
          .attr('height', 20);
        // Fix and encapsulate y axis label
        const y_axis_label = d3.selectAll(`#${object.props.id} .c3-axis-y .c3-axis-y-label`)
          .attr('transform', 'rotate(0)')
          .attr('style', 'text-anchor: start')
          .attr('dx', '0');
        // Move it over to new container
        y_axis_label.each(function() {
          container.node().appendChild(this);
        });
      }

      if (data.axis.rotated && data.axis.x && data.axis.x.label) {
        // Create container for x axis
        const container = d3.select(`#${object.props.id}`).insert('svg', ':first-child')
          .attr('width', '100%')
          .attr('height', 20);
        // Fix and encapsulate x axis label
        const x_axis_label = d3.selectAll(`#${object.props.id} .c3-axis-x .c3-axis-x-label`)
          .attr('transform', 'rotate(0)')
          .attr('dy', '1em')
          .attr('style', 'text-anchor: start')
          .attr('dx', '0');
        // Move it over to new container
        x_axis_label.each(function() {
          container.node().appendChild(this);
        });
      }
    }
  }
  setTick(object) {
    // When in category mode, align the ticks to be directly on top
    // of the labels.
    if (object.props.file.axis && object.props.file.axis.x && !_.isEmpty(object.props.file.axis.x.type) && object.props.file.axis.x.type == 'category') {
      d3.selectAll(`#${object.props.id} g.c3-axis-x g.tick line`).remove();
      let ticks = d3.selectAll(`#${object.props.id} g.c3-axis-x g.tick`);
      _.map(ticks[0],function (tick) {
        d3.select(tick).insert('line', ':first-child')
          .attr('y2', 6)
          .attr('x1', 0)
          .attr('x2', 0);
      });
    }
  }
  lineChartFormatting(object) {
    let chart_dots = d3.selectAll(`#${object.props.id} .c3-circle`);
    chart_dots.each(function() {
      var style = d3.select(this).attr('style');
      var style_array = BaseGraph.stylesToObject(style);
      // Set color of circle stroke.
      var color = style_array['fill'];
      d3.select(this)
        .attr('r', '5')
        .attr('style', style + 'stroke: ' + color);
    });
    // Override radius change on hover.
    let hover_states = d3.selectAll('.c3-event-rect');
    hover_states.each(function() {
      // Stop event from changing circle radius.
      hover_states.on('mouseover', function() { return false; });
    });
  }
  barChartFormatting(object) {
    let bar_text = d3.selectAll(`#${object.props.id}.c-bar__container--grouped .c3-chart-texts .c3-text`);
    bar_text.each(function() {
      var style = d3.select(this).attr('style');
      var style_array = BaseGraph.stylesToObject(style);
      // Need to use rgb and hex for different browsers.
      var colors_light_text = [
        'rgb(22, 150, 210)',
        'rgb(0, 0, 0)',
        'rgb(236, 0, 139)',
        'rgb(85, 183, 72)',
        'rgb(92, 88, 89)',
        'rgb(219, 43, 39)',
        '#1696d2',
        '#000000',
        '#ec008b',
        '#55b748',
        '#5c5859',
        '#db2b27'
      ];
      // Assign fill color to chart text.
      var is_white = colors_light_text.indexOf(style_array['fill']);
      var color = (is_white > -1) ? 'white' : 'black';
      d3.select(this).attr('style', style + ' fill:' + color + ' !important');
    });
  }
  formatDataLabel(object) {
    // Data display labels for vertical bar charts.
    let data_labels_v = d3.selectAll(`.c-bar-grouped.c-bar-vertical #${object.id} .c3-chart-texts .c3-text`);
    data_labels_v.each(function() {
      // Add 14 pixels to the labels to move them into the stacked bars.
      var y = parseFloat(d3.select(this).attr('y')) + 13;
      d3.select(this).attr('y', y);
    });
    // Data display labels for horizontal bar charts.
    let data_labels_h = d3.selectAll(`.c-bar-grouped.c-bar-horizontal #${object.id} .c3-chart-texts .c3-text`);
    data_labels_h.each(function() {
      // Subtract 10 pixels to the labels to move them into the stacked bars.
      var y = parseFloat(d3.select(this).attr('x')) - 6;
      d3.select(this).attr('x', y);
    });
  }

  render() {
    const legend = `${this.props.id}_legend`;
    const dropdown = `${this.props.id}_dropdown`;
    const options = `${this.props.id}_options`;

    var chart_classes = `c-graph__container c-${this.props.file.data.type}__container`;
    if (this.props.file.data.groups) {
      chart_classes += ` c-${this.props.file.data.type}__container--grouped`;
    }

    return (
      <div>
        <div id={dropdown} className="c-graph_dropdown" />
        <div id={legend} className="c-graph__legend" />
        <div id={this.props.id} className={`c-graph__container ${chart_classes}`} />
        <div id={options} className="c-graph__options" />
      </div>
    );
  }
}

BaseGraph.propTypes = {
  content: React.PropTypes.string,
  small: React.PropTypes.string,
  id: React.PropTypes.string
};
BaseGraph.defaultProps = {
  type: 'line',
  small: 'false',
  id: ''
};


export class GraphAttribution extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <strong className="c-text__viz-notes__title">{_.capitalize(this.props.type)}: </strong>
        <p className="c-text__viz-notes__description" dangerouslySetInnerHTML={{ __html: this.props.text }} />
      </div>
    );
  }
}

GraphAttribution.propTypes = {
  type: React.PropTypes.string,
  text: React.PropTypes.string
};
GraphAttribution.defaultProps = {
  type: 'notes',
  text: ''
};


export default class Graph extends Component {
  constructor(props) {
    super(props);

    // Create unique ID for element.
    this.id = 'graph' + util.uniqueID();

    // Force specify type of graph.
    if (props.file && props.file.data && !props.file.data.type) {
      props.file.data.type = props.type;
    }
  }
  render() {
    let base_class = `c-graph c-${this.id}-container c-${this.props.file.data.type}`,
        anchor = null;

    // If it's a grouped bar chart, flag it as such (so we can move the labels)
    if (this.props.file.data.groups) {
      base_class += ` c-${this.props.file.data.type}-grouped`;
    }

    // If it's horizontal, drop that in as the classname.
    base_class += (this.props.file.axis && this.props.file.axis.rotated) ? ` c-${this.props.file.data.type}-horizontal` : ` c-${this.props.file.data.type}-vertical`;

    if (this.props.anchor_name) {
      // Replace any spaces with _.
      let anchor_name = util.cleanString(this.props.anchor_name);
      anchor = <a name={anchor_name}></a>;
    }

    // Set up notes and source if they exist
    let notes = false;
    if (this.props.file.metadata && this.props.file.metadata.notes) {
      notes = <GraphAttribution type="notes" text={this.props.file.metadata.notes} />;
    }
    let source = false;
    if (this.props.file.metadata && this.props.file.metadata.source) {
      source = <GraphAttribution type="source" text={this.props.file.metadata.source} />;
    }

    // Check if there is an associated image with graph.  If so, mock up the ActionButton appropriately.
    let img_href = '#';
    let img_disable = 'true';
    if (this.props.image) {
      img_href = this.props.image;
      img_disable = 'false';
    }

    // Only show buttons on all but small graphs (otherwise, it'd look ridiculous...).
    let action_buttons;
    if (this.props.small !== 'true') {
      action_buttons = (
        <Actions>
          <ActionButton title='Save Image' href={img_href} disable={img_disable} />
          <ActionButton title='Download data (csv)' href='#' />
        </Actions>
      );
    }

    return (
      <div className={base_class}>
        <h2>{this.props.file.title}</h2>
        {anchor}
        <div className="c-graph__wrapper">
          <LazyLoad>
            <BaseGraph file={this.props.file} id={this.id} small={this.props.small} />
          </LazyLoad>
        </div>
        <div className="c-text__caption c-text__caption--bottom">
          <div className="c-text__viz-notes">
            {source}
            {notes}
          </div>
        </div>
        {action_buttons}
      </div>
    );
  }
}

Graph.propTypes = {
  anchor_name: React.PropTypes.string,
  title: React.PropTypes.string,
  type: React.PropTypes.string,
  image: React.PropTypes.string,
  small: React.PropTypes.string
};
Graph.defaultProps = {
  anchor_name: '',
  title: '',
  type: 'line',
  image: '',
  small: 'false'
};
