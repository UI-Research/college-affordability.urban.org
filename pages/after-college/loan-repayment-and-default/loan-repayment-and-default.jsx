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
    <h1>Loan Repayment and Default</h1>
      <p><strong>About 40 percent of undergraduate students take out <a href="../../covering-expenses/borrowing/">federal student loans</a> each year and about 70 percent of four-year college graduates leave college with debt. Borrowing reasonable amounts to spread the payment for this investment out over an extended number of years is a valuable strategy for making college affordable. However, too many borrowers do not successfully repay their debts, either because their <a href="../../prices-and-expenses/forgone-earnings/">incomes</a> are inadequate to cover the required payments or because of other obligations and priorities.</strong></p>
      <p>Student loans, like all loans, accrue interest, so although they can decrease the amount of money a student has to pay at the time of enrollment, they increase the money the student will pay for college overall. By delaying those payments, however, loans allow students to pay for college when they are likely earning more money. In this way, loans can make college affordable. </p>
      <Box>
        <h3><em>Interest Rates</em></h3>
        <p><em>The interest rates on federal student loans are legislated by Congress. The rate for undergraduates in 2016</em><em>–17 is 3.76 percent and is fixed for the life of the loan. Students who borrow $5,500 for the first year of college through direct unsubsidized loans, with interest accruing from the time the loans are made, will owe about $6,400 after four years if they don&rsquo;t make any payments while they are in school. </em></p>
        <p><em>Some students qualify for up to $3,500 in subsidized loans for the first year of college. The government pays the interest on these loans while students are enrolled, so the amount they owe does not increase while they are in school.</em></p>
        <p><em>Stretching loan payments out over a longer period of time by, for example, opting out of the standard 10-year repayment plan and paying over 20 years instead, means paying more interest. But the benefits of repaying sooner or later depend on how student loan interest rates compare with rates of return on savings and investments as well as how eager borrowers are to be able to spend more on other things in the years immediately after college.</em></p>
      </Box>
      <p>The financial payoff to college, however, depends on students graduating. Those who never complete college don&rsquo;t reap significant benefits in higher earnings, and so they can face real trouble paying off student debt. </p>
       <p>The federal government offers a variety of payment plans to help make sure monthly student loan payments are manageable. Enrollment in those plans is not automatic, however. Rather, students must select and apply for a plan. Some borrowers end up paying more per month than they can afford because they are unaware of these alternative payment options. These options also don&rsquo;t apply to private (nonfederal) loans, which can have high interest rates and harsh terms.  </p>
      <Box>
        <h3><em>Private loans</em></h3>
        <p><em>Some students borrow from nonfederal sources, usually either because their needs exceed the federal loan limits or because they do not complete the application process for federal student aid. Private student loans from banks, Sallie Mae, or other lenders carry a range of interest rates. They may be either fixed for the life of the loan or variable, resetting over time. Borrowers with low credit ratings or other factors indicating risk generally face higher interest rates.</em></p>
      </Box>
    <h2>Repayment Plans</h2>
      <p>Historically, the vast majority of federal student loan borrowers have repaid through a standard 10-year plan. Through these plans, borrowers make fixed payments of the same size every month, retiring their debt after 10 years. <strong>More than half of all federal student loan borrowers still enroll in these fixed payment plans.</strong></p>
