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
    <h1>State Grant Aid</h1>
      <p><strong>Most states offer grant aid to residents who enroll in an undergraduate program within the state, whether public or private. State grants, which typically come from state government funds, account for about 10 percent of total grant aid for undergraduates.</strong></p>
      <p>Thirteen states awarded more than $1,000 per undergraduate in 2016&ndash;17, but other states have small or no state grant programs.</p>
      <Graph file={require('./json/040401.json')} />
      <p>Unlike state appropriations, which lower the cost of education for every student going to a public college, state grant aid varies depending on a student&rsquo;s circumstances.</p>
      <p>The availability of grant aid and the requirements to access it vary by state. Though most states provide aid only to students who stay in state, Vermont and Rhode Island allow students to use their grant aid at colleges and universities anywhere in the country, and several other states allow students to use the aid in certain nearby states.</p>
      <p>Who is eligible for aid also varies by state. In some states, only recent high school graduates are eligible. In other states, awards depend on the sector in which the student enrolls. And in some states, only full-time students receive grants.</p>
      <p>In most states, most state grant aid is distributed based on financial circumstances. But some consider only academic performance, and others use a combination of these factors. The states with the highest grant aid per student tend to be those that distribute non-need-based aid, such as Georgia and South Carolina.</p>
      <Graph file={require('./json/040402.json')} />
      <Box>
        <h3><em>Tuition Set-aside Programs</em></h3>
        <p><em>In addition to&mdash;or instead of&mdash;awarding grants that come directly from the state government, some states have &ldquo;tuition set-aside&rdquo; programs. These programs require public institutions to use a portion of their revenues for grant aid to individual students. These policies are frequently designed to prevent tuition increases from putting enrollment out of reach for low-income students.</em></p>
        <p><em>At California and North Carolina public universities, a fraction of any tuition increase is dedicated to increasing financial aid for students who can&rsquo;t afford to pay the increase. In Texas, the state requires institutions to provide grant aid to supplement state grant awards and informs students that this additional aid is funded from tuition revenues.</em></p>
        <p><em>Not surprisingly, this approach is controversial because students who pay the full tuition price believe they are subsidizing other students. But this is not usually the case. Because the tuition price at these universities is generally lower than the cost of educating a student, even students who pay full price are paying only for the cost of their own education&mdash;no one pays more than the cost of educating one student.</em></p>
        <p><em>Do the &ldquo;tuition set-aside&rdquo; grants come from tuition money? Or do they come from state appropriations that pass through the institutions to the recipients? There is no way to determine which dollars go to student aid and which dollars fund instructional costs.</em></p>
      </Box>
    <h2>Who Receives State Grant Aid?</h2>
      <p><strong>State grant aid goes almost exclusively to students enrolled in college in their states of legal residence. Low-income dependent students and those enrolled in public and private nonprofit four-year institutions are most likely to receive state grant aid</strong>. In addition to income requirements for eligibility, the fact that about one-quarter of dependent students from families in the highest income quartile enroll out of state compared with just over 10 percent of those from the lowest-income families contributes to the concentration of aid at the lower end of the income distribution.</p>

      <Multiples 
        title="Share of Undergraduates Receiving State Grant Aid, 2015–16" 
        source="National Postsecondary Student Aid Study, 2016."
      >
        <Graph file={require('./json/040403.json')} small="true"/>
        <Graph file={require('./json/040404.json')} small="true"/>
        <Graph file={require('./json/040405.json')} small="true"/>
        <Graph file={require('./json/040406.json')} small="true"/>
        <Graph file={require('./json/040407.json')} small="true"/>
      </Multiples>

    <h2>Average State Grant Aid</h2>
      <p><strong>Most variation in state grant aid is a function of eligibility requirements. Among those who receive state grants, the award average sizes are similar.</strong></p>
      <p>Students from low-income families are more likely than their more affluent peers to receive state grant aid and they receive somewhat larger grants </p>
      <Multiples 
        title="Average State Grant Aid per Recipient, 2015–16" 
        source="NPSAS, 2015."
      >
        <Graph file={require('./json/040408.json')} small="true"/>
        <Graph file={require('./json/040409.json')} small="true"/>
        <Graph file={require('./json/040410.json')} small="true"/>
        <Graph file={require('./json/040411.json')} small="true"/>
        <Graph file={require('./json/040412.json')} small="true"/>
      </Multiples>
    <h2>State Grant Aid over Time</h2>
      <p>State grant aid per student grew rapidly in the 1990s, when several states, particularly in the South, introduced merit-based grant programs. Total state grant aid per student peaked in 2007&ndash;08, before the Great Recession, but recovered from an average of $700 (in 2016 dollars) per student in 2011&ndash;12 to $820 per student in 2016&ndash;17.</p>
      <Graph file={require('./json/040413.json')} />
      
      
  </div>

);

let specifications = {
  'name': 'state',
  'title': 'State Grant Aid',
  'content': <SinglePage content={singlepage} />
};

const State = React.createClass({
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
util.printToPage('state', State);

module.exports = State;
