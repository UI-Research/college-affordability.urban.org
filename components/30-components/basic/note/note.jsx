'use strict';
const React = require('react');
const util = require('util.jsx');

if (util.canUseDOM()) {
  require('./note.scss');
}

const Note = React.createClass({
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
      <p>
        <strong>{this.props.title}: </strong>
        {this.props.children}
      </p>
    );
  }
});

module.exports = Note;
