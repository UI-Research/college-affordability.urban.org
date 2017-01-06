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
    <h1>Student Profiles</h1>
<p>The array of colleges, programs, and prices makes it difficult for individual students to predict how much they will have to pay. Although college affordability will look different for everyone, looking at averages for students in different financial circumstances enrolling in different kinds of institutions is a good starting point. The charts and tables below help demonstrate how the question of affordability depends on both students&rsquo; circumstances and the choices they make. </p>

<h2>Independent Students</h2>

<p><strong>Who are independent students?</strong></p>
<p>Independent students are those who are 24 and older, are married, have dependents, are active duty military or veterans, or are orphans, in foster care, wards of the court, or unaccompanied homeless youth. These students&rsquo; eligibility for financial aid is based only on their own financial circumstances (and their spouse&rsquo;s if they are married). Their parents&rsquo; resources are not considered.</p>
<p><strong>Where do independent students enroll?</strong></p>
<p>In 2011–12, more than half of all independent undergraduates attended community colleges, four-year colleges, and universities.</p>
<Graph file={require('./json/07_0010.json')}/>
<p><strong>How do annual finances differ across sectors?</strong></p>
<p><a name="OLE_LINK10" id="OLE_LINK10">Average Published Prices, Budgets, and Resources Used to Pay for College for Independent Students, 2011</a>–12</p>
<table border="0" cellspacing="0" cellpadding="0" width="100%">
  <tr>
    <td width="146" nowrap="nowrap" valign="top"><p>&nbsp;</p></td>
    <td width="53" valign="top"><p>Public four-year in-state</p></td>
    <td width="62" valign="top"><p>Public four-year out-of-state</p></td>
    <td width="60" valign="top"><p>Private nonprofit four-year</p></td>
    <td width="53" valign="top"><p>For-profit</p></td>
    <td width="53" valign="top"><p>Public two-year</p></td>
  </tr>
  <tr>
    <td width="146" nowrap="nowrap" valign="top"><p>Published   tuition and fees</p></td>
    <td width="53" nowrap="nowrap" valign="top"><p align="right">$7,700</p></td>
    <td width="62" nowrap="nowrap" valign="top"><p align="right">$14,000</p></td>
    <td width="60" nowrap="nowrap" valign="top"><p align="right">$22,400</p></td>
    <td width="53" nowrap="nowrap" valign="top"><p align="right">$14,900</p></td>
    <td width="53" nowrap="nowrap" valign="top"><p align="right">$2,800</p></td>
  </tr>
  <tr>
    <td width="146" nowrap="nowrap" valign="top"><p>Budget   beyond tuition and fees</p></td>
    <td width="53" nowrap="nowrap" valign="top"><p align="right">$15,500</p></td>
    <td width="62" nowrap="nowrap" valign="top"><p align="right">$16,300</p></td>
    <td width="60" nowrap="nowrap" valign="top"><p align="right">$15,300</p></td>
    <td width="53" nowrap="nowrap" valign="top"><p align="right">$14,700</p></td>
    <td width="53" nowrap="nowrap" valign="top"><p align="right">$14,200</p></td>
  </tr>
  <tr>
    <td width="146" nowrap="nowrap" valign="top"><p>Expected   family contribution</p></td>
    <td width="53" nowrap="nowrap" valign="top"><p align="right">$2,300</p></td>
    <td width="62" nowrap="nowrap" valign="top"><p align="right">$2,200</p></td>
    <td width="60" nowrap="nowrap" valign="top"><p align="right">$4,500</p></td>
    <td width="53" nowrap="nowrap" valign="top"><p align="right">$2,700</p></td>
    <td width="53" nowrap="nowrap" valign="top"><p align="right">$2,100</p></td>
  </tr>
  <tr>
    <td width="146" nowrap="nowrap" valign="top"><p>Total   grants</p></td>
    <td width="53" nowrap="nowrap" valign="top"><p align="right">$7,100</p></td>
    <td width="62" nowrap="nowrap" valign="top"><p align="right">$6,800</p></td>
    <td width="60" nowrap="nowrap" valign="top"><p align="right">$13,000</p></td>
    <td width="53" nowrap="nowrap" valign="top"><p align="right">$5,900</p></td>
    <td width="53" nowrap="nowrap" valign="top"><p align="right">$4,600</p></td>
  </tr>
  <tr>
    <td width="146" nowrap="nowrap" valign="top"><p>Total   loans</p></td>
    <td width="53" nowrap="nowrap" valign="top"><p align="right">$7,000</p></td>
    <td width="62" nowrap="nowrap" valign="top"><p align="right">$7,900</p></td>
    <td width="60" nowrap="nowrap" valign="top"><p align="right">$9,200</p></td>
    <td width="53" nowrap="nowrap" valign="top"><p align="right">$9,200</p></td>
    <td width="53" nowrap="nowrap" valign="top"><p align="right">$2,600</p></td>
  </tr>
  <tr>
    <td width="146" nowrap="nowrap" valign="top"><p>Earnings   and other resources</p></td>
    <td width="53" nowrap="nowrap" valign="top"><p align="right">$6,800</p></td>
    <td width="62" nowrap="nowrap" valign="top"><p align="right">$13,400</p></td>
    <td width="60" nowrap="nowrap" valign="top"><p align="right">$11,000</p></td>
    <td width="53" nowrap="nowrap" valign="top"><p align="right">$11,800</p></td>
    <td width="53" nowrap="nowrap" valign="top"><p align="right">$7,700</p></td>
  </tr>
