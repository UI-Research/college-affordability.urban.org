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
    <h1>What is College?</h1>
    <h2>Overview</h2>
    <p>Quisque nec orci at mi iaculis ornare vel eu enim. Fusce vestibulum cursus nisi, vestibulum rhoncus ligula porta non. Maecenas dignissim sagittis ante, at porta urna elementum vitae. Donec accumsan ac sapien vitae maximus. Integer malesuada auctor congue. Maecenas molestie efficitur risus ac ullamcorper. Proin orci leo, luctus vitae erat ac, tristique aliquam eros. Aliquam lobortis lorem ante, ut volutpat ante ornare ut. Vestibulum facilisis ullamcorper ornare. Praesent volutpat tincidunt felis, at convallis tortor elementum id.</p>
    <p>Duis imperdiet posuere fermentum. Sed bibendum ultricies sapien sed placerat. Etiam ac nunc condimentum, ultrices velit a, malesuada nisi. Vestibulum risus justo, varius et orci ut, commodo convallis purus. Nulla velit urna, viverra eget accumsan quis, feugiat vitae erat. Pellentesque in porttitor orci. Suspendisse id risus et leo laoreet luctus sit amet et tellus. Donec urna nunc, dictum a quam a, ultrices dignissim nisl. Nulla lobortis cursus erat, id rhoncus quam mollis non. Nam ut ipsum dui.</p>
    <h2>Heading 2</h2>
    <p>Duis in diam sem. Nunc tempus malesuada nisl ac tincidunt. Donec eget rhoncus erat. Mauris finibus enim eget libero eleifend, sit amet pellentesque leo dignissim. Proin quis orci eu lectus iaculis iaculis. Mauris gravida vehicula eros, sit amet eleifend ex porttitor et. Ut eget tincidunt nisi.</p>
    <h3>Sub Heading</h3>
    <p>Donec ornare, sem id consectetur dapibus, tortor mi pretium metus, ac malesuada mauris ligula commodo massa. Phasellus sed aliquam risus. Curabitur id dui lacus. Sed eleifend dolor at pellentesque molestie. Maecenas fringilla sem condimentum, aliquam nisl sit amet, dignissim ex. Mauris mattis justo risus, ac sodales neque euismod quis. Duis porttitor eget risus ut dictum. Aenean laoreet elit elit, et pellentesque leo pellentesque eu. Duis sodales gravida lobortis. Suspendisse potenti. Vivamus urna nunc, viverra nec nulla sed, volutpat eleifend metus. Duis nec nisi a magna lobortis ultrices in id justo. Pellentesque vestibulum odio vehicula bibendum hendrerit. Maecenas dignissim lectus sapien, ut faucibus libero tempor sit amet. Aliquam erat volutpat.</p>
     <Graph file={require('./json/04_0240.json')}/>
  </div>
);

let specifications = {
  'name': 'tax-benefits',
  'title': 'Tax Benefits',
  'content': <SinglePage content={singlepage} />
};

const TaxBenefits = React.createClass({
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
util.printToPage('tax-benefits', TaxBenefits);

module.exports = TaxBenefits;
