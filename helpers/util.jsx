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
  }
}
