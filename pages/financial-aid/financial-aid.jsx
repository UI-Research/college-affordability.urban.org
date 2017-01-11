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
    <h1>Financial Aid</h1>
      <p>The difference between a college&rsquo;s sticker price and the net price a student pays is financial aid that does not have to be repaid. </p>
      <p>Financial aid from a variety of sources helps students and families pay tuition and fees and the other expenses involved in getting a college education. Aid may come from the <a href="federal">federal government</a>, <a href="state">state governments</a>, <a href="other">employers, private organizations</a>, or <a href="institutional">colleges and universities</a>. </p>
      <p>Some financial aid is distributed based on academic achievement, athletic ability, or other personal characteristics or accomplishments, but most aid is based on financial circumstances. The federal government has a formula for determining a family&rsquo;s ability to pay for college. Eligibility for federal grants, some federal loans, and much state grant aid is based on this formula. Colleges and universities may also use their own formulas for determining institutional aid.</p>
      <p>Grants, scholarships, and tax credits or deductions all give students a tuition discount, decreasing the amount they have to pay for college. This type of financial aid makes college more affordable for many. </p>
      <p>Although <a href="../../covering-expenses/borrowing/">loans</a> are often included in a financial aid package, they are not included in this section because, unlike grants or tax benefits, loans do not discount tuition. Loans do not reduce the net price, they simply allow students to postpone their payments—ultimately, students still have to foot the bills.</p>
  </div>
);

let specifications = {
  'name': 'financial-aid',
  'title': 'Financial Aid',
  'content': <SinglePage content={singlepage} />
};

const FinancialAid = React.createClass({
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
util.printToPage('financial-aid', FinancialAid);

module.exports = FinancialAid;