</table>
<p>Source: NPSAS, 2012.</p>

<p><strong>How do independent students pay for college?</strong></p>
<p><em>Average Expected Family Contribution, Total Grants, Total Loan, and Earnings and Other Resources Equal Tuition and Fees and Other Expense: Public Two-Year Colleges</em></p>
<p><em>Total Tuition and Fees and Average Total Debt for an Associate Degree at a Public Two-Year College, 2016</em><em>–</em><em>17: Two Years, Three Years, or Four Years of Full-Time Enrollment</em></p>
<p><strong>How does time to degree affect cost? </strong><strong> </strong></p>
<Graph file={require('./json/07_0030.json')}/>
    <Graph file={require('./json/07_0040.json')}/>
<h2>Low-Income Dependent Students</h2>
<p><strong>Who are low-income dependent students?</strong></p>
<p>In 2011–12, about 25 percent of dependent students came from families with incomes below $30,000 (in 2015 dollars). These are the students categorized as low-income dependent students. All of them are younger than 24. They are not married, do not have dependents of their own, and have no other characteristics that would make the financial aid system declare them independent of their parents.<strong></strong></p>
<p><strong>Where do low-income dependent students enroll?</strong></p>
<p>Almost half of all low-income dependent undergraduates attend community colleges. </p>
<Graph file={require('./json/07_0050.json')}/>
<p><strong>How do annual finances differ across sectors?</strong></p>
<p>Average Published Prices, Budgets, and Resources Used to Pay for College for Low-Income Dependent Students, 2011–12</p>
<table border="0" cellspacing="0" cellpadding="0" width="100%">
  <tr>
    <td width="161" nowrap="nowrap" valign="top"><p>&nbsp;</p></td>
    <td width="72" valign="top"><p>Public four-year in-state</p></td>
    <td width="69" valign="top"><p>Public four-year out-of-state</p></td>
    <td width="69" valign="top"><p>Private nonprofit four-year </p></td>
    <td width="69" valign="top"><p>For-profit</p></td>
    <td width="65" valign="top"><p>Public two-year </p></td>
  </tr>
  <tr>
    <td width="161" valign="top"><p>Tuition   and fees</p></td>
    <td width="72" nowrap="nowrap" valign="top"><p align="right">$7,800</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$18,700</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$27,100</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$15,000</p></td>
    <td width="65" nowrap="nowrap" valign="top"><p align="right">$4,000</p></td>
  </tr>
  <tr>
    <td width="161" valign="top"><p>Budget   beyond tuition and fees</p></td>
    <td width="72" nowrap="nowrap" valign="top"><p align="right">$16,000</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$15,000</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$17,200</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$16,800</p></td>
    <td width="65" nowrap="nowrap" valign="top"><p align="right">$11,300</p></td>
  </tr>
  <tr>
    <td width="161" valign="top"><p>Expected   family contribution </p></td>
    <td width="72" nowrap="nowrap" valign="top"><p align="right">$400</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$1,000</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$400</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$200</p></td>
    <td width="65" nowrap="nowrap" valign="top"><p align="right">$400</p></td>
  </tr>
  <tr>
    <td width="161" valign="top"><p>Total   grants </p></td>
    <td width="72" nowrap="nowrap" valign="top"><p align="right">$10,500</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$12,000</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$24,200</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$7,100</p></td>
    <td width="65" nowrap="nowrap" valign="top"><p align="right">$5,900</p></td>
  </tr>
  <tr>
    <td width="161" valign="top"><p>Total   loans </p></td>
    <td width="72" nowrap="nowrap" valign="top"><p align="right">$4,900</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$8,700</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$8,100</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$10,400</p></td>
    <td width="65" nowrap="nowrap" valign="top"><p align="right">$800</p></td>
  </tr>
  <tr>
    <td width="161" valign="top"><p>Earnings   and other resources </p></td>
    <td width="72" nowrap="nowrap" valign="top"><p align="right">$8,000</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$12,100</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$11,600</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$14,100</p></td>
    <td width="65" nowrap="nowrap" valign="top"><p align="right">$8,200</p></td>
  </tr>
