'use strict';

import React, { Component } from 'react';
import Template from '20-templates/default/default.jsx';
import Graph from '30-components/graphs/graph/graph.jsx';
import Multiples from '30-components/graphs/multiples/multiples.jsx';
import Box from '30-components/box/box/box.jsx';
import SinglePage from '30-components/singlepage/singlepage.jsx';
import util from 'util.jsx';


let singlepage = (
  <div>
    <h1>After College</h1>
      <p>Although it&rsquo;s tempting to think about college affordability as whether or not a family has the resources to pay at the time of enrollment, affordability depends on resources available before, during, and<em> after</em> college. </p>
      <p>Whether or not students borrow to help finance their college education, the investment of time, money, and effort is significant. Too many students leave school without a degree or certificate; for them, the investment may not pay off well and any debts will be difficult to repay. But for most of those who do earn a degree, the earnings premium is large enough to repay any debts and maintain a higher standard of living than they would have had if they had not gone to college.</p>
    <Box>
      <h3><em>College Completion Rates</em></h3>
        <p><em>The number of people—both recent high school graduates and older adults—enrolling in college has increased rapidly over time, but the percentage of people earning degrees has grown much more slowly.</em></p>
        <p><em>There are a number of ways to measure completion rates. The federal government collects the information only for first-time full-time students and counts completions only for students who earn their degrees at the institution in which they first enrolled. Among students who first enrolled full time at a public four-year institution in 2008, 34 percent had earned a bachelor&rsquo;s degree within four years; two years later a total of 59 percent had earned bachelor&rsquo;s degrees. Completion rates were higher for students at private nonprofit institutions, and much lower for those enrolled in the for-profit sector.</em></p>
        <p><em>According to the federal definition, the six-year bachelor&rsquo;s degree completion rate is much higher than the four-year completion rate in all sectors.</em></p>
        <Graph file={require('./06_1000.json')}/>
        <Graph file={require('./06_2000.json')}/>
        <p><em>The National Student Clearinghouse (NSC) tracks students across institutions and measures completion rates for both full-time and part-time students. Including those who transfer raises measured completion rates, but including part-time students has the opposite effect, since full-time students are more likely than part-time students to finish their degrees.</em></p>
        <p><em>According to NSC data, only 50 percent of all students beginning at a public four-year institution in 2008 completed a bachelor&rsquo;s degree within six years at their first college, but another 10 percent earned degrees at other institutions. When considering only full-time students, NSC&rsquo;s completion rate jumps to 80 percent.</em></p>
    </Box>

    <p>Average earnings increase with level of education. Adults with college degrees are more likely to be in the labor force—working or actively looking for work—and are more likely to be employed than high school graduates. When they are employed, they are more likely to have full-time jobs. And their wages and salaries are higher than those for people without degrees.</p>
    <p>In short, a college degree generates a high average return in future earnings, but the payoff varies quite a bit. </p>
    <p>It is not easy to predict post-college employment and earnings for individual students. However, understanding the patterns for different groups of students with different levels of education sheds light on how well those who borrow will be able to manage their debt repayment and whether over the long run, the investment in college will have paid off—making college affordable.</p>
  </div>
);

let specifications = {
  'name': 'after-college',
  'title': 'After College',
  'content': <SinglePage content={singlepage} />
};

const AfterCollege = React.createClass({
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
util.printToPage('after-college', AfterCollege);

module.exports = AfterCollege;
