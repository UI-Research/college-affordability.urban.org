'use strict';
const React = require('react'),
      ExecutionEnvironment = require('exenv');

if (ExecutionEnvironment.canUseDOM) {
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
                  <a href="#">What is College?</a>
                </li>
                <li className="has-submenu">
                  <a href="#">Prices and Expenses</a>
                  <ul className="nav-primary__second-level">
                    <li>
                      <a href="#">Sticker Prices</a>
                    </li>
                    <li>
                      <a href="#">Student Budgets</a>
                    </li>
                    <li>
                      <a href="#">Forgone Earnings</a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="#">Student Aid</a>
                  <ul className="nav-primary__second-level">
                    <li>
                      <a href="#">Net Price</a>
                    </li>
                    <li>
                      <a href="#">Financial Need</a>
                    </li>
                    <li>
                      <a href="#">Grant Aid</a>
                    </li>
                    <li>
                      <a href="#">Tax Benefits</a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="#">Covering Expenses</a>
                  <ul className="nav-primary__second-level">
                    <li>
                      <a href="#">Pre-college Income and Savings</a>
                    </li>
                    <li>
                      <a href="#">Working During College</a>
                    </li>
                    <li>
                      <a href="#">Borrowing</a>
                    </li>
                    <li>
                      <a href="#">Time to Degree</a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="#">After College</a>
                  <ul className="nav-primary__second-level">
                    <li>
                      <a href="#">Income After College</a>
                    </li>
                    <li>
                      <a href="#">Student Debt and Repayment</a>
                    </li>
                    <li>
                      <a href="#">Breaking Even</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Student Profiles</a>
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
