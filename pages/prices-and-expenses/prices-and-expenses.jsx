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
    <h1>Prices and Expenses</h1>
		<p>Tuition is the most obvious expense students face, but it&rsquo;s far from the only budget item they must consider. In fact, tuition is not even the biggest expense for most students attending public colleges and universities.</p>
    <p>Assessing college affordability requires consideration of not just tuition and fees but living expenses students incur while in school rather than in the workforce.</p>
    <p>Colleges and universities provide the &ldquo;cost of attendance,&rdquo; an estimate of a <a href="http://collegeaffordability.urban.org/prices-and-expenses/student-budgets"><strong>student&rsquo;s budget</strong></a> for a year of college. It includes tuition and fees along with expenses like <strong>food, </strong><a href="http://collegeaffordability.urban.org/prices-and-expenses/room-and-board"><strong>housing</strong></a><strong>, and books and supplies</strong>.</p>
    <p>A problem with this estimate is that some of those expenses, such as housing and food, are not part of the cost of college. Rather, these are expenses everyone faces whether they&rsquo;re in college or not. At the same time, cost of attendance omits one real cost: <a href="http://collegeaffordability.urban.org/prices-and-expenses/forgone-earnings"><strong>forgone earnings</strong></a><strong>,</strong> the income students forgo by attending school rather than working full time. The cost of attendance may tell you how much a student has to pay, but it doesn&rsquo;t tell you the true cost of college.</p>
    <p>Still, because most high school graduates not in college earn only about enough to cover housing, food, and other basic living expenses, it&rsquo;s fair to assume that what students pay for these expenses is about equal to the earnings they give up. Thus, these estimated budgets provide a reasonably accurate approximation of real costs before considering financial aid.</p>>
		<Box>
			<h3><em>How Do Institutions Estimate Student Budgets?</em></h3>
			<p><em>There is no simple way for institutions to estimate how much money a typical student spends while attending college. Even if colleges could conduct reliable surveys of actual expenditures, it would not be possible to separate discretionary spending from necessities. For example, the average rent paid would incorporate both students who share studio apartments in poorly maintained buildings and those who live alone in high-price, one-bedroom apartments. How many trips home each year should the transportation budget include? And should it be based on bus fares or plane fares? Is it reasonable to expect students to eat in the dining hall or cook all their meals, or should the budget include pizza or more expensive restaurant meals several times a month?</em></p>
      <p><em>Institutions may also face incentives to over- or underestimate student budgets. A lower estimated cost of attendance makes the college look more affordable to prospective students, and a higher estimate will make some students eligible for larger federal loans or other forms of financial aid.</em></p></Box>
			<p>Additionally, most students don&rsquo;t end up paying the full cost of attendance, as these estimates do not account for financial aid. Most students get some assistance that lowers the <a href="http://collegeaffordability.urban.org/prices-and-expenses/net-price"><strong>net price</strong></a> of going to college below the published sticker price. Because of this, the total estimated budget can be misleading, generating anxiety among students who will actually pay lower net tuition prices.</p>
  </div>
);

let specifications = {
  'name': 'prices-and-expenses',
  'title': 'Prices and Expenses',
  'content': <SinglePage content={singlepage} />
};

const PricesAndExpenses = React.createClass({
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
util.printToPage('prices-and-expenses', PricesAndExpenses);

module.exports = PricesAndExpenses;

