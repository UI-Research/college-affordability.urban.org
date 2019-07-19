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
    <h1>What Is College?</h1>
      <p>Drawing conclusions about &ldquo;college affordability&rdquo; is complicated by the many types of colleges in the United States. Students pursue various credentials that require different amounts of time to complete and have different expected returns. Both the cost of higher education and whether it is financially feasible for students depend on the credentials they pursue and the institutions in which they enroll.</p>
      <p>Media coverage of higher education tends to focus on the colleges on either end of the spectrum&mdash;those with billion-dollar endowments that regularly top rankings lists or those shutting down because of poor performance. But most students go to colleges that sit between those extremes.</p>
      <p>Along that spectrum, there are different kinds of <a href="http://collegeaffordability.urban.org/what-is-college/institutions"><strong>institutions</strong></a> and programs students can choose. Colleges can be nonprofit or for-profit, private or public, and doctoral or master&rsquo;s universities or bachelor&rsquo;s or associate colleges. Students can earn a bachelor&rsquo;s degree, an associate degree, or a certificate.</p>
      <p>And just as colleges differ, so do <a href="http://collegeaffordability.urban.org/what-is-college/students"><strong>students</strong></a>. Though many students go to college straight out of high school, many go later in life. About 60 percent of undergraduates are age 23 or younger, but almost a quarter are age 30 or older. Students come from different backgrounds, have access to different resources, and take different amounts of time to earn a degree.</p>
      <p>To understand college affordability, it&rsquo;s important to first understand the types of people trying to pay for college and the different colleges they have to choose from.</p>
  </div>
);

let specifications = {
  'name': 'what-is-college',
  'title': 'What Is College',
  'content': <SinglePage content={singlepage} />
};

const WhatIsCollege = React.createClass({
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
util.printToPage('what-is-college', WhatIsCollege);

module.exports = WhatIsCollege;
