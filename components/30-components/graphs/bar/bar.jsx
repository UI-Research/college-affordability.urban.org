'use strict';
const React = require('react'),
      ExecutionEnvironment = require('exenv');

if (ExecutionEnvironment.canUseDOM) {
  //require('./text.scss');
}

const TemplateDefault = React.createClass({
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
      <div className="c_text">
        <h1>{this.props.title}</h1>
        <div className="c_text__content">{this.props.children}</div>
      </div>
    );
  }
});

module.exports = TemplateDefault;
