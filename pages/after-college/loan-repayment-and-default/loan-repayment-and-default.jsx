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
      <p><strong>About 40 percent of undergraduate students take out </strong><a href="http://collegeaffordability.urban.org/covering-expenses/borrowing/"><strong>federal student loans</strong></a><strong> each year, and about 70 percent of four-year college graduates leave college with debt. Borrowing reasonable amounts to spread out the payment for this investment over several years is a valuable strategy for making college affordable. But many borrowers do not repay their debts, either because their </strong><a href="http://collegeaffordability.urban.org/after-college/variation-in-earnings/"><strong>incomes</strong></a><strong> are inadequate to cover the required payments or because of other obligations and priorities.</strong></p>
      <p>Student loans, like all loans, accrue interest, so although they decrease the amount of money a student has to pay at the time of enrollment, they increase the money the student will pay for college overall. By delaying those payments, however, loans allow students to pay for college when they are likely earning more money. In this way, loans can make college affordable.</p>
      <Box>
        <h3><em>Interest Rates</em></h3>
        <p><em>The interest rates on federal student loans are legislated by Congress. The rate for undergraduates in 2018&ndash;19 is 5.05 percent and is fixed for the life of the loan. Students who borrow $5,500 for the first year of college through direct unsubsidized loans, with interest accruing from the time the loans are made, will owe about $6,700 after four years if they don&rsquo;t make any payments while they are in school.</em></p>
        <p><em>Some students qualify for up to $3,500 in subsidized loans for the first year of college. The government pays the interest on these loans while students are enrolled, so the amount they owe does not increase while they are in school.</em></p>
        <p><em>Stretching loan payments out over a longer period by, for example, opting out of the standard 10-year repayment plan and paying over 20 years instead means paying more interest. But the benefits of repaying sooner or repaying later depend on how student loan interest rates compare with rates of return on savings and investments as well as how eager borrowers are to be able to spend more on other things in the years immediately after college.</em></p>
      </Box>
      <p>The financial payoff to college, however, depends on whether students graduate. Those who never complete college don&rsquo;t reap significant benefits in higher earnings, and so they can face real trouble paying off student debt.</p>
      <p>The federal government offers several payment plans to help make sure monthly student loan payments are manageable. Enrollment in those plans is not automatic, however. Rather, students must select and apply for a plan. Some borrowers end up paying more per month than they can afford because they are unaware of these alternative payment options. These options also don&rsquo;t apply to private (nonfederal) loans, which can have high interest rates and harsh terms.</p>
      <Box>
        <h3><em>Private Loans</em></h3>
        <p><em>Some students borrow from nonfederal sources, usually because their needs exceed the federal loan limits or because they do not complete the application process for federal student aid. Private student loans from banks, Sallie Mae, or other lenders carry various interest rates. They may be either fixed for the life of the loan or variable, resetting over time. Borrowers with low credit ratings or other factors indicating risk generally face higher interest rates.</em></p>
      </Box>
    <h2>Repayment Plans</h2>
      <p>Historically, most federal student loan borrowers have repaid through a standard 10-year plan. Through these plans, borrowers make fixed payments of the same size every month, retiring their debt after 10 years. <strong>More than half of all federal student loan borrowers still enroll in fixed payment plans.</strong></p>
      <p>Other <a href="https://studentaid.ed.gov/sa/repay-loans/understand/plans" target="_blank"><strong>options</strong></a> are available, however, including plans that base payments on borrowers&rsquo; current income:</p>
      <ul>
        <li>Standard repayment plan. Payments are the same each month for 10 years or until the loan is paid off, whichever comes first. The minimum monthly payment is $50.</li>
        <li>Graduated repayment plan. Monthly payments start out low and increase every two years. Loans are paid off within 10 years.</li>
        <li>Extended repayment plan. Borrowers with high balances can extend their repayment time up to 25 years to allow for lower monthly payments.</li>
        <li>Income-driven plans. Four different plans, each with somewhat different provisions, base payments on current income and forgive unpaid balances after 20 or 25 years.
          <ul>
            <li>Pay As You Earn, or PAYE. Borrowers pay 10 percent of their discretionary income but never more than they would pay under the standard repayment plan. Loan balances are forgiven after 20 years.</li>
            <li>Revised Pay As You Earn, or REPAYE. Borrowers pay 10 percent of their discretionary income. Loan balances are forgiven after 20 years for those with only undergraduate loans and 25 years for those with graduate school loans.</li>
            <li>Income-based repayment. Borrowers pay 10 or 15 percent of their discretionary income but never more than they would pay under the standard repayment plan. Loans are forgiven after 20 years.</li>
            <li>Income-contingent repayment. Borrowers pay the lesser of 20 percent of their discretionary income or what they would pay under a 12-year repayment plan with fixed monthly payments. Loans are forgiven after 25 years.</li>
          </ul>
        </li>
      </ul>
      <p>Students are enrolled in the standard repayment plan unless they choose a different plan. Income-driven repayment plans can decrease the amount students pay each month. But students may pay more over time, unless they have unpaid balances that are forgiven, because the life of the loan is longer.</p>
      <p><strong>In recent years, the options for repaying based on income have expanded, and more borrowers are enrolling in these plans. As of December 2018, 31 percent of borrowers were enrolled in income-driven plans. Because people with larger debts are most likely to participate in these plans, 48 percent of the outstanding federal student loan debt now in repayment is in a plan that limits monthly payments to a specified affordable share of borrowers&rsquo; incomes.</strong></p>
      <p>Even borrowers who are not in income-driven repayment plans can postpone their payments when their incomes are not adequate to support their obligations by putting their loans into <a href="https://studentaid.ed.gov/sa/repay-loans/deferment-forbearance" target="_blank"><strong>deferment or forbearance.</strong></a> Deferring loans can mean paying more later, however, as interest continues to accrue.</p>
      <Graph file={require('./json/060401.json')}/>
      <Graph file={require('./json/060402.json')}/>
    <h2>Monthly Payments</h2>
      <p>Stretching out the repayment leads to lower monthly payments, but the total amount paid over the life of the loan increases because of interest paid. The best choice depends on personal circumstances and preferences. Postponing payments can reduce hardship if a borrower&rsquo;s income will increase over time. Some borrowers will be willing to make higher loan payments in the future in exchange for a higher standard of living when they are beginning their careers. Others will want to retire their debts as quickly as possible.</p>
      <p>Monthly payments depend on the repayment plan. Under income-based repayment, the most common income-driven plan for borrowers currently in repayment, the monthly payment is 10 or 15 percent of the amount by which the borrower&rsquo;s income exceeds 150 percent of the federal poverty level&mdash;but not higher than what it would be under the standard 10-year plan. In 2018, single borrowers with incomes below $18,210 did not have to make payments, no matter how much they owed. A single borrower earning $25,000 a year would have a payment of up to $85 a month.</p>
      <p>Newer income-driven plans have lower required payments, but the newest plan, REPAYE, does not cap payments at the standard 10-year payment.</p>
      <Box>
        <h3><em>Loan Forgiveness</em></h3>
        <p><em>Under existing federal income-driven student loan repayment plans, borrowers whose incomes do not support repayment of their entire debts will have their unpaid balances forgiven. This occurs after 25 years in income-based repayment and after 20 years in Pay As You Earn. Under Revised Pay as You Earn, the newest plan, borrowers with only undergraduate debt will have balances forgiven after 20 years, but those who have any graduate debt will have to repay for 25 years.</em></p>
        <p><em>Borrowers who work for 10 years for government organizations at any level, tax-exempt nonprofit organizations, or other nonprofits that provide certain public services can participate in the Public Service Loan Forgiveness (PSLF) program. If they make regular payments under an income-driven plan for 10 years, their unpaid balances will be forgiven after this shorter period.</em></p>
        <p><em>The federal Direct Unsubsidized Loan program lends to graduate students, not just undergraduates. The Grad PLUS program is just for graduate students. Graduate students can borrow up to $20,500 a year in direct loans and up to the full cost of attendance less financial aid under Grad PLUS. Because they can borrow so much from the federal government and their loans are eligible for income-driven repayment, these borrowers are likely to have the most dollars of debt forgiven. For example, a borrower with $100,000 in debt&mdash;more than anyone can borrow from the federal government for undergraduate study&mdash;would have remaining balances after 10 years in the REPAYE plan despite a starting income of up to $125,000.</em></p>
        <p><em>Under current law, forgiven student loan balances outside the PSLF program are considered income and are taxable.</em></p>
      </Box>
      <p><strong>In some repayment plans, borrowers&rsquo; monthly payments depend on the amount they borrowed. In other plans, required payments depend on the borrower&rsquo;s income and family size.</strong></p>
      <p>Borrowers who do not make a different choice are placed in a plan that requires equal payments each month for 10 years until the loan is paid off. At an interest rate of 5.05 percent, a $10,000 debt generates payments of $266 a month, a $30,000 debt generates payments of $319 a month, and a $50,000 debt generates payments of $532 a month. About half of all borrowers are in this plan.</p>
      <p>About 30 percent of borrowers are enrolled in income-driven plans that require monthly payments that depend on income and family size. Under the newest of these plans, REPAYE, single borrowers with annual incomes of $25,000 have payments of $57 a month, regardless of the size of their debt. Borrowers earning $50,000 owe $265 a month, and those earning $75,000 owe $473. Required payments are lower for borrowers with larger families.</p>
      <Graph file={require('./json/060403.json')}/>
      <p>The interest rates available in the economy can also help borrowers decide on a payment plan. If a loan carries a 4 percent interest rate but borrowers can find a way to earn a 5 percent return on savings, they will be better off postponing the payments and paying more interest over time.</p>
    <h2>Delinquency, Default, and Repayment</h2>
      <p><strong>Official three-year default rates for borrowers entering repayment in 2013&ndash;14 ranged from 7.0 percent among those who attended private nonprofit four-year institutions and 7.5 percent for public four-year colleges and universities to 17.5 percent among those who attended two-year for-profit institutions and 18.3 percent for public two-year colleges.</strong></p>
      <Box>
        <h3><em>Alternative Measures of Default.</em></h3>
        <p><em>The official federal student loan default rate&mdash;the three-year cohort default rate&mdash;measures the share of borrowers going into repayment in one fiscal year who default by the end of two more fiscal years. Until 2012, the official rate was a two-year cohort default rate, measured at the end of the fiscal year following the year in which the loan went into repayment.</em></p>
        <p><em>The government also projects the share of dollars loaned each year that are likely to go into default over 20 years (president&rsquo;s budget lifetime default rate). The </em><a href="https://studentaid.ed.gov/sa/about/data-center/student/default" target="_blank"><strong><em>cumulative lifetime default rate</em></strong></a><em> is based on the share of loans (not dollars) that have defaulted from the year they went into repayment to the present.</em></p>
        <p><em>The 3-year default rate for borrowers entering repayment in 2013&ndash;14 was 11.5 percent, and the projected 20-year default rate for 2016&ndash;17 unsubsidized loans was 16.7 percent.</em></p>
      </Box>
      <Graph file={require('./json/060404.json')}/>
      <p>Borrowers with high balances are least likely to default. High balances are associated with more years of education and higher postcollege earnings. Most borrowers with high debt levels went to graduate school. In contrast, many of those with very low debt levels were not in college long enough to earn a degree.</p>
      <p>Among borrowers entering repayment during the economic downturn in 2009, default rates within the next five years ranged from about 20 percent among those leaving school with $25,000 or more in student loans, to 34 percent among those with smaller balances of $1,000 to $5,000.</p>
      <Graph file={require('./json/060406.json')}/>
      <p><strong>Some borrowers may be in good standing without making any progress lowering the amount they owe.</strong></p>
<p>Sixty percent of federal student loan borrowers who entered repayment in 2010&ndash;11 and 2011&ndash;12 after earning a degree or certificate had paid down at least one dollar of their loan principal after three years. This repayment rate was 34 percent for borrowers who did not complete a degree or certificate program.</p>
<p>Borrowers who graduated from public and private nonprofit four-year colleges are most likely to be paying down their debts. Those who attended for-profit institutions have the lowest repayment rates.</p> 
      <Graph file={require('./json/060407.json')}/> 
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
