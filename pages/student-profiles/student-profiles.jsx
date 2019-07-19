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
<p>The array of colleges, programs, and prices makes it difficult for students to predict how much they will pay. Although college affordability raises different questions for everyone, looking at averages for students in different financial circumstances enrolling in different kinds of institutions is a good starting point. The charts and tables below demonstrate how affordability depends on both students&rsquo; circumstances and the choices they make.</p>

<h2>Independent Students</h2>

<p><strong>Who are independent students?</strong></p>
<p>Independent students are 24 and older, are married, have dependents, are active-duty military or veterans, or are orphans, in foster care, wards of the court, or unaccompanied homeless youth. These students&rsquo; eligibility for financial aid is based only on their own financial circumstances (and their spouse&rsquo;s if they are married). Their parents&rsquo; resources are not considered.</p>
<p><strong>Where do independent students enroll?</strong></p>
<p>In 2015&ndash;16, more than half of all independent undergraduates attended community colleges.</p>
<Graph file={require('./json/080001.json')}/>
<p><strong>How do annual finances differ across sectors?</strong></p>
<p><a name="OLE_LINK10" id="OLE_LINK10">Average Published Prices, Budgets, and Resources Used to Pay for College for Independent Students, 2015&ndash;16</a></p>
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
    <td width="53" align="right" valign="top" nowrap="nowrap">$9,370</td>
    <td width="62" align="right" valign="top" nowrap="nowrap">$18,270</td>
    <td width="60" align="right" valign="top" nowrap="nowrap">$22,120</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$17,280</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$3,740</td>
  </tr>
  <tr>
    <td width="146" nowrap="nowrap" valign="top">Budget beyond tuition and fees</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$15,830</td>
    <td width="62" align="right" valign="top" nowrap="nowrap">$16,020</td>
    <td width="60" align="right" valign="top" nowrap="nowrap">$15,070</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$15,750</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$14,230</td>
  </tr>
  <tr>
    <td width="146" nowrap="nowrap" valign="top">Expected family contribution</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$2,280</td>
    <td width="62" align="right" valign="top" nowrap="nowrap">$2,810</td>
    <td width="60" align="right" valign="top" nowrap="nowrap">$3,570</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$2,850</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$2,950</td>
  </tr>
  <tr>
    <td width="146" nowrap="nowrap" valign="top">Total grants</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$8,100</td>
    <td width="62" align="right" valign="top" nowrap="nowrap">$12,410</td>
    <td width="60" align="right" valign="top" nowrap="nowrap">$11,890</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$8,820</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$5,740</td>
  </tr>
  <tr>
    <td width="146" nowrap="nowrap" valign="top">Total loans</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$6,470</td>
    <td width="62" align="right" valign="top" nowrap="nowrap">$6,570</td>
    <td width="60" align="right" valign="top" nowrap="nowrap">$6,970</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$9,030</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$1,980</td>
  </tr>
  <tr>
    <td width="146" nowrap="nowrap" valign="top">Earnings and other resources</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$8,350</td>
    <td width="62" align="right" valign="top" nowrap="nowrap">$12,500</td>
    <td width="60" align="right" valign="top" nowrap="nowrap">$14,760</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$12,330</td>
    <td width="53" align="right" valign="top" nowrap="nowrap">$7,300</td>
  </tr>
</table>
<p><strong>Source:</strong> National Postsecondary Student Aid Study 2016.</p>

