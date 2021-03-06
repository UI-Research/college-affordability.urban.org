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
      <p>The time it takes to earn a degree varies depending on a number of factors, including choices students make, and those choices can affect the price of college. Although taking fewer classes may give students more time to work, increasing their in-school earnings and the resources they have available to pay for college, taking longer to graduate increases the degree&rsquo;s net price. This strategy can also increase forgone earnings, reduce financial aid, and increase the amount of debt students accumulate.</p>
      <Box>
        <h3><em>Time Enrolled versus Time Elapsed</em></h3>
        <p><em>The number of years a student is enrolled in college may differ from the number of years that elapse between first enrolling and completing a degree. A student who enrolls half time will take two years to complete one full-time year of enrollment. Some students take time off. Some students go to summer school, enrolling for more than one year of school during a calendar year.</em></p>
        <p><em>Students who earned bachelor&rsquo;s degrees in 2014&ndash;15 were enrolled for an average of 5.1 years, but 5.7 calendar years elapsed between the beginning and the end of their studies. Students who earned associate degrees at two-year public colleges were enrolled for 3.4 years over an average of 5.6 years. Time enrolled is a better indicator of the price of a college education than time elapsed.</em></p>
        <p><em>The lower average time to degree for bachelor&rsquo;s degree recipients at private nonprofit four-year institutions reduces the price differential between earning a bachelor&rsquo;s degree at a private nonprofit college and going to a public college</em></p>
        <Graph file={require('./json/050501.json')}/></Box>
      <h2>How Long Are Students in College?</h2>
        <p><strong>Most students who complete their programs take longer than two years to complete an associate degree and more than four years to complete a bachelor&rsquo;s degree.</strong></p>
        <p>The time elapsed from initial enrollment to degree completion does not necessarily reflect how long students were enrolled. A student who takes a year off, for example, may still graduate after four years of enrollment, even though five years will have passed between starting college and graduation.</p>
        <p>Only 12 percent of 2014&ndash;15 bachelor’s degree recipients completed their bachelor’s degrees with four full-time academic years of enrollment or less. Others required at least an additional summer school term. Almost half were enrolled for more than five academic years. Students at private nonprofit institutions graduated more quickly than those in other sectors.</p>
        <Graph file={require('./json/050502.json')}/>
        <p>Only 7 percent of 2014&ndash;15 associate degree recipients completed their degrees in two academic years or less. Another 35 percent finished with three years full-time years of enrollment, but most students receiving associate degrees were enrolled for at least four years.</p>
        <p>One reason it is so common for associate degree recipients to take longer than two years to graduate is that many of these students attend college part time while working.</p>
        <Graph file={require('./json/050503.json')}/>
        
      <h2>The Price of a Degree versus the Price of a Year</h2>
        <p><strong>Extra years of enrollment add significantly to the price of a bachelor&rsquo;s degree.</strong></p>
        <p>For example, a student paying the full sticker price of tuition and fees and room and board at an in-state public four-year university at 2018&ndash;19 prices would pay $85,500 in tuition, fees, room, and board over four years. But enrolling full time for five years would cost $106,900, and for six years the charges would be $128,200.</p>
      <Multiples 
      title="Tuition and Fees and Room and Board over Four, Five, and Six years, 2017–18 Prices"
      source="Jennifer Ma, Sandy Baum, Matea Pender, and Meredith Welch, <em>Trends in College Pricing 2018 </em>(New York: College Board, 2016), table 1A."
      >
        <Graph file={require('./json/050504.json')} small="true"/>
        <Graph file={require('./json/050505.json')} small="true"/>
      </Multiples>
        <Box>
          <h3>Debt Burden and Time to Degree</h3>
          <p><em><strong>Higher expenses associated with longer times to degree mean that students who spend more time in college accumulate higher debts. </strong></em><em>Pell grants are available for as many as 12 semesters of full-time study, but many state and institutional grants are available for only four years of undergraduate enrollment.</em></p>
          <Graph file={require('./json/050506.json')}/>
        </Box>
        <p>Staying in school longer also means students forgo more <a href="http://collegeaffordability.urban.org/prices-and-expenses/forgone-earnings/">potential earnings</a>. Adding forgone earnings to tuition and fees and the cost of books and supplies gives the most accurate picture of the actual price of more time in college.</p>
        <p>The relevant forgone earnings for the fifth, sixth, and further years of undergraduate study are higher than those for the first four years, because a student who graduated in four years would be earning at the college-graduate level, not the high school&ndash;graduate level.</p>
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