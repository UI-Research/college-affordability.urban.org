'use strict';

const React = require('react');

const HTML = require('../../10-html/html.jsx');

const Header = require('./components/header.jsx');

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
      <HTML title={this.props.title} includeHTML={this.props.includeHTML}>
        <Header />
        {this.props.children}
      </HTML>
    );
  }
});

module.exports = TemplateDefault;