<p><strong>How do independent students pay for college?</strong></p>
<Graph file={require('./json/080003.json')}/>
<p><strong>How does time to degree affect cost? </strong></p>
<Graph file={require('./json/080004.json')}/>
<h2>Low-Income Dependent Students</h2>
<p><strong>Who are low-income dependent students?</strong></p>
<p>In 2015&ndash;16, about 25 percent of dependent students came from families with incomes below $27,900. These low-income dependent students are younger than 24. They are not married, do not have dependents, and have no other characteristics that would make the financial aid system declare them independent of their parents.</p>
<p><strong>Where do low-income dependent students enroll?</strong></p>
<p>Almost half of all low-income dependent undergraduates attend community colleges.</p>
<Graph file={require('./json/080005.json')}/>
<p><strong>How do annual finances differ across sectors?</strong></p>
<p>Average Published Prices, Budgets, and Resources Used to Pay for College for Low-Income Dependent Students, 2015&ndash;16</p>
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
    <td width="72" align="right" valign="top" nowrap="nowrap">$9,610</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$19,960</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$30,780</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$20,470</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$3,810</td>
  </tr>
  <tr>
    <td width="161" valign="top">Budget beyond tuition and fees</td>
    <td width="72" align="right" valign="top" nowrap="nowrap">$15,560</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$16,400</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$15,160</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$16,480</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$12,020</td>
  </tr>
  <tr>
    <td width="161" valign="top">Expected family contribution </td>
    <td width="72" align="right" valign="top" nowrap="nowrap">$240</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$350</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$2,910</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$880</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$80</td>
  </tr>
  <tr>
    <td width="161" valign="top">Total grants </td>
    <td width="72" align="right" valign="top" nowrap="nowrap">$11,640</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$13,420</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$26,520</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$9,380</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$6,690</td>
  </tr>
  <tr>
    <td width="161" valign="top">Total loans </td>
    <td width="72" align="right" valign="top" nowrap="nowrap">$4,810</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$9,420</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$8,650</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$10,470</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$780</td>
  </tr>
  <tr>
    <td width="161" valign="top">Earnings and other resources </td>
    <td width="72" align="right" valign="top" nowrap="nowrap">$8,480</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$13,170</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$7,860</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$16,220</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$8,280</td>
  </tr>
</table>
<p><strong>Source:</strong> National Postsecondary Student Aid Study 2016.</p>

<p><strong>How do low-income dependent students pay for college?</strong></p>
<Graph file={require('./json/080007.json')}/>
<p><strong>How does time to degree affect cost? </strong></p>
<Graph file={require('./json/080008.json')}/>
<h2>Lower-Middle-Income Dependent Students</h2>
<p><strong>Who are lower-middle-income dependent students?</strong></p>
<p>In 2015&ndash;16, about 25 percent of dependent students came from families with incomes between $27,900 and $63,000. These lower-middle-income dependent students are younger than 24. They are not married, do not have dependents, and have no other characteristics that would make the financial aid system declare them independent of their parents.</p>
<p><strong>Where do lower-middle-income dependent students enroll?</strong></p>
<p>In 2015&ndash;16, 80 percent of lower-middle-income students were enrolled in public two-year or four-year institutions.</p>
<Graph file={require('./json/080009.json')}/>
<p><strong>How do annual finances differ across sectors?</strong></p>
<p>Average Published Prices, Budgets, and Resources Used to Pay for College for Lower-Middle-Income Dependent Students, 2015&ndash;16</p>
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
    <td width="59" align="right" valign="top" nowrap="nowrap">$10,040</td>
    <td width="63" align="right" valign="top" nowrap="nowrap">$19,080</td>
    <td width="56" align="right" valign="top" nowrap="nowrap">$33,710</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$20,650</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$3,840</td>
  </tr>
  <tr>
    <td width="153" valign="top">Budget beyond tuition and fees</td>
    <td width="59" align="right" valign="top" nowrap="nowrap">$14,890</td>
    <td width="63" align="right" valign="top" nowrap="nowrap">$16,300</td>
    <td width="56" align="right" valign="top" nowrap="nowrap">$14,640</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$15,650</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$11,450</td>
  </tr>
  <tr>
    <td width="153" valign="top">Expected family contribution </td>
    <td width="59" align="right" valign="top" nowrap="nowrap">$3,020</td>
    <td width="63" align="right" valign="top" nowrap="nowrap">$3,530</td>
    <td width="56" align="right" valign="top" nowrap="nowrap">$3,690</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$3,090</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$2,640</td>
  </tr>
  <tr>
    <td width="153" valign="top">Total grants </td>
    <td width="59" align="right" valign="top" nowrap="nowrap">$8,990</td>
    <td width="63" align="right" valign="top" nowrap="nowrap">$12,090</td>
    <td width="56" align="right" valign="top" nowrap="nowrap">$25,460</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$6,740</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$4,350</td>
  </tr>
  <tr>
    <td width="153" valign="top">Total loans </td>
    <td width="59" align="right" valign="top" nowrap="nowrap">$6,010</td>
    <td width="63" align="right" valign="top" nowrap="nowrap">$10,180</td>
    <td width="56" align="right" valign="top" nowrap="nowrap">$9,800</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$13,220</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$950</td>
  </tr>
  <tr>
    <td width="153" valign="top">Earnings and other resources </td>
    <td width="59" align="right" valign="top" nowrap="nowrap">$6,910</td>
    <td width="63" align="right" valign="top" nowrap="nowrap">$9,580</td>
    <td width="56" align="right" valign="top" nowrap="nowrap">$9,400</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$13,250</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$7,350</td>
  </tr>
