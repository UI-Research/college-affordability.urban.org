'use strict';

const React = require('react'),
         d3 = require('d3'),
          _ = require('lodash'),
      LazyLoad = require('30-components/basic/lazyload/lazyload.jsx');
const util = require('util.jsx');

if (util.canUseDOM()) {
  require('./graph.scss');
}

// Keep graphing piece separate - need its own DOM interaction events.
const BaseGraph = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      title: '',
      type: 'line'
    };
  },
  componentWillMount() {
    // Create unique ID for element.
    this.id = 'graph' + util.uniqueID();
  },
  componentDidMount: function() {
    if (util.canUseDOM) {
      const c3 = require('c3');

      // Acquire graph data.
      let data = this.props.file;

      // Identify DOM element we want to apply the graph to.
      data.bindto = '#' + this.id;

      // Force specify type of graph.
      if (!data.data.type) {
        data.data.type = 'line';
      }

      //
      // Custom options
      //
      // data.custom_options = {
      //   prefix:  '',
      //   suffix:  '',
      //   negatives: false,
      //   max_values: 0,
      //   fit_x_values: false,
      //   formatted_numbers: false
      // };

      // Anaylze the graph to set some options.
      // data = util.analyzeGraphData(data);

      // Show all x ticks.
      // data.axis = {
      //   x: {
      //     tick: {
      //       fit: data.custom_options.fit_x_values
      //     }
      //   }
      // };

      // Do we need to custom format the y axis values.
      // if (data.custom_options.formatted_numbers || data.custom_options.prefix || data.custom_options.prefix) {
      //   data.axis.y = {
      //     tick: {
      //       format: function (d) {
      //         if (data.custom_options.formatted_numbers) {
      //           let re = '\\d(?=(\\d{3})+$)';
      //           d = d.toString().replace(new RegExp(re, 'g'), '$&,');
      //         }
      //         return data.custom_options.prefix + d + data.custom_options.suffix;
      //       }
      //     }
      //   };
      // }

      // Show a line at 0 if we have negative values.
      // if (data.custom_options.negatives) {
      //   data.grid = {
      //     y: {
      //       lines: [
      //         {value: 0}
      //       ]
      //     }
      //   };
      // }
      //
      // END Custom options
      //

      // Detect any possible instances of the key 'format' and convert it into the specified format.
      if (data.data && data.data.labels && data.data.labels.format) {
        _.map(data.data.labels.format, (entry, index) => {
          data.data.labels.format = d3.format(entry);
        });
      }
      if (data.axis) {
        if (data.axis.x && data.axis.x.tick && data.axis.x.tick.format) {
          data.axis.x.tick.format = d3.format(data.axis.x.tick.format);
        }
        if (data.axis.y && data.axis.y.tick && data.axis.y.tick.format) {
          data.axis.y.tick.format = d3.format(data.axis.y.tick.format);
        }
        if (data.axis.y2 && data.axis.y2.tick && data.axis.y2.tick.format) {
          data.axis.y2.tick.format = d3.format(data.axis.y2.tick.format);
        }
      }


      // Relocate legend to top of the graph.
      if (!data.legend) {
        data.legend = {
          position:'inset',
          inset: {
            anchor: 'top-left',
            x: 0
          }
        };
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

      c3.generate(data);

      let legend = d3.select(`#${this.id} .c3-legend-background`)[0][0].parentNode;
      let pos = ((d3.select('svg').attr('width') - d3.select('.c3-legend-background rect').attr('width')) / 2);
      d3.select(legend).attr('transform' , `translate(${pos}, 0)`);
    }
  },
  attribution: function(string) {
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
  },
  render: function() {
    let base_class = 'c-' + this.props.type,
        container_class = base_class + '__container';

    return (
      <div className={base_class}>
        <h2>{this.props.title}</h2>
        <div id={this.id} className={container_class}></div>
        <div className="c-text__caption c-text__caption--bottom">
          <div className="c-text__viz-notes">
            {this.attribution('source')}
            {this.attribution('notes')}
            {this.attribution('data')}
          </div>
        </div>
      </div>
    );
  }
});

const Graph = React.createClass({
  propTypes: {
    anchor_name: React.PropTypes.string,
    title: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      anchor_name: '',
      title: ''
    };
  },
  render: function() {
    return (
    <LazyLoad anchor_name={this.props.anchor_name}>
      <BaseGraph title={this.props.title} file={this.props.file} />
    </LazyLoad>
    );
  }
});

module.exports = Graph;
