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
    <h1>Working during College</h1>
      <p>Most students work at least part time while they are in college. In 2015&ndash;16, and 58 percent of full-time students worked either full time or part time while they were enrolled. Twenty-six percent of all undergraduates, including both full- and part-time students, had full-time jobs.</p>
      <p>Undergraduate students can earn money while they are in school, but the portion of their expenses they can cover this way depends on the hourly wage and on how many hours they can work without interfering with their studies.</p>
      <p>It is difficult to measure the effect of working while in college on a student&rsquo;s experience, but research suggests that although working part time&mdash;up to 15 hours a week for full-time students&mdash;does not damage a student&rsquo;s academic performance, working full time or close to full time is likely to interfere with studying and timely graduation.</p>
      <p>Many students enroll in college part time to reserve more time to work. But those who take this path have more <a href="http://collegeaffordability.urban.org/covering-expenses/time-to-degree">difficulty persisting to graduation</a>. And even if they do earn degrees, they have diminished the amount of time they will have in the workforce earning college-graduate wages.</p>
      <Box>
        <h3><em>The Effect of In-College Earnings on Expected Family Contribution</em></h3>
        <p><em>The financial aid system treats student earnings differently for dependent students, independent students without dependents, and independent students with dependents. All students, however, can earn some money without reducing their aid eligibility.</em></p>
        <p><em>In 2018&ndash;19, the first </em><a href="https://ifap.ed.gov/efcformulaguide/attachments/071017EFCFormulaGuide1819.pdf" target="_blank">$6,570</a><em> of a dependent student&rsquo;s after-tax earnings from 2016 are excluded, with no impact on estimated ability to pay. So dependent students can work 17 hours a week, 52 weeks a year at the federal minimum wage before income would affect their eligibility for financial aid. For single independent students, the allowance is $10,220, or 27 hours a week of work. For both dependent students and single independent students earning more than these minimums, the expected contribution increases 50 cents for each additional dollar earned. Earnings from the Federal Work-Study program do not count in determining future federal aid eligibility.</em></p>
        <p><em>For students with dependents, allowances are higher and depend on family circumstances. And for students earning more than the allowances, higher earnings have less effect on aid eligibility than for dependent and single independent students. The expected contribution from income increases between 22 and 47 cents for each additional dollar earned, depending on the student&rsquo;s income.</em></p>
      </Box>
    <h2>Working at the Minimum Wage</h2>
      <p><strong>Because college prices have risen and the minimum wage has declined after adjusting for inflation, it has become more difficult for students to cover costs by working part time during college.</strong></p>
      <p>In the 1960s and 1970s, a student working 10 hours a week for 38 weeks during the college term and 35 hours a week for 12 weeks over the summer&mdash;800 hours a year&mdash;at the minimum wage could earn enough to pay for tuition and fees as well as most of the room and board charges at the average public four-year college.</p>
      <p>Since then, college prices have risen rapidly, and the minimum wage has declined in real terms. Since 2003, these earnings have been too small to cover tuition and fees. <strong>The same amount of work at the minimum wage would now cover 57 percent of the average public four-year college tuition and fees and 27 percent of total published charges.</strong> Financial aid has become more generous and <a href="http://collegeaffordability.urban.org/prices-and-expenses/net-price">net prices</a> have not risen as fast as published prices, but &ldquo;working your way through college&rdquo; is not the viable option it once was.</p>
      <Graph file={require('./json/050301.json')}/>
      <p>Although some of the part-time jobs students hold may not be subject to the regulation, the minimum wage is a good indicator of how much students can earn while they are in college. In 2019, the federal minimum wage is $7.25 an hour, <a href="https://www.dol.gov/whd/minwage/mw-consolidated.htm" target="_blank">though 29 states and the District of Columbia (DC) had higher minimum wages</a>. The federal minimum wage, set at $7.25 an hour in 2009, has declined 15 percent in constant dollars since then.</p>
      <Graph file={require('./json/050302.json')}/>
      <p>Twenty-nine states and DC have minimum wages higher than $7.25, ranging from $7.50 in Maine and New Mexico to $10.00 in Massachusetts and $10.50 in DC.</p>
      <Graph file={require('./json/050303.json')}/>
    <h2>Who Works, and How Much?</h2>
      <p>Most students, including those who are enrolled full time, work while they are in college. Among full-time students, 41 percent worked part time and 16 percent worked 35 hours a week or more in 2015&ndash;16.</p>
      <p>In 2015&ndash;16, The median income for full-time dependent students with income was $3,900. The median independent student earned $13,880 over the year.</p>
      <Graph file={require('./json/050304.json')}/>
      <Graph file={require('./json/050305.json')}/>
    <h2>Federal Work-Study</h2>
      <p>The federal government encourages colleges and universities to employ students by paying a portion of some students&rsquo; wages through the Federal Work-Study (FWS) program. When students receive financial aid award letters explaining the grants and loans they will receive, the aid package sometimes includes FWS. But from the student&rsquo;s perspective, FWS earnings are not student aid&mdash;they are earnings from work. Federal work-study provides part-time employment, but it doesn&rsquo;t lower the price the student must pay.</p>
      <p><strong>In 2017&ndash;18, 601,000 students earned a combined $1.1 billion through FWS jobs, $1,788 a student. In contrast, 7 million students received federal Pell grants averaging $4,013</strong>.</p>
      <p>The FWS program is part of the campus-based financial aid system. The federal government provides funds to institutions, which add some of their own dollars and provide part-time jobs for undergraduate and graduate students. Most work-study jobs are on campus, but others are at nonprofit organizations off campus or at for-profit organizations providing jobs related to a student&rsquo;s program of study.</p>
      <p>The formula allocating campus-based aid to institutions is largely based on program participation in the 1970s and results in larger allocations of FWS per student at older private colleges and institutions with higher estimated costs of attendance. Institutions decide how to distribute the funds among eligible students. <a href="https://www.nasfaa.org/uploads/documents/ektron/02449fc6-a14e-40f4-b9de-e22d19252947/80d69b186d124195b22a59471714e3d14.pdf" target="_blank">Criticism of this practice</a> is widespread because it leaves many high-need students who are enrolled in institutions serving large numbers of low-income students without access to this assistance.</p>
      <Graph file={require('./json/050306.json')}/>

  </div>
);

let specifications = {
  'name': 'working-during-college',
  'title': 'Working During College',
  'content': <SinglePage content={singlepage} />
};

const WorkingDuringCollege = React.createClass({
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
util.printToPage('working-during-college', WorkingDuringCollege);

module.exports = WorkingDuringCollege;
