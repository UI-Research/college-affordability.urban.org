'use strict';

import React from 'react';
import Template from '20-templates/default/default.jsx';
import HomePageCTA from '30-components/basic/home-page-cta/home-page-cta.jsx';
import Hero from '30-components/basic/hero/hero.jsx';
import StudentProfiles, { StudentProfile } from '30-components/basic/student-profiles/student-profiles.jsx';
import Alerts, { Alert } from '30-components/basic/alerts/alerts.jsx';

const util = require('util.jsx');

let specifications = {
  'name': 'home',
  'title': 'Understanding College Affordability',
  'content': (
    <div>
      <Hero src="img/female-student-using-laptop-for-taking-notes-to-study.jpg">
        <h1>Understanding College Affordability</h1>
        <h2>How Students, Institutions, and the Public Pay for Higher Education</h2>
      </Hero>
      <div className="c-narrative">
        <p>Rising concerns over college tuition and student debt, combined with the widespread conviction that a degree is essential for a middle-class lifestyle, have led to a sense that college in the United States has become "unaffordable." <strong>But what does affordability actually mean?</strong></p>
        <a href="/about" className="c-home__button">Learn About the Project <i className="fa fa-chevron-right"></i></a>
      </div>
      <Alerts>
        <Alert>
          <p><strong>07/05/2016</strong> :: Example text can be a combination of <a href="#">site links</a> and a description of changes.</p>
        </Alert>
        <Alert>
          <p><strong>06/30/2016</strong> :: Suspendisse iaculis, tortor id convallis eleifend, magna magna interdum augue, ac pulvinar elit purus.</p>
        </Alert>
        <Alert>
          <p><strong>06/18/2016</strong> :: Donec a hendrerit dolor. In hac habitasse platea dictumst. Pellentesque ut pretium ante, fringilla cursus nulla.</p>
        </Alert>
      </Alerts>
      <div className="cta__container">
        <HomePageCTA src="img/defining-higher-education.svg">
          <a href="what-is-college"><h2>What is College?</h2></a>
          <p>Nonprofit or for profit, public or private, two-year or four-year—colleges, much like the students who attend them, come in all shapes and sizes. </p>
          <ul>
            <li><a href="what-is-college/institutions/">Institutions<i className="fa fa-chevron-right"></i></a></li>
            <li><a href="what-is-college/students/">Students<i className="fa fa-chevron-right"></i></a></li>
          </ul>
        </HomePageCTA>
        <HomePageCTA src="img/cost-aid-prices.svg">
          <a href="cost-of-educating/"><h2>The Cost of Educating Students</h2></a>
          <p>Tuition and fees cover only a fraction of what an education actually costs. How do institutions fund the rest?</p>
          <ul>
            <li><a href="cost-of-educating/subsidies/">Subsidies<i className="fa fa-chevron-right"></i></a></li>
            <li><a href="cost-of-educating/appropriations/">Appropriations<i className="fa fa-chevron-right"></i></a></li>
            <li><a href="cost-of-educating/endowments/">Endowments<i className="fa fa-chevron-right"></i></a></li>
          </ul>
        </HomePageCTA>
        <HomePageCTA src="img/paying-for-college.svg">
          <a href="prices-and-expenses/"><h2>Prices and Expenses</h2></a>
          <p>Tuition is the most obvious expense facing college students, but it&rsquo;s far from the only budget item they must consider when planning for college.</p>
          <ul>
            <li><a href="prices-and-expenses/tuition-and-fees/">Tuition and Fees<i className="fa fa-chevron-right"></i></a></li>
            <li><a href="prices-and-expenses/room-and-board/">Room and Board<i className="fa fa-chevron-right"></i></a></li>
            <li><a href="prices-and-expenses/student-budgets/">Student Budgets<i className="fa fa-chevron-right"></i></a></li>
            <li><a href="prices-and-expenses/forgone-earnings/">Forgone Earnings<i className="fa fa-chevron-right"></i></a></li>
            <li><a href="prices-and-expenses/net-price/">Net Price<i className="fa fa-chevron-right"></i></a></li>
          </ul>
        </HomePageCTA>
        <HomePageCTA src="img/student-aid.svg">
          <a href="financial-aid/"><h2>Financial Aid</h2></a>
          <p>Financial aid helps students and families pay tuition, fees, and other expenses associated with going to college. Where does that aid come from, and which students get it?</p>
          <ul>
            <li><a href="financial-aid/financial-need/">Financial Need<i className="fa fa-chevron-right"></i></a></li>
            <li><a href="financial-aid/grant-aid/">Grant Aid<i className="fa fa-chevron-right"></i></a></li>
            <li><a href="financial-aid/federal/">Federal Aid<i className="fa fa-chevron-right"></i></a></li>
            <li><a href="financial-aid/state/">State Aid<i className="fa fa-chevron-right"></i></a></li>
            <li><a href="financial-aid/institutional/">Institutional Aid<i className="fa fa-chevron-right"></i></a></li>
            <li><a href="financial-aid/other/">Other Source of Aid<i className="fa fa-chevron-right"></i></a></li>
            <li><a href="financial-aid/tax-benefits/">Tax Benefits <i className="fa fa-chevron-right"></i></a></li>
          </ul>
        </HomePageCTA>
        <HomePageCTA src="img/covering-expenses.svg">
          <a href="covering-expenses/"><h2>Covering Expenses</h2></a>
          <p>How do students fill the financial gap between the financial aid they&rsquo;re offered and the full cost of attending college?</p>
          <ul>
            <li><a href="covering-expenses/pre-college-income/">Pre-College Income<i className="fa fa-chevron-right"></i></a></li>
            <li><a href="covering-expenses/savings/">Savings<i className="fa fa-chevron-right"></i></a></li>
            <li><a href="covering-expenses/working-during-college/">Working During College<i className="fa fa-chevron-right"></i></a></li>
            <li><a href="covering-expenses/borrowing/">Borrowing<i className="fa fa-chevron-right"></i></a></li>
            <li><a href="covering-expenses/time-to-degree/">Time to Degree<i className="fa fa-chevron-right"></i></a></li>
          </ul>
        </HomePageCTA>
        <HomePageCTA src="img/after-college.svg">
          <h2><a href="after-college/">After College</a></h2>
          <p>College affordability isn&rsquo;t just about the resources available when a student enrolls. How well the investment of time and money pays off is just as important.</p>
          <ul>
            <li><a href="after-college/employment-after-college/">Employment after College<i className="fa fa-chevron-right"></i></a></li>
            <li><a href="after-college/variation-in-earnings/">Variation in Earnings<i className="fa fa-chevron-right"></i></a></li>
            <li><a href="after-college/student-debt/">Debt Burdens<i className="fa fa-chevron-right"></i></a></li>
            <li><a href="after-college/loan-repayment-and-default/">Loan Repayment and Default<i className="fa fa-chevron-right"></i></a></li>
          </ul>
        </HomePageCTA>
        <HomePageCTA src="img/breaking-even.svg">
          <a href="breaking-even/"><h2>Breaking Even</h2></a>
          <p>Going to college is an investment. How long will it take to break even on that investment? </p>
          <ul>
            <li><a href="breaking-even/">Breaking Even<i className="fa fa-chevron-right"></i></a></li>
          </ul>
        </HomePageCTA>

      </div>
      <StudentProfiles>
        <h2>Explore Student Profiles</h2>
        <hr />
        <p>College affordability is different depending on who you are, where you come from, and where you go. Explore these student profiles to better understand how different circumstances and decisions affect different students.</p>
        <ul>
          <StudentProfile href="student-profiles/#independent_students" title="Independent" />
          <StudentProfile href="student-profiles/#low_income_dependent_students" title="Low-Income Dependent" />
          <StudentProfile href="student-profiles/#lower_middle_income_dependent_students" title="Lower-Middle Income Dependent" />
          <StudentProfile href="student-profiles/#upper_middle_income_dependent_students" title="Upper-Middle Income Dependent" />
          <StudentProfile href="student-profiles/#upper_income_dependent_students" title="Top-Income Dependent" />
        </ul>
      </StudentProfiles>
      

    </div>
  )
};

const Home = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      title: ''
    };
  },
  render: function() {
    return (
      <Template title={specifications.title} machineName={specifications.name} includeHTML={this.props.includeHTML}>
        {specifications.content}
      </Template>
    );
  }
});

if (util.canUseDOM()) {
  require('./' + specifications.name.toLowerCase() + '.scss');
}
util.printToPage('home', Home);

module.exports = Home;
