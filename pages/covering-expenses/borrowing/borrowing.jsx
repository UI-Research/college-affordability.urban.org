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
      <p>Many students borrow to fund a portion of their college expenses. Each year, 40 percent of all undergraduate students take federal student loans, and 70 percent of students who receive a bachelor&rsquo;s degree have education debt by the time they graduate.</p>
      <p>Borrowers face complicated choices. Most loans come directly from the federal government, but some students take private loans from banks or other lenders or borrow through state or institutional programs. Annual borrowing has risen significantly over the past decade, but it has declined each year from a peak in 2010&ndash;11.</p>
      <p>The federal government makes loans to students and families on better terms than the private market would offer to students with no credit history or collateral. There are two main types of federal loans for undergraduate students and a program for parents:</p>
      <ul>
        <li><strong>Subsidized federal loans</strong> are available to undergraduate students with documented financial need. These loans do not accrue interest while the student is in school.</li>
        <li><strong>Unsubsidized federal loans</strong> are available to all students. Interest begins to accrue as soon as the loans are disbursed. Because the federal government regulates the interest rates on these loans and offers them to all students regardless of credit ratings, they are considered part of the financial aid package.</li>
        <li><strong>Parent PLUS Loans</strong> are available to parents without adverse credit histories. Parents begin making payments, including interest, as soon as loans are disbursed.</li>
      </ul>
      <p>Congress sets the interest rates and annual borrowing limits for federal student loans. As of 2018&ndash;19, the lifetime borrowing limit for a dependent undergraduate student was $31,000, including a maximum of $23,000 of subsidized loans. Independent students have higher borrowing limits for unsubsidized loans, and Parent PLUS Loans are limited only by colleges&rsquo; estimated costs of attendance.</p>
      <p>Many students borrow from federal or other sources during some of their college years. As a result,<strong> the share of students borrowing in any year is lower than the share of students who will leave college with debt.</strong></p>
      <Graph file={require('./json/050401.json')}/>
    <h2>By Student Characteristics</h2>
      <p><strong>Larger shares of middle-income students than of low- and high-income students borrow for college, but when they borrow, high-income students borrow the largest amounts.</strong></p>
      <p>Dependent students from families in the highest income quartile were least likely to borrow in 2015&ndash;16, but when they took loans, they borrowed larger amounts, on average, than those from low- and middle-income families. This is in part because students from high-income families are more likely to enroll full time and more likely to attend high-price colleges than students from low-income families. Students from high-income families might have other options if they just need a few thousand dollars, so there are fewer borrowers in this group who take small loans.</p>
      <p>Students who attend college part time are less likely to borrow than those who attend full time, but borrowing limits are the same for full- and part-time students.</p>     
      <Multiples 
      title="Annual borrowing by student characteristics: averages per borrower and per undergraduate student (with percentage borrowing) in 2011-12" 
      source="National Postsecondary Student Aid Study 2016."
      >
        <Graph file={require('./json/050402.json')} small="true"/>
        <Graph file={require('./json/050403.json')} small="true"/>
        <Graph file={require('./json/050404.json')} small="true"/>
        <Graph file={require('./json/050405.json')} small="true"/>
      </Multiples>
      <p>The discussion below focuses on undergraduate debt. A significant portion of education borrowing is for graduate school. Graduate borrowers tend to accumulate <a href="http://www.urban.org/research/publication/student-debt-who-borrows-most-what-lies-ahead/view/full_report" target="_blank">more debt</a> than undergraduates but usually pay it off <a href="https://trends.collegeboard.org/student-aid/figures-tables/five-year-federal-student-loan-default-rates-institution-type-over-time" target="_blank">successfully</a> because of their higher earnings.</p>
      <Box>
        <h3><em>Private Student Loans</em></h3>
        <p><em>Students can borrow from commercial lenders in addition to or instead of taking federal loans. Some students seek to borrow more than the federal loan limits allow. Others may wish to avoid filling out the federal financial aid application or have other reasons for turning to the private market.</em></p>
        <p><em>Private student loans generally have higher interest rates than federal loans or interest rates that increase over time. They also do not come with the repayment protections the federal government offers. Most private student loans require creditworthy cosigners. Major private lenders include Sallie Mae and several large banks such as PNC and Wells Fargo.</em></p>
        <p><em>Almost no undergraduates borrowed private student loans in 1995&ndash;96, but, by 2007&ndash;08, 14 percent of students relied on private student loans. Total private student loan volume fell dramatically between 2007&ndash;08 and 2008&ndash;09, however, and in 2011&ndash;12 and 2015&ndash;16, only 6 percent of undergraduate students took these loans.</em></p>
        <p><em>Dependent students from families with incomes of $113,500 or higher are more likely than those from less affluent families to borrow private student loans. Private loan borrowers from the lowest-income families take the smallest loans, and those from the highest-income families borrow the largest amounts. This may be because students are using the loans to come up with the money to cover their parents&rsquo; contribution. Moreover, many high-income students may not apply for federal financial aid because they do not expect to be eligible for need-based grants.</em></p>
      </Box>
    <h2>Over Time</h2>
      <p><strong>Both the number of students borrowing and the average amount they borrow have declined significantly since 2011</strong><strong>&ndash;</strong><strong>12.</strong> The share of undergraduate students borrowing rose steadily from 2001&ndash;02 to 2011&ndash;12, but it has declined since.</p>
      <p>In 2017&ndash;18, about 30 percent of undergraduates took federal student loans. Across all undergraduate students, the average amount borrowed from the federal government peaked at $2,600 (in 2017 dollars) in 2009&ndash;10 and had fallen to $1,900 by 2017&ndash;18.</p>
      <p>The economic recovery following the Great Recession may help explain these trends. As the labor market has improved, fewer older students, who borrow more than younger students, are enrolling. Parents may also be more able to help pay for college.</p>
      <Graph file={require('./json/050406.json')}/>
    <h2>By Sector</h2>
      <p>Borrowing patterns differ significantly across sectors of postsecondary education. In 2015&ndash;16, the share of undergraduates borrowing ranged from 17 percent in public two-year colleges to 66 percent in for-profit institutions. Students enrolled in private nonprofit and for-profit institutions are more likely to borrow than students attending public colleges and universities, and, when they borrow, they borrow more.</p>
      <Graph file={require('./json/050407.json')}/>
      <Graph file={require('./json/050408.json')}/>
    <h2>Parent Borrowing</h2>
      <p>Through the federal Parent PLUS Loan program, parents without adverse credit histories can borrow an amount equal to the difference between the full student budget (the cost of attendance) and the amount of financial aid received.</p>
      <p>The interest rate on these loans is 7.6 percent for the 2018&ndash;19 academic year compared with 5.1 percent for subsidized and unsubsidized federal student loans. The parents of 9 percent of dependent students took PLUS Loans in 2015&ndash;16.</p>
      <p><strong>Parents of dependent students attending for-profit colleges are most likely to borrow Parent PLUS Loans.</strong> Although only 23 percent of full-time students in the for-profit sector are dependent students (and are potentially eligible for Parent PLUS Loans), 30 percent of these parents borrowed from the federal government in 2015&ndash;16, a higher participation rate than the 13 percent of full-time dependent undergraduates overall.</p>
      <p>Because eligibility for Parent PLUS Loans depends on cost of attendance exceeding financial aid, higher Parent PLUS borrowing in the for-profit and private nonprofit sectors is related to these institutions&rsquo; higher net prices relative to public two-year and public four-year prices.</p>
      <Graph file={require('./json/050409.json')}/>
      <p><strong>Parents in the highest income quartile who take PLUS Loans borrow more, on average, than others. </strong>Low-income students are more likely than others to enroll in community colleges and to live at home with their parents, but these parents are also most likely to be ineligible for PLUS Loans because of problems with their credit histories.</p>
      <Multiples 
        title="Average Parent PLUS Loans borrowed among full-time dependent students, 2015-16" 
        source="National Postsecondary Student Aid Study 2016."
      >
        <Graph file={require('./json/050410.json')} small="true"/>
        <Graph file={require('./json/050411.json')} small="true"/>
        <Graph file={require('./json/050412.json')} small="true"/>
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