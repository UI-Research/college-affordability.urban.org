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
    <Graph file={require('./json/05_0010.json')}/>
    <Graph file={require('./json/05_0020.json')}/>
  </div>
);

let specifications = {
  'name': 'pre-college-income-and-savings',
  'title': 'Pre College Income and Savings',
  'content': <SinglePage content={singlepage} />
};

const PreCollegeIncomeAndSavings = React.createClass({
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
util.printToPage('pre-college-income-and-savings', PreCollegeIncomeAndSavings);

module.exports = PreCollegeIncomeAndSavings;
