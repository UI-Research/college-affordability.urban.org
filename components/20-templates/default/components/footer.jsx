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
            <a href="/" className="footer-site__logo" alt="Urban Institute">Understanding College Affordability</a>
          </div>
        </div>
        <div className="footer-site__content-wrapper">
          <div className="footer-site__content">


            <div className="footer-site__nav-wrapper">
              <div className="footer-site__nav-primary">
                <ul>
                  <li>
                    <a href="#">Introduction</a>
                  </li>
                  <li>
                    <a href="#">What is College</a>
                  </li>
                  <li>
                    <a href="/producing-education">Producing Education</a>
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

              <div className="footer-site__nav-utility">
                <ul>
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


            <div className="footer-site__credits">

              <h2>Project credits</h2>

              <div className="urbanstatement">As an organization, the Urban Institute does not take positions on issues, but it does empower and support its experts in sharing their own evidence-based views and policy recommendations that have been shaped by scholarship.</div>

              <h3 className="job">Research</h3>
              <a href="http://www.urban.org/author/matthew-chingos">Matthew Chingos</a> and <a href="http://www.urban.org/author/kristin-blagg">Kristin Blagg</a>

              <h3 className="job">Development and Design</h3>
              <a href="http://www.urban.org/author/hannah-recht">Hannah Recht</a> and <a href="http://www.urban.org/author/christina-baird">Christina Baird</a>

              <h3 className="job">Writing</h3>
              <a href="http://www.urban.org/author/alexandra-tilsley">Alexandra Tilsley</a>

              <h3 className="job">Editorial</h3>
              <a href="http://www.urban.org/author/elizabeth-forney">Elizabeth Forney</a>

              <div className="credits">Copyright &copy; <a href="http://www.urban.org/">Urban Institute</a> 2016. <a href="https://github.com/UrbanInstitute/naep" target="_blank">View this project on Github.</a></div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};
