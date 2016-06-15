'use strict';
const React = require('react');
const util = require('util.jsx');

if (util.canUseDOM()) {
  require('../caption.scss');
  require('./top.scss');
}

const CaptionTop = React.createClass({
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
      let anchor_name = this.props.anchor_name.replace(/ /g,"_");
      anchor = <a name={anchor_name}></a>
    }
    
    return (
      <div className="c-text__caption c-text__caption--top">
        {anchor}
        {this.props.children}
      </div>
    );
  }
});

module.exports = CaptionTop;
