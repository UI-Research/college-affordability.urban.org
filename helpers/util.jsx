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
  // Generate unique value for use with components ID
  uniqueID: () => {
    return _.uniqueId();
  }
}
