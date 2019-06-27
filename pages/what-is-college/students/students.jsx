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
    <h1>Students</h1>
      <p><strong>Students from different backgrounds and of different ages attend different types of colleges and universities.</strong></p>
      <p>For example, most dependent students are enrolled in public or private nonprofit four-year colleges, and most independent students are enrolled in public two-year and for-profit colleges. Enrollment patterns also differ by age, income, race, and ethnicity.</p>
      <p>Describing all undergraduates provides the best picture of the student bodies at different types of institutions, but focusing only on first-year students provides a better perspective on where different types of students enroll. The composition of first-year students can differ quite a bit from the composition of the entire student body because some students are more likely than others to remain enrolled beyond the first year, and some students transfer, particularly from two-year to four-year colleges.</p>
      <p>Although 30 percent of undergraduates attend public colleges and universities that award primarily four-year degrees, only 14 percent of first-year students initially enroll in these institutions. In contrast, 44 percent of undergraduates attend public colleges that award primarily short-term degrees and certificates, but 60 percent of first-year students enroll in that sector.</p>
      <Graph file={require('./json/010201.json')}/>
    <h2>By Age and Dependency</h2>
      <p>Though most undergraduates are younger than 24, 14 percent are 30 or older, and another 10 percent are 40 or older. About half of undergraduates are dependent. Dependent students are younger than 24, are not married, have no dependents, and have no other characteristics that would make the financial aid system declare them independent of their parents.</p>
      <p>In 2015&ndash;16, 51 percent of independent undergraduates and 37 percent of dependent undergraduates were enrolled in public two-year colleges. Thirteen percent of independent students, compared with just 3 percent of dependent students, attended for-profit institutions.</p>
      <Graph file={require('./json/010202.json')}/>
      <p>In 2015&ndash;16, 4 percent of dependent first-year students enrolled in for-profit institutions, compared with 15 percent of independent students. Few first-year students older than 24 enroll in four-year public or private nonprofit colleges and universities.</p>
      <Graph file={require('./json/010203.json')}/>
    <h2>By Income</h2>
      <p>The median parental income among dependent students in 2015&ndash;16 was $63,000. A quarter of dependent undergraduates were from families with incomes below $27,900, and another quarter were from families with incomes above $113,500.</p>
      <p>Looking only at first-year students, a higher share came from low-income families and a lower share came from families with incomes of $113,500 or more. In other words, students from high-income backgrounds are more likely to stay in college beyond the first year.</p>
      <Graph file={require('./json/010204.json')}/>
      <p>Three-quarters of students from the top quartile of parental income were enrolled in four-year colleges, compared with 44 percent of students from the lowest income quartile.</p>
      <Graph file={require('./json/010205.json')}/>
      <p>Among dependent first-year students from the lowest income group, 8 percent enrolled in private nonprofit four-year institutions in 2015&ndash;16 and 60 percent enrolled in community colleges. Among first-year students from the highest income group, 22 percent enrolled in private nonprofit four-year institutions and 44 percent enrolled in community colleges.</p>
      <Graph file={require('./json/010206.json')}/>
    <h2>By Race and Ethnicity</h2>
      <p>About half of white and Asian students are enrolled in public or private nonprofit four-year colleges and universities. Smaller shares of black and Hispanic students are in these sectors. They are more likely to attend community colleges or for-profit institutions.</p>
      <Graph file={require('./json/010207.json')}/>
      <p>A smaller share of black first-year students than of those from other groups enrolled in public two-year colleges in 2015&ndash;16. Black students were more likely than others to attend for-profit and non-degree-granting institutions.&nbsp;Eight percent of black and 7 percent of Asian first-year students enrolled in private nonprofit colleges and universities.</p>
      <Graph file={require('./json/010208.json')}/>
    <h2>By Attendance Pattern</h2>
      <p>Forty-three percent of undergraduates are enrolled exclusively full time, and 9 percent are enrolled exclusively less than half time. Eighty percent of students enrolled less than half time are in the public two-year sector, compared with 24 percent of those enrolled full time.</p>
      <Graph file={require('./json/010209.json')}/>
      <p>Very few students who enroll part time their first year attend institutions other than public two-year colleges. Thirty-five percent of full-time first-year students were in this sector in 2015&ndash;16, compared with 71 to 91 percent of those with enrollment patterns that include at least some part-time attendance.</p>
      <Graph file={require('./json/010210.json')}/>   
  </div>
);

let specifications = {
  'name': 'students',
  'title': 'Students',
  'content': <SinglePage content={singlepage} />
};

const Students = React.createClass({
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
util.printToPage('students', Students);

module.exports = Students;