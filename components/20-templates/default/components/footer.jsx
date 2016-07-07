'use strict';
const React = require('react');

const util = require('util.jsx');

if (util.canUseDOM()) {
  require('./footer.scss');
}

const Footer = React.createClass({
  render: function() {
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
                <a href="#">Research &amp; Resources</a>
              </li>
              <li>
                <a href="#">Chart Indexes</a>
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
      </footer>
    );
  }
});

module.exports = Footer;