<p>A variety of other <a href="https://studentaid.ed.gov/sa/repay-loans/understand/plans" target="_blank">options</a> are available, however, including several plans that base payments on borrowers&rsquo; current income levels:</p>
      <ul>
        <li>Standard repayment plan: Payments are the same each month for 10 years or until the loan is paid off, whichever comes first. The minimum monthly payment is $50.</li>
        <li>Graduated repayment plan: Monthly payments start out low and increase every two years. Loans are paid off within 10 years.</li>
        <li>Extended repayment plan: Borrowers with high balances can extend their repayment time up to 25 years to allow for lower monthly payments.</li>
        <li>Income-driven plans: Four different plans, each with somewhat different provisions, base payments on current income and forgive unpaid balances after 20 or 25 years. 
          <ul>
            <li>Pay As You Earn: Borrowers pay 10 percent of their discretionary income, but never more than they would pay under the standard repayment plan. Loan balances are forgiven after 20 years.</li>
            <li>Revised Pay As You Earn: Borrowers pay 10 percent of their discretionary income. Loan balances are forgiven after 20 years for those with only undergraduate loans and 25 years for those with graduate school loans.</li>
            <li>Income-Based Repayment: Borrowers pay 10 or 15 percent of their discretionary income, but never more than they would pay under the standard repayment plan. Loans are forgiven after 20 years.</li>
            <li>Income-Contingent Repayment: Borrowers pay the lesser of 20 percent of their discretionary income or what they would pay under a 12-year repayment plan with fixed monthly payments. Loans are forgiven after 25 years.</li>
          </ul>
        </li>
      </ul>
      <p>Students are enrolled in the standard repayment plan unless they choose a different plan. Income-driven repayment plans can decrease the amount students pay each month.  However, students may pay more over time, unless they have unpaid balances that are forgiven, because the life of the loan is longer. </p>
      <p><strong>In recent years, the options for repaying based on income have expanded and more and more borrowers are enrolling in these plans. As of June 2016, 25 percent of borrowers were enrolled in income-driven plans. Because individuals with larger debts are most likely to participate in these plans, 43 percent of the outstanding federal student loan debt now in repayment is in a plan that limits monthly payments to a specified affordable share of borrowers&rsquo; incomes. </strong></p>
      <p>Even borrowers who are not in income-driven repayment plans can postpone their payments when their incomes are not adequate to support their obligations by putting their loans into <a href="https://studentaid.ed.gov/sa/repay-loans/deferment-forbearance" target="_blank">deferment or forbearance.</a> Deferring loans can mean paying more later, however, as interest continues to accrue. </p>
      <Graph file={require('./json/06_1610.json')}/>
      <Graph file={require('./json/06_1620.json')}/>
    <h2>Monthly Payments</h2>
      <p>Stretching out the repayment time for a debt leads to lower monthly payments, but the total amount paid over the life of the loan increases because of interest paid. The best choice depends on personal circumstances and preferences. Postponing payments can reduce hardship if a borrower&rsquo;s income will grow over time. Some borrowers will be willing to make higher loan payments in the future in exchange for a higher standard of living when they are beginning their careers. Others will want to retire their debts as quickly as possible. </p>
      <p>Monthly payments depend on the repayment plan. Under income-based repayment, the most common income-driven plan for borrowers currently in repayment, the monthly payment is 10 or 15 percent of the amount by which the borrower&rsquo;s income exceeds 150 percent of the poverty level—but not higher than what it would be under the standard 10-year plan. In 2016, single borrowers with incomes below $17,820 did not have to make payments, no matter how much they owed. A single borrower earning $25,000 a year would have a payment of up to $90 per month.</p>
      <p>Newer income-driven plans have lower required payments, but the newest plan (REPAYE) does not cap payments at the standard 10-year payment.</p>
      <Box>
        <h3><em>Loan Forgiveness</em></h3>
        <p><em>Under existing federal income-driven student loan repayment plans, borrowers whose incomes do not support repayment of their entire debts will have their unpaid balances forgiven. This occurs after 25 years in Income-Based Repayment and after 20 years in Pay As You Earn. Under Revised Pay as You Earn, the newest plan, borrowers with only undergraduate debt will have balances forgiven after 20 years, but those who have any graduate debt will have to repay for 25 years. </em></p>
        <p><em>Borrowers who work for 10 years for government organizations at any level, tax-exempt nonprofit organizations, and other nonprofits that provide certain public services, can participate in the Public Service Loan Forgiveness program. If they make regular payments under an income-driven plan for 10 years, their unpaid balances will be forgiven after this shorter time period.</em></p>
        <p><em>The federal Direct Unsubsidized Loan program lends to graduate students, not just undergraduates. The Grad PLUS program is just for graduate students. Graduate students can borrow up to $20,500 a year in direct loans and up to the full cost of attendance less financial aid under Grad PLUS. Because they can borrow so much from the federal government and their loans are eligible for income-driven repayment, this group is likely to have the most dollars of debt forgiven. For example, a borrower with $100,000 in debt—more than anyone can borrow from the federal government for undergraduate study—would have remaining balances after 10 years in the REPAYE plan despite a starting income of up to $125,000.</em></p>
        <p><em>Under current law, forgiven student loan balances are considered income and are taxable.</em></p>
      </Box>
      <p><strong>Borrowers&rsquo; estimated monthly payments under a 10-year plan have grown as a percentage of their monthly incomes—especially for those who borrowed to attend for-profit colleges.</strong></p>
      <p>For those who entered repayment in 2011, the payment under the 10-year plan ranged from 8 percent of total income for the average borrower from a public two-year college to an average of 11 percent for borrowers from the for-profit sector. In most cases, these average payments are higher than the 10 percent of discretionary income required under the PAYE and REPAYE programs. </p>
      <Graph file={require('./json/06_0170.json')}/>
      <p>The interest rates available in the economy can also help borrowers decide on a payment plan. If a loan carries a 4 percent interest rate but borrowers can find a way to earn a 5 percent return on savings, they will be better off postponing the payments and paying more interest over time.</p>
    <h2>Delinquency and Default</h2>
      <p><strong>Official three-year default rates for borrowers entering repayment in 2011–12 ranged from 6 percent among those who attended private nonprofit four-year institutions and 8 percent for public four-year colleges and universities to 16 percent among those who attended for-profit institutions and 19 percent for public two-year colleges.</strong></p>
      <Box>
        <h3><em>Alternative Measures of Default.</em></h3>
        <p><em>The official federal student loan default rate—the three-year cohort default rate—measures the percentage of borrowers going into repayment in one fiscal year who default by the end of two more fiscal years. Until 2012, the official rate was a two-year cohort default rate, measured at the end of the fiscal year following the year in which the loan went into repayment. </em></p>
        <p><em>The government also projects the percentage of dollars loaned each year that are likely to go into default over 20 years (president&rsquo;s budget lifetime default rate). The cumulative lifetime default rate is based on the percentage of loans (not dollars) that have defaulted from the year they went into repayment to the present.</em></p>
        <p><em>The three-year default rate for borrowers entering repayment in 2011–12 was 12 percent, but the two-year default rate was 10 percent. The projected 20-year default rate was 18 percent.</em></p>
      </Box>
      <Graph file={require('./json/06_0180.json')}/>
      <p><strong>Students who leave school without a degree or certificate are much more likely than those who graduate to default on their student loans.</strong></p>
      <p>Among borrowers entering repayment in 2011–12, 9 percent of those who graduated had defaulted on their loans within two years of entering repayment compared with 24 percent of those who left school without a credential.</p>
      <Graph file={require('./json/06_0190.json')}/>
      <p>Borrowers with high balances are least likely to default. High balances are associated with more years of education and higher post-college earnings. Most borrowers with very high debt levels went to graduate school. In contrast, many of those with very low debt levels were not in college long enough to earn a degree.</p>
      <p>Among borrowers entering repayment during the economic downturn in 2009, rates of default within the next five years ranged from about 20 percent among those leaving school with $25,000 or more in student loans, to 34 percent among those with smaller balances of $1,000 to $5,000.</p>
      <Graph file={require('./json/06_0200.json')}/>   
  </div>
);

let specifications = {
  'name': 'loan-repayment-and-default',
  'title': 'Loan Repayment and Default',
  'content': <SinglePage content={singlepage} />
};

const LoanRepaymentAndDefault = React.createClass({
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
util.printToPage('loan-repayment-and-default', LoanRepaymentAndDefault);

module.exports = LoanRepaymentAndDefault;
