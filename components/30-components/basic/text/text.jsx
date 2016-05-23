'use strict';
const React = require('react');
require('./text.scss');

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
      <div className="text_box">
        <h1>{this.props.title}</h1>
        <div>{this.props.children}</div>
      </div>
    );
  }
});

module.exports = TemplateDefault;
