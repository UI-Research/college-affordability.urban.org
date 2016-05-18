'use strict';
const React = require('react');

const HTML = require('../10-html/html.jsx');

const TemplateDefault = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    content: React.PropTypes.object
  },
  getDefaultProps: function() {
    return {
      title: '',
      content: 'Page',
    };
  },
  render: function() {
    return (
      <HTML title={this.props.title} template={this.props.content} />
    );
  }
});

module.exports = TemplateDefault;
