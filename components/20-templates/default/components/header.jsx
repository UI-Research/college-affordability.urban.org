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
        <div className="header-site__nav-mobile"><i className="fa fa-bars"></i><span>Menu</span></div>
        <div className="header-site__logo-wrapper">
        <a href="/" className="header-site__logo" alt="Urban Institute"></a>
        </div>
        <div className="header-site__right">
          <div className="header-site__title">The College Affordability Project</div>
          <div className="header-site__nav-primary-wrapper">
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
        </div>
      </header>
    );
  }
});

module.exports = Header;