</table>
<h2>Lower-Middle-Income Dependent Students</h2>
<p><strong>Who are lower-middle-income dependent students?</strong></p>
<p>In 2011–12, about 25 percent of dependent students came from families with incomes between $30,000 and $65,000 (in 2015 dollars). These are the students categorized as lower-middle-income dependent students. All of them are younger than 24. They are not married, do not have dependents of their own, and have no other characteristics that would make the financial aid system declare them independent of their parents.</p>
<p><strong>Where do lower-middle-income dependent students enroll?</strong></p>
<p>In 2011–12, more than three-quarters of lower-middle-income students were enrolled in public two-year or four-year institutions.. </p>
<Graph file={require('./json/07_0090.json')}/>
<p><strong>How do annual finances differ across sectors?</strong></p>
<p>Average Published Prices, Budgets, and Resources Used to Pay for College for Lower-Middle-Income Dependent Students, 2011–12</p>
<table border="0" cellspacing="0" cellpadding="0" width="100%">
  <tr>
    <td width="153" nowrap="nowrap" valign="top"><p>&nbsp;</p></td>
    <td width="59" valign="top"><p>Public four-year in-state</p></td>
    <td width="63" valign="top"><p>Public four-year out-of-state</p></td>
    <td width="56" valign="top"><p>Private nonprofit four-year </p></td>
    <td width="69" valign="top"><p>For-profit</p></td>
    <td width="65" valign="top"><p>Public two-year </p></td>
  </tr>
  <tr>
    <td width="153" valign="top"><p>Tuition   and fees</p></td>
    <td width="59" nowrap="nowrap" valign="top"><p align="right">$7,800</p></td>
    <td width="63" nowrap="nowrap" valign="top"><p align="right">$18,700</p></td>
    <td width="56" nowrap="nowrap" valign="top"><p align="right">$27,100</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$15,000</p></td>
    <td width="65" nowrap="nowrap" valign="top"><p align="right">$4,000</p></td>
  </tr>
  <tr>
    <td width="153" valign="top"><p>Budget   beyond tuition and fees</p></td>
    <td width="59" nowrap="nowrap" valign="top"><p align="right">$16,000</p></td>
    <td width="63" nowrap="nowrap" valign="top"><p align="right">$15,000</p></td>
    <td width="56" nowrap="nowrap" valign="top"><p align="right">$17,200</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$16,800</p></td>
    <td width="65" nowrap="nowrap" valign="top"><p align="right">$11,300</p></td>
  </tr>
  <tr>
    <td width="153" valign="top"><p>Expected   family contribution </p></td>
    <td width="59" nowrap="nowrap" valign="top"><p align="right">$4,300</p></td>
    <td width="63" nowrap="nowrap" valign="top"><p align="right">$4,900</p></td>
    <td width="56" nowrap="nowrap" valign="top"><p align="right">$4,100</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$3,800</p></td>
    <td width="65" nowrap="nowrap" valign="top"><p align="right">$4,100</p></td>
  </tr>
  <tr>
    <td width="153" valign="top"><p>Total   grants </p></td>
    <td width="59" nowrap="nowrap" valign="top"><p align="right">$7,000</p></td>
    <td width="63" nowrap="nowrap" valign="top"><p align="right">$8,300</p></td>
    <td width="56" nowrap="nowrap" valign="top"><p align="right">$21,600</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$4,700</p></td>
    <td width="65" nowrap="nowrap" valign="top"><p align="right">$3,200</p></td>
  </tr>
  <tr>
    <td width="153" valign="top"><p>Total   loans </p></td>
    <td width="59" nowrap="nowrap" valign="top"><p align="right">$6,000</p></td>
    <td width="63" nowrap="nowrap" valign="top"><p align="right">$10,600</p></td>
    <td width="56" nowrap="nowrap" valign="top"><p align="right">$9,800</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$14,200</p></td>
    <td width="65" nowrap="nowrap" valign="top"><p align="right">$1,200</p></td>
  </tr>
  <tr>
    <td width="153" valign="top"><p>Earnings   and other resources </p></td>
    <td width="59" nowrap="nowrap" valign="top"><p align="right">$6,500</p></td>
    <td width="63" nowrap="nowrap" valign="top"><p align="right">$9,900</p></td>
    <td width="56" nowrap="nowrap" valign="top"><p align="right">$8,700</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$9,200</p></td>
    <td width="65" nowrap="nowrap" valign="top"><p align="right">$6,800</p></td>
  </tr>
