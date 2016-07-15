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
      if (data.axis && data.axis.y && data.axis.y.tick) {
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
      if (data.axis && data.axis.x && data.axis.x.label && typeof data.axis.x.label === 'string') {
        data.axis.x.label = {
          text: data.axis.x.label,
          position: 'outer-center'
        }
      }

      // Increase padding at top of the graph
      // (To prevent the graph from getting cut off)
      data.padding = {
        top: 5
      }

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

      // Hide data points on spline graphs
      if (data.data.type && data.data.type === 'area-spline') {
        data.point = {
          show: false
        }
      }


      if (['line', 'area-spline'].includes(data.data.type)) {
        // Line and area graphs should not show data points.
        data.data.labels = false;

        // Line and area graphs must flush to left and right.
        if (data.axis && data.axis.x) {
          data.axis.x.padding = {
            left: -0.5,
            right: -0.5
          }
        }
        data.padding = {
          top: 20,
          bottom: 20,
          left: 50,
          right: 50
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
        show: false
      };

      // Set default colors.
      data.color = {
        pattern: [
          '#1696d2',
          '#ec008b',
          '#d2d2d2',
          '#fdbf11',
          '#332d2f',
          '#0a4c6a'
        ]
      };

      // If sets are available but columns aren't, attempt to
      // set the graph's initial data with the first set.
      if (data.data.sets) {
        if (!data.data.columns) {
          let first = _.keys(data.data.sets)[0];
          data.data.columns = [];
          data.data.columns.push(data.data.sets[first]);
        }
      }

      // We're doing a lot of hacks post-chart generation.
      // So we need to just slash the chart and force it to
      // regenerate.
      data.onresized = () => {
        chart.destroy();
        chart = c3.generate(data);
        this.polishChart(this);
      }


      let chart = c3.generate(data);

      // Make it available to other scopes.
      const polishChart = this.polishChart;
      polishChart(this);

      // If sets are available, reveal them as options
      if (data.data.sets) {
        _.map(data.data.sets, (set) => {
          let options = d3.select(`${data.bindto}_options`);
          options.append('a')
            .attr('name', set[0])
            .text(set[0])
            .on('click', () => {
              // Clear out legend landing site.
              d3.selectAll(`${data.bindto}_legend svg`).remove();

              // Load new data.
              chart.load({
                columns: [
                  set
                ],
                unload: chart.columns,
                done: function() {
                  polishChart(this);
                }
              });
            });
        });
      }
    }
  }
  polishChart(object) {
    const setLegend = object.setLegend;
    setLegend(object);
    const setTick = object.setTick;
    setTick(object);
    const moveYAxisLabel = object.moveYAxisLabel;
    moveYAxisLabel(object);
  }
  setLegend(object) {
    // Clean up (just in case);
    d3.select(`#${object.id}_legend`).selectAll("*").remove();

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
  moveYAxisLabel(object) {
    // Transform Y axis to not be so vertical...
    let data = object.props.file;

    d3.selection.prototype.last = function() {
      var last = this.size() - 1;
      return d3.select(this[0][last]);
    };

    if (data.axis) {
      if (data.axis.y && data.axis.y.label) {
        // Create container for y axis
        const container = d3.select(`#${object.id}`).insert('svg', ':first-child')
          .attr('width', '100%')
          .attr('height', 25);
        // Fix and encapsulate y axis label
        const y_axis_label = d3.selectAll(`#${object.id} .c3-axis-y .c3-axis-y-label`)
          .attr('transform', 'rotate(0)')
          .attr('dx', '5em');
        // Move it over to new container
        y_axis_label.each(function() {
          container.node().appendChild(this);
        });
      }
    }
  }
  setTick(object) {
    // When in category mode, align the ticks to be directly on top
    // of the labels.
    if (!_.isEmpty(object.props.file.axis.x.type) && object.props.file.axis.x.type == 'category') {
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
  render() {
    const legend = `${this.id}_legend`;
    const options = `${this.id}_options`;

    return (
      <div>
        <div id={legend} className="c-graph__legend"></div>
        <div id={this.id} className={`c-graph__container c-${this.props.file.data.type}__container`}></div>
        <div id={options} className="c-graph__options"></div>
      </div>
    );
  }
}

BaseGraph.propTypes = {
  content: React.PropTypes.string
};
BaseGraph.defaultProps = {
  type: 'line'
};


export default class Graph extends Component {
  constructor(props) {
    super(props);

    // Force specify type of graph.
    if (!this.props.file.data.type) {
      this.props.file.data.type = this.props.type;
    }
  }
  attribution(string) {
    if (this.props.file.metadata && this.props.file.metadata[string]) {
      return (
        <div>
          <strong className="c-text__viz-notes__title">{_.capitalize(string)}: </strong>
          <p className="c-text__viz-notes__description" dangerouslySetInnerHTML={{ __html: this.props.file.metadata[string] }} />
        </div>
      );
    }
    else {
      return false;
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

    return (
    <div className={base_class}>
      <h2>{this.props.file.title}</h2>
      {anchor}
      <LazyLoad height={320}>
        <BaseGraph file={this.props.file} />
      </LazyLoad>
      <div className="c-text__caption c-text__caption--bottom">
        <div className="c-text__viz-notes">
          {this.attribution('source')}
          {this.attribution('notes')}
        </div>
      </div>
    </div>
    );
  }
}

Graph.propTypes = {
  anchor_name: React.PropTypes.string,
  title: React.PropTypes.string,
  type: React.PropTypes.string
};
Graph.defaultProps = {
  anchor_name: '',
  title: '',
  type: 'line'
};
