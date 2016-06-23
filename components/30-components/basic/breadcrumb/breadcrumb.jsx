'use strict';
const React = require('react');
const util = require('util.jsx');

if (util.canUseDOM()) {
  require('./breadcrumb.scss');
}

export const Breadcrumb = React.createClass({
  propTypes: {
    section: React.PropTypes.string,
    title: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      section: 'Producing Education',
      title: '???',
    };
  },
  render: function() {
    return (
      <div className="breadcrumb">
        <a href="/">HOME</a> / <a href="#">{this.props.section}</a> / {this.props.title}
      </div>
    );
  }
});
