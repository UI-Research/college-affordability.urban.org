'use strict';

// >> ACTION ITEMS
// To make your copy of this template unique, do the following:
// 1. Rename all files in this directory to the same URL-friendly string
// 2. Alter content within ">> Single Page Component"
// 3. Update '__TEMPLATE__' to the name chosen in step 1



// >> Including components
// These are the main components needed to generate a page.  Keep these in by default.
// If your page demands additional types of components, this is where you add the import
// statements to make them available.  Some examples are added below for your reference.
import React, { Component } from 'react';
import Template from '20-templates/default/default.jsx';
import SinglePage from '30-components/singlepage/singlepage.jsx';
// import Graph from '30-components/graphs/graph/graph.jsx';
// import Box from '30-components/box/box/box.jsx';

import util from 'util.jsx';

// >> Single Page Component
// Note: The entire content MUST be encapsulated in a single DOM element.  React will
// throw an error otherwise.  In most cases, we simply add a <div> to make this happen
// without too much intrusion.
let singlepage = (
  <div>
    <h1>My New Page?</h1>
    <h2>Overview</h2>
    <p>In progress...</p>
  </div>
);


// >> Page specifications
//
// Update 'name' (__TEMPLATE__) to an appropriate URL label.  Good examples include:
// > my-page-name
// > new-page
// (use hyphens in lieu of spaces)
//
// Update 'title (MY TITLE) to an appropriate human-friendly label.  This will appear
// in the <title> of your page.
//
// Usually leave 'content' (<SinglePage />) as is as most pages will use the same structure.
// If otherwise, replace it with JSX markup to create a page without <SinglePage />.
let specifications = {
  'name': '__TEMPLATE__',
  'title': 'MY TITLE',
  'content': <SinglePage content={singlepage} />
};


// Ignore this section.
export default class Page extends Component {
  render() {
    return (
      <Template title={specifications.title} machineName={specifications.name} includeHTML={this.props.includeHTML}>
        {specifications.content}
      </Template>
    );
  }
};

// >> Enabling CSS
// If you have page-specific CSS you would like to add, uncomment the following three lines (remove the /* */).
// WARNING: Enabling this without a corresponding scss file WILL CAUSE AN ERROR.
/*
if (util.canUseDOM()) {
  require('./' + specifications.name.toLowerCase() + '.scss');
}
*/
util.printToPage(specifications.name, Page);

module.exports = Page;
