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
    <h1>List of Charts</h1>
<h2>What Is College?</h2>
<h3><a href="../what-is-college/institutions/">Institutions</a></h3>
<p>Degree-Granting Institutions by Sector and Degree Type in Fall 2014</p>
<p>Distribution of Degree-Granting Institutions in Each Sector by Size of Undergraduate Enrollment in Fall 2014</p>
<p>Enrollment Patterns by Sector, 2015–16</p>
<p>Undergraduate Postsecondary FTE Enrollment</p>
<h3><a href="/what-is-college/students/">Students</a></h3>
<p>Distribution of Enrollment by Sector among All Undergraduates and First-Year Undergraduates, 2011–12</p>
<p>Enrollment Sector by Age and Dependency, All Undergraduates, 2011–12</p>
<p>Enrollment Sector by Age and Dependency, First-Year Undergraduates, 2011–12</p>
<p>Distribution of Dependent Undergraduate Students by Parental Income, 2011–12</p>
<p>Enrollment Sectors of All Dependent Undergraduates by Parental Income, 2011–12</p>
<p>Enrollment Sectors of Dependent First-Year Students by Parental Income, 2011–12</p>
<p>Enrollment Patterns by Race and Ethnicity, 2011–12</p>
<p>Enrollment Patterns by Race and Ethnicity, First-Year Students, 2011–12</p>
<p>Sectors of Full- and Part-Time Students, 2011–12</p>
<p>Sectors of Full- and Part-Time First Year Students, 2011–12</p>
<h2>The Cost of Educating Students</h2>
<h3><a href="../cost-of-educating/subsidies/">Institutional Subsides</a></h3>
<p>Education and Related Spending per Full-Time Equivalent Student at Public Institutions, 2005–06 to 2013–14, in 2014 Dollars</p>
<p>Education and Related Spending per Full-Time Equivalent Student at Private Nonprofit Institutions, 2005–06 to 2013–14, in 2014 Dollars</p>
<p>Average Subsidy per Full-Time Equivalent Student within Undergraduate Deciles</p>
<h3><a href="../cost-of-educating/appropriations/">Appropriations</a></h3>
<p>Change in Total Appropriations, Enrollment, and Appropriations per FTE Student Relative to 1999–00, in Inflation-Adjusted Dollars</p>
<p>Changes in State and Local Support for Higher Education Relative to 1999–00</p>
<p>State and Local Appropriations for Higher Education per Public-Sector FTE Student, 2014–15</p>
<h3><a href="../cost-of-educating/endowments/">Endowments</a></h3>
<p>Average Endowment Income per Student by Decile</p>
<p>Average Endowment Income per Student by Institution Selectivity</p>
<p><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Private nonprofit four-year institutions by share of applicants admitted</em></p>
<p><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Public four-year institutions by share of applicants admitted</em></p>
<h2>Prices and Expenses</h2>
<h3><a href="../prices-and-expenses/tuition-and-fees/">Tuition and Fees</a></h3>
<p>Average Published Tuition and Fees by Sector and Degree Type, 2016–17</p>
<p>Inflation-Adjusted Growth in Average Published Tuition and Fees from 1971–72 to 2016–17, by Sector</p>
<p>Distribution of Full-Time Undergraduates at Four-Year Institutions by Published Tuition and Fees, 2016–17</p>
<p>In-State or In-District Tuition and Fees at Public Institutions, by State, 2016–17 </p>
<p><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Public two-year institutions</em></p>
<p><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Public four- year institutions</em></p>
<h3><a href="../prices-and-expenses/room-and-board/">Room and Board</a></h3>
<p>Living Arrangements of Full-Time Undergraduates, 2011–12</p>
<p>Average Published On-Campus Room and Board Price by Type of Institution, 2016–17</p>
<p>Average Price of On-Campus Housing at Four-Year Public Institutions by State, 2013–14</p>
<p>Difference between the Average Price of On-Campus Housing over the Academic Year at Four-Year Public and Private Nonprofit</p>
<p>Average On-Campus Room and Board Charges by Sector, 2000–01 to 2016–17, in 2016 Dollars</p>
<h3><a href="../prices-and-expenses/student-budgets/">Student Budgets</a></h3>
<p>Full-Time Undergraduate Student Quintiles of Cost of Attendance by Sector, 2015–16</p>
<p>Cost of Attendance by Sector from 2001–02 to 2016–17, in 2016 Dollars</p>
<p>Average Annual Spending on Course Materials 2007–08 to 2015–16, in 2015 Dollars</p>
<p>Average Textbook Prices for the Academic Year, 2007–08 to 2015–16, in 2015 Dollars</p>
<h3><a href="../prices-and-expenses/forgone-earnings/">Forgone Earnings</a></h3>
<p>Type of Employment over the Last Year among Individuals with Only a High School Diploma or GED and Not Currently Attending School</p>
<p>Earnings by Age among Full-Time Full-Year Workers with Only a High School Diploma or GED and Not in School</p>
<p><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ages 18–34, by gender and age</em></p>
<p><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ages 18–23, by gender and race and ethnicity</em></p>
<p><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ages 24–34, by gender and race and ethnicity</em></p>
<p>Earnings of Men Ages 18–23 and 24–34 with High School Diploma or Equivalent Working Full Time Full Year</p>
<p>Earnings of Women Ages 18–23 and 24–34 with High School Diploma or Equivalent Working Full Time Full Year</p>
<h3><a href="../prices-and-expenses/net-price/">Net Price</a></h3>
<p>Average Grant Aid and Net Tuition and Fees for First-Time Full-Time Students, by Sector, 2013–14 </p>
<p><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dollars per full-time student</em></p>
<p><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Percentage of full-time students</em></p>
<p>Cost of Attendance (Total Expenses) Divided into the Portions of Tuition and Fees and Living Expenses Covered by Grant Aid, and the Tuition and Fees and Living Expenses Remaining, by Parental Income Quartile, 2011–12</p>
<p>Total Student Budget, Divided into the Portions of Tuition and Fees and Living Expenses Covered by Grant Aid, and the Tuition and Fees and Living Expenses Remaining, from 1995–96 to 2011–12, in 2011 Dollars</p>
<p><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Public four- year institutions</em></p>
<p><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Private four-year institutions</em></p>
<p><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Public two-year institutions</em></p>
<p><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For-profit institutions</em></p>
<h2>Financial Aid</h2>
<h3><a href="../financial-aid/financial-need/">Financial Need</a></h3>
<p>Median EFC by Parental Income for Dependent Students, 2011–12</p>
<p>Share of Undergraduate Students with $0 EFC by Dependency Status, 2011–12</p>
<p>Distribution of Unmet Need by Dependency Status and Sector, 2011–12</p>
<h3><a href="../financial-aid/grant-aid/">Grant Aid</a></h3>
<p>Undergraduate Grant Aid by Source, Percentage Distribution and Total Dollars, 2015–16</p>
<p>Distribution of Grant Aid per Full-Time Undergraduate by Source and Sector, 2011–12</p>
<p>Average Grant Aid by Source for Independent and Dependent Students, by Sector, 2011–12</p>
<p>Average Grant Aid per Full-Time Dependent Student by Parental Income within Sectors, 2011–12</p>
<h3><a href="../financial-aid/federal/">Federal Grant Aid</a></h3>
<p>Pell Grant by Dependency Status and Income, Full-Time Students, 2011–12 (with Percentage Receiving Pell)</p>
<p><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dollars per recipient</em></p>
<p><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dollars per full-time student</em></p>
<p>Average and Maximum Pell Grant over Time</p>
<p>Recipients of Post-9/11 GI Benefits</p>
<p>Average Pell Grant and Veteran’s and Military Benefits per FTE Undergraduate Student </p>
<h3><a href="../financial-aid/state/">State Grant Aid</a></h3>
<p>State Grant Aid per Full-time Equivalent Undergraduate, 2014–15</p>
<p>Share of State Grants Based on Financial Need, 2014–15</p>
<p>Share of Undergraduates Receiving State Grant Aid, 2011–12</p>
<p>Average State Grant Aid per Recipient, 2011–12</p>
<p>State Grant Aid per Full-Time Equivalent Undergraduate in 2014 Dollars, 1984–85 to 2014–15</p>
<h3><a href="../financial-aid/institutional/">Institutional Grant Aid</a></h3>
<p>Percentage of Full-Time First-Year Students Receiving Institutional Grant Aid, 2011–12</p>
<p>Average Institutional Grant Aid and Remaining (Net) Tuition and Fees, 2011–12</p>
<p>Average Need-Based and Non-need–Based Institutional Grant Aid per Full-Time Dependent Student, Private Nonprofit Four-Year Institutions, 2011–12</p>
<p>Average Need-Based and Non-need–Based Grant Aid per Full-Time Student (and Percentage Receiving Institutional Aid), Public Four-Year Institutions, 2011–12</p>
<h3><a href="../financial-aid/other/">Other Grant Aid</a></h3>
<p>Percentage of Undergraduates Receiving Employer Assistance, 2011–12</p>
<p>Percentage of Undergraduates Receiving Private Scholarships, 2011–12</p>
<p>Average Employer Assistance per Recipient, 2011–12</p>
<p>Private Scholarships per Recipient, 2011–12</p>
<h3><a href="../financial-aid/tax-benefits/">Tax Benefits</a></h3>
<p>Federal Education Tax Credits and Deductions, 1998–2014</p>
<p>Distribution of Tax Credits and Deductions by Adjusted Gross Income, 2014</p>
<p>Share of Full-Time Undergraduates Eligible for Federal Education Tax Credits and Deductions, 2011–12</p>
<p>Average Federal Education Tax Benefit per Full-Time Recipient, by Income within Sectors, 2011–12</p>
<h2>Covering Expenses</h2>
<h3><a href="../covering-expenses/pre-college-income/">Pre-college Income</a></h3>
<p>Median Total Income of Families by Race and Ethnicity, Geographical Region, and Age, 2015</p>
<p>Median Total Income of Families by Education Level, 2015</p>
<p>Median Family Income by State, Families with Children Ages 15–17, 2010–14</p>
<p>Median Income of Families by Age Group, 1985–2015, in 2015 Dollars</p>
<p>Median Incomes over Time of Families Ages 45–54, in 2015 Dollars</p>
<h3><a href="../covering-expenses/savings/">Savings</a></h3>
<p>Personal Savings Rate, 1959–2015 </p>
<p>Effect of Savings on Expected Family Contribution</p>
<p>Median Net Worth of Families by Family Type, 1989–2013</p>
<p>Distribution of Net Worth of Family Income Groups, 2011</p>
<p>Median Net Worth of Families by Race and Ethnicity, 1989–2013</p>
<p>Median Net Worth of Families by Parents’ Highest Educational Attainment, 1989–2013</p>
<p>Number of 529 Savings Accounts, 2002–15</p>
<p>Average Account Size, 2002–15</p>
<p>Number of College Savings Plans Withdrawals as a Percentage of All Postsecondary Students, 2002–15</p>
<h3><a href="../covering-expenses/working-during-college/">Working during College</a></h3>
<p>Earnings from 800 Hours of Work at the Minimum Wage Compared with Average Published Tuition and Fees and Total Charges at</p>
<p>Public Four-Year Institutions over Time</p>
<p>Federal Minimum Wage, 1946–2016</p>
<p>State Minimum Wages Higher than the Federal Minimum Wage, January 1, 2016</p>
<p>Distribution of Hours Worked, Full-Time Full-Year Undergraduates, 2011–12</p>
<p>Distribution of Earnings, Full-Time Full-Year Undergraduates, 2011–12</p>
<p>Percentage of Undergraduate Students Participating in Federal Work-Study, 2011–12</p>
<h3><a href="../covering-expenses/borrowing/">Borrowing</a></h3>
<p>Percentage of Undergraduates with Debt and Percentage Borrowing for the Current Year, 2011–12</p>
<p>Annual Undergraduate Borrowing by Student Characteristics: Averages per Borrower and per Undergraduate Student (with Percentage Borrowing), 2011–12</p>
<p>Average Federal Loans per Undergraduate Student and per Undergraduate Borrower, 2001–02 to 2015–16</p>
<p>Share of All Undergraduates Borrowing Federal Loans, 2013–14</p>
<p>Average Amount Borrowed by All Undergraduates, 2013–14</p>
<p>Average Annual Parent PLUS Loan per Borrower (with Percentage of Dependent Students’ Parents Borrowing), 2000–01 through 2015–16</p>
<p>Average Amount Borrowed (with Percentage Receiving Parents PLUS Loans) among Full-Time Dependent Students</p>
<h3><a href="../covering-expenses/time-to-degree/">Time to Degree</a></h3>
<p>Average Number of Years Enrolled and Average Number of Years Elapsed between First Enrollment and Degree Completion, 2014–15 College Graduates</p>
<p>Time between First Postsecondary Enrollment and Degree Completion, Among 2011–12 Bachelor’s Degree Recipients, by Sector </p>
<p>Time between First Postsecondary Enrollment and Degree Completion, Among 2011–12 Associate Degree Recipients, by Sector </p>
<p>Tuition and Fees and Room and Board over Four, Five, and Six Years, 2016–17 Prices</p>
<p>Distribution of Cumulative Debt Among 2011–12 Bachelor’s Degree Recipients, by Time between First Postsecondary Enrollment and Degree Completion</p>
<p>Forgone Earnings for Taking Four, Five, and Six Years to Earn a Bachelor's Degree</p>
<h2><a href="../after-college/">After College</a></h2>
<p>Percentage of First-Time Full-Time Students Enrolling in 2008 Who Earned Bachelor’s Degrees at Their First Institution within Four, Five, and Six Years</p>
<p>Outcomes Six Years Later for Students Enrolling for the First Time in 2008</p>
<h3><a href="../after-college/employment-after-college/">Employment after College</a></h3>
<p>Labor Force Participation Rates among Individuals Ages 25–34 by Educational Attainment, 1993–2015</p>
<p>Unemployment Rates among Individuals in the Labor Force Ages 25–34 by Educational Attainment, 1993–2015</p>
<p>Type of Employment over the Past Year, among Individuals Ages 25–34 in the Labor Force</p>
<h3><a href="../after-college/variation-in-earnings/">Variation in Earnings</a></h3>
<p>Median Earnings among Individuals Ages 25–34 by Educational Attainment, 1995–2015, in 2015 Dollars</p>
<p>Median Earnings among Employed Workers, by Age and Educational Attainment</p>
<p>Earnings Distribution of Employed Workers Ages 34–44, by Educational Attainment</p>
<p>Earnings by Field of Bachelor’s Degree at the 25th Percentile, Median, and 75th Percentile, Employed Workers with Bachelor’s Degree Ages 35–44, 2014</p>
<h3><a href="../after-college/student-debt/">Student Debt</a></h3>
<p>Distribution of Outstanding Education Debt by Income Quartile, 2013</p>
<p>Distribution of Cumulative Debt among Bachelor’s Degree Recipients over Time, in 2012 Dollars</p>
<p>Distribution of Cumulative Debt of Bachelor’s Degree Recipients by Sector, 2011–12</p>
<p>Distribution of Cumulative Debt of Associate Degree Recipients by Sector, 2011–12</p>
<p>Distribution of Cumulative Debt of Certificate Recipients by Sector, 2011–12</p>
<p>Debt Levels of Bachelor’s Degree Recipients by Dependency Status, 2011–12</p>
<p>Debt Levels of Dependent Bachelor’s Degree Recipients by Parental Income, 2011–12.</p>
<p>Debt Levels of  Bachelor’s Degree Recipients by Race and Ethnicity, 2011–12</p>
<h3><a href="../after-college/loan-repayment-and-default/">Loan Repayment and Default</a></h3>
<p>Distribution of Borrowers by Federal Student Loan Repayment Plan, as of June 30, 2016</p>
<p>Average Debt Levels by Federal Student Loan Repayment Plan, as of June 30, 2016</p>
<p>Median Debt-Service to Earnings Based on a Standard 10-Year Repayment Plan, Undergraduate Federal Student Loan Borrowers in the Third Year of Repayment</p>
<p>Official Three-Year Cohort Default Rates by Year Entering Repayment and Sector</p>
<p>Two-Year Student Loan Default Rates by Year Entering Repayment and Completion Status, 1995–96 to 2011–12</p>
<p>Rates of Default by the End of 2014 among Borrowers Entering Repayment in 2009, by School-Leaving Balance (with Percentage of Borrowers in Each Balance Category)</p>
<h2><a href="../breaking-even/">Breaking Even</a></h2>
<p>Cumulative Earnings of College Graduates Net of Tuition Payments and Forgone Earnings in 2015 Dollars</p>
<h2><a href="../student-profiles/">Student Profiles</a></h2>
<p>Independent Students: Enrollment by Sector, 2011–12</p>
<p>Average Published Prices, Budgets, and Resources Used to Pay for College for Independent Students, 2011–12</p>
<p>Average Expected Family Contribution, Total Grants, Total Loan, and Earnings and Other Resources Equal Tuition and Fees and Other Expenses</p>
<p>Total Published Tuition and Fee Price and Total Debt Based on Time to Degree</p>
<p>Low-Income Dependent Students: Enrollment by Sector, 2011–12 </p>
<p>Average Publishd Prices, Budgets, and Resources Used to Pay for College for Low-Income Dependent Students, 2011–12 </p>
<p>Average Expected Family Contribution, Total Grants, Total Loan, and Earnings and Other Resources Equal Tuition and Fees and Other Expenses</p>
<p>Total Published Tuition and Fee Price and Total Debt Based on Time to Degree</p>
<p>Lower-Middle Income Students: Enrollment by Sector, 2011–12</p>
<p>Average Published Prices, Budgets, and Resources Used to Pay for College for Lower-Middle-Income Dependent Students, 2011–12</p>
<p>Average Expected Family Contribution, Total Grants, Total Loan, and Earnings and Other Resources Equal Tuition and Fees and Other Expenses</p>
<p>Total Published Tuition and Fee Price and Total Debt Based on Time to Degree</p>
<p>Upper-Middle Income Students: Enrollment by Sector, 2011–12 </p>
<p>Average Published Prices, Budgets, and Resources Used to Pay for College for Upper-Middle-Income Dependent Students, 2011–12 </p>
<p>Average Expected Family Contribution, Total Grants, Total Loan, and Earnings and Other Resources Equal Tuition and Fees and Other Expenses</p>
<p>Total Published Tuition and Fee Price and Total Debt Based on Time to Degree</p>
<p>Upper Income Dependent Students: Enrollment by Sector, 2011–12</p>
<p>Average Published Prices, Budgets, and Resources Used to Pay for College for Upper-Income Dependent Students, 2011–12 </p>
<p>Average Expected Family Contribution, Total Grants, Total Loan, and Earnings and Other Resources Equal Tuition and Fees and Other Expenses</p>
<p>Total Published Tuition and Fee Price and Total Debt Based on Time to Degree</p>
  </div>
);

let specifications = {
  'name': 'chart-index',
  'title': 'Chart Index',
  'content': <SinglePage content={singlepage} />
};

const ChartIndex = React.createClass({
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
util.printToPage('chart-index', ChartIndex);

module.exports = ChartIndex;
