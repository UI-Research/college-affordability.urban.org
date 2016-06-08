'use strict';

const React = require('react'),
      ReactDOM = require('react-dom'),
      _ = require('lodash'),
      ExecutionEnvironment = require('exenv');

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
  }
}
