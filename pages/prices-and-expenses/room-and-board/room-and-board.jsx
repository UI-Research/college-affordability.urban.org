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
    <h1>Room and Board</h1>
      <p><strong>Everyone, regardless of whether they&rsquo;re in college, must have housing and food. Room and board are not costs specific to college, although going to college might affect how much people have to pay for food, housing, and other living expenses.</strong></p>
      <p>The room and board charges discussed here are drawn from on-campus housing price at public and private nonprofit four-year colleges and universities. Estimated housing and food expenses for all students, on campus or off, are included in student budgets.</p>
    <h2>Room and Board by Type of Institution</h2>
      <p><strong>Over half of all full-time students enrolled in private nonprofit four-year colleges and universities live in college housing, compared with only one-third of public four-year college students—and virtually no students in other sectors. One-third of full-time undergraduate students live at home with their parents.</strong> For these families, living costs are likely not very different for college students than for high school students.</p>
      <Graph file={require('./json/03_0050.json')}/>
      <p><strong>Room and board charges vary much less by institution type than do tuition and fees.</strong> For example, room and board charges at bachelor’s colleges average $11,000 in the private nonprofit sector and $10,000 in the public sector in 2016&ndash;17.</p>
      <Graph file={require('./json/03_0060.json')}/>    
    <h2>Room and Board by State</h2>
      <p>Like all housing and rent prices, on-campus dorm prices and estimated off-campus housing costs vary both across and within states. College housing is most expensive in high-cost areas, such as New York, California, and other coastal states.</p>
      <Graph file={require('./json/03_0070.json')}/>
      <p><strong>On-campus housing prices do not always align with local rent prices. </strong>As the chart below shows, the price of living on campus at a four-year college is often much higher or much lower than the average rent paid by 18- to 24-year-olds in the same area. However, in the most populous states, such as New York, Texas, and California, the difference is relatively small.</p>
      <Graph file={require('./json/03_0080.json')}/>
      <p>In 16 states, students pay at least $1,000 more to live on campus than they might have paid in rent over a nine-month academic year. In nearly half the states, however, average on-campus housing prices are less than the average rent paid by 18- to 24-year-olds. In six states, students pay at least $1,000 less over the course of the academic year than they might have paid in rent.</p>
      <p>This does not, of course, mean that students can save exactly these amounts of money by living on or off campus. There is considerable variation in rent prices within states. For example, urban areas are more expensive than rural areas and living near a college campus may be more or less expensive than living in other neighborhoods. In addition, the comparisons illustrated do not control for quality differences, and college dormitories may be quite different from the typical apartments young people rent.</p>
    <h2>Room and Board Charges over Time</h2>
      <p><strong>Room and board charges have steadily increased over time, but not as much as tuition and fees. </strong></p>
      <Graph file={require('./json/03_0090.json')}/>
      <p>Between 2006&ndash;07 and 2016&ndash;17, on campus room and board charges increased 23 percent in the public four-year sector and 25 percent at private nonprofit four-year colleges and universities. In both sectors, the price increase in 2009–10 was about twice as large as in any other year.</p>

  </div>
);

let specifications = {
  'name': 'room-and-board',
  'title': 'Room and Board',
  'content': <SinglePage content={singlepage} />
};

const RoomAndBoard = React.createClass({
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
util.printToPage('room-and-board', RoomAndBoard);

module.exports = RoomAndBoard;