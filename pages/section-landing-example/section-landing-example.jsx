'use strict';

import React from 'react';
import Template from '20-templates/default/default.jsx';
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
      <h1 className="heading-accent">Prices &amp; Expenses</h1>
      <div className="grid grid--auto-height">
        <div className="col col--1-4">
          <div className="">
            <div className="section-landing__badge section-landing__badge--yellow" style={{'backgroundImage':'url(/img/defining-higher-education.svg)'}}>
            </div>
          </div>
        </div>
        <div className="col col--3-4">

          <h2><a href="/producing-education">Sticker Prices</a></h2>
          <p>In eu ullamcorper augue, ac placerat mauris. Aliquam dapibus risus tortor, eu facilisis eros vulputate ut. Phasellus accumsan eros sapien, quis bibendum libero tristique eget.</p>

          <hr />

          <h2><a href="/producing-education">Student Budgets</a></h2>
          <p>Nullam lobortis interdum enim. Etiam in dapibus neque, eu laoreet ex. Duis iaculis massa vulputate massa dignissim, id tristique leo suscipit. Vivamus ut purus vel nibh sollicitudin consectetur.</p>

          <hr />

          <h2><a href="/producing-education">Forgone Earnings</a></h2>
          <p>Morbi hendrerit lorem at mi tempus faucibus. Vestibulum ut fermentum neque. Nunc laoreet nisi non ligula dictum, non gravida massa blandit.</p>

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
