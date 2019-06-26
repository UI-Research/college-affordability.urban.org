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
    <h1>Institutional Subsidies</h1>
      <p>Colleges use <a href="http://collegeaffordability.urban.org/cost-of-educating/appropriations"><strong>appropriations</strong></a>, <a href="http://collegeaffordability.urban.org/cost-of-educating/endowments"><strong>endowments</strong></a>, and other revenue sources to <em>subsidize </em>the cost of education for students. Many students paying the full tuition price are still paying less than the school is spending to educate them.</p>
      <p>This subsidy is different from financial aid or scholarships because it is given to all students at the institution&mdash;and most don&rsquo;t even know they&rsquo;re receiving it. The subsidy supplements the college&rsquo;s published tuition price to equal the true total cost of providing an education. Subsidies vary both across and <a href="http://collegeaffordability.urban.org/cost-of-educating/subsidies/#distribution_of_subsidies"><strong>within sectors</strong></a>.</p>
      <p><strong>Overall, subsidies have shrunk in recent years, leaving revenue from tuition and fees to cover more of the cost of education.</strong></p>
      <Multiples 
        title="Education and Related Spending per Full-Time Equivalent Student at Public Institutions, 2005–06 to 2015–16" 
        source="Jennifer Ma, Sandy Baum, Matea Pender, and CJ Libassi, <em>Trends in College Pricing 2018 </em>(New York: College Board, 2018)." 
        notes="FTE = full-time equivalent." 
        pluralSources="true" 
      >
        <Graph file={require('./json/020101.json')} small="true"/>
        <Graph file={require('./json/020102.json')} small="true"/>
        <Graph file={require('./json/020103.json')} small="true"/>
        <Graph file={require('./json/020104.json')} small="true"/>
      </Multiples>
      <p>Net tuition revenues per student&mdash;the amount students paid schools either out of pocket or through financial aid&mdash;increased 42 percent at public research universities between 2005&ndash;06 and 2015&ndash;16, but total educational expenditures grew only 17 percent. Schools were asking students to cover a larger share of their educational expenses. Indeed, the portion of educational costs covered by institutions from nontuition revenues&mdash;the subsidy&mdash;fell from 50 percent to 40 percent during that period.</p>
      <p>Students receive different subsidies at different types of private nonprofit colleges and universities. Revenues from tuition and fees cover almost all the cost of education at private nonprofit master&rsquo;s universities, as students, on average, receive little institutional subsidy. But in 2015&ndash;16, subsidies covered 46 percent of total educational expenditures at private nonprofit doctoral universities.</p>
      <p><strong>At private institutions, unlike public institutions, tuition revenues covered roughly the same share of education spending from 2005&ndash;06 to 2015&ndash;16.</strong></p>
      <Multiples 
        title="Education and Related Spending per Full-Time Equivalent Student at Private Nonprofit Institutions, 2005–06 to 2015–16" 
        source="Jennifer Ma, Sandy Baum, Matea Pender, and CJ Libassi, <em>Trends in College Pricing 2018 </em>(New York: College Board, 2018)." 
        pluralNotes="true" 
        notes="FTE = full-time equivalent."
      >
        <Graph file={require('./json/020105.json')} small="true"/>
        <Graph file={require('./json/020106.json')} small="true"/>
        <Graph file={require('./json/020107.json')} small="true"/>
      </Multiples>
    <h2>Distribution of Subsidies</h2>
      <p><strong>Looking at average subsidies by sector conceals wide variation across institutions, and just a few colleges and universities in each sector provide the majority of total subsidies.</strong></p>
      <p>To examine the distribution of subsidies, we divided students into deciles based on the size of the subsidies they received. The 10 percent of students receiving the largest subsidies at private nonprofit research universities received almost four times as much support as students in the top decile at public research universities. Public master&rsquo;s institutions, however, have higher per student subsidies than their private counterparts.</p>
      <p>Estimated subsidies are many times higher among the top decile of students at research institutions than among students at less resourced institutions. But high per student subsidies at research universities may not translate to resources available to undergraduates. These institutions enroll large graduate populations and have active research agendas, both of which command considerable financial resources. Precise measurements are not available, but research universities with high estimated subsidies spend considerably less on undergraduate students than these figures would suggest.</p>
      <Multiples 
        title="Average Subsidy per Full-Time Equivalent Student within Undergraduate Deciles" 
        source="Integrated Postsecondary Education Data System."
      >
        <Graph file={require('./json/020108.json')} small="true"/>
        <Graph file={require('./json/020109.json')} small="true"/>
        <Graph file={require('./json/020110.json')} small="true"/>
        <Graph file={require('./json/020111.json')} small="true"/>
        <Graph file={require('./json/020112.json')} small="true"/>
        <Graph file={require('./json/020113.json')} small="true"/>
      </Multiples>

  </div>
);

let specifications = {
  'name': 'subsidies',
  'title': 'Subsidies',
  'content': <SinglePage content={singlepage} />
};

const Subsidies = React.createClass({
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
util.printToPage('subsidies', Subsidies);

module.exports = Subsidies;