</table>
<p><strong>Source:</strong> National Postsecondary Student Aid Study 2016.</p>
<p><strong>How do lower-middle-income dependent students pay for college?</strong></p>
<Graph file={require('./json/080011.json')}/>
<p><strong>How does time to degree affect cost? </strong><strong> </strong></p>

<Graph file={require('./json/080012.json')}/>
<h2>Upper-Middle-Income Dependent Students</h2>
<p><strong>Who are upper-middle-income dependent students?</strong></p>
<p>In 2015&ndash;16, about 25 percent of dependent students came from families with incomes between $63,000 and $113,500. These upper-middle-income dependent students are younger than 24. They are not married, do not have dependents, and have no other characteristics that would make the financial aid system declare them independent of their parents.</p>
<p><strong>Where do upper-middle-income dependent students enroll?</strong></p>
<p>Very few upper-middle-income students enroll in for-profit institutions.</p>
<Graph file={require('./json/080013.json')}/>
<p><strong>How do annual finances differ across sectors?</strong></p>
<p>Average Published Prices, Budgets, and Resources Used to Pay for College for Upper-Middle-Income Dependent Students, 2015&ndash;16</p>
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
    <td width="50" align="right" valign="top" nowrap="nowrap">$10,250</td>
    <td width="63" align="right" valign="top" nowrap="nowrap">$22,120</td>
    <td width="68" align="right" valign="top" nowrap="nowrap">$34,490</td>
    <td width="54" align="right" valign="top" nowrap="nowrap">$21,180</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$4,040</td>
  </tr>
  <tr>
    <td width="157" valign="top">Budget beyond tuition and fees</td>
    <td width="50" align="right" valign="top" nowrap="nowrap">$14,310</td>
    <td width="63" align="right" valign="top" nowrap="nowrap">$15,460</td>
    <td width="68" align="right" valign="top" nowrap="nowrap">$15,160</td>
    <td width="54" align="right" valign="top" nowrap="nowrap">$14,230</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$11,040</td>
  </tr>
  <tr>
    <td width="157" valign="top">Expected family contribution </td>
    <td width="50" align="right" valign="top" nowrap="nowrap">$13,660</td>
    <td width="63" align="right" valign="top" nowrap="nowrap">$14,230</td>
    <td width="68" align="right" valign="top" nowrap="nowrap">$13,670</td>
    <td width="54" align="right" valign="top" nowrap="nowrap">$12,250</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$12,020</td>
  </tr>
  <tr>
    <td width="157" valign="top">Total grants </td>
    <td width="50" align="right" valign="top" nowrap="nowrap">$4,460</td>
    <td width="63" align="right" valign="top" nowrap="nowrap">$8,990</td>
    <td width="68" align="right" valign="top" nowrap="nowrap">$21,070</td>
    <td width="54" align="right" valign="top" nowrap="nowrap">$5,010</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$2,200</td>
  </tr>
  <tr>
    <td width="157" valign="top">Total loans </td>
    <td width="50" align="right" valign="top" nowrap="nowrap">$6,900</td>
    <td width="63" align="right" valign="top" nowrap="nowrap">$7,850</td>
    <td width="68" align="right" valign="top" nowrap="nowrap">$11,520</td>
    <td width="54" align="right" valign="top" nowrap="nowrap">$13,070</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">$1,350</td>
  </tr>
  <tr>
    <td width="157" valign="top">Earnings and other resources </td>
    <td width="50" align="right" valign="top" nowrap="nowrap">-$460</td>
    <td width="63" align="right" valign="top" nowrap="nowrap">$6,510</td>
    <td width="68" align="right" valign="top" nowrap="nowrap">$3,390</td>
    <td width="54" align="right" valign="top" nowrap="nowrap">$5,080</td>
    <td width="65" align="right" valign="top" nowrap="nowrap">-$490</td>
  </tr>
</table>
<p><strong>Source:</strong> National Postsecondary Student Aid Study 2016.</p>
<p><strong>How do upper-middle-income dependent students pay for college?</strong></p>
<Graph file={require('./json/080015.json')}/>
<p><strong>How does time to degree affect cost? </strong><strong> </strong></p>
    <Graph file={require('./json/080016.json')}/>