</table>
<h2>Upper-Middle-Income Dependent Students</h2>
<p><strong>Who are upper-middle-income dependent students?</strong>In 2011–12, about 25 percent of dependent students came from families with incomes between $65,000 and $106,000 (in 2015 dollars). These are the students categorized as upper-middle-income dependent students. All of them are younger than 24. They are not married, do not have dependents of their own, and have no other characteristics that would make the financial aid system declare them independent of their parents.</p>
<p><strong>Where do upper-middle-income dependent students enroll?</strong></p>
<p>Very few upper-middle income students enroll in for-profit institutions.</p>
<Graph file={require('./json/07_0130.json')}/>
<p><strong>How do annual finances differ across sectors?</strong></p>
<p>Average Published Prices, Budgets, and Resources Used to Pay for College for Upper-Middle-Income Dependent Students, 2011–12</p>
<table border="0" cellspacing="0" cellpadding="0" width="100%">
  <tr>
    <td width="157" nowrap="nowrap" valign="top"><p>&nbsp;</p></td>
    <td width="50" valign="top"><p>Public four-year in-state</p></td>
    <td width="63" valign="top"><p>Public four-year out-of-state</p></td>
    <td width="68" valign="top"><p>Private nonprofit four-year </p></td>
    <td width="54" valign="top"><p>For-profit</p></td>
    <td width="65" valign="top"><p>Public two-year </p></td>
  </tr>
  <tr>
    <td width="157" valign="top"><p>Tuition   and fees</p></td>
    <td width="50" nowrap="nowrap" valign="top"><p align="right">$7,800</p></td>
    <td width="63" nowrap="nowrap" valign="top"><p align="right">$18,700</p></td>
    <td width="68" nowrap="nowrap" valign="top"><p align="right">$27,100</p></td>
    <td width="54" nowrap="nowrap" valign="top"><p align="right">$15,000</p></td>
    <td width="65" nowrap="nowrap" valign="top"><p align="right">$4,000</p></td>
  </tr>
  <tr>
    <td width="157" valign="top"><p>Budget   beyond tuition and fees</p></td>
    <td width="50" nowrap="nowrap" valign="top"><p align="right">$16,000</p></td>
    <td width="63" nowrap="nowrap" valign="top"><p align="right">$15,000</p></td>
    <td width="68" nowrap="nowrap" valign="top"><p align="right">$17,200</p></td>
    <td width="54" nowrap="nowrap" valign="top"><p align="right">$16,800</p></td>
    <td width="65" nowrap="nowrap" valign="top"><p align="right">$11,300</p></td>
  </tr>
  <tr>
    <td width="157" valign="top"><p>Expected   family contribution </p></td>
    <td width="50" nowrap="nowrap" valign="top"><p align="right">$13,600</p></td>
    <td width="63" nowrap="nowrap" valign="top"><p align="right">$14,900</p></td>
    <td width="68" nowrap="nowrap" valign="top"><p align="right">$13,300</p></td>
    <td width="54" nowrap="nowrap" valign="top"><p align="right">$13,600</p></td>
    <td width="65" nowrap="nowrap" valign="top"><p align="right">$13,200</p></td>
  </tr>
  <tr>
    <td width="157" valign="top"><p>Total   grants </p></td>
    <td width="50" nowrap="nowrap" valign="top"><p align="right">$3,000</p></td>
    <td width="63" nowrap="nowrap" valign="top"><p align="right">$4,400</p></td>
    <td width="68" nowrap="nowrap" valign="top"><p align="right">$16,200</p></td>
    <td width="54" nowrap="nowrap" valign="top"><p align="right">$1,600</p></td>
    <td width="65" nowrap="nowrap" valign="top"><p align="right">$900</p></td>
  </tr>
  <tr>
    <td width="157" valign="top"><p>Total   loans </p></td>
    <td width="50" nowrap="nowrap" valign="top"><p align="right">$6,400</p></td>
    <td width="63" nowrap="nowrap" valign="top"><p align="right">$9,100</p></td>
    <td width="68" nowrap="nowrap" valign="top"><p align="right">$10,100</p></td>
    <td width="54" nowrap="nowrap" valign="top"><p align="right">$15,500</p></td>
    <td width="65" nowrap="nowrap" valign="top"><p align="right">$1,600</p></td>
  </tr>
  <tr>
    <td width="157" valign="top"><p>Earnings   and other resources </p></td>
    <td width="50" nowrap="nowrap" valign="top"><p align="right">$800</p></td>
    <td width="63" nowrap="nowrap" valign="top"><p align="right">$5,400</p></td>
    <td width="68" nowrap="nowrap" valign="top"><p align="right">$4,700</p></td>
    <td width="54" nowrap="nowrap" valign="top"><p align="right">$1,200</p></td>
    <td width="65" nowrap="nowrap" valign="top"><p align="right">-$400</p></td>
  </tr>
