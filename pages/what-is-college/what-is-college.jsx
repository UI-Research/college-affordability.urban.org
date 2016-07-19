'use strict';

import React, { Component } from 'react';
import Template from '20-templates/default/default.jsx';
import SinglePage from '30-components/singlepage/singlepage.jsx';

import util from 'util.jsx';


let singlepage = (
  <div>
    <h1>What is College?</h1>
    <h2>Overview</h2>
    <p>In progress...</p>
  </div>
);

let specifications = {
  'name': 'what-is-college',
  'title': "What is College?",
  'content': <SinglePage content={singlepage} />
};

export default class Page extends Component {
  render() {
    return (
      <Template title={specifications.title} machineName={specifications.name} includeHTML={this.props.includeHTML}>
        {specifications.content}
      </Template>
    );
  }
};


if (util.canUseDOM()) {
  // require('./' + specifications.name.toLowerCase() + '.scss');
}
util.printToPage(specifications.name, Page);

module.exports = Page;
