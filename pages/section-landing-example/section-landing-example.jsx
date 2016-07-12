'use strict';

import React, { Component } from 'react';
const Template = require('20-templates/default/default.jsx');
import util from 'util.jsx';

let specifications = {
  'name': 'section-landing-example',
  'nav':
    <div className="nav-secondary">
      <ul>
        <li className="active"><a href="#">Institutional Subsidy</a></li>
        <li><a href="#">Forgone Earnings</a></li>
        <li><a href="#">Sticker Prices</a></li>
        <li><a href="#">Student Budges</a></li>
        <li><a href="#">Net Prices</a></li>
      </ul>
    </div>
  ,
  'content':
    <div className='section-landing'>
      <h1 className="heading-accent">Costs, Aid, &amp; Prices</h1>
      <div className="grid grid--auto-height">
        <div className="col col--1-4">
          <div className="">
            <div className="section-landing__badge section-landing__badge--yellow" style={{'backgroundImage':'url(/img/defining-higher-education.svg)'}}>
            </div>
          </div>
        </div>
        <div className="col col--3-4">

          <h2><a href="/producing-education">Producing Education</a></h2>
          <p>Students see the prices colleges charge, but the amounts that colleges spend to provide education are less visible.
            To educate a student, a college must pay for instructors, student services, administrative support, and
            maintenance, among other things. An institution’s reported education and related expenditure per student is a
            good indication of the expenses it incurs in educating students, though it does not account for the full cost.
            There is a general consensus that it costs significantly more to educate graduate students, but because we don’t
            have a precise way of separating out these costs, the average subsidies at universities are higher than those at
            bachelor’s colleges.</p>

          <hr />

          <h2><a href="/producing-education">Data Viz Page</a></h2>
          <p>Students see the prices colleges charge, but the amounts that colleges spend to provide education are less visible.
            To educate a student, a college must pay for instructors, student services, administrative support, and
            maintenance, among other things. An institution’s reported education and related expenditure per student is a
            good indication of the expenses it incurs in educating students, though it does not account for the full cost.
            There is a general consensus that it costs significantly more to educate graduate students, but because we don’t
            have a precise way of separating out these costs, the average subsidies at universities are higher than those at
            bachelor’s colleges.</p>

        </div>
      </div>
    </div>
};

const SectionLandingExample = React.createClass({
  render: function() {
    return (
      <Template title="Section Landing Example" machineName={specifications.name} includeHTML={this.props.includeHTML}>
        {specifications.content}
      </Template>
    );
  }
});

if (util.canUseDOM()) {
  require('./' + specifications.name.toLowerCase() + '.scss');
}
util.printToPage('Data Viz Example', SectionLandingExample);

module.exports = SectionLandingExample;
