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

      // Detect any possible instances of the key 'format' and convert it into the specified format.
      if (data.data && data.data.labels && data.data.labels.format) {
        _.map(data.data.labels.format, (entry) => {
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
          position:'bottom',
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

      let legend = legend = d3.selectAll(`#${this.id} .c3-legend-item`);
      let svg = d3.select(`#${this.id}_legend`)
        .append('svg')
        .attr('width', '100%')
        .attr('height', 25);
      legend.each(function(){
        svg.node().appendChild(this);
      });
    }
  },
  render: function() {
    const container_class = 'c-graph__container c-' + this.props.file.data.type + '__container';
    const legend = `${this.id}_legend`;

    return (
      <div>
        <div id={legend}></div>
        <div id={this.id} className={container_class}></div>
      </div>
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
  componentWillMount() {
    // Force specify type of graph.
    if (!this.props.file.data.type) {
      this.props.file.data.type = this.props.type;
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
    let base_class = 'c-graph c-' + this.props.file.data.type,
        anchor = null;
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
          {this.attribution('source')}
          {this.attribution('notes')}
          {this.attribution('data')}
        </div>
      </div>
    </div>
    );
  }
});

module.exports = Graph;