<h2>Upper-Income Dependent Students</h2>
<p><strong>Who are upper-income dependent students?</strong></p>
<p>In 2015&ndash;16, about 25 percent of dependent students came from families with incomes above $113,500. This translates to about $120,000 in 2018 dollars. These upper-income dependent students are younger than 24. They are not married, do not have dependents, and have no other characteristics that would make the financial aid system declare them independent of their parents.</p>
<p><strong>Where do upper-income dependent students enroll?</strong></p>
<p>Three-quarters of upper-income dependent students enroll in public or private nonprofit four-year colleges and universities.</p>
<Graph file={require('./json/080017.json')}/>
<p><strong>How do annual finances differ across sectors?</strong></p>
<p>Average Published Prices, Budgets, and Resources Used to Pay for College for Upper-Income Dependent Students, 2015–16</p>
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
    <td width="60" colspan="2" align="right" valign="top" nowrap="nowrap">$11,010</td>
    <td width="68" colspan="2" align="right" valign="top" nowrap="nowrap">$24,490</td>
    <td width="58" colspan="2" align="right" valign="top" nowrap="nowrap">$38,740</td>
    <td width="59" align="right" valign="top" nowrap="nowrap">$25,850</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$4,060</td>
  </tr>
  <tr>
    <td width="149" colspan="2" valign="top">Budget beyond tuition and fees</td>
    <td width="60" colspan="2" align="right" valign="top" nowrap="nowrap">$14,850</td>
    <td width="68" colspan="2" align="right" valign="top" nowrap="nowrap">$16,160</td>
    <td width="58" colspan="2" align="right" valign="top" nowrap="nowrap">$15,510</td>
    <td width="59" align="right" valign="top" nowrap="nowrap">$15,660</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$11,540</td>
  </tr>
  <tr>
    <td width="149" colspan="2" valign="top">Expected family contribution </td>
    <td width="60" colspan="2" align="right" valign="top" nowrap="nowrap">$39,510</td>
    <td width="68" colspan="2" align="right" valign="top" nowrap="nowrap">$47,790</td>
    <td width="58" colspan="2" align="right" valign="top" nowrap="nowrap">$55,500</td>
    <td width="59" align="right" valign="top" nowrap="nowrap">$37,300</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$33,010</td>
  </tr>
  <tr>
    <td width="149" colspan="2" valign="top">Total grants </td>
    <td width="60" colspan="2" align="right" valign="top" nowrap="nowrap">$3,300</td>
    <td width="68" colspan="2" align="right" valign="top" nowrap="nowrap">$5,830</td>
    <td width="58" colspan="2" align="right" valign="top" nowrap="nowrap">$16,180</td>
    <td width="59" align="right" valign="top" nowrap="nowrap">$2,750</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$2,020</td>
  </tr>
  <tr>
    <td width="149" colspan="2" valign="top">Total loans </td>
    <td width="60" colspan="2" align="right" valign="top" nowrap="nowrap">$6,010</td>
    <td width="68" colspan="2" align="right" valign="top" nowrap="nowrap">$8,950</td>
    <td width="58" colspan="2" align="right" valign="top" nowrap="nowrap">$9,530</td>
    <td width="59" align="right" valign="top" nowrap="nowrap">$16,830</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">$1,080</td>
  </tr>
  <tr>
    <td width="149" colspan="2" valign="top">Earnings and other resources </td>
    <td width="60" colspan="2" align="right" valign="top" nowrap="nowrap">-$22,960</td>
    <td width="68" colspan="2" align="right" valign="top" nowrap="nowrap">-$21,920</td>
    <td width="58" colspan="2" align="right" valign="top" nowrap="nowrap">-$26,960</td>
    <td width="59" align="right" valign="top" nowrap="nowrap">-$15,370</td>
    <td width="69" align="right" valign="top" nowrap="nowrap">-$20,510</td>
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
<p><strong>Source:</strong> National Postsecondary Student Aid Study 2016.</p>
<p><strong>How do upper-income dependent students pay for college?</strong></p>
<Graph file={require('./json/080019.json')}/>
 <p><strong>How does time to degree affect cost? </strong></p>
<Graph file={require('./json/080020.json')}/>
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
