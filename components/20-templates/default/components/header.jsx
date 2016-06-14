'use strict';
const React = require('react'),
      ExecutionEnvironment = require('exenv');

if (ExecutionEnvironment.canUseDOM) {
  require('./header.scss');
  require('./nav-primary.scss');
  require('./nav-utility.scss');
  require('./nav-anchor.scss');
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
                  <a href="#">Defining Higher Education</a>
                  <ul className="nav-primary__second-level">
                    <li>
                      <a href="#">Sub Item</a>
                    </li>
                    <li>
                      <a href="#">Sub Item 2</a>
                    </li>
                    <li>
                      <a href="#">Sub Item Name Longer</a>
                    </li>
                    <li>
                      <a href="#">Sub Item 4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Costs, Aid &amp; Prices</a>
                </li>
                <li>
                  <a href="#">Paying For College</a>
                </li>
                <li>
                  <a href="#">After College</a>
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
