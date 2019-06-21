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
      <p>Tuition and fees aren&rsquo;t the only expenses college students face. There are also books, supplies, and sometimes-unanticipated fees for specific courses or activities. And then there is the cost of living while in college. Students, like everyone else, must pay for housing, food, and transportation. These expenses add up to the full student budget, frequently called the &ldquo;cost of attendance&rdquo; (COA). Every college and university provides an estimated COA, though the true amount of a student&rsquo;s budget will vary based on that student&rsquo;s circumstances.</p>
      <p>Also, not every item in a student&rsquo;s budget is a cost specific to college. Still, students have to consider how they&rsquo;ll pay these living costs along with the other items in their budgets while <a href="http://collegeaffordability.urban.org/prices-and-expenses/forgone-earnings/"><strong>earning less money</strong></a> than they might be making otherwise. That calculus can help determine college affordability.</p>
    <h2>Total Cost of Attendance</h2>
      <p>Every postsecondary institution calculates its COA, the combination of the sticker price and estimates of all other expenses full-time students are likely to incur.</p>
      <p>COA does not measure how much students actually spend, but it is an estimate used to determine financial need for some forms of financial aid.</p>
      <p>Students should not put too much weight on differences in COAs from different colleges and universities, as it is not clear that the differences across institutions represent actual differences in the amounts they would have to spend. In fact, in addition to having incomplete information about the expenses students face, institutions may overestimate or underestimate COA. A high COA might discourage students from applying, but it can also increase the amount of federal financial aid some students receive.</p>
      <p><strong>As is the case for tuition and fees, COAs vary considerably within sectors.</strong></p>
      <Graph file={require('./json/030301.json')}/>
      <p>Because of the wide range of tuition and fees within the for-profit and private nonprofit four-year sectors, the average COA for students in the top COA quintile is double the average for students in the institutions in these sectors with the lowest student budgets.</p>
      <p>The average cost of attendance for the 20 percent of students attending private nonprofit four-year institutions with the lowest COAs is about $2,400 higher than the average for the 20 percent of in-state students in public four-year institutions with the highest COAs.</p>
      <p><strong>Tuition and fees constitute the largest component of estimated COA for students attending private four-year nonprofit institutions and for-profit colleges. But for students attending public two-year or public four-year colleges in their home states, room and board is the largest component of estimated COA.</strong></p>
      <Multiples 
        title="Cost of Attendance by Sector from 2002–03 to 2017–18 in 2017 Dollars" 
        source="Ma et al., Trends in College Pricing 2018, 2013, 2008, 2003.">
        <Graph file={require('./json/030302.json')} small="true"/>
        <Graph file={require('./json/030303.json')} small="true"/>
        <Graph file={require('./json/030304.json')} small="true"/>
        <Graph file={require('./json/030305.json')} small="true"/>
    </Multiples>
      <p>Tuition and fees make up only 20 percent of the total estimated COA for students attending two-year in-district public colleges and 40 percent of total COA for students at four-year in-state colleges and universities.</p>
    <h2>Books and Supplies</h2>
      <p>Like tuition and fees, expenditures on books and supplies are a real cost of going to college because they are necessary only when people are in school. We know from the data that students in all sectors of postsecondary education spend similar amounts on books and supplies, although there is variation by major.</p>
      <p><strong>Textbook prices have risen faster than inflation, but what students are spending on required books and supplies appears to have fallen over the past several years as students have found new ways to access resources, frequently online.</strong></p>
      <Graph file={require('./json/030306.json')}/>
      <p>An increasing amount of course material is available at no charge online, and alternative ways of obtaining materials are becoming more prevalent. Students may also opt not to buy all their textbooks. In addition, according to the National Association of College Stores, the average price of new textbooks has risen about twice as fast in recent years as the average price of used textbooks.</p>
      <Graph file={require('./json/030307.json')}/>
    <h2>Other Expenses</h2>
      <p>Other expenses students might encounter in college include transportation, toiletries, snack food, entertainment, and clothing. Individual students have more discretion over these expenditures than they do over tuition and fees and other components of their budgets.</p>
      <p><strong>On average, private four-year nonprofit colleges have lower estimates for other expenses in their reported COAs than do other types of institutions.</strong></p>
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
