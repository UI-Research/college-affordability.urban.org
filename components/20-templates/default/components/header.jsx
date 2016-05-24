'use strict';
const React = require('react'),
      ExecutionEnvironment = require('exenv');

if (ExecutionEnvironment.canUseDOM) {
  require('./header.scss');
  require('./nav-primary.scss');
}

const Header = React.createClass({
  render: function() {
    return (
      <header className="header-site">
        <a className="header-site__logo" alt="Urban Institute">Title</a>
        <div className="header-site__nav">
          <div className="nav-primary">
            <ul>
              <li>
                <a href="#">Item 1</a>
                <ul>
                  <li>
                    <a href="#">Sub Item</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Item 2</a>
              </li>
              <li>
                <a href="#">Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
});

module.exports = Header;
