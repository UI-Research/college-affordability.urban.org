'use strict';

import React, { Component } from 'react';
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
    
    <Graph file={require('./json/03_0170.json')}/>
     <Multiples title="Median Earnings with 25th and 75th Percentiles among Full-Time Full-Year Workers Age 18–34 with Only a High School Diploma or GED and Not in School, by Gender and Age" source="IPUMS 2014 ACS five-year sample (2010–14).">
        <Graph file={require('./json/03_0181.json')} small="true"/>
        <Graph file={require('./json/03_0182.json')} small="true"/>
    </Multiples>
    <Multiples title="Median Earnings with 25th and 75th Percentiles among Full-Time Full-Year Workers Age 18–34 with Only a High School Diploma or GED and Not in School, by Gender and Age" source="IPUMS 2014 ACS five-year sample (2010–14).">
        <Graph file={require('./json/03_01811.json')} small="true"/>
        <Graph file={require('./json/03_01812.json')} small="true"/>
    </Multiples>
    <Multiples title="Median Earnings with 25th and 75th Percentiles among Full-Time Full-Year Workers Age 18–34 with Only a High School Diploma or GED and Not in School, by Gender and Age" source="IPUMS 2014 ACS five-year sample (2010–14).">
        <Graph file={require('./json/03_01821.json')} small="true"/>
        <Graph file={require('./json/03_01822.json')} small="true"/>
    </Multiples>
  </div>
);

let specifications = {
  'name': 'forgone-earnings',
  'title': 'Forgone Earnings',
  'content': <SinglePage content={singlepage} />
};

const ForgoneEarnings = React.createClass({
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
util.printToPage('forgone-earnings', ForgoneEarnings);

module.exports = ForgoneEarnings;
