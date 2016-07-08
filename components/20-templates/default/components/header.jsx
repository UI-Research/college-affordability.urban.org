'use strict';
import React, { Component } from 'react';
import { Sticky } from 'react-sticky';
import util from 'util.jsx';

if (util.canUseDOM()) {
  require('./header.scss');
  require('./nav-primary.scss');
  require('./nav-utility.scss');
  require('./nav-anchor.scss');
  require('./nav-breadcrumb.scss');
}

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { headerClass: '' };
  }
  componentDidMount() {
    // Initiates transformation of header to mini on scroll.
    window.addEventListener('scroll', () => {
      const w = this.determineOffset();
      let headerClass = (w.distanceY > w.shrinkThreshold) ? 'header-sticky' : '';
      this.setState({
        headerClass: headerClass
      });
    });
  }
  determineOffset() {
    const w = {
      distanceY: window.pageYOffset || document.documentElement.scrollTop,
      shrinkThreshold: 100
    };
    return w;
  }
  render() {
    let headerSite = `header-site ${this.state.headerClass}`;
    return (
      <Sticky>
        <header className={headerSite}>
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
                  <li>
                    <a href="/producing-education">Producing Education</a>
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
                        <a href="#">Pre-College Income and Savings</a>
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
                  <li>
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
                </ul>
              </div>
            </div>
            <div className="header-site__nav-utility-wrapper">
              <div className="nav-utility">
                <ul className="nav-utility__first-level">
                  <li>
                    <a href="/about">About the Project</a>
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
      </Sticky>
    );
  }
}
