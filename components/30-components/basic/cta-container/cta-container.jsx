'use strict';

const React = require('react');
const util = require('util.jsx');

if (util.canUseDOM()) {
  require('./cta-container.scss');
}

const CTAContainer = React.createClass({
  render: function() {    
    return (
      <div className="cta__container">
        {this.props.children}
      </div>
    );
  }
});

module.exports = CTAContainer;
