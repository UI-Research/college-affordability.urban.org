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
<p>In 2011–12, more than half of all independent undergraduates attended community colleges.</p>
<Graph file={require('./json/07_0010.json')}/>
<p><strong>How do annual finances differ across sectors?</strong></p>
<p><a name="OLE_LINK10" id="OLE_LINK10">Average Published Prices, Budgets, and Resources Used to Pay for College for Independent Students, 2011–12</a></p>
<table border="0" cellspacing="0" cellpadding="0" width="100%">
  <tr>
    <td width="146" nowrap="nowrap" valign="top">&nbsp;</td>
    <td width="53" align="center" valign="bottom"><strong>Public four-year in-state</strong></td>
    <td width="62" align="center" valign="bottom"><strong>Public four-year out-of-state</strong></td>
    <td width="60" align="center" valign="bottom"><strong>Private nonprofit four-year</strong></td>
    <td width="53" align="center" valign="bottom"><strong>For-profit</strong></td>
    <td width="53" align="center" valign="bottom"><strong>Public two-year</strong></td>
  </tr>
  <tr>
    <td width="146" nowrap="nowrap" valign="top">Published tuition and fees</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$7,700</td>
    <td width="62" align="right" valign="top" nowrap="nowrap">$14,000</td>
    <td width="60" align="right" valign="top" nowrap="nowrap">$22,400</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$14,900</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$2,800</td>
  </tr>
  <tr>
    <td width="146" nowrap="nowrap" valign="top">Budget beyond tuition and fees</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$15,500</td>
    <td width="62" align="right" valign="top" nowrap="nowrap">$16,300</td>
    <td width="60" align="right" valign="top" nowrap="nowrap">$15,300</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$14,700</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$14,200</td>
  </tr>
  <tr>
    <td width="146" nowrap="nowrap" valign="top">Expected family contribution</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$2,300</td>
    <td width="62" align="right" valign="top" nowrap="nowrap">$2,200</td>
    <td width="60" align="right" valign="top" nowrap="nowrap">$4,500</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$2,700</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$2,100</td>
  </tr>
  <tr>
    <td width="146" nowrap="nowrap" valign="top">Total grants</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$7,100</td>
    <td width="62" align="right" valign="top" nowrap="nowrap">$6,800</td>
    <td width="60" align="right" valign="top" nowrap="nowrap">$13,000</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$5,900</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$4,600</td>
  </tr>
  <tr>
    <td width="146" nowrap="nowrap" valign="top">Total loans</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$7,000</td>
    <td width="62" align="right" valign="top" nowrap="nowrap">$7,900</td>
    <td width="60" align="right" valign="top" nowrap="nowrap">$9,200</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$9,200</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$2,600</td>
  </tr>
  <tr>
    <td width="146" nowrap="nowrap" valign="top">Earnings and other resources</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$6,800</td>
    <td width="62" align="right" valign="top" nowrap="nowrap">$13,400</td>
    <td width="60" align="right" valign="top" nowrap="nowrap">$11,000</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$11,800</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$7,700</td>
  </tr>
</table>
<p>Source: NPSAS, 2012.</p>

<p><strong>How do independent students pay for college?</strong></p>
<Graph file={require('./json/07_0030.json')}/>
<p><strong>How does time to degree affect cost? </strong></p>
<Graph file={require('./json/07_0040.json')}/>
<h2>Low-Income Dependent Students</h2>
<p><strong>Who are low-income dependent students?</strong></p>
<p>In 2011–12, about 25 percent of dependent students came from families with incomes below $30,000. These are the students categorized as low-income dependent students. All of them are younger than 24. They are not married, do not have dependents of their own, and have no other characteristics that would make the financial aid system declare them independent of their parents.<strong></strong></p>
<p><strong>Where do low-income dependent students enroll?</strong></p>
<p>Almost half of all low-income dependent undergraduates attend community colleges. </p>
<Graph file={require('./json/07_0050.json')}/>
<p><strong>How do annual finances differ across sectors?</strong></p>
<p>Average Published Prices, Budgets, and Resources Used to Pay for College for Low-Income Dependent Students, 2011–12</p>
<table border="0" cellspacing="0" cellpadding="0" width="100%">
  <tr>
    <td width="161" nowrap="nowrap" valign="top">&nbsp;</td>
    <td width="72" align="center" valign="bottom"><strong>Public four-year in-state</strong></td>
    <td width="69" align="center" valign="bottom"><strong>Public four-year out-of-state</strong></td>
    <td width="69" align="center" valign="bottom"><strong>Private nonprofit four-year </strong></td>
    <td width="69" align="center" valign="bottom"><strong>For-profit</strong></td>
    <td width="65" align="center" valign="bottom"><strong>Public two-year </strong></td>
  </tr>
  <tr>
    <td width="161" valign="top">Tuition and fees</td>
    <td width="72" align="right" valign="top" nowrap="nowrap">$7,800</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$18,700</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$27,100</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$15,000</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$4,000</td>
  </tr>
  <tr>
    <td width="161" valign="top">Budget beyond tuition and fees</td>
    <td width="72" align="right" valign="top" nowrap="nowrap">$16,000</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$15,000</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$17,200</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$16,800</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$11,300</td>
  </tr>
  <tr>
    <td width="161" valign="top">Expected family contribution </td>
    <td width="72" align="right" valign="top" nowrap="nowrap">$400</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$1,000</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$400</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$200</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$400</td>
  </tr>
  <tr>
    <td width="161" valign="top">Total grants </td>
    <td width="72" align="right" valign="top" nowrap="nowrap">$10,500</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$12,000</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$24,200</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$7,100</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$5,900</td>
  </tr>
  <tr>
    <td width="161" valign="top">Total loans </td>
    <td width="72" align="right" valign="top" nowrap="nowrap">$4,900</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$8,700</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$8,100</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$10,400</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$800</td>
  </tr>
  <tr>
    <td width="161" valign="top">Earnings and other resources </td>
    <td width="72" align="right" valign="top" nowrap="nowrap">$8,000</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$12,100</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$11,600</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$14,100</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$8,200</td>
  </tr>
