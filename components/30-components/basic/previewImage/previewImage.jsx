'use strict';
const React = require('react'),
      ExecutionEnvironment = require('exenv');

const PreviewImage = React.createClass({
  propTypes: {
    src: React.PropTypes.string,
    width: React.PropTypes.number,
    height: React.PropTypes.number
  },
  getDefaultProps: function() {
    return {
      src: '',
      width: 200,
      height: 200
    };
  },
  render: function() {
    return (
      <img src={this.props.src} width={this.props.width} height={this.props.height} />
    );
  }
});

module.exports = PreviewImage;
