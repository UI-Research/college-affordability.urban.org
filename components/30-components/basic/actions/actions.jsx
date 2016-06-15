'use strict';
const React = require('react');
const util = require('util.jsx');

if (util.canUseDOM()) {
  require('./actions.scss');
}

const Actions = React.createClass({
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
      let anchor_name = this.props.anchor_name.replace(/ /g,"_");
      anchor = <a name={anchor_name}></a>
    }

    return (
      <div className="c-text__viz-actions">
        {anchor}
        {this.props.children}
      </div>
    );
  }
});

module.exports = Actions;
