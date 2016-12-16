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
    <h1>Forgone Earnings</h1>
    <h2>Overview</h2>
    <p>In progress...</p>
    <Graph file={require('./json/03_0010.json')}/>

    <Multiples title="In-State or In-District Tuition, by State, 2014–15" source="Integrated Postsecondary Education Data System">
        <Graph file={require('./json/03_0041.json')} small="true"/>
        <Graph file={require('./json/03_0042.json')} small="true"/>
    </Multiples>
    
    <Graph file={require('./json/03_0020.json')}/>
    <Multiples title="Distribution of Full-Time Students by Published Tuition and Fees within Sectors, 2014–15" source="Integrated Postsecondary Education Data System">
        <Graph file={require('./json/03_0031.json')} small="true"/>
        <Graph file={require('./json/03_0032.json')} small="true"/>
        <Graph file={require('./json/03_0033.json')} small="true"/>
        <Graph file={require('./json/03_0034.json')} small="true"/>


    </Multiples>

  </div>
);

let specifications = {
  'name': 'tuition-and-fees',
  'title': 'Tuition and Fees',
  'content': <SinglePage content={singlepage} />
};

const TuitionAndFees = React.createClass({
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
util.printToPage('tuition-and-fees', TuitionAndFees);

module.exports = TuitionAndFees;
