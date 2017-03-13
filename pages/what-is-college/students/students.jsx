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
      <p>For example, a majority of dependent students are in public or private nonprofit four-year colleges, and most independent students are enrolled in public two-year and for-profit colleges. Enrollment patterns also differ by age, income, race, and ethnicity. </p>
      <p>Describing all undergraduates provides the best picture of the student bodies at different types of institutions, but focusing only on first-year students provides a better perspective on where different types of students choose to enroll. The composition of first-year students can differ quite a bit from the composition of the entire student body, because some students are more likely than others to remain enrolled beyond the first year and some transfer, particularly from two-year to four-year colleges.</p>
      <p>Although 27 percent of all undergraduates attend public four-year colleges and universities, only 13 percent of first-year students initially enroll in this sector. In contrast, 46 percent of all undergraduates attend public two-year colleges, but 58 percent of first-year students enroll in that sector.</p>
      <Graph file={require('./json/01_0050.json')}/>
    <h2>By Age and Dependency</h2>
      <p>Though the majority of undergraduates are under age 24, over 30 percent are in their 30s, and another 10 percent are age 40 or older. About half of all undergraduates are dependent. Dependent students are younger than 24, not married, without dependents of their own, and have no other characteristics that would make the financial aid system declare them independent of their parents.</p>
      <p>In 2011–12, 52 percent of all independent undergraduates and 39 percent of dependent undergraduates were enrolled in public two-year colleges. Eighteen percent of independent students, compared with just 4 percent of dependent students, attended for-profit institutions.</p>
      <Graph file={require('./json/01_0060.json')}/>
      <p>In 2011–12, 6 percent of dependent first-year students enrolled in for-profit institutions, compared with 22 percent of independent students. Very few first-year students over the age of 24 enroll in four-year public or private nonprofit colleges and universities.</p>
      <Graph file={require('./json/01_0070.json')}/>
    <h2>By Income</h2>
      <p>The median parental income among all dependent students in 2011–12 was about $65,000. A quarter of dependent undergraduates were from families with incomes lower than $30,000 and another quarter were from families with incomes higher than $106,000. </p>
      <p>Looking only at first-year students, a higher percentage came from low-income families and a lower percentage came from" families with incomes of $106,000 or more. In other words, those from higher-income backgrounds are more likely to stay in college beyond the first year.</p>
      <Graph file={require('./json/01_0080.json')}/>
      <p>About 70 percent of students from the top quartile of parental income were enrolled in four-year colleges, compared with about 40 percent of students from the lowest income quartile.</p>
      <Graph file={require('./json/01_0090.json')}/>
      <p>Among dependent first-year students from the lowest income group, 7 percent enrolled in private nonprofit four-year institutions in 2011&ndash;12 and 59 percent enrolled in community colleges. Among first-year students from the highest income group, 19 percent enrolled in private nonprofit four-year institutions and 45 percent enrolled in community colleges.</p>
      <Graph file={require('./json/01_0100.json')}/>
    <h2>By Race and Ethnicity</h2>
      <p>White and Asian students are more likely than black and Hispanic students to be enrolled in public and private nonprofit four-year colleges and universities. They are less likely to attend community colleges or for-profit institutions.</p>
      <Graph file={require('./json/01_0110.json')}/>
      <p>Twenty-one percent of black and 9 percent of Asian first-year students enrolled in for-profit institutions in 2011–12. Five percent of black and 12 percent of Asian first-year students enrolled in private nonprofit colleges and universities.</p>
      <Graph file={require('./json/01_0120.json')}/>
    <h2>By Attendance Pattern</h2>
      <p>About half of all undergraduates are enrolled exclusively full time and 10 percent are enrolled exclusively less than half time. Over 80 percent of students enrolled less than half time are in the public two-year sector, compared with 29 percent of those who are enrolled full time.</p>
      <Graph file={require('./json/01_0130.json')}/>
      <p>Very few students who enroll part time the first year they are in college attend institutions other than public two-year colleges. Approximately 40 percent of full-time first-year students were in this sector in 2011–12, compared with 69 percent to 90 percent of those with enrollment patterns that include at least some part-time attendance.</p>
      <Graph file={require('./json/01_0140.json')}/>   
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