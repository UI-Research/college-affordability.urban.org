'use strict';
import React, { Component } from 'react';
import { Sticky } from 'react-sticky';
import util from 'util.jsx';

if (util.canUseDOM()) {
  require('./header.scss');
  require('./nav-primary.scss');
  require('./nav-utility.scss');
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
    
    // Find the current page set as active.
    if (this.props.machineName) {
      const headerRight = document.getElementsByClassName('header-site__right');
      if (headerRight.length) {
        const anchors = headerRight[0].getElementsByTagName('a');
        for (let x=0; x<anchors.length; x++) {
          let anchor = anchors.item(x);
          let href = anchor.getAttribute('href');
          // Check the link matches the page.
          const pos = href.indexOf(this.props.machineName);
          if (pos > 0) {
            // Match the exact page.
            // /student-aid but not /student-aid/net-price.
            // account for /student-aid/index.html.
            if ((href.length - (pos + this.props.machineName.length) <= 1)
              || href.substr(pos + this.props.machineName.length) == '/index.html') {
              let parent = anchor.parentElement;
              anchor.classList.add('active');
              parent.classList.add('active');
              // Set active trail for sub menus.
              if (!parent.classList.contains('has-submenu')) {
                while (parent.tagName != 'UL') {
                  parent = parent.parentElement;
                }
                parent.parentElement.classList.add('active-trail');
              }
            }
          }
        }
      }
    }
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
      <Sticky className="sticky-header">
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
                    <a href="/prices-expenses/index.html">Prices and Expenses</a>
                    <ul className="nav-primary__second-level">
                      <li>
                        <a href="/prices-expenses/sticker-prices">Sticker Prices</a>
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
                    <a href="/after-college">After College</a>
                    <ul className="nav-primary__second-level">
                      <li>
                        <a href="#">Income After College</a>
                      </li>
                      <li>
                        <a href="#">Student Debt and Repayment</a>
                      </li>
                      <li>
                        <a href="/after-college/breaking-even">Breaking Even</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Student Profiles</a>
                    <ul className="nav-primary__second-level">
                      <li>
                        <a href="#">Independent</a>
                      </li>
                      <li>
                        <a href="#">Low-Income Dependent</a>
                      </li>
                      <li>
                        <a href="#">Lower-Middle-Income Dependent</a>
                      </li>
                      <li>
                        <a href="#">Upper-Middle-Income Dependent</a>
                      </li>
                      <li>
                        <a href="#">Top-Income Dependent</a>
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
