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
    <h1>Time to Degree </h1>
      <p>The time it takes to earn a degree varies depending on a number of factors, including some choices students make, and those choices can affect the price of college. Although taking fewer classes may give students more time to work, increasing their in-school earnings and the resources they have available to pay for college, taking longer to graduate increases the net price of the degree. This strategy can also increase forgone earnings, reduce financial aid, and increase the amount of debt students accumulate. </p>
      <Box>
        <h3><em>Time Enrolled Versus Time Elapsed</em></h3>
        <p><em>The number of years a student is actually enrolled in college may differ from the number of years that elapse between first enrolling and completing a degree. A student who enrolls half time will take two years to complete one full-time year of enrollment. Some students take time off. Some students go to summer school, enrolling for more than one year of school during a calendar year.</em></p>
        <p><em>Students who earned bachelor&rsquo;s degrees in 2014–15 were enrolled for an average of 5.1 years, but 5.7 calendar years elapsed between the beginning and the end of their studies. Students who earned associate degrees at two-year public colleges were enrolled for 3.4 years over an average of 5.6 years. Time enrolled is a better indicator of the price of a college education than time elapsed.</em></p>
        <p><em>The lower average time to degree for bachelor&rsquo;s degree recipients at private nonprofit four-year institutions reduces the price differential between earning a bachelor&rsquo;s degree at a private nonprofit college and going to a public college.</em></p>
        <Graph file={require('./json/050501.json')}/></Box>
      <h2>How Long Are Students in College?</h2>
        <p><strong>The majority of students who complete their programs take longer than two years to complete an associate degree and longer than four years to complete a bachelor&rsquo;s degree. </strong></p>
        <p>The time elapsed does not necessarily reflect how long students were enrolled. A student who takes a year off, for example, may still graduate after four years of enrollment, even though five years will have passed between starting college and graduation. There is no good measure of time enrolled, however, so here we examine time elapsed.</p>
        <p>Forty-five percent of 2011–12 bachelor&rsquo;s degree recipients completed their degrees within four years and another 25 percent finished within five years. But for 30 percent of students, six years or more elapsed before they received their bachelor&rsquo;s degrees.</p>
        <Graph file={require('./json/050502.json')}/>
        <p>Students may take longer than expected to complete their degrees for a variety of reasons. Some spend time in developmental classes, which do not count toward a degree, preparing for college-level work; some do not complete an average of 15 credit hours each semester; others may take too many courses that do not fulfill their degree requirements. </p>
        <p>On-time completion rates are even lower for associate degrees. <strong>A majority of students earning associate degrees in 2011–12 took more than two years to complete their programs in both the public two-year and for-profit sectors.</strong></p>
        <Graph file={require('./json/050503.json')}/>
        <p>Only 23 percent of 2011–12 associate degree recipients completed their degrees in two years or less. Another 19 percent finished within three years, but a majority of students receiving associate degrees took at least four years to graduate. </p>
        <p>One reason it is so common for associate degree recipients to take longer than two years to graduate is that a high proportion of these students attend college part time while working.</p>
      <h2>The Price of a Degree versus the Price of a Year</h2>
        <p><strong>Extra years of enrollment add significantly to the price of a bachelor&rsquo;s degree.</strong></p>
        <p>For example, a student paying the full sticker price of tuition and fees and room and board at an in-state public four-year university at 2016&ndash;17 prices would pay $80,400 over four years. But enrolling full time for five years would cost $100,500, and for six years the charges would be $120,500.</p>
      <Multiples 
      title="Tuition and Fees and Room and Board over four, five, and six years, 2015–16 prices"       
      source="Jennifer Ma, Sandy Baum, Matea Pender, and Meredith Welch, Trends in College Pricing 2016 (New York: College Board, 2016), table 1A."
      >
        <Graph file={require('./json/050504.json')} small="true"/>
        <Graph file={require('./json/050505.json')} small="true"/>
      </Multiples>
        <Box>
          <h3>Debt Burden and Time to Degree</h3>
          <p><strong><em>Higher expenses associated with longer times to degree mean that students in college longer accumulate higher debts. </em></strong><em>Pell grants are available for as many as 12 semesters of full-time study, but many state and institutional grants are available only for four years of undergraduate enrollment.<strong> </strong></em></p>
          <Graph file={require('./json/050506.json')}/>
        </Box>
        <p>Staying in school longer also means students forgo more <a href="../forgone-earnings">potential earnings</a>. Adding forgone earnings to tuition and fees and the cost of books and supplies gives the most accurate picture of the actual price of more time in college </p>
        <p>The relevant forgone earnings for the fifth, sixth, and further years of undergraduate study are higher than those for the first four years, since a student who graduated in four years would be earning at the college-graduate level—not the high school graduate level.</p>
        <p><strong>Staying out of the labor force for six years instead of four years to earn a bachelor&rsquo;s degree doubles forgone earnings.</strong></p>
        <Graph file={require('./json/050507.json')}/>  
  </div>
  
);

let specifications = {
  'name': 'time-to-degree',
  'title': 'Time to Degree',
  'content': <SinglePage content={singlepage} />
};

const TimeToDegree = React.createClass({
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
util.printToPage('time-to-degree', TimeToDegree);

module.exports = TimeToDegree;