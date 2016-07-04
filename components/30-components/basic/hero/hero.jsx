'use strict';

const React = require('react');
const util = require('util.jsx');

if (util.canUseDOM()) {
  require('./hero.scss');
}

const Hero = React.createClass({
  propTypes: {
    src: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      src: ''
    };
  },
  render: function() {
    let inlineStyle = null;
    if (this.props.src) {
      inlineStyle = {
        backgroundImage: `url(${this.props.src})`
      };
    }

    return (
      <div className="c-hero" style={inlineStyle}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Hero;
