'use strict';

import React from 'react';
const Template = require('20-templates/default/default.jsx');
const Graph = require('30-components/graphs/graph/graph.jsx'),
      Box = require('30-components/box/box/box.jsx');
import SinglePage from '30-components/singlepage/singlepage.jsx';

import util from 'util.jsx';


let singlepage = (
  <div>
    <h1>Demo Page</h1>
    <h2>Graphs</h2>
    <h3>Single Line</h3>
    <Graph title="Single Line Chart Example" file={require('./json/0010 - single_line.json')} />
  </div>
);

let specifications = {
  'name': 'demo',
  'content': <SinglePage topSection="Overview" content={singlepage} />
};

const Demo = React.createClass({
  render: function() {
    return (
      <Template title="Producing Education" machineName={specifications.name} includeHTML={this.props.includeHTML}>
        {specifications.content}
      </Template>
    );
  }
});


if (util.canUseDOM()) {
  //require('./' + specifications.name.toLowerCase() + '.scss');
}
util.printToPage('demo', Demo);

module.exports = Demo;