</table>
<p>Source: NPSAS, 2012</p>
<h2>Upper-Income Dependent Students</h2>
<p><strong>Who are upper-income dependent students?</strong></p>
<p>In 2011–12, about 25 percent of dependent students came from families with incomes above $106,000. This translates to $111,300 in 2015 dollars. These are the students categorized as upper- income dependent students. All of them are younger than 24. They are not married, do not have dependents of their own, and have no other characteristics that would make the financial aid system declare them independent of their parents.</p>
<p><strong>Where do upper-income dependent students enroll?</strong></p>
<p>About 70 percent of upper-income dependent students in public or private nonprofit four-year colleges and universities.</p>
<Graph file={require('./json/07_0170.json')}/>
<p><strong>How do annual finances differ across sectors?</strong></p>
<p>Average Published Prices, Budgets, and Resources Used to Pay for College for Upper-Income Dependent Students, 2011–12</p>
<table border="0" cellspacing="0" cellpadding="0" width="100%">
  <tr>
    <td width="149" nowrap="nowrap" colspan="2" valign="top"><p>&nbsp;</p></td>
    <td width="60" colspan="2" valign="top"><p>Public four-year in-state</p></td>
    <td width="68" colspan="2" valign="top"><p>Public four-year out-of-state</p></td>
    <td width="58" colspan="2" valign="top"><p>Private nonprofit four-year</p></td>
    <td width="59" valign="top"><p>For-profit</p></td>
    <td width="69" valign="top"><p>Public two-year</p></td>
  </tr>
  <tr>
    <td width="149" colspan="2" valign="top"><p>Tuition   and fees</p></td>
    <td width="60" nowrap="nowrap" colspan="2" valign="top"><p align="right">$7,800</p></td>
    <td width="68" nowrap="nowrap" colspan="2" valign="top"><p align="right">$18,700</p></td>
    <td width="58" nowrap="nowrap" colspan="2" valign="top"><p align="right">$27,100</p></td>
    <td width="59" nowrap="nowrap" valign="top"><p align="right">$15,000</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$4,000</p></td>
  </tr>
  <tr>
    <td width="149" colspan="2" valign="top"><p>Budget   beyond tuition and fees</p></td>
    <td width="60" nowrap="nowrap" colspan="2" valign="top"><p align="right">$16,000</p></td>
    <td width="68" nowrap="nowrap" colspan="2" valign="top"><p align="right">$15,000</p></td>
    <td width="58" nowrap="nowrap" colspan="2" valign="top"><p align="right">$17,200</p></td>
    <td width="59" nowrap="nowrap" valign="top"><p align="right">$16,800</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$11,300</p></td>
  </tr>
  <tr>
    <td width="149" colspan="2" valign="top"><p>Expected   family contribution </p></td>
    <td width="60" nowrap="nowrap" colspan="2" valign="top"><p align="right">$32,700</p></td>
    <td width="68" nowrap="nowrap" colspan="2" valign="top"><p align="right">$34,800</p></td>
    <td width="58" nowrap="nowrap" colspan="2" valign="top"><p align="right">$37,400</p></td>
    <td width="59" nowrap="nowrap" valign="top"><p align="right">$34,200</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$30,900</p></td>
  </tr>
  <tr>
    <td width="149" colspan="2" valign="top"><p>Total   grants </p></td>
    <td width="60" nowrap="nowrap" colspan="2" valign="top"><p align="right">$2,400</p></td>
    <td width="68" nowrap="nowrap" colspan="2" valign="top"><p align="right">$4,000</p></td>
    <td width="58" nowrap="nowrap" colspan="2" valign="top"><p align="right">$13,200</p></td>
    <td width="59" nowrap="nowrap" valign="top"><p align="right">$2,600</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$700</p></td>
  </tr>
  <tr>
    <td width="149" colspan="2" valign="top"><p>Total   loans </p></td>
    <td width="60" nowrap="nowrap" colspan="2" valign="top"><p align="right">$5,400</p></td>
    <td width="68" nowrap="nowrap" colspan="2" valign="top"><p align="right">$8,800</p></td>
    <td width="58" nowrap="nowrap" colspan="2" valign="top"><p align="right">$8,500</p></td>
    <td width="59" nowrap="nowrap" valign="top"><p align="right">$13,700</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">$1,300</p></td>
  </tr>
  <tr>
    <td width="149" colspan="2" valign="top"><p>Earnings   and other resources </p></td>
    <td width="60" nowrap="nowrap" colspan="2" valign="top"><p align="right">-$16,700</p></td>
    <td width="68" nowrap="nowrap" colspan="2" valign="top"><p align="right">-$13,900</p></td>
    <td width="58" nowrap="nowrap" colspan="2" valign="top"><p align="right">-$14,800</p></td>
    <td width="59" nowrap="nowrap" valign="top"><p align="right">-$18,700</p></td>
    <td width="69" nowrap="nowrap" valign="top"><p align="right">-$17,600</p></td>
  </tr>
  <tr>
    <td width="112" nowrap="nowrap" valign="bottom"></td>
    <td width="70" nowrap="nowrap" colspan="2" valign="bottom"></td>
    <td width="70" nowrap="nowrap" colspan="2" valign="bottom"></td>
    <td width="70" nowrap="nowrap" colspan="2" valign="bottom"></td>
    <td width="71" nowrap="nowrap" colspan="2" valign="bottom"></td>
    <td width="69" nowrap="nowrap" valign="bottom"></td>
  </tr>
</table>
<p>Source: NPSAS, 2012.<strong></strong></p>
  </div>
);

let specifications = {
  'name': 'student-profiles',
  'title': 'Student Profiles',
  'content': <SinglePage content={singlepage} />
};

const StudentProfiles = React.createClass({
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
util.printToPage('student-profiles', StudentProfiles);

module.exports = StudentProfiles;
