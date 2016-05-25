'use strict';
const React = require('react'),
      ExecutionEnvironment = require('exenv');

if (ExecutionEnvironment.canUseDOM) {
  require('./text.scss');
}

const Text = React.createClass({
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
      <div className="c-text">
        <h1 className="c-text__title">{this.props.title}</h1>
        <div className="c-text__content">{this.props.children}</div>
      </div>
    );
  }
});

module.exports = Text;
