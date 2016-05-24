'use strict';

const React = require('react'),
      ExecutionEnvironment = require('exenv');

module.exports = {
  // Print React markup to page.  Only when the DOM is available.
  printToPage: (name, markup) => {
    if (ExecutionEnvironment.canUseDOM) {
      ReactDOM.render((
        markup
      ), document.getElementById('container'));
    }
  }
}
