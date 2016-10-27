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
    <Graph file={require('./json/03_0050.json')}/>
  </div>
);

let specifications = {
  'name': 'room-and-board',
  'title': 'Room and Board',
  'content': <SinglePage content={singlepage} />
};

const RoomAndBoard = React.createClass({
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
util.printToPage('room-and-board', RoomAndBoard);

module.exports = RoomAndBoard;