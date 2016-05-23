
const React = require('react'),
      d3 = require('d3'),
      _ = require('lodash'),
      ExecutionEnvironment = require('exenv');

const Template = require('../../components/20-templates/default/default.jsx');

var Chart = React.createClass({
  render: function() {
    return (
      <svg width={this.props.width} height={this.props.height}>{this.props.children}</svg>
    );
  }
});

var Bar = React.createClass({
  getDefaultProps: function() {
    return {
      width: 0,
      height: 0,
      offset: 0
    };
  },

  render: function() {
    return (
      <rect fill={this.props.color}
        width={this.props.width} height={this.props.height}
        x={this.props.offset} y={this.props.availableHeight - this.props.height} />
    );
  }
});

var DataSeries = React.createClass({
  getDefaultProps: function() {
    return {
      title: '',
      data: []
    };
  },

  render: function() {
    var props = this.props;

    var yScale = d3.scale.linear()
      .domain([0, d3.max(this.props.data)])
      .range([0, this.props.height]);

    var xScale = d3.scale.ordinal()
      .domain(d3.range(this.props.data.length))
      .rangeRoundBands([0, this.props.width], 0.05);

    var bars = _.map(this.props.data, function(point, i) {
      return (
        <Bar height={yScale(point)} width={xScale.rangeBand()} offset={xScale(i)} availableHeight={props.height} color={props.color} key={i} />
      );
    });

    return (
      <g>{bars}</g>
    );
  }
});

let specifications = {
  'name': 'test',
  'content':
      <div className='test'>
        <div id='asdf'><strong>Custom HTML</strong></div>
      </div>
};

var BarChart = React.createClass({
  getDefaultProps: function() {
    return {
      width: 600,
      height: 300
    };
  },

  render: function() {
    return (
      <Chart width={this.props.width} height={this.props.height}>
        <DataSeries data={[ 30, 10, 5, 8, 15, 10 ]} width={this.props.width} height={this.props.height} color="cornflowerblue" />
      </Chart>
    );
  }
});

if (ExecutionEnvironment.canUseDOM) {
  React.renderComponent(
    <BarChart />,
    document.getElementById('container')
  );
}

module.exports = BarChart;
