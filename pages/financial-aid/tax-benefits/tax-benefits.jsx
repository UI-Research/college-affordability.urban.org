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
    <h1>Tax Benefits</h1>
      <p>Students and parents can recoup some of what they spend out of pocket through federal tuition tax credits.&nbsp;<strong>In 2016, about 12 million taxpayers got a break, averaging about $1,400 on their&nbsp;federal income&nbsp;taxes, because they were paying for college. Federal income taxes offset about $17 billion in tuition payments for students and their parents.</strong></p>
      <p>Tax benefits, unlike most financial aid, come long after the bills have been paid. When students or parents file taxes, they can report tuition and fees paid and receive their credit either as a reduction in the amount of taxes due or as a refund check.</p>
      <p>By far, the largest tax benefit for undergraduate students is the American opportunity tax credit (AOTC), through which students (or parents paying tuition and fees) can reduce their taxes by as much as $2,500. The AOTC covers 100 percent of the first $2,000 in eligible expenses and 25 percent of the next $2,000. To get the full benefit, the taxpayer must have spent at least $4,000 on tuition and required fees and course materials. Living expenses do not count toward this amount.</p>
      <p>Students or parents who do not owe taxes can still benefit from the AOTC, but the maximum amount that is refundable is $1,000, or 40 percent of the total AOTC.</p>
      <p>From 2002 through 2017, some parents and students benefited from a tax deduction for a portion of tuition and fees paid.</p>
      <Graph file={require('./json/040701.json')}/>
      <p>The AOTC&rsquo;s 2009 implementation led to a dramatic increase in tax breaks. The total benefits (for undergraduate and graduate students combined) rose from about $9 billion (in 2016 dollars) in 2008 to $23 billion in 2010.</p>
    <h2>By Income</h2>
      <p><strong>Unlike federal grant aid, federal education tax benefits do not target low-income students and their families. They offer benefits that extend to families with incomes up to $180,000.</strong> In fact, because students who don&rsquo;t pay tuition and fees are not eligible for the tax benefit, the lowest-income students, for whom grant aid covers tuition, often don&rsquo;t benefit from tax credits.</p>
      <p>In 2016, tax filers with adjusted gross incomes below $25,000 received about 22 percent of the federal education tax credits. Filers with incomes above $100,000 received 24 percent.</p>
      <Graph file={require('./json/040702.json')}/>
      <p><strong>Full-time students at public two-year colleges are less likely to be eligible for federal education tax credits and deductions than students with similar incomes enrolled in other postsecondary sectors. Students at for-profit colleges are most likely to be eligible.</strong></p>
      <Graph file={require('./json/040703.json')}/>
      <p>Low-income students&rsquo; benefits are limited because their tuition is frequently covered by grant aid and because they are less likely to owe taxes. At the upper end of the income scale, the credits and deductions phase out, so some filers receive only partial benefits.</p>
      <p><strong>Average federal education tax credits are largest for middle-income students and for those enrolled in private for-profit and nonprofit institutions.</strong></p>
      <Graph file={require('./json/040704.json')}/>
      <Box>
        <h3><em>Other Tax Benefits for Postsecondary Students</em></h3>
        <p><em>The AOTC is the largest of several federal education tax credits and deductions. Created in 2009, this credit replaced the less generous Hope Scholarship Credit. The Hope credit and the </em><em> (LLC), which is still in effect, were created in 1997. Unlike the AOTC, which a student can use for only four years, the LLC can be claimed for an unlimited number of years. It is available to students enrolled in any postsecondary courses, but the income limits are lower than those for the AOTC. The LLC does not cover course materials and is not refundable. Only filers with tax liabilities can benefit from it.</em></p>
        <p><em>Several other provisions in the income tax code support students. These include the tax deduction for interest paid on student loans and the exemption from taxation on interest and capital gains in specified education savings accounts, such as </em><a href="http://www.collegesavings.org/" target="_blank"><em>529 accounts</em></a><em>. The personal exemption for dependents, which generally disappears after children turn 19, </em><a href="https://www.irs.gov/publications/p17/ch03.html#en_US_2015_publink1000170883" target="_blank"><em>extends up to age 24 for full-time students</em></a><em>. Children up to age 24 who are students can also make their parents eligible for the </em><a href="https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit/eitc-earned-income-tax-credit-questions-and-answers" target="_blank"><em>earned income tax credit</em></a><em>.</em></p>
      </Box>

  </div>
);

let specifications = {
  'name': 'tax-benefits',
  'title': 'Tax Benefits',
  'content': <SinglePage content={singlepage} />
};

const TaxBenefits = React.createClass({
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
util.printToPage('tax-benefits', TaxBenefits);

module.exports = TaxBenefits;
