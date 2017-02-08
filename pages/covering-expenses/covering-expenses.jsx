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
    <h1>Covering Expenses</h1>
      <p>Students cover their college expenses with a combination of <a href="savings">savings</a> (their own and their parents&rsquo;), income earned <a href="working-during-college">during college</a>, and <a href="borrowing">student loans</a>.</p>
      <p>Though the financial aid system looks only at income just before college, how much money students and families have to cover expenses depends on income over time and whether they were able to save. Two families may have similar incomes when filling out financial aid applications but still have vastly different resources available to pay for college. A family who recently experienced a bump in earnings has had less opportunity to save for college than one who has had a relatively high income for many years. Some families may have postponed saving because they expected earnings increases that never materialized, and others may have made significant sacrifices to be better prepared to pay for college. </p>
      <p>When students don&rsquo;t have the family resources (or the grant aid) to fully pay for college, they turn to in-college earnings and student loans. Students can work part time while they are in school and defray some of their expenses with these earnings. In fact, more than 60 percent of full-time college students are employed at least part time while they are in school. How much these students earn depends on how many hours they work, but it also depends on the available wages. For many students, this is minimum wage. Some students may also choose to work full time and go to school part time, but that can affect <a href="time-to-degree">how long it takes them</a> to earn a degree and even whether they graduate at all. Though their earnings might be higher, the extra semesters in school might end up making college ultimately less affordable. </p>
      <p>In addition to savings and income, about 40 percent of undergraduate students take federal student loans each year, and about 70 percent of bachelor&rsquo;s degree recipients have education debt by the time they graduate. Loans can help students pay for college, and in most cases future earnings make it possible to repay those loans. But <a href="../loan-repayment-and-default">whether they are affordable</a> depends on how much students borrow, how long they spend in school, whether they graduate, and the kind of work they find after graduation.</p>
      </div>
);

let specifications = {
  'name': 'covering-expenses',
  'title': 'Covering Expenses',
  'content': <SinglePage content={singlepage} />
};

const CoveringExpenses = React.createClass({
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
util.printToPage('covering-expenses', CoveringExpenses);

module.exports = CoveringExpenses;
