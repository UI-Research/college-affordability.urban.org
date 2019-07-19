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
		<p>Degree-Granting Institutions by Sector and Degree Type in Fall 2017</p>
		<p>Distribution of Degree-Granting Institutions in Each Sector by Size of Undergraduate Enrollment in Fall 2017</p>
		<p>Fall Enrollment Patterns by Sector, 2017–18</p>
		<p>Undergraduate Postsecondary Fall Enrollment</p>
	<h3><a href="../what-is-college/students/">Students</a></h3>	
		<p>Distribution of Enrollment by Sector among All Undergraduates versus First-Year Undergraduates Only, 2015–16</p>
		<p>Enrollment Sector by Age and Dependency: All Undergraduates, 2015–16</p>
		<p>Enrollment Sector by Age and Dependency, First-Year Undergraduates, 2015–16</p>
		<p>Distribution of Family Income among All Dependent Undergraduates versus First-Year Undergraduates Only, 2015–16</p>
		<p>Enrollment Sectors of All Dependent Undergraduates by Parent Income, 2015–16</p>
		<p>Enrollment Sectors of Dependent First-Year Students by Parent Income, 2015–16</p>
		<p>Enrollment Patterns by Race or Ethnicity, 2015–16</p>
		<p>Enrollment Patterns by Race or Ethnicity, First-Year Students, 2015-16</p>
		<p>Sectors of Full-Time and Part-Time Students, 2015–16</p>
		<p>Sectors of Full-Time and Part-Time First-Year Students, 2015–16</p>
<h2>The Cost of Educating Students</h2>
	<h3><a href="../cost-of-educating/subsidies/">Institutional Subsides</a></h3>	
		<p>Education and Related Spending per Full-Time Equivalent Student at Public Institutions, 2005–06 to 2015–16</p>
		<p>Education and Related Spending per Full-Time Equivalent Student at Private Nonprofit Institutions, 2005–06 to 2015–16</p>
		<p>Average Subsidy per Full-Time Equivalent Student within Undergraduate Deciles</p>
	<h3><a href="../cost-of-educating/appropriations/">Appropriations</a></h3>	
		<p>Total Appropriations, Enrollment, and Appropriations per Full-Time Equivalent Student Relative to 2000–01</p>
		<p>State and Local Support for Higher Education Relative to 2000–01</p>
		<p>State and Local Appropriations for Public Higher Education per Public Full-Time Equivalent Student, 2016–17</p>
	<h3><a href="../cost-of-educating/endowments/">Endowments</a></h3>	
		<p>Average Endowment Income per Student by Decile</p>
		<p>Average Endowment Income per Student by Institution Selectivity</p>
		<p>Average Endowment Income per Student by Institution Selectivity</p>
<h2>Prices and Expenses</h2>
	<h3><a href="../prices-and-expenses/tuition-and-fees/">Tuition and Fees</a></h3>	
		<p>Average Published Tuition and Fees by Sector and Degree Type, 2018–19</p>
		<p>Inflation-Adjusted Growth in Average Published Tuition and Fees from 1971–72 to 2018–19, by Sector</p>
		<p>Distribution of Full-Time Students by Published Tuition and Fees within Sectors, 2018–19</p>
		<p>Tuition and Fees at Public Institutions, by State, 2018–19</p>
		<p>Tuition and Fees at Public Institutions, by State, 2018–19</p>
	<h3><a href="../prices-and-expenses/room-and-board/">Room and Board</a></h3>	
		<p>Living Arrangements of Full-Time Undergraduates, 2015–16</p>
		<p>Average Published On-Campus Room and Board Price by Type of Institution, 2018–19</p>
		<p>Average Price of On-Campus Housing at Four-Year Public Institutions by State, 2017–18</p>
		<p>Difference between the Average Price of On-Campus Housing over the Academic Year at Four-Year Public and Private Nonprofit Colleges in 2015–16 and Average Rent over Nine Months among 18-to-24-Year-Olds in 2015 Dollars, by State</p>
		<p>Average On-Campus Room and Board Charges by Sector, 1971–72 to 2018–19, in 2018 Dollars</p>
	<h3><a href="../prices-and-expenses/student-budgets/">Student Budgets</a></h3>	
		<p>Full-Time Undergraduate Student Quintiles of Cost of Attendance by Sector in 2017–18</p>
		<p>Cost of Attendance by Sector from 2002–03 to 2017–18, in 2017 Dollars</p>
		<p>Average Annual Spending on Required Course Materials, 2007–08 to 2017–18, in 2017 Dollars</p>
		<p>Average Textbook Prices for the Academic Year, 2007–08 to 2016–17, in 2017 Dollars </p>
	<h3><a href="../prices-and-expenses/forgone-earnings/">Forgone Earnings</a></h3>	
		<p>Type of Employment over the Past Year among Peoplewith Only a High School Diploma or GED and Not Currently Attending School</p>
		<p>Earnings by Age among Full-Time Full-Year Workers with Only a High School Diploma or GED and Not Currently Attending School </p>
		<p>Earnings of Men Ages 18–23 and 24–34 with High School Diploma or Equivalent Working Full Time Full Year</p>
		<p>Earnings of Women Ages 18–23 and 24–34 with High School Diploma or Equivalent Working Full Time Full Year</p>
	<h3><a href="../prices-and-expenses/net-price/">Net Price</a></h3>	
		<p>Average Grant Aid and Net Tuition and Fees for First-Time Full-Time Students, by Sector, 2016–17 </p>
		<p>Average Share of Tuition and Fees Covered by Grant Aid and Percentage of Tuition and Fees Left Over, by Sector, 2016–17</p>
		<p>Cost of Attendance (Total Expenses) Divided into the Portions of Tuition and Fees and Living Expenses Covered by Grant Aid, and the Tuition and Fees and Living Expenses Remaining, 2015–16</p>
		<p>Total Student Budget, Divided into the Portions of Tuition and Fees and Living Expenses Covered by Grant Aid, and the Tuition and Fees and Living Expenses Remaining, from 1995–96 to 2015–16, in 2015 Dollars</p>
