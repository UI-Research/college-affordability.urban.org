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
      <p>Students and parents can recoup some of what they spend out of pocket through federal tuition tax credits and deductions. <strong>In 2014, almost 14 million taxpayers got a break averaging about $1,300 on their federal income taxes because they were paying for college. Federal income taxes offset about $18 billion in tuition payments for students and their parents.</strong></p>
      <p>Tax benefits, unlike most financial aid, come long after the bills have been paid. When students or parents file taxes, they can report tuition and fees paid and receive their credit or deduction either as a reduction in the amount of taxes due or, in some cases, as a refund check. </p>
      <p>By far the largest tax benefit for undergraduate students is the American opportunity tax credit (AOTC), through which students (or parents paying tuition and fees) can reduce their taxes by as much as $2,500. The AOTC covers 100 percent of the first $2,000 in eligible expenses and 25 percent of the next $2,000. To get the full benefit, the taxpayer must have spent at least $4,000 on tuition and required fees and course materials. Living expenses do not count toward this amount.</p>
      <p>Students or parents who do not owe taxes can still benefit from the AOTC, but the maximum amount that is refundable is $1,000—40 percent of the total AOTC.</p>
      <p>The implementation of the AOTC in 2009 led to a dramatic increase in the tax breaks students receive. The total benefits (for undergraduate and graduate students combined) rose from about $7 billion (in 2014 dollars) in 2008 to $18 billion in 2014.</p>
      <Graph file={require('./json/04_0240.json')}/>
    <h2>By Income</h2>
      <p><strong>Unlike federal grant aid, federal education tax benefits are not targeted toward low-income students and their families, and they offer benefits that extend much further up the income scale.</strong> In fact, because students who don&rsquo;t pay tuition and fees are not eligible for the tax benefit, the lowest-income students, for whom grant aid covers tuition, often don&rsquo;t benefit from tax credits at all. </p>
      <p>In 2014, tax filers with adjusted gross incomes under $25,000 received about a quarter of the federal education tax credits and deductions. Filers with incomes above $100,000 received a similar share.</p>
      <Graph file={require('./json/04_0250.json')}/>
      <p><strong>Full-time students at public two-year college are less likely to be eligible for federal education tax credits and deductions than students with similar incomes enrolled in other postsecondary sectors. Students at for-profit colleges are most likely to be eligible.</strong></p>
      <Graph file={require('./json/04_0260.json')}/>
      <p>Low-income students&rsquo; benefits are limited because their tuition is frequently covered by grant aid and because they are less likely to owe taxes. At the upper end of the income scale, the credits and deductions phase out, so some filers receive only partial benefits.</p>
      <p><strong>Average federal education tax credits are largest for middle-income students and for those enrolled in private for-profit and nonprofit institutions.</strong></p>
      <Graph file={require('./json/04_0270.json')}/>
      <Box>
        <h3><em>Other Tax Benefits for Postsecondary Students</em></h3>
        <p><em>The AOTC is the largest of a number of existing federal education tax credits and deductions. Created in 2009, this credit replaced the less generous Hope scholarship credit. The Hope credit and the <a href="https://www.irs.gov/publications/p970/ch03.html" target="_blank">lifetime learning credit</a> (LLC), which is still in effect, were created in 1997. Unlike the AOTC, which a student can use for only four years, the LLC can be claimed for an unlimited number of years. It is available to students enrolled in any postsecondary courses, but the income limits are lower than those for the AOTC. The LLC does not cover course materials and is not refundable—only filers with tax liabilities can benefit from it.</em></p>
        <p><em>Unlike tax credits, which directly reduce taxes owed, tax deductions—including <a href="https://www.irs.gov/taxtopics/tc457.html" target="_blank">the tuition and fees tax deduction</a>—diminish taxable income. The savings depend on the tax bracket in which the filer&rsquo;s income falls. Under current provisions, filers can deduct up to $4,000 per year in tuition and fee payments.</em></p>
        <p><em>A number of other provisions in the income tax code support students. These include the tax deduction for interest paid on student loans and the exemption from taxation on interest and capital gains in specified education savings accounts, such as <a href="http://www.collegesavings.org/" target="_blank">529 accounts</a>. The personal exemption for dependents, which generally disappears after children turn 19, <a href="https://www.irs.gov/publications/p17/ch03.html#en_US_2015_publink1000170883" target="_blank">extends up to age 24 for full-time students</a>. Children up to age 24 who are students can also make their parents eligible for the <a href="https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit/eitc-earned-income-tax-credit-questions-and-answers" target="_blank">earned income tax credit</a>.</em></p></Box>

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
