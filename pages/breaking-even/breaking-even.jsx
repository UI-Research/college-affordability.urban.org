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
  <h1>Breaking Even</h1>
	<p>As tuition prices rise over time, some&nbsp;students&nbsp;are concerned about whether it is still &ldquo;worth it&rdquo; to go to college. At the heart of that question is identifying the&nbsp;<strong>break-even point.</strong></p>
	<p><strong>The break-even point is the point at which a college graduate&rsquo;s extra earnings over time are enough to compensate for having paid for college and taken time out of the workforce. After this point, the college graduate&rsquo;s cumulative earnings exceed those of the median high school graduate, who began working at a younger age.</strong></p>
	<p>How long it takes graduates to reach that break-even point&mdash;and whether they reach it at all&mdash;depends on the factors highlighted on this site. Did the students choose public two-year colleges or private nonprofit four-year colleges? How much grant aid did they&nbsp;receive? Did they work during school? How long did they stay out of the workforce to earn their degrees? What credentials did they earn? Which&nbsp;loan repayment&nbsp;plan did they choose? Where do they live? All of these factors combine to determine the break-even point. Achieving that break-even point makes college&nbsp;<em>affordable.</em></p>
	<p>Most students who earn bachelor&rsquo;s degrees will reach this break-even point about eight years after they graduate. But some adults with bachelor&rsquo;s degrees have earnings that are lower than the median for high school graduates and may never come out ahead financially.</p>
	<p>The time required to recoup the investment in an associate degree after three years of full-time study at a public two-year college&mdash;with both lower prices and lower earnings prospects&mdash;is about fourteen years.</p>
	<p>Investing in postsecondary education has a high positive expected rate of&nbsp;return, but it does involve risk. The calculations below examine how small changes in choices or circumstances can affect the break-even point, in turn affecting affordability. Though these charts and calculations are representative, they are just approximations. In reality, uncontrollable or unexpected factors&mdash;such as a recession or a lost job&mdash;can move that break-even point in ways it&rsquo;s impossible to predict.</p>
	<p>The chart below is based on median earnings for each level of education. It incorporates the following assumptions that may differ from other similar analyses, such as those in the College Board&rsquo;s&nbsp;<strong><em><a href="https://trends.collegeboard.org/education-pays" target="_blank">Education Pays</a></em></strong>&nbsp;publications:</p>
	<ul>
		<li>Students are enrolled&nbsp;full time&nbsp;for three years to earn an associate degree and full time for five years to earn a bachelor&rsquo;s degree.</li>
		<li>Students do not have earnings while they are in college.</li>
		<li>Comparisons are based on all high school graduates who are in the labor force, including those who are unemployed but seeking work and those who work part time.</li>
		<li>Tuition and fees are a weighted average of the public four-year and private nonprofit four-year prices for a bachelor&rsquo;s degree and reflect community college prices for an associate degree; the cost of books and supplies is added to tuition and fees.</li>
		<li>Students pay the full tuition and fee price less average grant aid at the time they are enrolled, rather than borrowing for this expense. (Borrowing increases the cost because of interest on the loans, but that effect is counteracted by the postponement of the payments, which has the opposite effect.)</li>
	</ul>
	<p>The median student who graduates from high school, enrolls in college&nbsp;full time&nbsp;at age 18, and earns an associate degree after three years will, at age 34, surpass the cumulative earnings of the median high school graduate who went straight into the labor force. The median student who earns a bachelor&rsquo;s degree after five years of full-time study will pass the break-even point at age 31, even without any earnings while in college.</p>
 	<Graph file={require('./json/070001.json')}/>
	<p><em>What is the impact of variation in tuition prices?</em></p>
	<p>Paying the average net tuition price at a&nbsp;private&nbsp;nonprofit four-year college for years ($35,830 for one year in 2018&ndash;19 instead of $17,540, which is the average for public, private nonprofit, and for-profit four-year&nbsp;college students), and earning median income for bachelor&rsquo;s degree recipients, would&nbsp;<strong>raise the estimated break-even age from 31 to 38</strong>, still leaving about 30 years of the typical work life to reap the earnings premium.</p>
	<p>Paying the average net tuition price at a public four-year college for five years ($9,420 instead of $17,540) would&nbsp;<strong>lower the break-even age from 31 to 28</strong>.</p>
	<p><em>What would the break-even point be if we considered only full-time full-year workers?</em></p>
	<p>The share of workers who are employed&nbsp;full time&nbsp;increases with level of education. Accordingly,&nbsp;<strong>looking only at full-time year-round workers narrows the earnings gap between high school and college graduates</strong>, raising the break-even age.</p>
	<p><em>How does working while in college affect the break-even point?</em></p>
	<p>Many students have earnings while they are in college. Working 800&nbsp;hours&nbsp;a year (35 hours a week for 12 weeks and 10 hours a week for 38 weeks) at the national minimum wage of $7.25 a hour&nbsp;<strong>lowers the estimated break-even age</strong>&nbsp;for the median bachelor&rsquo;s degree recipient from age 31to age 26 and for the median associate degree recipient from 34 to 31.</p>
	<p><em>How does borrowing affect the break-even point?</em></p>
	<p>Students who borrow instead of paying their tuition up front accrue interest on their loans, increasing the amount they pay for college. On the other hand, they postpone their payments, which decreases their value.&nbsp;<strong>Those who pay high&nbsp;interest rates&nbsp;will take a little longer to break even, but the impact is small.</strong></p>
	<p><em>How does completing a bachelor&rsquo;s degree in four years or six years instead of five years affect the break-even point?</em></p>
	<p>Graduating more quickly reduces the break-even age. Students who earn bachelor&rsquo;s degrees in four years enter the workforce at a younger age. They also save a year&rsquo;s worth of tuition, fees, and books. On the other hand, staying in school for six years instead of five extends the time it takes to recoup the cost of going to college.</p>
	<p><em>How does having earnings lower or higher than the median for college graduates affect the break-even point?</em></p>
	<p>About 18 percent of bachelor&rsquo;s degree recipients earn less than the median for high school graduates. In other words, some college graduates never end up financially better off than the median high school graduate. On the other hand, half of all bachelor&rsquo;s degree recipients earn more than the median earnings used in the calculations reported here.</p>
  </div>
);

let specifications = {
  'name': 'breaking-even',
  'title': 'Breaking Even',
  'content': <SinglePage content={singlepage} />
};

const BreakingEven = React.createClass({
  render: function() {
    return (
      <Template title={specifications.title} machineName={specifications.name} includeHTML={this.props.includeHTML}>
        {specifications.content}
      </Template>
    );
  }
});


util.printToPage('breaking-even', BreakingEven);

if (util.canUseDOM()) {
  require('./' + specifications.name.toLowerCase() + '.scss');
}

module.exports = BreakingEven;