'use strict';
const React = require('react'),
      ExecutionEnvironment = require('exenv');

if (ExecutionEnvironment.canUseDOM) {
  require('./header.scss');
}

const Header = React.createClass({
  render: function() {
    return (
      <header className="header-site">This is a header</header>
    );
  }
});

module.exports = Header;