<h2>Financial Aid</h2>
	<h3><a href="../financial-aid/financial-need/">Financial Need</a></h3>	
		<p>Median EFC by Parents’ Income: Dependent Students, 2015–16</p>
		<p>Share of Undergraduate Students with $0 Expected Family Contributions, by Dependency Status, 2015–16</p>
		<p>Distribution of Unmet Need by Dependency Status and Sector, 2015–16</p>
	<h3><a href="../financial-aid/grant-aid/">Grant Aid</a></h3>	
		<p>Undergraduate Grant Aid by Source, Percentage Distribution and Total Dollars (in Billions), 2015–16</p>
		<p>Distribution of Grant Aid per Full-Time Undergraduate by Source and Sector, 2015-16</p>
		<p>Grant Aid by Source for Independent and Dependent Students, by Sector, 2015–16</p>
		<p>Less than $30,000</p>
	<h3><a href="../financial-aid/federal/">Federal Grant Aid</a></h3>	
		<p>Pell Grant by Dependency Status and Income, Full-Time Students, 2015–16 (with Share Receiving Pell Grants)</p>
		<p>Average and Maximum Pell Grant over Time</p>
		<p>Recipients of Post-9/11 GI Benefits</p>
		<p>Average Pell Grant and Veteran’s and Military Benefits per FTE Undergraduate Student </p>
	<h3><a href="../financial-aid/state/">State Grant Aid</a></h3>	
		<p>State Grant Aid per Full-time Equivalent Undergraduate, 2016-17</p>
		<p>Share of State Grants Based on Financial Need, 2016-17</p>
		<p>Share of Undergraduates Receiving State Grant Aid, 2015–16</p>
		<p>Average State Grant Aid per Recipient, 2015–16</p>
		<p>State Grant Aid per Full-Time Equivalent Undergraduate in 2014 Dollars, 1976–77 to 2016–17</p>
	<h3><a href="../financial-aid/institutional/">Institutional Grant Aid</a></h3>	
		<p>Percentage of Full-Time First-Year Students Receiving Institutional Grant Aid, 2015–16</p>
		<p>Per first-time full-time student</p>
		<p>Average Need-Based and Non-need-based Institutional Grant Aid per Full-Time Dependent Student (and Share Receiving Institutional Aid), Private Nonprofit Four-Year Institutions, 2015–16</p>
		<p>Average Need-Based and Non-need-based Grant Aid per Full-Time Student (and Share Receiving Institutional Aid), Public Four-Year Institutions</p>
	<h3><a href="../financial-aid/other/">Other Grant Aid</a></h3>	
		<p>Share of Undergraduates Receiving Employer Assistance, 2015–16</p>
		<p>Share of Undergraduates Receiving Private Scholarships, 2015–16</p>
		<p>Average Employer Assistance and Private Scholarships per Recipient, 2015–16</p>
		<p>Private Scholarships per Recipient, 2015–16</p>
	<h3><a href="../financial-aid/tax-benefits/">Tax Benefits</a></h3>	
		<p>Federal Education Tax Credits and Deductions, 1998–2016</p>
		<p>Distribution of Tax Credits and Deductions by Adjusted Gross Income, 2016</p>
