'use strict';

const React = require('react'),
      ExecutionEnvironment = require('exenv');

const util = require('../../../../helpers/util.jsx');

if (ExecutionEnvironment.canUseDOM) {
  require('./line.scss');
}

const LineGraph = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      title: '',
    };
  },
  componentWillMount() {
    this.id = 'lineGraph' + util.uniqueID();
  },
  componentDidMount: function() {
    let data = this.props.data;
    if (ExecutionEnvironment.canUseDOM) {
      let c3 = require('c3');
      let chart = c3.generate({
        bindto: '#' + this.id,
        data: {
          columns: [
            ['First', 30, 200, 100, 400, 150, 250],
            ['Second', 50, 20, 10, 40, 15, 25]
          ],
          axes: {
            'First': 'y2'
          },
          types: {
            'Second': 'bar'
          }
        },
        transition: {
            duration: 3000
        },
        axis: {
          y: {
            label: {
              text: 'Y Label',
              position: 'outer-middle'
            },
            tick: {
              format: d3.format("$,") // ADD
            }
          },
          y2: {
            show: true,
            label: {
              text: 'Y2 Label',
              position: 'outer-middle'
            }
          }
        }
      });
    }
  },
  render: function() {
    return (
      <div className="c-line">
        <h1>{this.props.title}</h1>
        <div id={this.id} className="c-line__container">asdf</div>
      </div>
    );
  }
});

module.exports = LineGraph;
