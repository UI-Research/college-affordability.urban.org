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
      <p>College is not just ivy-covered dormitories where 18-year-olds go to earn a bachelor&rsquo;s degree. In fact, the selective institutions that sometimes dominate the headlines represent a small share of undergraduate enrollment&mdash;only <a href="https://nces.ed.gov/programs/digest/d17/tables/dt17_305.40.asp" target="_blank">21 percent of undergraduates</a> attend colleges that accept fewer than 50 percent of applicants.</p>
      <p>Variation in ownership and mission defines the different sectors of higher education:</p>
      <ul>
        <li><strong>Public colleges and universities </strong>are under the purview of state and local governments. They receive funding through state tax revenues and tend to offer lower tuition to in-state residents than to other students.</li>
        <li><strong>Private nonprofit institutions </strong>have no owners and are governed by a boards of trustees. Like all nonprofits, they use revenues to run the institution, not to earn profits. Most private colleges and universities are independent, though some are affiliated with religious organizations.</li>
        <li><strong>For-profit colleges</strong> are owned by individuals, partnerships, or firms or are publicly held by shareholders. Owners can earn a profit from revenues.</li>
      </ul>
      <p>Different institutions also offer different types of degrees:</p>
      <ul>
        <li><strong>Doctoral or research universities </strong>award at least 20 research or scholarship doctoral degrees, generally PhDs, each year. For undergraduates, doctoral universities might offer more opportunities to be involved with advanced research, but they also might use PhD students, rather than professors, to teach some classes. Flagship public universities are generally doctoral institutions.</li>
        <li><strong>Master&rsquo;s universities </strong>award at least 50 master&rsquo;s degrees a year and fewer than 20 doctoral degrees. These institutions have graduate students, but graduate education tends to be less of a focus than at doctoral universities. Master&rsquo;s universities are generally less selective at the undergraduate level than doctoral universities.</li>
        <li><strong>Baccalaureate or bachelor&rsquo;s colleges </strong>award fewer than 50 master&rsquo;s degrees and 20 doctoral degrees a year but award mostly bachelor&rsquo;s degrees or higher, as opposed to associate degrees. These colleges might offer undergraduates more direct access to professors and tend to be smaller than research universities.</li>
        <li><strong>Two-year, associate, or community colleges </strong>grant associate degrees and undergraduate certificates and sometimes bachelor&rsquo;s degrees. For some students, these colleges are stepping stones on the path to a four-year degree. For others, an associate degree is the credential they need to work in their field of choice.</li>
        <li><strong>Special-focus institutions </strong>award a high concentration of degrees in a specialized field or area, such as health professions, art and design, music, law, engineering, or theology.</li>
        <li><strong>Non-degree-granting institutions </strong>award certificates that can be valuable for professional advancement but not associate, bachelor&rsquo;s, or graduate degrees.</li>
      </ul>
    <h2>Institutions by Sector</h2>
      <p>In 2017, 6,606 postsecondary institutions were eligible to participate in federal financial aid programs and were required to provide data to the federal government. Of those, 4,237 (64 percent) were degree-granting institutions classified as public (39 percent), private nonprofit (38 percent), or for-profit (23 percent).</p>
      <Graph file={require('./json/010101.json')}/>
      <Box>
      <h3><em><strong>For-Profit Institutions</strong></em></h3>
      <p><em>Most college students are enrolled in public or private nonprofit colleges and universities. But for-profit institutions have come to play a significant role in postsecondary education. In 2017<strong> 958 (23 percent) of the 4,237</strong></em><em> degree-granting institutions participating in federal student aid </em><em>programs were for-profit. Most of these institutions are small, and together, they enrolled 818,000 undergraduate students&emdash;5 percent of the total.</em></p>
      <p><em>The for-profit sector grew dramatically during the first decade of the 21st century. It accounted for </em><a href="https://nces.ed.gov/programs/digest/d17/tables/dt17_303.70.asp" target="_blank"><em><strong>3 percent of undergraduates in 2000 and 10 percent in 2010.</strong></em></a><em> But the sector has faced increasing pressure as accusations of </em><a href="http://www.nytimes.com/2016/06/23/business/corinthian-colleges-used-recruiting-incentives-documents-show.html?rref=collection%2Ftimestopic%2FCorinthian%20Colleges%20Inc.&amp;action=click&amp;contentCollection=business&amp;region=stream&amp;module=stream_unit&amp;vers" target="_blank"><em><strong>fraud,</strong></em></a><em> high student loan </em><a href="http://www2.ed.gov/offices/OSFAP/defaultmanagement/schooltyperates.pdf" target="_blank"><em><strong>default rates</strong></em></a><em>, and low </em><a href="https://nces.ed.gov/programs/digest/d15/tables/dt15_326.10.asp" target="_blank"><em><strong>completion rates</strong></em></a><em> have gained the attention of federal regulators and the press.</em></p>
      <p><em>Between 2010 and 2017, </em><a href="https://nces.ed.gov/programs/digest/d17/tables/dt17_303.70.asp" target="_blank"><em><strong>undergraduate enrollment in the sector</strong></em></a><em> declined by more than 50 percent from 1.7 to 0.8 million students. The decline in tuition in the sector is related to efforts to attract more students.</em></p>
    </Box>
      <p>Institution size varies significantly across sectors. Most for-profit institutions enroll fewer than 1,000 undergraduates each fall, but only 3 percent of public and 27 percent of private nonprofit institutions are so small. Over ninety of public research universities enroll more than 5,000 undergraduates, but less than half of public two-year colleges and 60 percent of private nonprofit research universities are so large.</p>
      <Graph file={require('./json/010102.json')}/>
      <p>In addition to awarding different types of degrees, institutions in different sectors vary in their educational offerings. Some degree-granting institutions, particularly in the two-year public and for-profit sectors, focus on preparing students for specific occupations, offering associate degrees and certificates in such fields as medical technology, cosmetology, and mechanics. In contrast, many four-year institutions concentrate on broader academic programs, even when they offer degrees in such fields as communications, engineering, and business.</p>
    <h2>Enrollment by Sector</h2>
      <p>Because of the wide range of institutional sizes, the distribution of students across sectors is different from the distribution of institutions by sector.</p>
      <p>There were 19.7 million postsecondary students enrolled in degree-granting institutions in fall 2017. Of these, 16.7 million (85 percent) were undergraduate students. Among these undergraduates,</p>
      <ul>
        <li>40 percent were enrolled in public associate colleges;</li>
        <li>38 percent were enrolled in public four-year colleges, including research, master&rsquo;s, and bachelor&rsquo;s colleges and universities;</li>
        <li>15 percent were enrolled in private nonprofit four-year colleges, including research, master&rsquo;s, and bachelor&rsquo;s colleges and universities; and</li>
        <li>5 percent were enrolled in the for-profit sector.</li>
      </ul>
      <p>Enrollment patterns&mdash;whether students enroll full time or part time&mdash;also differ by sector. Thirty-eight percent of college students enrolled part time in fall 2017, but 64 percent of students at public two-year colleges did so.</p>
      <Graph file={require('./json/010103.json')}/>
    <h2>Enrollment over Time</h2>
      <p>Total undergraduate fall enrollment increased 10 percent between fall 1990 and fall 2000 and 37 percent between fall 2000 and fall 2010. It fell 7 percent, to 16.8 million, between 2010 and 2016.</p>
      <Graph file={require('./json/010104.json')}/>
      <p>The for-profit sector, which remains the smallest of the four major sectors with only 5 percent of all undergraduate students in fall 2016, grew dramatically from 206,000,000 undergraduates in 1990 to a peak enrollment of 1.73 million undergraduates in 2010. Enrollment in the sector declined 47 percent to 915,000 in 2015.</p>     
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