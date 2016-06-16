'use strict';

const React = require('react'),
      LazyLoad = require('30-components/basic/lazyload/lazyload.jsx');
const util = require('util.jsx');

if (util.canUseDOM()) {
  require('./bar.scss');
}

// Keep graphing piece separate - need its own DOM interaction events.
const BaseGraph = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      title: ''
    };
  },
  componentWillMount() {
    // Create unique ID for element.
    this.id = 'barGraph' + util.uniqueID();
  },
  componentDidMount: function() {
    if (util.canUseDOM) {
      const c3 = require('c3');

      // Acquire graph data.
      let data = this.props.file;

      // Identify DOM element we want to apply the graph to.
      data.bindto = '#' + this.id;

      // Force specify type of graph.
      data.data.type = 'bar';

      // Set default colors.
      data.color = {
        pattern: [
          '#1696d2',
          '#ec008b',
          '#d2d2d2'
        ]
      };

      // Hide tooltip.
      data.tooltip = {
        show: false
      };

      c3.generate(data);
    }
  },
  raw: function() {
    if (this.props.file) {
      return { __html: this.props.file.notes };
    }
    else {
      return { __html: '' };
    }
  },
  render: function() {    
    return (
      <div className="c-bar">
        <h1>{this.props.title}</h1>
        <div id={this.id} className="c-bar__container"></div>
        <div dangerouslySetInnerHTML={this.raw()} />
      </div>
    );
  }
});

const BarGraph = React.createClass({
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

module.exports = BarGraph;
