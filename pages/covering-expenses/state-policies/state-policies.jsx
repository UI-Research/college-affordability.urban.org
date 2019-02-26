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
    <h1>Making College More Affordable: State Policies and Programs</h1>
    <p>Both the options and the challenges students and families face in financing higher education vary considerably from state to state&mdash;and states are taking different steps to address the challenges.</p>
<p>In addition to providing funding to colleges and universities to cover some of the costs of their operations, most states have grant programs for students. Some states are making efforts to lower or even eliminate tuition at some or all public colleges. But state policies that support stronger academic preparation for K&ndash;12 students or facilitate transfer across institutions can also make college more affordable by increasing completion rates and reducing time to degree.</p>
<p>Here, we explore some different levers states are using to address college affordability.</p>
<h2>State Funding</h2>
<p>About <a href="http://www.nassgap.org/survey/NASSGAP_Report_14-15_final.pdf" target="_blank">13 percent of state fiscal support</a> for higher education goes to <a href="http://collegeaffordability.urban.org/financial-aid/state/">grant programs for students</a>. Most of the remaining 87 percent goes <a href="http://collegeaffordability.urban.org/cost-of-educating/appropriations/">directly to colleges and universities to</a> fund their operations, allowing them to charge lower tuition prices than would be required to cover the full cost of education.</p>
<Graph file={require('./json/state-policies.json')}/>
<p>In <a href="https://trends.collegeboard.org/college-pricing/figures-tables/tuition-fees-sector-state-over-time" target="_blank">2017&ndash;18</a>, the average published price of tuition and fees for a full-time in-state student at a public four-year college ranges from $5,220 in Wyoming and $6,360 in Florida to $16,040 in Vermont and $16,070 in New Hampshire. At public two-year colleges, the range is from $1,430 in California and $1,760 in New Mexico to $6,850 in New Hampshire and $7,980 in Vermont.</p>
<p>Though other factors contribute, state higher education funding policies affect tuition prices. New Hampshire and Vermont, with the highest tuition levels for residents, have <a href="http://collegeaffordability.urban.org/cost-of-educating/appropriations/#/variation_across_states">the lowest appropriations per student</a>. Wyoming&rsquo;s appropriations are high, second only to Alaska&rsquo;s. In California and New Mexico, funding per student is higher than the national average, but Florida maintains low tuition while providing below-average funding to its institutions. One factor may be that a large share of Florida&rsquo;s students attend public two-year colleges, where spending per student is much lower than at four-year institutions.</p>
<h2>State Grant Programs</h2>
<p>States take different approaches to allocating and distributing <a href="http://collegeaffordability.urban.org/financial-aid/state/">grant aid</a>. In <a href="http://collegeaffordability.urban.org/financial-aid/state/#/who_receives_state_grant_aid_">2014&ndash;15</a>, South Carolina, where only 17 percent of aid was allocated based on students&rsquo; financial circumstances, awarded $2,000 per full-time equivalent student in state grant aid. Washington had the most generous entirely need-based program, awarding $1,400 per student. New Hampshire had no state grant program, and Alabama awarded only $26 dollars per student.</p>
<p><strong>Indiana</strong></p>
<p><a href="http://www.indiana.edu/~iub21cs/?q=node/3)" target="_blank">Indiana&rsquo;s 21st Century Scholars</a> program engages with low-income seventh- and eighth-grade students to encourage them to prepare for college. The program promises students eligible for free or reduced-price lunches that they will have up to four years&rsquo; tuition and fees covered at an Indiana public college or university with a combination of state and institutional grants if they meet a set of eligibility criteria.</p>
<p><strong>Minnesota</strong></p>
<p>Minnesota uses a <a href="https://www.ohe.state.mn.us/mPg.cfm?pageID=138" target="_blank">&ldquo;shared responsibility&rdquo; model</a> that bases students&rsquo; grant aid on the difference between the full <a href="http://collegeaffordability.urban.org/prices-and-expenses/student-budgets/">cost of attendance</a> at their institution and their <a href="http://collegeaffordability.urban.org/financial-aid/financial-need/">expected family contribution</a>. Students receive larger grants if they enroll in more courses, up to a maximum of 15 credit hours.</p>
<p><strong>Georgia</strong></p>
<p><a href="https://gsfc.georgia.gov/hope" target="_blank">Georgia&rsquo;s Hope Scholarship</a> program bases awards on students&rsquo; high school grade point averages rather than on financial circumstances. Students with the best academic records receive the largest awards.</p>
<h2>College Promise Programs</h2>
<p>A growing number of states and localities are implementing programs that <a href="https://ahead-penn.org/creating-knowledge/college-promise" target="_blank">promise</a> some students that they will not have to pay tuition and fees at public two-year colleges and, in some cases, at any public colleges. Most of these programs are &ldquo;last dollar&rdquo; programs, filling in the gap between federal and state grant aid and tuition and fee prices. Because low-income students frequently receive <a href="http://collegeaffordability.urban.org/prices-and-expenses/net-price/#/by_income" target="_blank">need-based grants that cover these charges</a>, most of the incremental dollars go to students whose incomes are too high for need-based grants.</p>
<p><strong>Tennessee</strong></p>
<p>Tennessee led the way on <a href="http://tnpromise.gov/about.shtml" target="_blank">&ldquo;free community college&rdquo;</a> programs, beginning with students enrolling in fall 2015. The program fills in the gaps between other grant aid students receive and tuition at two-year public colleges in the state. It also provides mentoring to students</p>
<p><strong>Oregon</strong></p>
<p>The <a href="https://oregonstudentaid.gov/oregon-promise.aspx" target="_blank">Oregon Promise</a> program is similar to Tennessee&rsquo;s, but, because of funding shortages, the state has added income requirements.</p>
<p><strong>New York</strong></p>
<p>Beginning in fall 2017, New York&rsquo;s <a href="https://www.hesc.ny.gov/pay-for-college/financial-aid/types-of-financial-aid/nys-grants-scholarships-awards/the-excelsior-scholarship.html" target="_blank">Excelsior Scholarship </a>promises free tuition for state residents with incomes below a specified level ($100,000 in 2017&ndash;18) enrolled full time at any public college or university in the state. The program pays the tuition not covered by federal and other state grant aid and requires that recipients live and work in the state after they leave college for as many years as they received the award.</p>
<h2>Improving College Preparation</h2>
<p>States can make college more affordable for students by improving K&ndash;12 education and supporting higher levels of academic preparation for college. If students are ready to do college-level work, they can avoid paying for developmental (remedial) classes in college and reduce the time it takes them to earn their degrees.</p>
<p><strong>California</strong></p>
<p>The California <a href="https://www.calstate.edu/eap/about.shtml" target="_blank">Early Assessment Program</a> (EAP) incorporates California State University&rsquo;s placement standards into existing high school standardized tests in English and mathematics. The partnership between Cal State, the California Department of Education, and the State Board of Education is designed to ensure that public high school graduates have the English and mathematics skills state universities require. The EAP has three components: early testing, the opportunity for additional preparation in the 12th grade, and professional development activities for high school English and mathematics teachers. Students whose 11th-grade tests reveal that that they need more work can get the required preparation during their senior year of high school.</p>
<p><strong>Maryland</strong></p>
<p>Maryland has implemented requirements for <a href="http://www.baltimoresun.com/news/maryland/education/bs-md-seniors-remediation-20160708-story.htmlhttp:/www.baltimoresun.com/news/maryland/education/bs-md-seniors-remediation-20160708-story.html" target="_blank">&ldquo;transitional&rdquo; classes</a> for high school seniors whose 11<sup>th</sup>-grade test scores indicate that they are not ready for college-level work. The goal is to reduce the share of students who have to spend time in college making up for inadequate high school preparation.</p>
<p><strong>Virginia</strong></p>
<p>Virginia designed &ldquo;capstone courses&rdquo; in English and mathematics as a central part of the state&rsquo;s College and Career Readiness Initiative. The courses are designed to help students prepare for college and avoid placement in developmental classes.</p>
<h2>Facilitating Transfer</h2>
<p>Another important step is to make it easier for students to transfer from one public institution in the state to another. Students <a href="https://nces.ed.gov/pubs2014/2014163.pdf" target="_blank">frequently lose credits and have to repeat courses</a> when they transfer schools, increasing time to degree and tuition paid.</p>
<p>Many states have <a href="http://ecs.force.com/mbdata/mbprofallRT?Rep=TA14A" target="_blank">transfer and articulation polices</a> that involve common course numbering across institutions or have guaranteed transfer of associate degree credits to meet general education requirements at public four-year institutions.</p>
<p><strong>Oregon</strong></p>
<p>State regulations ensure that students who have earned <a href="http://handbook.ccwdwebforms.net/handbook/definitions/associate-degrees/associates-of-arts-oregon-transfer-(aa-ot)" target="_blank">the Associate of Arts Oregon Transfer degree</a> will have met the lower division general education requirements of baccalaureate degree programs of any institution in the Oregon University System. These degrees must meet specified standards, and there is no guarantee that all the credits will meet the requirements for specific majors or programs. The degree enables students to transfer with junior status.</p>
<p><strong>New Jersey</strong></p>
<p>Under the <a href="https://www.njtransfer.org/" target="_blank">New Jersey Transfer</a> system, agreements between two-year and four-year institutions are intended to allow seamless transfer of academic credits from a completed associate of arts or associate of science degree program to a baccalaureate degree program. Students who enter with an associate degree are granted junior status.</p>
<p><strong>Minnesota</strong></p>
<p><a href="http://minnstate.edu/admissions/pathways.html" target="_blank">Minnesota State Transfer Pathways</a> promise students that if they complete an associate degree at a two-year Minnesota state college and are admitted to one of the seven Minnesota state universities, they will have junior status and all 60 credits will count toward the related bachelor&rsquo;s degree. The system has developed pathways in four fields, a step toward a more comprehensive system meeting a requirement from the state legislature.</p>
      
   
   
  </div>
);

let specifications = {
  'name': 'state-policies',
  'title': 'State Policies',
  'content': <SinglePage content={singlepage} />
};

const StatePolicies = React.createClass({
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
util.printToPage('state-policies', StatePolicies);

module.exports = StatePolicies;