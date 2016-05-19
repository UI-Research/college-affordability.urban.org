'use strict';
const React = require('react');

const HTML = require('../10-html/html.jsx');

const TemplateDefault = React.createClass({
  propTypes: {
    includeHTML: React.PropTypes.bool,
    title: React.PropTypes.string,
    content: React.PropTypes.object
  },
  getDefaultProps: function() {
    return {
      includeHTML: false,
      title: '',
      content: ('<div>Page</div>'),
    };
  },
  render: function() {
    return (
      <HTML title={this.props.title} template={this.props.content} includeHTML={this.props.includeHTML} />
    );
  }
});

module.exports = TemplateDefault;
