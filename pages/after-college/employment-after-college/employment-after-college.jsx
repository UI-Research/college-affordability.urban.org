'use strict';

import React from 'react';
import Template from '20-templates/default/default.jsx';
import Graph from '30-components/graphs/graph/graph.jsx';
import Multiples from '30-components/graphs/multiples/multiples.jsx';
import Box from '30-components/box/box/box.jsx';
import SinglePage from '30-components/singlepage/singlepage.jsx';
import util from 'util.jsx';


let singlepage = (
  <div>
    <h1>Employment after College</h1>
      <p><strong>From a financial perspective, college is a good investment&mdash;and therefore affordable&mdash;if it generates future earnings that support a higher standard of living, even after accounting for the cost of going to college.</strong></p>
      <p>Only looking at students&rsquo; and families&rsquo; financial resources at the time students enroll in college is an inadequate way to measure how much they can afford to pay. College is an investment in the future that pays off over many years. Although that payoff is uncertain for individual students, estimating it is the only way to decide whether and how much it is reasonable to borrow&mdash;and what is affordable.</p>
      <p>Whether investing in college pays off depends, first, on whether a student graduates. But when students do earn degrees, their prospects for finding jobs improve and the <a href="http://collegeaffordability.urban.org/after-college/variation-in-earnings"><strong>salaries</strong></a> they can expect to earn increase. People with higher levels of education are more likely to participate in the labor force, to be employed, and to be employed <a href="http://collegeaffordability.urban.org/after-college/employment-after-college/#work_patterns"><strong>full time</strong></a> than those without college degrees. There are no guarantees, of course, and some college graduates still struggle to find stable, well-paying jobs.</p>
      <p>Because those with more education are more likely to have a job, and, when they work, to be employed full time, the earnings gaps of <strong>all adults</strong> by level of education are larger than the earnings gaps of <strong>full-time workers</strong> by level of education.</p>
    <h2>Labor Force Participation</h2>
      <p>The labor force includes people who are working and those who are unemployed but seeking work.</p>
    <p><strong><a href="https://www.bls.gov/emp/ep_table_303.htm" target="_blank">In addition to being related to age and gender</a>, labor force participation is highly correlated with educational attainment.</strong></p>
    <p>In 2017, labor force participation rates among 25-to-34-year-olds were 78 percent for high school graduates with no further education, 81 percent for those with some college but no degree, 86 percent for those with associate degrees, 87 percent for those with bachelor&rsquo;s degrees, and 89 percent for those with advanced degrees.</p>
      <Graph file={require('./json/060101.json')}/>
    <h2>Unemployment</h2>
      <p><strong>In addition to being more likely to participate in the labor force, people with higher levels of education are more likely to be employed when they do seek work.</strong></p>
      <p>Unemployment rates for 25-to-34-year-old graduates from four-year colleges are consistently about one-third of the rate for high school graduates. People with some college but no degree or with associate degrees are also more likely than high school graduates to be employed.</p>
      <Graph file={require('./json/060102.json')}/>
    <h2>Work Patterns</h2>
      <p>Earnings depend on how much you work, and <strong>people with lower levels of educational attainment are more likely to work part time or part year than those with college degrees.</strong></p>
      <p>Between 2012 and 2016, for example, 69 percent of 25-to-34-year-olds in the labor force with a high school diploma but no further education worked full time, full year, but 78 percent of those with bachelor&rsquo;s degrees did.</p>
     <Graph file={require('./json/060103.json')}/>
  </div>
);

let specifications = {
  'name': 'employment-after-college',
  'title': 'Employment After College',
  'content': <SinglePage content={singlepage} />
};

const EmploymentAfterCollege = React.createClass({
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
util.printToPage('employment-after-college', EmploymentAfterCollege);

module.exports = EmploymentAfterCollege;
