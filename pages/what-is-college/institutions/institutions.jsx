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
    <h1>Institutions</h1>
      <p>There is a wide range of postsecondary institutions in the United States, and they offer a wide range of degrees and experiences.</p>
      <p>College is not just ivy-covered dormitories where 18-year-olds go to earn a bachelor&rsquo;s degree. In fact, the selective institutions that sometimes dominate the headlines represent a small share of undergraduate enrollment—only 10 percent of undergraduates attend colleges that accept fewer than 50 percent of applicants.</p>
      <p>Variation in ownership and mission defines the different sectors of higher education:</p>
      <ul>
        <li><strong>Public colleges and universities </strong>are under the purview of state and local  governments. They receive some funding through state tax revenues and they tend to offer lower tuition to in-state residents than to other students.</li>
        <li><strong>Private nonprofit institutions </strong>have no owners and are governed by a boards of trustees. Like all nonprofits, they use revenues to run the institution, not to earn profits. Most private colleges and universities are independent, though some are affiliated with religious organizations.</li>
        <li><strong>For-profit colleges</strong> are owned by individuals, partnerships, or firms, or are publicly held by shareholders. Owners can earn a profit from revenues.</li>
      </ul>
      <p>Different institutions also offer different types of degrees:</p>
      <ul>
        <li><strong>Doctoral or research universities </strong>are those that award at least 20 research or scholarship doctoral degrees—generally PhDs—each year. For undergraduates, doctoral universities might offer more opportunities to be involved with advanced research, but they also might use PhD students, rather than professors, to teach some classes. Flagship public universities are generally doctoral institutions.</li>
        <li><strong>Master&rsquo;s universities </strong>award at least 50 master&rsquo;s degrees per year and fewer than 20 doctoral degrees. These institutions have graduate students, but graduate education tends to be less of a focus than at doctoral universities. Master&rsquo;s universities are generally less selective at the undergraduate level than doctoral universities.</li>
        <li><strong>Baccalaureate or bachelor&rsquo;s colleges </strong>are those that award fewer than 50 master&rsquo;s degrees and 20 doctoral degrees per year, but award mostly bachelor&rsquo;s degrees or higher, as opposed to associate degrees. These colleges might offer undergraduates more direct access to professors and tend to be smaller than research universities</li>
        <li><strong>Two-year, associate, or community colleges </strong>are those that grant associate degrees and undergraduate certificates and sometimes a small number of bachelor&rsquo;s degrees. For some students, these colleges are stepping stones on the path to a four-year degree; for others, an associate degree is the credential they need to work in their field of choice.</li>
        <li><strong>Special-focus institutions </strong>award a high concentration of degrees in a specialized field or area, such as health professions, art and design, music, law, engineering, or theology.</li>
        <li><strong>Nondegree-granting institutions </strong>award certificates that can be valuable for professional advancement but not associate, bachelor&rsquo;s, or graduate degrees. </li>
      </ul>
    <h2>Institutions by Sector</h2>
      <p>In 2014, 7,108 postsecondary institutions were eligible to participate in federal financial aid programs and therefore required to provide data to the federal government. Of those, 4,627 (65 percent) were degree-granting institutions classified as public (35 percent), private nonprofit (36 percent), or for-profit (29 percent).</p>
      <Graph file={require('./json/01_0010.json')}/>
      <Box>
      <h3><em><strong>For-Profit Institutions</strong></em></h3>
      <p><em>The vast majority of college students are enrolled in public or private nonprofit colleges and universities. However, for-profit institutions have come to play a significant role in postsecondary education. In 2014</em>–<em>15, </em><a href="https://nces.ed.gov/programs/digest/d15/tables/dt15_317.10.asp" target="_blank"><em>1,334 (29 percent) of the 4,627</em></a><em> degree-granting institutions participating in federal student aid programs were for-profit. Most of these institutions are quite small, and together they enrolled </em><a href="https://nces.ed.gov/programs/digest/d15/tables/dt15_303.70.asp" target="_blank"><em>7 percent</em></a><em> of all undergraduate students.</em></p>
      <p><em>The for-profit sector grew dramatically during the first decade of the 21st century. It accounted for </em><a href="https://nces.ed.gov/programs/digest/d15/tables/dt15_303.70.asp" target="_blank"><em>3 percent of undergraduates in 2000 and 10 percent in 2010.</em></a><em> However, the sector has faced increasing pressure as accusations of </em><a href="http://www.nytimes.com/2016/06/23/business/corinthian-colleges-used-recruiting-incentives-documents-show.html?rref=collection%2Ftimestopic%2FCorinthian%20Colleges%20Inc.&amp;action=click&amp;contentCollection=business&amp;region=stream&amp;module=stream_unit&amp;vers" target="_blank"><em>fraud,</em></a><em> high student loan </em><a href="http://www2.ed.gov/offices/OSFAP/defaultmanagement/schooltyperates.pdf" target="_blank"><em>default rates</em></a><em>, and low </em><a href="https://nces.ed.gov/programs/digest/d15/tables/dt15_326.10.asp" target="_blank"><em>completion rates</em></a><em> have gained the attention of federal regulators and the press.</em></p>
      <p><em>Between 2010 and 2014, </em><a href="https://nces.ed.gov/programs/digest/d15/tables/dt15_317.10.asp" target="_blank"><em>undergraduate enrollment in the sector</em></a><em> declined by about 25 percent from 1.7 to 1.3 million students. The decline in tuition in the sector</em><em> is related to efforts to attract more students.</em></p>
    </Box>
      <p>The size of institutions varies significantly across sectors. A majority of for-profit institutions have undergraduate fall enrollments of fewer than 500, but only 7 percent of public and private nonprofit institutions are so small. Eighty percent of public four-year colleges enroll more than 5,000 undergraduates, but less than half of public two-year colleges and only 10 percent of private nonprofit four-year colleges are so large.</p>
      <Graph file={require('./json/01_0020.json')}/>
      <p>In addition to awarding different types of degrees, institutions in different sectors vary in their educational offerings for students. Some degree-granting institutions, particularly in the two-year public and for-profit sectors, focus primarily on preparing students for specific occupations, offering associate degrees and certificates in fields such as medical technology, cosmetology, and mechanics. In contrast, many four-year institutions concentrate on broader academic programs, even when they offer degrees in fields such as communications, engineering, and business.</p>
    <h2>Enrollment by sector</h2>
      <p>Because of the wide range of institutional sizes, the distribution of students across sectors is quite different from the distribution of institutions by sector.</p>
      <p>There were 20.2 million postsecondary students enrolled in degree-granting institutions in fall 2014. Of these, 17.3 million (86 percent) were undergraduate students. Among these undergraduates</p>
      <ul>
        <li>42 percent were enrolled in public associate colleges; </li>
        <li>33 percent were enrolled in public four-year colleges, including research and master&rsquo;s universities;</li>
        <li>14 percent were enrolled in private nonprofit four-year colleges, including research, master&rsquo;s, and bachelor&rsquo;s colleges and universities;</li>
        <li>7 percent were enrolled in the for-profit sector; and</li>
        <li>the remaining 5 percent were enrolled in other degree-granting institutions such as public bachelor&rsquo;s and private nonprofit two-year colleges.</li>
      </ul>
      <p>Enrollment patterns—whether a student enrolls full or part time—also differ by sector. Overall, 38 percent of college students enrolled part time in 2015–16, but 62 percent of students at public two-year colleges did so. </p>
      <Graph file={require('./json/01_0030.json')}/>
    <h2>Enrollment over time</h2>
      <p>Total undergraduate enrollment increased 9 percent between fall 1990 and fall 2000 and 38 percent between fall 2000 and fall 2010. It fell 4 percent, to 17.3 million, between 2010 and 2014.</p>
      <Graph file={require('./json/01_0040.json')}/>
      <p>The for-profit sector, which remains the smallest of the four major sectors with only 7 percent undergraduate students in fall 2014, grew dramatically from about 125,000 undergraduates in 1990 to a peak enrollment of 1.72 million undergraduates in 2010. Enrollment in the sector declined 26 percent to 1.28 million in 2014.</p>      
  </div>
);

let specifications = {
  'name': 'institutions',
  'title': 'Institutions',
  'content': <SinglePage content={singlepage} />
};

const Institutions = React.createClass({
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
util.printToPage('institutions', Institutions);

module.exports = Institutions;