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
    <h1>Grant Aid</h1>
      <p><strong>Grant aid, sometimes called scholarships or tuition discounts, lowers the price a student pays for college.</strong></p>
      <p>Unlike <a href="http://collegeaffordability.urban.org/covering-expenses/borrowing/">student loans</a>, grant aid does not have to be repaid. Subtracting grant aid from the cost of attendance yields the net price&mdash;the price a student actually pays. This matters more for college affordability than the sticker price.</p>
      <p>Typically, students get more grant aid if they attend private nonprofit colleges than if they attend public colleges, narrowing the gap between the prices of these institutions.</p>
      <p>Grant aid does not <a href="http://collegeaffordability.urban.org/financial-aid/grant-aid/#by_income_and_dependency_status">close the gap</a> in ability to pay for college between high-income and low-income families. Though low-income students tend to receive more grant aid, it is not enough to put them on equal footing with the highest-income families.</p>
    <h2>Sources of Grant Aid</h2>
      <p>Grants come from various sources: the federal government, state governments, colleges and universities, and employers or other private sources.</p>
      <ul>
        <li><a href="http://collegeaffordability.urban.org/financial-aid/institutional/">Institutional grant aid</a>, often called a scholarship, discounts tuition and fees based on need, academic qualifications, or other characteristics.</li>
        <li><a href="http://collegeaffordability.urban.org/financial-aid/federal/">Federal grant aid</a> typically targets low-income students and families. By far the largest program is the <a href="https://studentaid.ed.gov/sa/types/grants-scholarships/pell" target="_blank">Pell Grant Program</a>. In 2017&ndash;18, 7.0 million low-income students received up to $5,920 in Pell grant aid. About 1.4 million students also benefit from the Federal Supplemental Educational Opportunity Grant program, through which many colleges distribute federal funds to some low-income students. The federal government also provides aid to veterans and their dependents and members of the armed forces on active duty.</li>
        <li><a href="http://collegeaffordability.urban.org/financial-aid/other/">Private and employer grant aid</a> includes scholarships from private sources, such as foundations, as well as educational stipends from employers.</li>
        <li><a href="http://collegeaffordability.urban.org/financial-aid/state/">State grant aid</a> varies widely by state and supports students based on need or academic merit. Most states provide this aid only to students who remain in the state to attend public or private colleges.</li>
      </ul>
      <p><strong>Eighty-seven percent of the grant aid supporting undergraduate students comes either from the federal government or from colleges and universities.</strong></p>
    <Graph file={require('./json/040201.json')}/>
    <p>The national distribution of grant aid by source does not represent what typical students in any type of institution receive because grant aid varies by type of institution and student.</p>
  <h2>By Sector</h2>
    <p><strong>Regardless of income or dependency status, students receive the most grant aid at private nonprofit four-year institutions and the least at public two-year and for-profit institutions.</strong></p>
    <p>The sources of that aid differ. Students in public two-year institutions get most of their grant aid from the&nbsp;federal government; those attending private nonprofit four-year colleges and universities get almost three-quarters of their grants from their institutions.</p>
    <p>Some grant aid follows students no matter where they enroll. For example, students get the same Pell grant wherever they go to college. But other grant aid, particularly institutional grant aid and Federal Supplemental Educational Opportunity Grant funds, differ depending on the institution.</p>
    <Graph file={require('./json/040202.json')}/>
  <h2>By Income and Dependency Status</h2>
    <p><strong>Independent and dependent students are equally likely to receive grant aid, but independent students are more likely to receive federal grants and military/veterans benefits, and dependent students are more likely to receive each of the other types of grants.</strong></p>
    <Multiples 
      title="Grant Aid by Source for Independent and Dependent Students, by Sector, 2015–16" 
      source="2016 National Postsecondary Student Aid Study."
    >
        <Graph file={require('./json/040203.json')} small="true"/>
        <Graph file={require('./json/040204.json')} small="true"/>
    </Multiples>
    <p><strong>Within each sector, dependent students from families with lower incomes receive more aid than those from more affluent families, but the aid is not nearly enough to make up for differences in ability to pay.</strong> For example, the average full-time student in a private nonprofit four-year college or university whose family income was $160,000 or higher received more than half the average grant that students from families with incomes of less than $27,900 received in 2015&ndash;16, despite having more than five times the resources.</p>
    <Graph file={require('./json/040205.json')}/>
    <Box>
      <h3><em>How Do Colleges Assess the Income of an Independent Student?</em></h3>
      <p><em>Categorizing dependent students according to their parents&rsquo; incomes is a meaningful way to differentiate among those who can comfortably pay for college with assistance from their parents, those whose parents are not in a position to help at all, and those whose circumstances are between these two extremes. The incomes of independent students are much more difficult to interpret, however.</em></p>
      <p><em>Knowing how much students earned a year or two before they enrolled in college doesn&rsquo;t provide much information about how much they will be able to earn while they are in college. The reality is that the vast majority of independent students have very low incomes, but this does not necessarily mean that they come from low-income backgrounds. </em></p>
      <p><em>Some students choose to work more hours than others, but there is not much variation in students&rsquo; capacity to earn while they are undergraduates—at least within geographical areas.  For this reason, the analyses on this website treat independent students as one group, regardless of their reported incomes.</em></p>
      </Box>
  </div>
);

let specifications = {
  'name': 'grant-aid',
  'title': 'Grant Aid',
  'content': <SinglePage content={singlepage} />
};

const GrantAid = React.createClass({
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
util.printToPage('grant-aid', GrantAid);

module.exports = GrantAid;