</table>
<p>Source: NPSAS, 2012.</p>

<p><strong>How do low-income dependent pay for college?</strong></p>
<Graph file={require('./json/07_0070.json')}/>
<p><strong>How does time to degree affect cost? </strong></p>
<Graph file={require('./json/07_0080.json')}/>
<h2>Lower-Middle-Income Dependent Students</h2>
<p><strong>Who are lower-middle-income dependent students?</strong></p>
<p>In 2011–12, about 25 percent of dependent students came from families with incomes between $30,000 and $65,000. These are the students categorized as lower-middle-income dependent students. All of them are younger than 24. They are not married, do not have dependents of their own, and have no other characteristics that would make the financial aid system declare them independent of their parents.</p>
<p><strong>Where do lower-middle-income dependent students enroll?</strong></p>
<p>In 2011–12, more than three-quarters of lower-middle-income students were enrolled in public two-year or four-year institutions.. </p>
<Graph file={require('./json/07_0090.json')}/>
<p><strong>How do annual finances differ across sectors?</strong></p>
<p>Average Published Prices, Budgets, and Resources Used to Pay for College for Lower-Middle-Income Dependent Students, 2011–12</p>
<table border="0" cellspacing="0" cellpadding="0" width="100%">
  <tr>
    <td width="153" nowrap="nowrap" valign="bottom">&nbsp;</td>
    <td width="59" align="center" valign="bottom"><strong>Public four-year in-state</strong></td>
    <td width="63" align="center" valign="bottom"><strong>Public four-year out-of-state</strong></td>
    <td width="56" align="center" valign="bottom"><strong>Private nonprofit four-year </strong></td>
    <td width="69" align="center" valign="bottom"><strong>For-profit</strong></td>
    <td width="65" align="center" valign="bottom"><strong>Public two-year </strong></td>
  </tr>
  <tr>
    <td width="153" valign="top">Tuition and fees</td>
    <td width="59" align="right" valign="top" nowrap="nowrap">$7,800</td>
    <td width="63" align="right" valign="top" nowrap="nowrap">$18,700</td>
    <td width="56" align="right" valign="top" nowrap="nowrap">$27,100</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$15,000</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$4,000</td>
  </tr>
  <tr>
    <td width="153" valign="top">Budget beyond tuition and fees</td>
    <td width="59" align="right" valign="top" nowrap="nowrap">$16,000</td>
    <td width="63" align="right" valign="top" nowrap="nowrap">$15,000</td>
    <td width="56" align="right" valign="top" nowrap="nowrap">$17,200</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$16,800</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$11,300</td>
  </tr>
  <tr>
    <td width="153" valign="top">Expected family contribution </td>
    <td width="59" align="right" valign="top" nowrap="nowrap">$4,300</td>
    <td width="63" align="right" valign="top" nowrap="nowrap">$4,900</td>
    <td width="56" align="right" valign="top" nowrap="nowrap">$4,100</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$3,800</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$4,100</td>
  </tr>
  <tr>
    <td width="153" valign="top">Total grants </td>
    <td width="59" align="right" valign="top" nowrap="nowrap">$7,000</td>
    <td width="63" align="right" valign="top" nowrap="nowrap">$8,300</td>
    <td width="56" align="right" valign="top" nowrap="nowrap">$21,600</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$4,700</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$3,200</td>
  </tr>
  <tr>
    <td width="153" valign="top">Total loans </td>
    <td width="59" align="right" valign="top" nowrap="nowrap">$6,000</td>
    <td width="63" align="right" valign="top" nowrap="nowrap">$10,600</td>
    <td width="56" align="right" valign="top" nowrap="nowrap">$9,800</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$14,200</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$1,200</td>
  </tr>
  <tr>
    <td width="153" valign="top">Earnings and other resources </td>
    <td width="59" align="right" valign="top" nowrap="nowrap">$6,500</td>
    <td width="63" align="right" valign="top" nowrap="nowrap">$9,900</td>
    <td width="56" align="right" valign="top" nowrap="nowrap">$8,700</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$9,200</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$6,800</td>
  </tr>
