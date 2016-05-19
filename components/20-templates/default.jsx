'use strict';
const React = require('react');

const HTML = require('../10-html/html.jsx');
const d3 = require('d3');

const TemplateDefault = React.createClass({
  propTypes: {
    includeHTML: React.PropTypes.bool,

    title: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      includeHTML: false,

      title: ''
    };
  },
  render: function() {
    return (
      <HTML title={this.props.title} template={this.props.children} includeHTML={this.props.includeHTML} />
    );
  }
});

module.exports = TemplateDefault;
