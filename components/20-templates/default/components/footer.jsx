'use strict';
import React, { Component } from 'react';
import util from 'util.jsx';

if (util.canUseDOM()) {
  require('./footer.scss');
}

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-site">
        <div className="footer-site__logo-wrapper">
          <div className="footer-site__logo-wrapper-inner">
            <a href="/" className="footer-site__logo" alt="Understanding College Affordability"></a>
          </div>
          <div className="footer-site__nav-utility">
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/research-and-resources">Research and Resources</a>
              </li>
              <li>
                <a href="/chart-index">Chart Indexes</a>
              </li>
              <li>
                <a href="http://www.urban.org/privacy-policy" target="_blank">Privacy</a>
              </li>
              <li>
                <a href="http://www.urban.org/terms-service" target="_blank">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
          <div className="footer-site__copyright-info">
          Home page photo by Jon Lovette/Getty Images. &copy; 2017 Urban Institute
          </div>
      </footer>
    );
  }
}