</table>
<p>Source: NPSAS, 2012.</p>
<p><strong>How do low-income dependent pay for college?</strong></p>
<Graph file={require('./json/07_0110.json')}/>
<p><strong>How does time to degree affect cost? </strong><strong> </strong></p>

<Graph file={require('./json/07_0120.json')}/>
<h2>Upper-Middle-Income Dependent Students</h2>
<p><strong>Who are upper-middle-income dependent students?</strong> In 2011–12, about 25 percent of dependent students came from families with incomes between $65,000 and $106,000. These are the students categorized as upper-middle-income dependent students. All of them are younger than 24. They are not married, do not have dependents of their own, and have no other characteristics that would make the financial aid system declare them independent of their parents.</p>
<p><strong>Where do upper-middle-income dependent students enroll?</strong></p>
<p>Very few upper-middle income students enroll in for-profit institutions.</p>
<Graph file={require('./json/07_0130.json')}/>
<p><strong>How do annual finances differ across sectors?</strong></p>
<p>Average Published Prices, Budgets, and Resources Used to Pay for College for Upper-Middle-Income Dependent Students, 2011–12</p>
<table border="0" cellspacing="0" cellpadding="0" width="100%">
  <tr>
    <td width="157" nowrap="nowrap" valign="top">&nbsp;</td>
    <td width="50" align="center" valign="bottom"><strong>Public four-year in-state</strong></td>
    <td width="63" align="center" valign="bottom"><strong>Public four-year out-of-state</strong></td>
    <td width="68" align="center" valign="bottom"><strong>Private nonprofit four-year </strong></td>
    <td width="54" align="center" valign="bottom"><strong>For-profit</strong></td>
    <td width="65" align="center" valign="bottom"><strong>Public two-year</strong></td>
  </tr>
  <tr>
    <td width="157" valign="top">Tuition and fees</td>
    <td width="50" align="right" valign="top" nowrap="nowrap">$7,800</td>
    <td width="63" align="right" valign="top" nowrap="nowrap">$18,700</td>
    <td width="68" align="right" valign="top" nowrap="nowrap">$27,100</td>
    <td width="54" align="right" valign="top" nowrap="nowrap">$15,000</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$4,000</td>
  </tr>
  <tr>
    <td width="157" valign="top">Budget beyond tuition and fees</td>
    <td width="50" align="right" valign="top" nowrap="nowrap">$16,000</td>
    <td width="63" align="right" valign="top" nowrap="nowrap">$15,000</td>
    <td width="68" align="right" valign="top" nowrap="nowrap">$17,200</td>
    <td width="54" align="right" valign="top" nowrap="nowrap">$16,800</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$11,300</td>
  </tr>
  <tr>
    <td width="157" valign="top">Expected family contribution </td>
    <td width="50" align="right" valign="top" nowrap="nowrap">$13,600</td>
    <td width="63" align="right" valign="top" nowrap="nowrap">$14,900</td>
    <td width="68" align="right" valign="top" nowrap="nowrap">$13,300</td>
    <td width="54" align="right" valign="top" nowrap="nowrap">$13,600</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$13,200</td>
  </tr>
  <tr>
    <td width="157" valign="top">Total grants </td>
    <td width="50" align="right" valign="top" nowrap="nowrap">$3,000</td>
    <td width="63" align="right" valign="top" nowrap="nowrap">$4,400</td>
    <td width="68" align="right" valign="top" nowrap="nowrap">$16,200</td>
    <td width="54" align="right" valign="top" nowrap="nowrap">$1,600</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$900</td>
  </tr>
  <tr>
    <td width="157" valign="top">Total loans </td>
    <td width="50" align="right" valign="top" nowrap="nowrap">$6,400</td>
    <td width="63" align="right" valign="top" nowrap="nowrap">$9,100</td>
    <td width="68" align="right" valign="top" nowrap="nowrap">$10,100</td>
    <td width="54" align="right" valign="top" nowrap="nowrap">$15,500</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$1,600</td>
  </tr>
  <tr>
    <td width="157" valign="top">Earnings and other resources </td>
    <td width="50" align="right" valign="top" nowrap="nowrap">$800</td>
    <td width="63" align="right" valign="top" nowrap="nowrap">$5,400</td>
    <td width="68" align="right" valign="top" nowrap="nowrap">$4,700</td>
    <td width="54" align="right" valign="top" nowrap="nowrap">$1,200</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">-$400</td>
  </tr>
