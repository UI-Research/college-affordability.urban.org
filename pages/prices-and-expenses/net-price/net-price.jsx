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
    <h1>Sticker Prices</h1>
    <h2>Overview</h2>
    <p>In progress...</p>

      <Multiples title="Average Grant Aid and Net Tuition and Fees for First-Time Full-Time Students, by Sector, 2013–14" source="Integrated Postsecondary Education Data System.">
        <Graph file={require('./json/03_0201.json')} small="true"/>
        <Graph file={require('./json/03_0202.json')} small="true"/>
    </Multiples>
    <Multiples title="Cost of Attendance (Total Expenses) Divided into the Portions of Tuition and Fees and Living Expenses Covered by Grant Aid, and the Tuition and Fees and Living Expenses Remaining, 2011–12." source="National Postsecondary Student Aid Study (NPSAS), 2012.">
        <Graph file={require('./json/03_0211.json')} small="true"/>
        <Graph file={require('./json/03_0212.json')} small="true"/>
        <Graph file={require('./json/03_0213.json')} small="true"/>
        <Graph file={require('./json/03_0214.json')} small="true"/>
    </Multiples>
    <Multiples title="Cost of Attendance (Total Expenses) Divided into the Portions of Tuition and Fees and Living Expenses Covered by Grant Aid, and the Tuition and Fees and Living Expenses Remaining, 2011–12." source="National Postsecondary Student Aid Study (NPSAS), 2012.">
        <Graph file={require('./json/03_02111.json')} small="true"/>
        <Graph file={require('./json/03_02112.json')} small="true"/>
        <Graph file={require('./json/03_02113.json')} small="true"/>
        <Graph file={require('./json/03_02114.json')} small="true"/>
    </Multiples>
     <Multiples title="Total Student Budget, Divided into the Portions of Tuition and Fees and Living Expenses Covered by Grant Aid, and the Tuition and Fees and Living Expenses Remaining, from 1995–96 to 2011–12, in 2011 Dollars" source="NPSAS, 2012.">
        <Graph file={require('./json/03_0221.json')} small="true"/>
        <Graph file={require('./json/03_0222.json')} small="true"/>
        <Graph file={require('./json/03_0223.json')} small="true"/>
        <Graph file={require('./json/03_0224.json')} small="true"/>
        <Graph file={require('./json/03_0225.json')} small="true"/>
    </Multiples>
    <Multiples title="Total Student Budget, Divided into the Portions of Tuition and Fees and Living Expenses Covered by Grant Aid, and the Tuition and Fees and Living Expenses Remaining, from 1995–96 to 2011–12, in 2011 Dollars" source="NPSAS, 2012.">
        <Graph file={require('./json/03_02211.json')} small="true"/>
        <Graph file={require('./json/03_02212.json')} small="true"/>
        <Graph file={require('./json/03_02213.json')} small="true"/>
        <Graph file={require('./json/03_02214.json')} small="true"/>
        <Graph file={require('./json/03_02215.json')} small="true"/>
    </Multiples>
    <Multiples title="Total Student Budget, Divided into the Portions of Tuition and Fees and Living Expenses Covered by Grant Aid, and the Tuition and Fees and Living Expenses Remaining, from 1995–96 to 2011–12, in 2011 Dollars" source="NPSAS, 2012.">
        <Graph file={require('./json/03_02221.json')} small="true"/>
        <Graph file={require('./json/03_02222.json')} small="true"/>
        <Graph file={require('./json/03_02223.json')} small="true"/>
        <Graph file={require('./json/03_02224.json')} small="true"/>
        <Graph file={require('./json/03_02225.json')} small="true"/>
    </Multiples>
    <Multiples title="Total Student Budget, Divided into the Portions of Tuition and Fees and Living Expenses Covered by Grant Aid, and the Tuition and Fees and Living Expenses Remaining, from 1995–96 to 2011–12, in 2011 Dollars" source="NPSAS, 2012.">
        <Graph file={require('./json/03_02231.json')} small="true"/>
        <Graph file={require('./json/03_02232.json')} small="true"/>
        <Graph file={require('./json/03_02233.json')} small="true"/>
        <Graph file={require('./json/03_02234.json')} small="true"/>
        <Graph file={require('./json/03_02235.json')} small="true"/>
    </Multiples>
  </div>
);

let specifications = {
  'name': 'net-price',
  'title': 'Net Price',
  'content': <SinglePage content={singlepage} />
};

const NetPrice = React.createClass({
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
util.printToPage('net-price', NetPrice);

module.exports = NetPrice;
