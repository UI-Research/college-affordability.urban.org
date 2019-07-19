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
      <p>Although it&rsquo;s tempting to think about college affordability as whether a family has the resources to pay at the time of enrollment, affordability depends on resources available before, during, and <em>after</em> college.</p>
	  <p>Whether or not students borrow to help finance their college education, the investment of time, money, and effort is significant. Many students leave school without a degree or certificate. For them, the investment may not pay off well, and any debts will be difficult to repay. But for most of those who do earn a degree, the earnings premium is large enough to repay any debts and maintain a higher standard of living than they would have had if they had not gone to college.</p>
    <Box>
      <h3><em>College Completion Rates</em></h3>

        <p><em>The number of people&mdash;both recent high school graduates and older adults&mdash;enrolling in college has increased rapidly, but the share of people earning degrees has increased more slowly.</em></p>
        <p><em>There are several ways to measure completion rates. The official government completion rate is only for first-time full-time students. It counts completions only for students who earn their degrees at the institution in which they first enrolled. Among students who first enrolled full time at public four-year institutions in 2010, 36 percent had earned bachelor&rsquo;s degrees within four years. Two years later, 58 percent had earned bachelor&rsquo;s degrees. Completion rates were higher for students at private nonprofit institutions and lower for those enrolled in the for-profit sector.</em></p>
        <p><em>According to the federal definition, the six-year bachelor&rsquo;s degree completion rate is higher than the four-year completion rate in all sectors.</em></p>
            <Graph file={require('./json/060001.json')}/>
            <Graph file={require('./json/060002.json')}/>
            <p><em>The National Student Clearinghouse (NSC) tracks students across institutions and measures completion rates for both full-time and part-time students. Including those who transfer raises measured completion rates, but including part-time students has the opposite effect, because full-time students are more likely than part-time students to finish their degrees.</em></p>
        <p><em>According to NSC data, only 48 percent of students beginning at public four-year institutions in 2010 completed bachelor&rsquo;s degrees within six years at their first college, but another 13 percent earned degrees at other institutions. When considering only full-time students, NSC&rsquo;s completion rate jumps to 80 percent.</em></p>
    </Box>

    <p>Average earnings increase with level of education. Adults with college degrees are more likely to be in the labor force&mdash;working or looking for work&mdash;and are more likely to be employed than high school graduates. When they are employed, they are more likely to have full-time jobs. And their wages and salaries are higher than those for people without degrees.</p>
	<p>In short, a college degree generates a high average return in future earnings, but the payoff varies.</p>
	<p>It is not easy to predict postcollege employment and earnings for individual students. But understanding the patterns for different groups of students with different levels of education sheds light on how well those who borrow will be able to manage their debt repayment and whether over the long run, the investment in college will have paid off&mdash;making college affordable.</p>
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
