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
    <h1>State and Local Appropriations</h1>
      <p>Public colleges and universities rely primarily on state and local government appropriations to <a href="../subsidies">subsidize the cost</a> of education for students. State tax revenues are the primary source of nontuition funding, but <a href="#local_support">local taxes</a> accounted for over 10 percent of total appropriations in the 2014-15 academic year. </p>
      <p><a href="#changes_over_time">Over time</a>, state funds have covered less and less of the cost of education at public colleges and universities, though there is significant variation across states. As taxpayers foot less of the bill, students and families see tuition and fees rise.</p>
      <p>State and local appropriations are used primarily to fund public colleges and universities, but some money goes to student aid, some benefits students in private colleges, and some is restricted for special purposes like research, agriculture, and medical education.</p>
      <h2>Changes over Time</h2>
        <p>From 1999–2000 to 2014-15, enrollment in public colleges and universities grew by more than 20 percent. But overall state and local appropriations to public higher education, which peaked in 2007–08, grew by less than 10 percent in this time period. <strong>These trends resulted in a decline of over 16 percent in appropriations per public-sector student over this period. Appropriations per student averaged $8,300 (in 2015 dollars) in 1999–20000 compared with just $6,960 for the 2014–15 academic year.</strong></p>
        <Graph file={require('./json/020201.json')}/>
        <p>Because tax dollars fund public higher education, changes in state and local appropriations tend to follow trends in tax revenues. The Great Recession dealt a blow to state budgets and led states to reduce public funding for higher education. This decline would likely have been more severe had the federal government not supplemented state revenues through the American Recovery and Reinvestment Act of 2009. </p>
        <p>Total appropriations continued to decline after 2009–10 but have increased slightly since 2012–13 as tax revenues have recovered.</p>
      <h2>Local Support</h2>
        <p><strong>Since 1999&ndash;2000, state financial support for public higher education has risen only 6 percent while local support has increased 30 percent.</strong> However, local support still made up just 12 percent of total appropriations in 2014&ndash;15.</p>
        <Graph file={require('./json/020202.json')}/>
      <h2>Variation across States</h2>
       <p>National averages provide a meaningful overview of the circumstances facing college students. <strong>But state funding patterns and the price of college vary dramatically across states, generating considerable geographic differences in college affordability.</strong></p>
      <Box>
        <h3><em>How Do States Determine Appropriation Levels?</em></h3>
        <p><em>State financing of higher education varies across the country. Though funding for institutions is usually tied to the number of credit hours students enroll in or complete, states have adopted different methods for determining appropriations:</em></p>
        <ul>
          <li><em>Some states make annual adjustments to the funding each institution receives, while some have less defined approaches determined by legislative priorities.</em></li>
          <li><em>Some formulas for allocating funds to institutions are based only on enrollment, but more states are beginning to use some kind of performance-based funding (PBF) that incorporates measures of outcomes into their formulas. There is little evidence that PBF has had a significant impact on the efficiency and outcomes of postsecondary institutions, but there is widespread optimism that new models with more carefully defined outcomes measures and consideration for the characteristics of incoming students will be more successful in improving student success rates.</em></li>
          <li><em>Many states have explicit formulas for allocating all or part of their funding to instructional expenditures, the operation and maintenance of physical plants, or other expenditures across institutions. </em></li>
          <li><em>Most state funding goes directly to public institutions, but some goes to higher education coordinating boards or to other state agencies that allocate funds to institutions, which sometimes include private colleges and universities.</em></li>
        </ul></Box>
      <p>Students who attended public colleges and universities in 2014–15 benefited from per-student appropriations ranging from $2,900 in New Hampshire to more than $17,000 in Alaska. Some of the variation across states is attributable to differences in state wealth and cost of living, but many other factors also contribute.</p>
      <Graph file={require('./json/020203.json')}/>
  </div>
);

let specifications = {
  'name': 'appropriations',
  'title': 'Appropriations',
  'content': <SinglePage content={singlepage} />
};

const Appropriations = React.createClass({
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

util.printToPage('appropriations', Appropriations);

module.exports = Appropriations;


