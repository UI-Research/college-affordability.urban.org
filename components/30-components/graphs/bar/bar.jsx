'use strict';

const React = require('react'),
      d3 = require('d3'),
      ExecutionEnvironment = require('exenv');

if (ExecutionEnvironment.canUseDOM) {
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
  componentDidMount: function() {
    let data = this.props.data;
    let x = d3.scale.linear()
      .domain([0, d3.max(data)])
      .range([0, 420]);

    d3.select('.c-bar__container')
      .selectAll('div')
        .data(data)
      .enter().append('div')
        .classed('c-bar__line', true)
        .style('width', function(d) { return x(d) + 'px'; })
        .text(function(d) { return d; });
  },
  render: function() {
    return (
      <div className="c-bar">
        <h2>{this.props.title}</h2>
        <div id="barGraph" className="c-bar__container">asdf</div>
      </div>
    );
  }
});

module.exports = BarGraph;
