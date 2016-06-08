'use strict';

const React = require('react');

const util = require('util.jsx');

if (util.canUseDOM()) {
  require('./line.scss');
}

const LineGraph = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      title: ''
    };
  },
  componentWillMount() {
    this.id = 'lineGraph' + util.uniqueID();
  },
  componentDidMount: function() {
    if (util.canUseDOM) {
      const c3 = require('c3');

      // Acquire graph data.
      let data = this.props.file;

      // Identify DOM element we want to apply the graph to.
      data.bindto = '#' + this.id,

      // Force specify type of graph.
      data.data.type =  'line';

      let chart = c3.generate(data);
    }
  },
  render: function() {
    return (
      <div className="c-line">
        <h1>{this.props.title}</h1>
        <div id={this.id} className="c-line__container"></div>
      </div>
    );
  }
});

module.exports = LineGraph;
