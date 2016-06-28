'use strict';

const React = require('react'),
      LazyLoad = require('30-components/basic/lazyload/lazyload.jsx');
const util = require('util.jsx');

if (util.canUseDOM()) {
  require('./graph.scss');
}

// Keep graphing piece separate - need its own DOM interaction events.
const BaseGraph = React.createClass({
  propTypes: {
    type: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
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
  render: function() {
    // Force specify type of graph.
    if (!this.props.file.data.type) {
      this.props.file.data.type = this.props.type;
    }
    let container_class = 'c-graph__container c-' + this.props.file.data.type + '__container';

    return (
      <div id={this.id} className={container_class}></div>
    );
  }
});

const Graph = React.createClass({
  propTypes: {
    anchor_name: React.PropTypes.string,
    title: React.PropTypes.string,
    type: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      anchor_name: '',
      title: '',
      type: 'line'
    };
  },
  raw: function(string) {
    if (this.props.file.metadata && this.props.file.metadata[string]) {
      return { __html: this.props.file.metadata[string] };
    }
    else {
      return { __html: '' };
    }
  },
  render: function() {
    let base_class = 'c-graph c-' + this.props.file.data.type,
        anchor = null;
    
    // Force specify type of graph.
    if (!this.props.file.data.type) {
      this.props.file.data.type = this.props.type;
    }
    if (this.props.anchor_name) {
      // Replace any spaces with _.
      let anchor_name = util.cleanString(this.props.anchor_name);
      anchor = <a name={anchor_name}></a>;
    }
    
    return (
    <div className={base_class}>
      <h2>{this.props.title}</h2>
      {anchor}
      <LazyLoad height={320}>
        <BaseGraph file={this.props.file} />
      </LazyLoad>
      <div className="c-text__caption c-text__caption--bottom">
        <div className="c-text__viz-notes">
          <div>
            <strong className="c-text__viz-notes__title">Source: </strong>
            <p className="c-text__viz-notes__description" dangerouslySetInnerHTML={this.raw('source')} />
          </div>
          <div>
            <strong className="c-text__viz-notes__title">Notes: </strong>
            <p className="c-text__viz-notes__description" dangerouslySetInnerHTML={this.raw('notes')} />
          </div>
          <div>
            <strong className="c-text__viz-notes__title">Data: </strong>
            <p className="c-text__viz-notes__description" dangerouslySetInnerHTML={this.raw('data')} />
          </div>
        </div>
      </div>
    </div>
    );
  }
});

module.exports = Graph;