<h2>Covering Expenses</h2>
	<h3><a href="../covering-expenses/pre-college-income/">Pre-college Income</a></h3>	
		<p>Median Total Income of Families by Race or Ethnicity, Geographic Region, and Age, 2016</p>
		<p>Median Total Income of Families by Race or Ethnicity, Geographic Region, and Age, 20166</p>
		<p>Median Total Income of Families by Race or Ethnicity, Geographic Region, and Age, 2016</p>
		<p>Median Total Income of Families by Education Level, 2017</p>
		<p>Median Family Income by State, Families with Children Ages 15 to 17</p>
		<p>Median Income of Families by Age Group in 2017 Dollars, 1987 to 2017</p>
		<p>Median Income over Time of Families 45-to-54-Year-Olds </p>
	<h3><a href="../covering-expenses/savings/">Savings</a></h3>	
		<p>Personal Savings Rate, 1959–2018</p>
		<p>Effect of Savings on Expected Family Contribution</p>
		<p>Median Net Worth of Families, by Family Type, 1989–2016</p>
		<p>Distribution of Net Worth by Family Income Groups, 2015</p>
		<p>Median Net Worth of Families by Race or Ethnicity, 1989–2016</p>
		<p>Median Net Worth of Families by Parents’ Highest Educational Attainment, 1989–2016</p>
		<p>Number of 529 College Savings Accounts, in 2018 Dollars</p>
		<p>Average Account Size of 529 College Savings Accounts</p>
		<p>Number of College Savings Plan Withdrawals as a Percentage of All Postsecondary Students</p>
	<h3><a href="../covering-expenses/working-during-college/">Working during College</a></h3>	
		<p>Earnings from 800 Hours of Work at the Minimum Wage Compared with Average Published Tuition and Fees and Total Charges at Public Four-Year Institutions over Time</p>
		<p>Federal Minimum Wage, 1946–2018, 2018 Dollars</p>
		<p>State Minimum Wages Higher Than the Federal Minimum Wage, January 1, 2019</p>
		<p>Distribution of Hours Worked, Full-Time Full-Year Undergraduates, 2015–16</p>
		<p>Distribution of Earnings, Full-Time Full-Year Undergraduates, 2015–16</p>
		<p>Share of Undergraduate Students Participating in Federal Work-Study, 2015–16</p>
	<h3><a href="../covering-expenses/borrowing/">Borrowing</a></h3>	
		<p>Share of Undergraduates with Debt and Share Borrowing for the Current Year, 2015–16</p>
		<p>Annual Borrowing by Student Characteristics: Averages per Borrower and per Undergraduate Student (with Share Borrowing) in 2015–16</p>
		<p>Average Federal Loans per Undergraduate Student and per Undergraduate Borrower, with Share of Undergraduates Borrowing, 2001–02 to 2017–18</p>
		<p>Share of All Undergraduates Borrowing Federal Loans</p>
		<p>Average Amount Borrowed by All Undergraduates</p>
		<p>Average Annual Parent PLUS Loan per Borrower and Share of Dependent Students’ Parents Borrowing, 1997–98 to 2017–18</p>
		<p>Average Parent PLUS Loans Borrowed among Full-Time Dependent Students, 2015–16</p>
	<h3><a href="../covering-expenses/time-to-degree/">Time to Degree</a></h3>	
		<p>Average Number of Years Enrolled and Average Number of Years Elapsed between First Enrollment and Degree Completion, 2014–15 College Graduates</p>
		<p>Time between First Postsecondary Enrollment and Degree Completion, among 2015–16 Bachelor’s Degree Recipients, by Sector </p>
		<p>Time between First Postsecondary Enrollment and Degree Completion, among 2015–16 Associate Degree Recipients, by Sector </p>
		<p>Tuition and Fees and Room and Board over Four, Five, and Six years, 2017–18 Prices</p>
		<p>Distribution of Cumulative Debt among 2015–16 Bachelor’s Degree Recipients, by Time between First Postsecondary Enrollment and Degree Completion</p>
		<p>Forgone Earnings for Taking Four, Five, and Six Years to Earn a Bachelor’s Degree</p>
	<h3>State Policies</h3>
		<p>Expenditures on Grants as a Share of State Support for Public Higher Education, 2016–17</p>
