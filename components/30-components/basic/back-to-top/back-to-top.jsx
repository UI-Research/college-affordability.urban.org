'use strict';
const React = require('react');
const Elevator = require('elevator.js');
const util = require('util.jsx');

if (util.canUseDOM()) {
  require('./back-to-top.scss');
  window.onload = function() {
    let elevator = new Elevator({
      element: document.querySelector('.elevator'),
      duration: 2000 // milliseconds
    });
  }
}

export const BackToTop = React.createClass({
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
      <div className='elevator'>Back to Top</div>
    );
  }
});
