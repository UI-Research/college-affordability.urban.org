'use strict';
const React = require('react');
const util = require('util.jsx');

if (util.canUseDOM()) {
  require('./notes.scss');
}

const Notes = React.createClass({
  propTypes: {
    anchor_name: React.PropTypes.string,
    title: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      anchor_name: '',
      title: ''
    };
  },
  render: function() {
    let anchor = '';
    if (this.props.anchor_name) {
      // Replace any spaces with _.
      let anchor_name = util.cleanString(this.props.anchor_name);
      anchor = <a name={anchor_name}></a>;
    }

    return (
      <div className="c-text__viz-notes">
        {anchor}
        {this.props.children}
      </div>
    );
  }
});

module.exports = Notes;
