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
      <p>Drawing conclusions about &ldquo;college affordability&rdquo; is complicated by the many different types of colleges in the United States. Students pursue a variety of credentials that require different amounts of time and have different expected returns. Both the cost of higher education and whether it is financially feasible for students depend on the credentials they are pursuing and the institutions in which they enroll.</p>
      <p>Media coverage of higher education tends to focus on the colleges on either end of the spectrum—those with billion-dollar endowments that regularly top rankings lists or those shutting down because of poor performance. But in reality, most students go to colleges that sit somewhere in between those two extremes. </p>
      <p>Along that spectrum there are different kinds of <a href="institutions">institutions</a> and programs students can pick from. Colleges can be nonprofit or for profit, private or public, and doctoral or master&rsquo;s universities or bachelor&rsquo;s or associate colleges. Students can earn a bachelor&rsquo;s degree, an associate degree, or a certificate. </p>
      <p>And just as colleges differ, so do <a href="students">students</a>. Though many students go to college straight out of high school, many go later in life. More than half of all undergraduates are age 23 or younger, but about a quarter are age 30 or older. Students come from different backgrounds, have access to different resources, and take different amounts of time to earn a degree.</p>
      <p>To understand college affordability, it&rsquo;s important to first understand the different types of people trying to pay for college and the different colleges they have to choose from. </p>
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
