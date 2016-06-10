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
    title: React.PropTypes.string,
    type: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      title: '',
      type: 'bar'
    };
  },
  componentWillMount() {
    // Create unique ID for element.
    this.id = this.props.type + 'Graph' + util.uniqueID();
  },
  componentDidMount: function() {
    if (util.canUseDOM) {
      const c3 = require('c3');

      // Acquire graph data.
      let data = this.props.file;

      // Identify DOM element we want to apply the graph to.
      data.bindto = '#' + this.id;

      // Force specify type of graph.
      data.data.type = this.props.type;

      c3.generate(data);
    }
  },
  render: function() {
    let base_class = 'c-' + this.props.type,
        container_class = base_class + '__container';
    
    return (
    <div className={base_class}>
      <h2>{this.props.title}</h2>
      <div id={this.id} className={container_class}></div>
    </div>
    );
  }
});

const BarGraph = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      title: ''
    };
  },
  render: function() {
    return (
    <LazyLoad>
      <BaseGraph title={this.props.title} type="bar" file={this.props.file} />
    </LazyLoad>
    );
  }
});

module.exports = BarGraph;
