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
      <p>Most students work at least part time while they are in college. In 2011–12, 66 percent of undergraduates—and 62 percent of full-time students—worked either full time or part time while they were enrolled. Twenty-seven percent of all undergraduates, including both full- and part-time students, had full-time jobs.</p>
      <p>It is not unreasonable to expect that undergraduate students can earn some money while they are in school, but the portion of their expenses they can cover this way depends both on the hourly wage and on how many hours they can work without interfering with their studies.</p>
      <p>It is difficult to measure the effect of working while in college on a student&rsquo;s experience, but research suggests that although working part time—up to about 15 hours per week for full-time students—does not damage a student&rsquo;s academic performance, working full time or close to full time is likely to interfere with studying and timely graduation.</p>
      <p>Many students enroll in college part time to reserve more time to work. But those who consistently take this path have much more <a href="../time-to-degree">difficulty persisting to graduation</a>. And even if they do earn degrees, they have diminished the amount of time they will have in the workforce earning college-graduate wages.</p>
      <Box>
        <h3><em>The Effect of In-college Earnings on Expected Family Contribution</em></h3>
        <p><em>The financial aid system treats student earnings differently for dependent students, independent students without dependents, and independent students with dependents.  All students, however, can earn some money without reducing their aid eligibility. </em></p>
        <p><em>In 2016–17, the first $6,400 of a dependent student&rsquo;s after-tax earnings from 2015 were excluded, with no impact on estimated ability to pay. So, dependent students can work about 17 hours a week, 52 weeks a year at the federal minimum wage before income would affect their eligibility for financial aid. For single independent students, the allowance is $9,960, which equals about 26 hours a week of work. For both dependent students and single independent students earning more than these minimums, the expected contribution increases 50 cents for each additional dollar earned. Earnings from the Federal Work-Study program do not count at all in determining future federal aid eligibility.</em></p>
        <p><em>For students with dependents, allowances are much higher and depend on family circumstances. And for those earning more than the allowances, higher earnings have less effect on aid eligibility than for dependent and single independent students. The expected contribution from income increases between 22 and 47 cents for each additional dollar earned, depending on the student&rsquo;s income level.</em></p>
      </Box>
    <h2>Working at the Minimum Wage</h2>
      <p><strong>Because college prices have risen and the minimum wage has declined after adjusting for inflation, it has become much more difficult over time for students to cover costs by working part time during college.</strong></p>
      <p>In the 1960s and 1970s, a student working 10 hours a week for 38 weeks during the college term and 35 hours a week for 12 weeks over the summer—a total of 800 hours per year—at the minimum wage could earn enough to pay for tuition and fees as well as most of the room and board charges at the average public four-year college.</p>
      <p>Since then, college prices have risen rapidly and the minimum wage has declined in real terms. <strong>The same amount of work at the minimum wage would now cover about one-third of the average public four-year college published charges.</strong> Financial aid has become more generous and <a href="../../prices-and-expenses/net-price">net prices</a> have not risen as fast as published prices, but &ldquo;working your way through college&rdquo; is not the viable option it once was.</p>
      <Graph file={require('./json/05_0060.json')}/>
      <p>Although some of the part-time jobs students hold may not be subject to the regulation, the minimum wage is a good indicator of how much students can earn while they are in college. In 2016, the federal minimum wage was $7.25 per hour, though 29 states and the District of Columbia (DC) had higher minimum wages.<strong> </strong>The federal minimum wage, set at $7.25 per hour since 2009, has declined 11 percent in constant dollars since that time.</p>
      <Graph file={require('./json/05_0070.json')}/>
      <p>Twenty-nine states and DC have minimum wages higher than $7.25, ranging from $7.50 in Maine and New Mexico to $10.00 in Massachusetts and $10.50 in DC.</p>
      <Graph file={require('./json/05_0080.json')}/>
    <h2>Who Works, and How Much?</h2>
      <p>Most students, including those who are enrolled full time, work while they are in college. Among full-time students, 43 percent worked part time and 19 percent worked full time in 2011–12.</p>
      <p>In 2011–12, 61 percent of dependent and 64 percent of independent full-time, full-year students had earnings from work. The median amount of earnings for dependent students who worked was $3,300. The median independent student earned $8,000 during the school term.</p>
      <p>Dependent students are almost as likely to work during the school year as independent students, but they work many fewer hours and earn significantly less.</p>
      <Graph file={require('./json/05_0090.json')}/>
      <Graph file={require('./json/05_0100.json')}/>
    <h2>Federal Work-Study</h2>
      <p>The federal government encourages colleges and universities to employ students by paying a portion of some students&rsquo; wages through the Federal Work-Study (FWS) program. When students receive financial aid award letters explaining the grants and loans they are receiving, the aid package sometimes includes FWS. But from the student&rsquo;s perspective, FWS earnings are really not student aid—they are earnings from work. Federal work-study provides part-time employment, but it doesn&rsquo;t lower the price the student must pay.</p>
      <p><a href="https://trends.collegeboard.org/sites/default/files/2016-trends-student-aid.pdf" target="_blank">In 2015–16, 632,000 students earned a total of about $1.1 billion through FWS jobs—an average of about $1,700 per student. In contrast, 7.6 million students received federal Pell grants averaging $3,724</a>.</p>
      <p>The FWS program is part of the campus-based financial aid system. The federal government provides funds to institutions, which add some of their own dollars and provide part-time jobs for undergraduate and graduate students. Most work-study jobs are on campus, but others are at nonprofit organizations off campus or, occasionally, for-profit organizations providing jobs related to a student&rsquo;s program of study.</p>
      <p>The formula allocating campus-based aid to institutions is largely based on program participation in the 1970s and results in larger allocations of FWS per student at older private colleges and institutions with higher estimated costs of attendance. Institutions decide how to distribute the funds among eligible students. <a href="https://www.nasfaa.org/uploads/documents/ektron/02449fc6-a14e-40f4-b9de-e22d19252947/80d69b186d124195b22a59471714e3d14.pdf" target="_blank">Criticism of this practice</a> is widespread because it leaves many high-need students who are enrolled in institutions serving large numbers of low-income students without access to this form of assistance.</p>
      <Graph file={require('./json/05_0110.json')}/>

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
