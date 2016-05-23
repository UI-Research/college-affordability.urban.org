'use strict';
const React = require('react');

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
      <div>
        <h1>{this.props.title}</h1>
        <div>{this.props.children}</div>
      </div>
    );
  }
});

module.exports = TemplateDefault;
