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
    <h1>Breaking Even</h1>
    <h2>Defining Higher Education</h2>

    <ul>
      <li><a href="#">Degree-granting institutions by sector and degree-type in fall 2014</a></li>
      <li><a href="#">Distribution of degree-granting institutions in each sector by size of undergraduate enrollment in fall 2014</a></li>
      <li><a href="#">Enrollment Patterns by Sector</a></li>
      <li><a href="#">Undergraduate and Graduate Postsecondary Enrollment</a></li>
      <li><a href="#">Enrollment Sector by Age and Dependency: All Undergraduates</a></li>
      <li><a href="#">Undergraduates by Parent Income</a></li>
      <li><a href="#">Enrollment Patterns by Race and Ethnicity</a></li>
      <li><a href="#">Dependency between sectors</a></li>
      <li><a href="#">Income distribution of dependent students within sectors</a></li>
      <li><a href="#">Age within sectors</a></li>
      <li><a href="#">Distribution of family income among all dependent undergraduates versus first-year only</a></li>
      <li><a href="#">Distribution of enrollment by sector among all undergraduates versus first-year only</a></li>
      <li><a href="#">Enrollment Sector by Age and Dependency: First Year Undergraduates</a></li>
      <li><a href="#">Enrollment Sectors of Dependent First-year students by parent income</a></li>
      <li><a href="#">Enrollment Patterns by Race and Ethnicity, First-year students</a></li>
      <li><a href="#">Sectors of full-time and part-time forts-year students</a></li>
    </ul>

    <p>Students see the prices colleges charge, but what they might not realize is that the tuition amount they see is only a fraction of what their education really costs.</p>
    <p>To educate a student, a college must pay for instructors, student services, administrative support, and maintenance, among other things. Average education and related spending1 per student varies considerably across sectors, partially because of differences in institutions’ activities. For example, public two-year colleges almost exclusively educate lower-level undergraduates, while public research universities educate these students, upper-level undergraduates, and graduate students, in addition to engaging in a significant amount of research activity.</p>
    <p>To cover costs, all colleges and universities use revenues from tuition and fees, but nonprofit colleges also supplement that revenue with their own resources, which include state and local tax revenues in the public sector and endowment income and annual giving in the private sector.</p>

    <h2>Topic 02</h2>
    <p>An institutional subsidy is the share of the total cost that is covered by the institution rather than by the students’ tuition. This share varies significantly both across sectors and within sectors. Though a student likely doesn’t know the size of the subsidy he’s receiving, it can be an important factor in determining the cost of his education.</p>
    <ul>
      <li><a href="#">Distribution of degree-granting institutions in each sector by size of undergraduate enrollment in fall 2014</a></li>
      <li><a href="#">Enrollment Patterns by Sector</a></li>
      <li><a href="#">Undergraduate and Graduate Postsecondary Enrollment</a></li>
      <li><a href="#">Enrollment Sector by Age and Dependency: All Undergraduates</a></li>
      <li><a href="#">Undergraduates by Parent Income</a></li>
      <li><a href="#">Enrollment Patterns by Race and Ethnicity</a></li>
      <li><a href="#">Dependency between sectors</a></li>
      <li><a href="#">Sectors of full-time and part-time forts-year students</a></li>
    </ul>

    <h2>Topic 03</h2>
    <p>At public colleges and universities, subsidies come in the form of state and local government appropriations. Over time, state funds have covered a smaller and smaller the portion of the cost of education at public colleges and universities. As state taxpayers foot less of the bill, students and families see tuition and fees rising.</p>
    <p>State tax revenues are the primary source of state and local funding for higher education institutions, but community colleges are also supported by local taxes. State and local appropriations are dedicated primarily to public colleges and universities, but some of the funds go to student aid, some benefit students in private colleges, and some are restricted funds for special purposes like research, agriculture, or medical education.</p>
    <ul>
      <li><a href="#">Enrollment Sectors of Dependent First-year students by parent income</a></li>
      <li><a href="#">Enrollment Patterns by Race and Ethnicity, First-year students</a></li>
      <li><a href="#">Sectors of full-time and part-time forts-year students</a></li>
    </ul>

    <h2>Topic 04</h2>
    <p>Many universities, primarily those in the private sector, use endowment funds as a means of subsidizing the cost of an education. Endowments come from donations to colleges and universities that are designated for investment, rather than immediate expenditure. Maintaining the principal of the endowment over time—as required by law for true endowments funds—means ensuring that the value of the funds keeps up with inflation. Additional income can be used either for expenditures or for reinvestment. Most institutions spend four to five percent of the endowment value each year. (The analyses below rely on the approximation that institutions receive 4.5% of their endowment as income each year.) Because of donor specifications, however, a substantial share of endowment funds are restricted-use, meaning they can only be spent for specifically prescribed purposes. Both public and private institutions hold endowments, but the vast majority of these funds are in the private sector. In both sectors, endowment assets are highly concentrated among a small number of institutions.</p>
    <p>Since institutions can only spend a limited percentage of their assets each year, their spending is constrained when stocks and other financial assets lose value.</p>
    <ul>
      <li><a href="#">Enrollment Patterns by Race and Ethnicity</a></li>
      <li><a href="#">Dependency between sectors</a></li>
      <li><a href="#">Income distribution of dependent students within sectors</a></li>
      <li><a href="#">Age within sectors</a></li>
      <li><a href="#">Distribution of family income among all dependent undergraduates versus first-year only</a></li>
      <li><a href="#">Distribution of enrollment by sector among all undergraduates versus first-year only</a></li>
      <li><a href="#">Enrollment Sector by Age and Dependency: First Year Undergraduates</a></li>

    </ul>
    <p>Private nonprofit research and private nonprofit bachelor’s institutions have much greater endowment income per student than other institutions on average, because these sectors include most of the institutions with large endowments.</p>

  </div>
);

let specifications = {
  'name': 'breaking-even',
  'title': 'Breaking Even',
  'content': <SinglePage content={singlepage} />
};

const ListingExample = React.createClass({
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
util.printToPage('listing-example', ListingExample);

module.exports = ListingExample;
