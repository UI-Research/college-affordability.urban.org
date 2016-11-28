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
    <h2>Overview</h2>
    <p>In progress...</p>

    <Multiples title="Cost of Attendance by Sector from 2005-06 to 2015-16 in 2015 dollars" source="IPEDS and Trends in College Pricing 2015">
        <Graph file={require('./json/03_0121.json')} small="true"/>
        <Graph file={require('./json/03_0122.json')} small="true"/>
        <Graph file={require('./json/03_0123.json')} small="true"/>
        <Graph file={require('./json/03_0124.json')} small="true"/>
    </Multiples>
    <Graph file={require('./json/03_0130.json')}/>
    <Graph file={require('./json/03_0150.json')}/>
    <Graph file={require('./json/03_0160.json')}/>

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
