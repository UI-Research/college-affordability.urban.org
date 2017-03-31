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
      <p>Colleges use <a href="../appropriations">appropriations</a>, <a href="../endowments">endowments</a>, and other revenue sources to <em>subsidize </em>the cost of education for students. This means that many students paying the full tuition price are still paying less than the school is spending to educate them. </p>
      <p>This subsidy is different from financial aid or scholarships because it is given to all students at the institution—and most don&rsquo;t even know they&rsquo;re receiving it. The subsidy supplements the college&rsquo;s published tuition price to equal the true total cost of providing an education. Subsidies vary both across and <a href="#distribution_of_subsidies">within sectors</a>. </p>
      <p><strong>Overall, subsidies have shrunk in recent years, leaving revenue from tuition and fees to cover more of the cost of education.</strong></p>
      <Multiples title="Education and Related Spending per Full-Time Equivalent Student at Public Institutions, 2005–06 to 2013–14, in 2014 Dollars" source="Jennifer Ma, Sandy Baum, Matea Pender, and Meredith Welch, <em>Trends in College Pricing 2016</em> (New York: College Board, 2016)." notes="FTE = full-time equivalent." pluralSources="true" >
        <Graph file={require('./json/02_0071.json')} small="true"/>
        <Graph file={require('./json/02_0072.json')} small="true"/>
      </Multiples>
      <p>As the chart above shows, net tuition revenues per student—the amount students paid schools either out of pocket or through financial aid—grew by 35 percent at public research universities between 2005–06 and 2013–14, but total educational expenditures grew only 12 percent. This means schools were asking students to cover a larger share of their educational expenses. Indeed, the portion of educational costs covered by institutions from nontuition revenues—the subsidy—fell from 50.0 percent to 39.2 percent during that period. </p>
      <p>There are significant differences across sectors, however. In 2013–14, average per-student spending was two and a half times greater at private research universities than at public research universities, although the gap between private and public master&rsquo;s universities was much smaller. Revenues from tuition and fees are expected to cover almost all of the cost of education at private nonprofit master&rsquo;s universities, as students, on average, receive very little institutional subsidy.</p>
      <p><strong>At private institutions, unlike public institutions, tuition revenues covered roughly the same share of education spending from 2005–06 to 2013–14.</strong></p>
      <Multiples title="Education and Related Spending per Full-Time Equivalent Student at Private Nonprofit Institutions, 2005–06 to 2013–14, in 2014 Dollars" source="Ma et al., <em>Trends in College Pricing 2016.</em>" pluralNotes="true" notes="Institutions are sorted according to the Carnegie Classification of Institutions of Higher Education framework. FTE = full-time equivalent. This graph excludes the small private nonprofit two-year and special purpose sectors.">
        <Graph file={require('./json/02_0081.json')} small="true"/>
        <Graph file={require('./json/02_0082.json')} small="true"/>
        <Graph file={require('./json/02_0083.json')} small="true"/>
      </Multiples>
    <h2>Distribution of Subsidies</h2>
      <p><strong>Looking at average subsidies by sector conceals wide variation across institutions, and just a small number of colleges and universities in each sector provide the majority of total subsidies.</strong></p>
      <p>To examine the distribution of subsidies, we divided students into deciles based on the size of the subsidies they received. The 10 percent of students receiving the largest subsidies at private nonprofit research universities received more than four times as much support as students in the top decile at public research universities. Public master&rsquo;s institutions, however, have higher per-student subsidies than their private counterparts.   </p>
      <p>Estimated subsidies are many times higher among the top decile of students at research institutions than among those at less resourced institutions. But high per-student subsidies at research universities may not translate to resources available to undergraduates. These institutions enroll large graduate populations and have active research agendas, both of which command considerable financial resources. Precise measurements are not available, but research universities with high estimated subsidies spend considerably less on undergraduate students than these figures would suggest.</p>
      <Multiples title="Average Subsidy per Full-Time Equivalent Student within Undergraduate Deciles" source="Integrated Postsecondary Education Data System (IPEDS), 2015–16.">
        <Graph file={require('./json/02_0091.json')} small="true"/>
        <Graph file={require('./json/02_0092.json')} small="true"/>
        <Graph file={require('./json/02_0093.json')} small="true"/>
        <Graph file={require('./json/02_0094.json')} small="true"/>
        <Graph file={require('./json/02_0095.json')} small="true"/>
        <Graph file={require('./json/02_0096.json')} small="true"/>
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
