'use strict';
const React = require('react');

const util = require('util.jsx');

if (util.canUseDOM()) {
  require('./header.scss');
  require('./nav-primary.scss');
  require('./nav-utility.scss');
  require('./nav-anchor.scss');
  require('./nav-breadcrumb.scss');
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
          <div className="header-site__title">Understanding College Affordability</div>
          <div className="header-site__nav-primary-wrapper">
            <div className="nav-primary">
              <ul className="nav-primary__first-level">
                <li>
                  <a href="#">Introduction</a>
                </li>
                <li>
                  <a href="#">What is College</a>
                </li>
                <li className="has-submenu">
                  <a href="/producing-education">Producing Education</a>
                  <ul className="nav-primary__second-level">
                    <li>
                      <a href="/producing-education/#/subsidies">Subsidies</a>
                    </li>
                    <li>
                      <a href="/producing-education/#/appropriations">Appropriations</a>
                    </li>
                    <li>
                      <a href="/producing-education/#/endowments">Endowments</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Prices and Expenses</a>
                </li>
                <li>
                  <a href="#">Student Aid</a>
                </li>
                <li>
                  <a href="#">Covering Expenses</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-site__nav-utility-wrapper">
            <div className="nav-utility">
              <ul className="nav-utility__first-level">
                <li>
                  <a href="#">About the Project</a>
                </li>
                <li>
                  <a href="#">Research &amp; Resources</a>
                </li>
                <li>
                  <a href="#">Chart Indexes</a>
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
