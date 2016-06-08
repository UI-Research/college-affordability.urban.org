'use strict';

const React = require('react');

const util = require('../../../../helpers/util.jsx');

if (util.canUseDOM) {
  require('./bar.scss');
}

const BarGraph = React.createClass({
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
      data.bindto = '#' + this.id,

      // Force specify type of graph.
      data.data.type =  'bar';

      let chart = c3.generate(data);
    }
  },
  render: function() {
    return (
      <div className="c-bar">
        <h1>{this.props.title}</h1>
        <div id={this.id} className="c-bar__container"></div>
      </div>
    );
  }
});

module.exports = BarGraph;
