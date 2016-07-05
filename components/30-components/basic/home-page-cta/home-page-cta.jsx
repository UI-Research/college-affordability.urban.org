'use strict';

const React = require('react');
const util = require('util.jsx');

if (util.canUseDOM()) {
  require('./home-page-cta.scss');
}

const HomePageCTA = React.createClass({
  propTypes: {
    src: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      src: ''
    };
  },
  render: function() {
    let badge = null;
    if (this.props.src) {
      const inlineStyle = {
        backgroundImage: `url(${this.props.src})`
      };
      badge = <div className="homepage__cta__badge" style={inlineStyle}></div>;
    }

    return (
      <div className="homepage__cta">
        {badge}
        {this.props.children}
      </div>
    );
  }
});

module.exports = HomePageCTA;
