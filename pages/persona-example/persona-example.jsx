'use strict';

import React from 'react';
const Template = require('20-templates/default/default.jsx');
import Graph from '30-components/graphs/graph/graph.jsx';
import SinglePage from '30-components/singlepage/singlepage.jsx';

import util from 'util.jsx';


let singlepage = (
  <div>
    <h1>Independent</h1>

    <div className="media media--right-align">
      <div className="icon">
        <div className="icon__student">
        </div>
      </div>
    </div>

    <h2>Biographical Information</h2>

    <ul className="no-bullets">
      <li><strong>Type of Student:</strong> Independent</li>
      <li><strong>Enrolled:</strong> Part-time</li>
      <li><strong>Age:</strong> 25</li>
      <li><strong>Location:</strong> New York</li>
      <li><strong>Annual Income:</strong> $30,000</li>
    </ul>

    <hr />

    <p>Students see the prices colleges charge, but what they might not realize is that the tuition amount they see is only a fraction of what their education really costs.</p>
    <p>To educate a student, a college must pay for instructors, student services, administrative support, and maintenance, among other things. Average education and related spending1 per student varies considerably across sectors, partially because of differences in institutions’ activities. For example, public two-year colleges almost exclusively educate lower-level undergraduates, while public research universities educate these students, upper-level undergraduates, and graduate students, in addition to engaging in a significant amount of research activity.</p>
    <p>To cover costs, all colleges and universities use revenues from tuition and fees, but nonprofit colleges also supplement that revenue with their own resources, which include state and local tax revenues in the public sector and endowment income and annual giving in the private sector.</p>

    <h2>Choosing a Type of School</h2>
    <p>An institutional subsidy is the share of the total cost that is covered by the institution rather than by the students’ tuition. This share varies significantly both across sectors and within sectors. Though a student likely doesn’t know the size of the subsidy he’s receiving, it can be an important factor in determining the cost of his education.</p>
    <Graph title="Changes from FY 2000 in state and local support for higher education" file={require('./sample.js')} />

    <h2>Section Three</h2>
    <p><strong>While state support has been falling, local higher education support has been increasing.</strong> Still, in FY 2014, local support made up just 11 percent of state and local support for higher education</p>




    <h2>Section Four</h2>
    <p>Many universities, primarily those in the private sector, use endowment funds as a means of subsidizing the cost of an education. Endowments come from donations to colleges and universities that are designated for investment, rather than immediate expenditure. Maintaining the principal of the endowment over time—as required by law for true endowments funds—means ensuring that the value of the funds keeps up with inflation. Additional income can be used either for expenditures or for reinvestment. Most institutions spend four to five percent of the endowment value each year. (The analyses below rely on the approximation that institutions receive 4.5% of their endowment as income each year.) Because of donor specifications, however, a substantial share of endowment funds are restricted-use, meaning they can only be spent for specifically prescribed purposes. Both public and private institutions hold endowments, but the vast majority of these funds are in the private sector. In both sectors, endowment assets are highly concentrated among a small number of institutions.</p>

    <Graph title="Average endowment income per student by levels of selectivity" file={require('./sample2.js')} />
  </div>
);

let specifications = {
  'name': 'persona-example',
  'content': <SinglePage content={singlepage} />
};

const PersonaExample = React.createClass({
  render: function() {
    return (
      <Template title="Independent" machineName={specifications.name} includeHTML={this.props.includeHTML}>
        {specifications.content}
      </Template>
    );
  }
});


if (util.canUseDOM()) {
  require('./' + specifications.name.toLowerCase() + '.scss');
}
util.printToPage('persona-example', PersonaExample);

module.exports = PersonaExample;