<h2><a href="../after-college/">After College</a></h2>
	<h3>College Completion Rates</h3>
		<p>Share of First-Time Full-Time Students Enrolling in 2010 Who Earned Bachelor's Degrees at Their First Institution within Four, Five, and Six Years</p>
		<p>Outcomes Six Years Later for Students Enrolling for the First Time in 2010</p>
	<h3><a href="../after-college/employment-after-college/">Employment after College</a></h3>	
		<p>Labor Force Participation Rates among 25-to-34-Year-Olds by Educational Attainment, 1993–2017</p>
		<p>Unemployment Rates among 25-to-34-Year-Olds in the Labor Force, by Educational Attainment, 1993–2017</p>
		<p>Type of Employment over the Past Year, among 25-to-34-Year-Olds in the Labor Force</p>
	<h3><a href="../after-college/variation-in-earnings/">Variation in Earnings</a></h3>	
		<p>Median Earnings among 25-to-34-Year-Olds by Educational Attainment, 1992 to 2017, in 2017 Dollars</p>
		<p>Median Earnings among Employed Workers by Age and Educational Attainment</p>
		<p>Earnings Distribution of Employed Workers Ages 34 to 44, by Educational Attainment</p>
		<p>2016 Earnings by Field at the Median and the 25th and 75th Percentiles among Employed 35-to-44-Year-Olds with Bachelor's Degrees</p>
	<h3><a href="../after-college/student-debt/">Student Debt</a></h3>	
		<p>Distribution of Outstanding Education Debt by Income Quartile, 2016 </p>
		<p>Distribution of Cumulative Debt among Bachelor’s Degree Recipients over Time, 2016 Dollars</p>
		<p>Distribution of Cumulative Debt of Bachelor’s Degree Recipients by Sector, 2015–16</p>
		<p>Distribution of Cumulative Debt of Associate Degree Recipients by Sector, 2015–16</p>
		<p>Distribution of Cumulative Debt of Certificate Recipients by Sector, 2015–16</p>
		<p>Debt Levels of 2015–16 Bachelor’s Degree Recipients, by Dependency Status</p>
		<p>Debt Levels of 2015–16 Dependent Bachelor’s Degree Recipients, by Family Income</p>
		<p>Debt Levels of 2015–16 Bachelor’s Degree Recipients by Race or Ethnicity</p>
	<h3><a href="../after-college/loan-repayment-and-default/">Loan Repayment and Default</a></h3>	
		<p>Distribution of Borrowers by Federal Student Loan Repayment Plan, as of December 31, 2018</p>
		<p>Average Debt Levels by Federal Student Loan Repayment Plan, as of March 31, 2018</p>
		<p>Monthly Loan Payments by Family Income, Debt Amount, and Payment Plan</p>
		<p>Official Three-Year Cohort Default Rates by Year Entering Repayment and Sector</p>
		<p>Share of Defaulters and Three-Year Federal Student Loan Default Rate among Borrowers Entering Repayment in 2010–11, by Loan Balance</p>
		<p>Federal Student Loan Five-Year Repayment Rate by Completion Status and by Dependency Status: Borrowers Entering Repayment in 2009–10 and 2010–11</p>
<h2><a href="../breaking-even/">Breaking Even</a></h2>	
		<p>Cumulative Earnings of College Graduates Net of Tuition Payments and Forgone Earnings, in 2018 Dollars</p>
<h2><a href="../student-profiles/">Student Profiles</a></h2>	
		<p>Independent Students: Enrollment by Sector, 2015–16</p>
		<p>Independent Students: Average Published Prices, Budgets, and Resources Used to Pay for College, 2011–12</p>
		<p>Average Expected Family Contribution, Total Grants, Total Loans, and Earnings and Other Resources Equal Tuition and Fees and Other Expenses</p>
		<p>Tuition and Debt Based on Time to Degree, by Sector </p>	
		<p>Low-Income Dependent Students: Enrollment by Sector, 2015–16</p>
		<p>Low-Income Dependent Students: Average Publishd Prices, Budgets, and Resources Used to Pay for College, 2011–12 </p>
		<p>Average Expected Family Contribution, Total Grants, Total Loans, and Earnings and Other Resources Equal Tuition and Fees and Other Expenses</p>
		<p>Tuition and Debt Based on Time to Degree, by Sector </p>	
		<p>Lower-Middle-Income Students: Enrollment by Sector, 2015–16</p>
		<p>Lower-Middle-Income Dependent Students: Average Published Prices, Budgets, and Resources Used to Pay for College, 2011–12</p>
		<p>Average Expected Family Contribution, Total Grants, Total Loans, and Earnings and Other Resources Equal Tuition and Fees and Other Expenses</p>
		<p>Tuition and Debt Based on Time to Degree, by Sector </p>	
		<p>Upper-Middle-Income Students: Enrollment by Sector, 2015–16</p>
		<p>Upper-Middle-Income Students: Average Published Prices, Budgets, and Resources Used to Pay for College, 2011–12 </p>
		<p>Average Expected Family Contribution, Total Grants, Total Loans, and Earnings and Other Resources Equal Tuition and Fees and Other Expenses</p>
		<p>Tuition and Debt Based on Time to Degree, by Sector </p>
		<p>Upper-Income Dependent Students: Enrollment by Sector, 2015–16</p>
		<p>Upper-Income Dependent Students: Average Published Prices, Budgets, and Resources Used to Pay for College, 2011–12 </p>
		<p>Average Expected Family Contribution, Total Grants, Total Loans, and Earnings and Other Resources Equal Tuition and Fees and Other Expenses</p>
		<p>Tuition and Debt Based on Time to Degree by Sector </p>
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
