'use strict';

import React, { Component } from 'react';
import d3 from 'd3';
import _ from 'lodash';
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

    // Create unique ID for element.
    this.id = 'graph' + util.uniqueID();
  }
  componentDidMount() {
    if (util.canUseDOM) {
      const c3 = require('c3');

      // Acquire graph data.
      let data = this.props.file;

      // Identify DOM element we want to apply the graph to.
      data.bindto = '#' + this.id;

      // Set max number of axis ticks on y axis
      if (data.axis && data.axis.y && data.axis.y.tick && !data.axis.y.tick.count) {
        data.axis.y.tick.count = 10;
      }

      // Detect any possible instances of the key 'format' and convert it into the specified format.
      if (data.data && data.data.labels && data.data.labels.format) {
        _.map(data.data.labels.format, (entry) => {
          data.data.labels.format = formatting.f(entry);
        });
      }
      if (data.axis) {
        if (data.axis.x && data.axis.x.tick && data.axis.x.tick.format) {
          data.axis.x.tick.format = formatting.f(data.axis.x.tick.format);
        }
        if (data.axis.y && data.axis.y.tick && data.axis.y.tick.format) {
          data.axis.y.tick.format = formatting.f(data.axis.y.tick.format);
        }
        if (data.axis.y2 && data.axis.y2.tick && data.axis.y2.tick.format) {
          data.axis.y2.tick.format = formatting.f(data.axis.y2.tick.format);
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
      data.padding = {
        top: 5
      };

      // Always have the y axis start at 0
      if (data.axis && data.axis.y) {
        data.axis.y.padding = {
          top: 50,
          bottom: 0
        };
        data.axis.y.min = 0;
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
          data.axis.x.padding = {
            left: -0.4,
            right: -0.4
          };
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

      // Show grid lines by default
      if (!data.grid) {
        data.grid = {};
        // This we enable by default for most graphs.
        if (!data.grid.y) {
          data.grid.y = {
            show: 'true'
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


      if (this.props.small == 'true') {
        if (!data.data.size) {
          data.size = {
            'height': 210,
            'width': 210
          };
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
          let target = d3.select(`${data.bindto}_dropdown select`).property('value');

          // Clear out legend landing site. #garbage_collection
          d3.selectAll(`${data.bindto}_legend svg`).remove();

          let dataset = (typeof sets[target][1] == 'object') ? sets[target][1] : sets[target];

          // Load new data.
          chart.load({
            columns: dataset,
            unload: chart.columns,
            done: function() {
              polishChart(object);
            }
          });
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
    const firstLastTicks = object.firstLastTicks;
    firstLastTicks(object);
    const lineChartFormatting = object.lineChartFormatting;
    lineChartFormatting(object);
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
  setLegend(object) {
    // Clean up (just in case);
    d3.select(`#${object.id}_legend`).selectAll('*').remove();

    let legend = d3.selectAll(`#${object.id} .c3-legend-item`);
    // If there's only one data set, don't bother listing the legend.
    if (legend[0].length <= 1) {
      legend.remove();
    }
    else {
      // Set up the legend above the graph
      let svg = d3.select(`#${object.id}_legend`)
        .append('svg')
        .attr('width', '100%')
        .attr('height', 20);
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
        const container = d3.select(`#${object.id}`).insert('svg', ':first-child')
          .attr('width', '100%')
          .attr('height', 20);
        // Fix and encapsulate y axis label
        const y_axis_label = d3.selectAll(`#${object.id} .c3-axis-y .c3-axis-y-label`)
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
        const container = d3.select(`#${object.id}`).insert('svg', ':first-child')
          .attr('width', '100%')
          .attr('height', 20);
        // Fix and encapsulate x axis label
        const x_axis_label = d3.selectAll(`#${object.id} .c3-axis-x .c3-axis-x-label`)
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
      d3.selectAll(`#${object.id} g.c3-axis-x g.tick line`).remove();
      let ticks = d3.selectAll(`#${object.id} g.c3-axis-x g.tick`);
      _.map(ticks[0],function (tick) {
        d3.select(tick).insert('line', ':first-child')
          .attr('y2', 6)
          .attr('x1', 0)
          .attr('x2', 0);
      });
    }
  }
  firstLastTicks(object) {
    // Remove first and last ticks from all charts.
    let x_axis_path = d3.selectAll(`#${object.id} .c3-axis-x .domain`);
    x_axis_path.each(function() {
      // Split first part of attribute.
      let path = d3.select(this).attr('d').split(',');
      let path_vals = '',
          first_val = '';
      if (path.length > 1) {
        // Extract path values.
        path_vals = path[1].split(/(?=[VHV])/);
        // Check both regular and axis flipped charts.
        if (path[0]=='M-6') {
          // If axis is flipped on chart.
          if (path_vals[3] == 'H-6') {
            path_vals[3] = 'H-0';
          }
          first_val = 'M-0';
        }
        else if (path_vals[0] == '6') {
          // Standard chart with regular axis.
          // Change tick height values to zero.
          path_vals[0] = '0';
          if (path_vals[3] == 'V6') {
            path_vals[3] = 'V0';
          }
          first_val = path[0];
        }
        else {
          return;
        }
      }
      else {
        return;
      }
      // Rewrite 'd' attribute with new path values and original ones.
      let new_path_vals = path_vals.join('');
      let final_path_vals = first_val + ',' + new_path_vals;
      // Set new attribute on the line element.
      d3.select(this).attr('d', final_path_vals);
    });
  }
  lineChartFormatting(object) {
    let chart_dots = d3.selectAll(`#${object.id} .c3-circle`);
    chart_dots.each(function() {
      var style = d3.select(this).attr('style');
      var styles = style.split(';');
      var style_array = {};
      // Build array for styles.
      for (var i = 0; i < styles.length; i++) {
        var single_style = styles[i].split(':');
        if (single_style[0].trim() && single_style[1].trim()) {
          style_array[single_style[0].trim()] = single_style[1].trim();
        }
      }
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
  render() {
    const legend = `${this.id}_legend`;
    const dropdown = `${this.id}_dropdown`;
    const options = `${this.id}_options`;

    return (
      <div>
        <div id={dropdown} className="c-graph_dropdown" />
        <div id={legend} className="c-graph__legend" />
        <div id={this.id} className={`c-graph__container c-${this.props.file.data.type}__container`} />
        <div id={options} className="c-graph__options" />
      </div>
    );
  }
}

BaseGraph.propTypes = {
  content: React.PropTypes.string,
  small: React.PropTypes.string
};
BaseGraph.defaultProps = {
  type: 'line',
  small: 'false'
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

    // Force specify type of graph.
    if (props.file && props.file.data && !props.file.data.type) {
      props.file.data.type = props.type;
    }
  }
  render() {
    let base_class = `c-graph c-${this.props.file.data.type}`,
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

    return (
      <div className={base_class}>
        <h2>{this.props.file.title}</h2>
        {anchor}
        <LazyLoad>
          <BaseGraph file={this.props.file} small={this.props.small} />
        </LazyLoad>
        <div className="c-text__caption c-text__caption--bottom">
          <div className="c-text__viz-notes">
            {source}
            {notes}
          </div>
        </div>
      </div>
    );
  }
}

Graph.propTypes = {
  anchor_name: React.PropTypes.string,
  title: React.PropTypes.string,
  type: React.PropTypes.string,
  small: React.PropTypes.string
};
Graph.defaultProps = {
  anchor_name: '',
  title: '',
  type: 'line',
  small: 'false'
};
