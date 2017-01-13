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
    <h1>Student Budgets</h1>
      <p>Tuition and fees aren&rsquo;t the only expenses facing college students. There are also books, supplies, and sometimes unanticipated fees for specific courses or activities. And then there is the cost of living while in college—students, like everyone else, must pay for housing, food, and transportation. These expenses all add up to the full student budget, frequently called the &ldquo;cost of attendance&rdquo; (COA). Every college and university provides an estimated COA, though the true amount of a student&rsquo;s budget will vary based on that student&rsquo;s unique circumstances.</p>
      <p>It is also important to remember that not every item in a student&rsquo;s budget is a cost specific to college. Still, students have to consider how they&rsquo;ll pay these living costs along with the other items in their budgets while <a href="../../prices-and-expenses/forgone-earnings/">earning less money</a> than they might be making otherwise. That calculus can help determine how affordable a college education is.</p>
    <h2>Total Cost of Attendance</h2>
      <p>Every postsecondary institution calculates its COA, the combination of the institution&rsquo;s sticker price  and estimates of all the other expenses full-time students are likely to incur. </p>
      <p>COA does not measure how much individual students actually spend, but it is an estimate used to determine financial need for some forms of financial aid. </p>
      <p>Students should not put too much weight on differences in COAs from different colleges and universities, as it is not at all clear that the differences across institutions represent actual differences in the amounts they would have to spend. In fact, in addition to having incomplete information about the expenses students face, institutions may either overestimate or underestimate COA. A higher COA might discourage students from applying, but it can also increase the amount of federal financial aid some students receive.</p>
      <p><strong>As is the case for tuition and fees, COAs vary considerably within sectors.</strong></p>
      <Graph file={require('./json/03_0110.json')}/>
      <p>Because of the wide range of tuition and fees among private nonprofit four-year colleges and universities, COA also varies most widely in this sector. Here, the average COA for students in the top COA quintile is double the average for students in the bottom quintile. </p>
      <p>The average cost of attendance for the 20 percent of students attending private nonprofit four-year institutions with the lowest COA is similar to the average for the 20 percent of in-state students in public four-year institutions with the highest COAs.</p>
      <p><strong>Tuition and fees constitute the largest single component of estimated COA for students attending private four-year nonprofit institutions, for-profit colleges, and public four-year out-of-state institutions. But for students attending public two-year or public four-year colleges in their home states, room and board is the largest component of estimated COA. </strong></p>
      <Multiples title="Cost of Attendance by Sector from 2005–06 to 2015–16 in 2015 dollars" source="Jennifer Ma, Sandy Baum, Matea Pender, and D'Wayne Bell, Trends in College Pricing 2015 (New York: College Board, 2015).">
        <Graph file={require('./json/03_0121.json')} small="true"/>
        <Graph file={require('./json/03_0122.json')} small="true"/>
        <Graph file={require('./json/03_0123.json')} small="true"/>
        <Graph file={require('./json/03_0124.json')} small="true"/>
    </Multiples>
      <p><strong>Over time, tuition and fees have grown as a portion of total student budgets in all sectors except the for-profit sector.</strong></p>
      <p>Still, tuition and fees make up less than 20 percent of the total estimated COA for students attending two-year in-district public colleges and less than 40 percent of total COA for students at four-year in-state colleges and universities.</p>
    <h2>Books and Supplies</h2>
      <p>Like tuition and fees, expenditures on books and supplies are a real cost of going to college, because they are only necessary when people are in school. We know from the data that students in all sectors of postsecondary education spend similar amounts on books and supplies, although there is variation by major.</p>
      <p><strong>The prices of textbooks have risen faster than inflation, but what students are spending on required books and supplies appears to have fallen over the last several years as students have found new ways to access resources, frequently online. </strong></p>
      <Graph file={require('./json/03_0140.json')}/>
      <p>An increasing amount of course material is available at no charge online, and alternative ways of obtaining materials are becoming more prevalent. Students may also opt not to buy all their textbooks. In addition, according to the National Association of College Stores, the average price of new textbooks has risen about twice as fast in recent years as the average price of used textbooks.</p>
      <Graph file={require('./json/03_0150.json')}/>
    <h2>Other Expenses</h2>
      <p>Other expenses students might encounter in college include transportation, toiletries, snack food, entertainment, and clothing. Individual students have considerably more discretion over these expenditures than they do over tuition and fees, transportation, and other components of their budgets.</p>
      <p><strong>On average, private four-year nonprofit colleges have lower estimates for other expenses in their reported COA than do other types of institutions.</strong></p>
  </div>
);

let specifications = {
  'name': 'student-budgets',
  'title': 'Student Budgets',
  'content': <SinglePage content={singlepage} />
};

const StudentBudgets = React.createClass({
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
util.printToPage('student-budgets', StudentBudgets);

module.exports = StudentBudgets;
