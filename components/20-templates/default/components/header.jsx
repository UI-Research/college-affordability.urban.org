'use strict';
import React, { Component } from 'react';
import { Sticky } from 'react-sticky';
import _ from 'lodash';
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
    if (util.canUseDOM()) {
      window.addEventListener('resize', this.handleResize.bind(this));
    }
  }
  handleResize () {
    // Make sure all sub menus are closed when resize to desktop.
    if (window.innerWidth > util.breakpointWidth('large')) {
      this.closeSubMenus();
    }
  }
  toggleMobileNav() {
    if (util.canUseDOM()) {
      let navWrapper = document.querySelector('.header-site__nav-wrapper');
      navWrapper.classList.toggle('open');
    }
  }
  toggleMenu(event) {
    let target = event.target;
    let menu = target.parentElement.querySelector('ul');
    // Close other open subs before opening a new one.
    if (!menu.classList.contains('open')) {
      this.closeSubMenus();
    }
    if (target.classList.contains('fa-chevron-down')) {
      target.classList.remove('fa-chevron-down');
      target.classList.add('fa-chevron-up');
    }
    else {
      target.classList.remove('fa-chevron-up');
      target.classList.add('fa-chevron-down');
    }
    if (window.innerWidth <= util.breakpointWidth('large')) {
      menu.classList.toggle('open');
    }
  }
  closeSubMenus() {
    // Close all second level uls.
    let subMenus = document.querySelectorAll('.header-site__nav-primary-wrapper ul.open');
    _.each(subMenus, (menu) => {
      menu.classList.remove('open');
      let chevron = menu.previousElementSibling;
      chevron.classList.remove('fa-chevron-up');
      chevron.classList.add('fa-chevron-down');
    });
  }
  determineOffset() {
    const w = {
      distanceY: window.pageYOffset || document.documentElement.scrollTop,
      shrinkThreshold: 100
    };
    return w;
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
  render() {
    let headerSite = `header-site ${this.state.headerClass}`;
    const toggle = this.toggleMenu.bind(this);
    return (
      <Sticky className="sticky-header">
        <header className={headerSite}>
          <div className="header-site__nav-mobile" onClick={this.toggleMobileNav}><i className="fa fa-bars"></i><span>Menu</span></div>
          <div className="header-site__logo-wrapper">
            <a href="/" className="header-site__logo" alt="Urban Institute"></a>
          </div>
          <div className="header-site__right">
            <div className="header-site__title">Understanding College Affordability</div>
            <div className="header-site__nav-wrapper">
              <div className="header-site__nav-primary-wrapper">
                <div className="nav-primary">
                  <ul className="nav-primary__first-level">
                    <li className="has-submenu">
                      <a href="/what-is-college/index.html">What Is College?</a>
                      <span onClick={toggle} className="fa fa-chevron-down"></span>
                      <ul className="nav-primary__second-level">
                        <li>
                          <a href="/what-is-college/institutions">Institutions</a>
                        </li>
                        <li>
                          <a href="/what-is-college/students">Students</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="/cost-of-educating/index.html">The Cost of Educating Students</a>
                      <span onClick={toggle} className="fa fa-chevron-down"></span>
                      <ul className="nav-primary__second-level">
                        <li>
                          <a href="/cost-of-educating/subsidies">Institutional Subsidies</a>
                        </li>
                        <li>
                          <a href="/cost-of-educating/appropriations">Appropriations</a>
                        </li>
                        <li>
                          <a href="/cost-of-educating/endowments">Endowments</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="/prices-and-expenses/index.html">Prices and Expenses</a>
                      <span onClick={toggle} className="fa fa-chevron-down"></span>
                      <ul className="nav-primary__second-level">
                        <li>
                          <a href="/prices-and-expenses/tuition-and-fees">Tuition and Fees</a>
                        </li>
                        <li>
                          <a href="/prices-and-expenses/room-and-board">Room and Board</a>
                        </li>
                        <li>
                          <a href="/prices-and-expenses/student-budgets">Student Budgets</a>
                        </li>
                         <li>
                          <a href="/prices-and-expenses/forgone-earnings">Forgone Earnings</a>
                        </li>
                         <li>
                          <a href="/prices-and-expenses/net-price">Net Price</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="/financial-aid">Financial Aid</a>
                      <span onClick={toggle} className="fa fa-chevron-down"></span>
                      <ul className="nav-primary__second-level">
                        <li>
                          <a href="/financial-aid/financial-need">Financial Need</a>
                        </li>
                        <li>
                          <a href="/financial-aid/grant-aid">Grant Aid</a>
                        </li>
                        <li>
                          <a href="/financial-aid/federal">Federal Grant Aid</a>
                        </li>
                        <li>
                          <a href="/financial-aid/state">State Grant Aid</a>
                        </li>
                        <li>
                          <a href="/financial-aid/institutional">Institutional Grant Aid</a>
                        </li>
                        <li>
                          <a href="/financial-aid/other">Other Grant Aid</a>
                        </li>
                        <li>
                          <a href="/financial-aid/tax-benefits">Tax Benefits</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="/covering-expenses">Covering Expenses</a>
                      <span onClick={toggle} className="fa fa-chevron-down"></span>
                      <ul className="nav-primary__second-level">
                        <li>
                          <a href="/covering-expenses/pre-college-income">Pre-College Income</a>
                        </li>
                        <li>
                          <a href="/covering-expenses/savings">Savings</a>
                        </li>
                        <li>
                          <a href="/covering-expenses/working-during-college">Working During College</a>
                        </li>
                        <li>
                          <a href="/covering-expenses/borrowing">Borrowing</a>
                        </li>
                        <li>
                          <a href="/covering-expenses/time-to-degree">Time to Degree</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/after-college">After College</a>
                      <span onClick={toggle} className="fa fa-chevron-down"></span>
                      <ul className="nav-primary__second-level">
                        <li>
                          <a href="/after-college/employment-after-college">Employment After College</a>
                        </li>
                        <li>
                          <a href="/after-college/variation-in-earnings">Variation in Earnings</a>
                        </li>
                        <li>
                          <a href="/after-college/student-debt">Student Debt</a>
                        </li>
                        <li>
                          <a href="/after-college/loan-repayment-and-default">Loan Repayment and Default</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/breaking-even">Breaking Even</a>
                    </li>
                     <li>
                      <a href="/student-profiles">Student Profiles</a>
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
                      <a href="#">Chart Index</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </Sticky>
    );
  }
}
