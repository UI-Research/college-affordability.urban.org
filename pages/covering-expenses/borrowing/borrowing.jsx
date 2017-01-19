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
    <h1>Borrowing</h1>
      <p>Many students borrow to fund a portion of their college expenses. Each year, about 40 percent of all undergraduate students take federal student loans and about 70 percent of those who receive a bachelor&rsquo;s degree have education debt by the time they graduate. </p>
      <p>Borrowers face a complicated array of choices. Most loans come directly from the federal government, but a small number of students take private loans from banks or other lenders or borrow through state or institutional programs. Annual borrowing levels have risen significantly over the past decade, but have declined slightly from a peak in 2010–11.</p>
      <p>The federal government makes loans to students and families on better terms than the private market would offer to students with no credit history or collateral. There are two main types of federal loans for undergraduate students and a program for parents:</p>
      <ul>
        <li><strong>Subsidized federal loans</strong> are available to students with documented financial need. These loans do not accrue interest while the student is in school. </li>
        <li><strong>Unsubsidized federal loans</strong> are available to all students. Interest begins to accrue as soon as the loans are disbursed. Because the federal government regulates the interest rates on these loans and offers them to all students regardless of credit ratings, they are considered part of the financial aid package. </li>
        <li><strong>Parent PLUS loans</strong> are available to parents without adverse credit histories. Parents begin making payments, including interest, as soon as loans are disbursed.</li>
      </ul>
      <p>Congress sets the interest rates and annual borrowing limits for federal student loans. As of 2016, the lifetime borrowing limit for a dependent undergraduate student was $31,000, including a maximum of $23,000 of subsidized loans. Independent students have higher borrowing limits for unsubsidized loans, and Parent PLUS Loans are limited only by colleges&rsquo; estimated cost of attendance.</p>
      <p>Many students borrow from federal or other sources during some, but not all, of their college years. As a result,<strong> the percentage of students borrowing in any year is lower than the percentage of students who will leave college with debt.</strong></p>
      <Graph file={require('./json/05_0120.json')}/>
    <h2>By Student Characteristics</h2>
      <p><strong>Average annual per-student borrowing does not vary widely by dependency status and family income level.</strong></p>
      <p>Dependent students from families in the highest income quartile were least likely to borrow in 2011–12, but when they took loans, they borrowed larger amounts, on average, than those from lower- and middle-income families. This is in part because students from higher-income families are more likely to enroll full time and more likely to attend high-price colleges than students from lower-income families. It is also possible that students from higher-income families have other options if they just need a few thousand dollars, so there are fewer borrowers in this group who take relatively small loans.</p>
      <p>Students who attended college part time were much less likely to borrow than those who attended full time, but borrowing limits are the same for full- and part-time students. The part-time students who took loans borrowed an average of only $1,000 less than the full-time borrowers.  </p>
      <Multiples title="Annual borrowing by student characteristics: averages per borrower and per undergraduate student (with percentage borrowing) in 2011-12" source="National Postsecondary Student Aid Study 2012">
        <Graph file={require('./json/05_0131.json')} small="true"/>
        <Graph file={require('./json/05_0132.json')} small="true"/>
        <Graph file={require('./json/05_0133.json')} small="true"/>
        <Graph file={require('./json/05_0134.json')} small="true"/>
      </Multiples>
      <Box>
        <h3><em>Private student loans</em></h3>
        <p><em>Students have the option of borrowing from commercial lenders in addition to or instead of taking federal loans. Some students seek to borrow more than the federal loan limits allow. Others may wish to avoid filling out the federal financial aid application or have other reasons for turning to the private market. </em></p>
        <p><em>Private student loans generally have higher interest rates than federal loans or interest rates that increase over time. They also do not come with the repayment protections the federal government offers. Most private student loans require credit-worthy cosigners. Major private lenders include Sallie Mae and several large banks such as PNC and Wells Fargo. </em></p>
        <p><em>Almost no undergraduates borrowed private student loans in 1995</em><em>–96, but by 2007</em><em>–08, 14 percent of students relied on this source of funds. Total private student loan volume fell dramatically between 2007</em><em>–08 and 2008</em><em>–09, however, and in 2011</em><em>–12, only about 6 percent of undergraduate students took these loans. </em></p>
        <p><em>Dependent students from families with incomes between $65,000 and $106,000 are slightly more likely than average to borrow private student loans. Private loan borrowers from the lowest-income families take the smallest loans and those from the highest-income families borrow the largest amounts. This may be because students are using the loans to come up with the money to cover their parents&rsquo; contribution. Moreover, many of higher-income students may not have applied for federal financial aid, since they do not expect to be eligible for need-based grants.</em></p>
      </Box>
    <h2>Over Time</h2>
      <p><strong>Both the number of students borrowing and the average amount they borrow have declined significantly since 2009</strong><strong>–10.</strong> The percentage of undergraduate students borrowing rose steadily from 2001–02 to 2011–12, but it has declined since then.</p>
      <p>In each of the last few years, just under 40 percent of all undergraduate students have taken federal loans. Across all undergraduate students, the average amount borrowed from the federal government peaked at $2,600 in 2009–10 but remains about $500 more than a decade earlier, after adjusting for inflation.</p>
      <p>The economic recovery following the Great Recession may help explain these trends. As the labor market has improved, fewer older students, who borrow more than younger students, are enrolling. Parents may also be more able to help pay for college.  </p>
      <Graph file={require('./json/05_0140.json')}/>
    <h2>By Sector</h2>
      <p>Borrowing patterns differ significantly across sectors of postsecondary education. In 2013–14, the percentage of undergraduates borrowing ranged from 24 percent in public two-year colleges to 63 percent in for-profit institutions. Students enrolled in for-profit institutions are more likely to borrow than those in other sectors, and, when they borrow, they borrow more.</p>
      <Graph file={require('./json/05_1510.json')}/>
      <Graph file={require('./json/05_1520.json')}/>
    <h2>Parent Borrowing</h2>
      <p>Through the federal Parent PLUS Loan program, parents without adverse credit histories can borrow an amount equal to the difference between the full student budget (the cost of attendance) and the amount of financial aid received. </p>
      <p>The interest rate on these loans was 6.31 percent for the 2016–17 academic year compared with 4.29 percent for subsidized and unsubsidized federal student loans. The parents of about 7 percent of dependent students take PLUS loans each year.</p>
      <p>The average amount borrowed by Parent PLUS participants increased from $10,600 (in 2015 dollars) in 2000–01 to $15,300 in 2015–16. Because of the low participation rates, the average amount borrowed per dependent student increased from just $600 to $1,200.</p> 
      <p><strong>Parents of dependent students attending for-profit colleges are most likely to borrow Parent PLUS Loans.</strong> Although only 22 percent of full-time students in the for-profit sector are dependent students (and as such potentially eligible for Parent PLUS Loans), 32 percent of these parents borrowed from the federal government in 2011–12—a much higher participation rate than the 13 percent for full-time dependent undergraduates overall.</p>
      <p>Because eligibility for Parent PLUS Loans depends on cost of attendance exceeding financial aid, higher Parent PLUS borrowing in the for-profit and private nonprofit sectors is related to these institutions&rsquo; higher net prices relative to public two-year and public four-year prices.  </p>
      <Graph file={require('./json/05_0160.json')}/>
      <p><strong>Parents of low-income students are less likely to take Parent PLUS loans than other parents and when they borrow, they borrow smaller amounts. </strong>Low-income students are more likely than others to enroll in community colleges and to live at home with their parents, but these parents are also most likely to be ineligible for PLUS loans because of problems with their credit histories.</p>
      <Multiples title="Average Amount Borrowed and Percent Receiving Parent PLUS Loans Among Full-Time Dependent Students, 2011–12" source="National Postsecondary Student Aid Study 2012">
        <Graph file={require('./json/05_0171.json')} small="true"/>
        <Graph file={require('./json/05_0172.json')} small="true"/>
        <Graph file={require('./json/05_0173.json')} small="true"/>
      </Multiples>
  </div>
  
);

let specifications = {
  'name': 'borrowing',
  'title': 'Borrowing',
  'content': <SinglePage content={singlepage} />
};

const Borrowing = React.createClass({
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
util.printToPage('borrowing', Borrowing);

module.exports = Borrowing;
