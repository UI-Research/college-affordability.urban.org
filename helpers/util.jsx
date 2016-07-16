'use strict';

const React = require('react'),
      ReactDOM = require('react-dom'),
      _ = require('lodash'),
      ExecutionEnvironment = require('exenv');

const bpSmall = 400,
      bpMid = 640,
      bpLarge = 960,
      bpXLarge = 1200;

module.exports = {
  // Print React markup to page.  Only when the DOM is available.
  printToPage: (name, markup) => {
    if (ExecutionEnvironment.canUseDOM) {
      ReactDOM.render((
        React.createElement(markup, null)
      ), document.getElementById('container'));
    }
  },
  // Identifies whether the DOM is available so scripts can latch on.  Useful when code relies on 'window' to be present.
  canUseDOM: () => {
    return ExecutionEnvironment.canUseDOM;
  },
  // Generate unique value for use with components ID.
  uniqueID: () => {
    return _.uniqueId();
  },
  // Trim a string and remove spaces.
  cleanString: (string) => {
    return _.trim(string.replace(/ /g,"_"));
  },
  // Expose _.isEqual.
  isEqual: (object1, object2) => {
    return _.isEqual(object1, object2);
  },
  // Converts text into computer-friendly labels.
  machineName: (text) => {
    return text.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
  },
  // Gets the width of a breakpoint by size.
  breakpointWidth: (size) => {
    switch (size) {
      case 'small':
        return bpSmall;
      case 'mid':
        return bpMid;
      case 'large':
        return bpLarge;
      case 'xlarge':
        return bpXLarge;
    }
    return 0;
  }
}
