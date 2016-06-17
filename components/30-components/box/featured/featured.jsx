'use strict';
const React = require('react');
const util = require('util.jsx');

if (util.canUseDOM()) {
  require('./featured.scss');
}

const FAQ = React.createClass({
  propTypes: {
    anchor_name: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      anchor_name: ''
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
      <div className="c-text__factoid">
        {anchor}
        {this.props.children}
      </div>
    );
  }
});

module.exports = FAQ;
