'use strict';

import React, { Component } from 'react';
import Template from '20-templates/default/default.jsx';
import SinglePage from '30-components/singlepage/singlepage.jsx';

import util from 'util.jsx';


let singlepage = (
  <div>
    <h1>Sticker Prices</h1>
    <h2>Overview</h2>
    <p>In progress...</p>
  </div>
);

let specifications = {
  'name': 'sticker-prices',
  'content': <SinglePage content={singlepage} />
};

export default class Page extends Component {
  render() {
    return (
      <Template title="Sticker Prices" machineName={specifications.name} includeHTML={this.props.includeHTML}>
        {specifications.content}
      </Template>
    );
  }
};


if (util.canUseDOM()) {
  // Enable if you have page-specific styles.
  // require('./' + specifications.name.toLowerCase() + '.scss');
}
util.printToPage(specifications.name, Page);

module.exports = Page;