</table>
<p>Source: NPSAS, 2012</p>
<p><strong>How do upper-middle-income dependent pay for college?</strong></p>
<Graph file={require('./json/07_0150.json')}/>
<p><strong>How does time to degree affect cost? </strong><strong> </strong></p>
    <Graph file={require('./json/07_0160.json')}/>
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
    <td width="149" nowrap="nowrap" colspan="2" valign="top">&nbsp;</td>
    <td width="60" colspan="2" align="center" valign="bottom"><strong>Public four-year in-state</strong></td>
    <td width="68" colspan="2" align="center" valign="bottom"><strong>Public four-year out-of-state</strong></td>
    <td width="58" colspan="2" align="center" valign="bottom"><strong>Private nonprofit four-year</strong></td>
    <td width="59" align="center" valign="bottom"><strong>For-profit</strong></td>
    <td width="69" align="center" valign="bottom"><strong>Public two-year</strong></td>
  </tr>
  <tr>
    <td width="149" colspan="2" valign="top">Tuition and fees</td>
    <td width="60" colspan="2" align="right" valign="top" nowrap="nowrap">$7,800</td>
    <td width="68" colspan="2" align="right" valign="top" nowrap="nowrap">$18,700</td>
    <td width="58" colspan="2" align="right" valign="top" nowrap="nowrap">$27,100</td>
    <td width="59" align="right" valign="top" nowrap="nowrap">$15,000</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$4,000</td>
  </tr>
  <tr>
    <td width="149" colspan="2" valign="top">Budget beyond tuition and fees</td>
    <td width="60" colspan="2" align="right" valign="top" nowrap="nowrap">$16,000</td>
    <td width="68" colspan="2" align="right" valign="top" nowrap="nowrap">$15,000</td>
    <td width="58" colspan="2" align="right" valign="top" nowrap="nowrap">$17,200</td>
    <td width="59" align="right" valign="top" nowrap="nowrap">$16,800</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$11,300</td>
  </tr>
  <tr>
    <td width="149" colspan="2" valign="top">Expected family contribution </td>
    <td width="60" colspan="2" align="right" valign="top" nowrap="nowrap">$32,700</td>
    <td width="68" colspan="2" align="right" valign="top" nowrap="nowrap">$34,800</td>
    <td width="58" colspan="2" align="right" valign="top" nowrap="nowrap">$37,400</td>
    <td width="59" align="right" valign="top" nowrap="nowrap">$34,200</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$30,900</td>
  </tr>
  <tr>
    <td width="149" colspan="2" valign="top">Total grants </td>
    <td width="60" colspan="2" align="right" valign="top" nowrap="nowrap">$2,400</td>
    <td width="68" colspan="2" align="right" valign="top" nowrap="nowrap">$4,000</td>
    <td width="58" colspan="2" align="right" valign="top" nowrap="nowrap">$13,200</td>
    <td width="59" align="right" valign="top" nowrap="nowrap">$2,600</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$700</td>
  </tr>
  <tr>
    <td width="149" colspan="2" valign="top">Total loans </td>
    <td width="60" colspan="2" align="right" valign="top" nowrap="nowrap">$5,400</td>
    <td width="68" colspan="2" align="right" valign="top" nowrap="nowrap">$8,800</td>
    <td width="58" colspan="2" align="right" valign="top" nowrap="nowrap">$8,500</td>
    <td width="59" align="right" valign="top" nowrap="nowrap">$13,700</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$1,300</td>
  </tr>
  <tr>
    <td width="149" colspan="2" valign="top">Earnings and other resources </td>
    <td width="60" colspan="2" align="right" valign="top" nowrap="nowrap">-$16,700</td>
    <td width="68" colspan="2" align="right" valign="top" nowrap="nowrap">-$13,900</td>
    <td width="58" colspan="2" align="right" valign="top" nowrap="nowrap">-$14,800</td>
    <td width="59" align="right" valign="top" nowrap="nowrap">-$18,700</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">-$17,600</td>
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
<p><strong>How do upper-income dependent pay for college?</strong></p>
<Graph file={require('./json/07_0190.json')}/>
 <p><strong>How does time to degree affect cost? </strong></p>
<Graph file={require('./json/07_0200.json')}/>
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
