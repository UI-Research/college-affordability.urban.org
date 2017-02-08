'use strict';
const React = require('react');
const util = require('util.jsx');

if (util.canUseDOM()) {
  require('./action_button.scss');
}

const ActionButton = React.createClass({
  propTypes: {
    href: React.PropTypes.string,
    title: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      href: '',
      title: ''
    };
  },
  render: function() {
    let className = `btn button-${util.machineName(this.props.title)}`;

    // In case you want to disable a button.
    if (this.props.disable == 'true') {
      className += ' disabled';
    }

    return (
      <a href={this.props.href} className={className} target="_blank">{this.props.title} <i className="fa fa-download"></i></a>
    );
  }
});

module.exports = ActionButton;
