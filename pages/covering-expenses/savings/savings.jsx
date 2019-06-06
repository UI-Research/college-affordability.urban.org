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
    <h1>Savings</h1>
      <p><strong>The personal savings rate has declined, diminishing the resources families have available to finance their children&rsquo;s education.</strong></p>
      <p>Families who save in advance generally face fewer challenges financing their children&rsquo;s college education. Paying the entire price of college out of current income over the few years the student is enrolled requires significantly reducing the family&rsquo;s standard of living relative to the precollege and the postcollege years. Saving in advance allows the expense to be spread more evenly over a longer period. Borrowing has the same smoothing effect, but instead of accruing interest, the student or family pays interest.</p>
      <p>The personal savings rate in the United States peaked at 14.7 percent of after-tax income in June, 1971 and fell to 2.2 percent in 2005. After rising to 6.1 percent in 2015, the savings rate had fallen back to 3.1 percent for the first months of 2018 and ending the year at 7.6 percent.</p>
      <p><strong>The personal savings rate has declined as college prices have increased.</strong></p>
      <Graph file={require('./json/050201.json')}/>
      <p>Some families fail to save for college because they expect their incomes to rise as their children age. But other expenses tend to increase over time as well, and not saving means not benefiting from the interest and other gains that can accumulate.</p>
      <p>Families sometimes hesitate to save for college, believing that accumulating assets will diminish their chances of getting need-based financial aid. The federal formula for determining need considers some families&rsquo; assets, but assets do not play a role if the family&rsquo;s income is less than $50,000 and the family is eligible to file a simple federal income tax form (1040A or 1040EZ). Even when the formula includes assets, it excludes retirement savings, home equity, and some other assets. In addition, the system protects a portion of remaining assets, so that families can save for retirement and for college without having those savings reduce their eligibility for aid. The protected portion increases with parents&rsquo; ages.</p>
      <p>For families with assets remaining after these exclusions, federal expected family contribution (EFC) will rise by a maximum of $56 for each $1,000 of assets. So, for example, savings of $10,000 above the excluded amount would increase a family&rsquo;s EFC of $5,000 based on income to $5,560 at most. Saving more in advance can only make paying for college easier.</p>
      <Graph file={require('./json/050202.json')}/>
    <h2>Net Worth</h2>
      <p>Household wealth includes financial assets (e.g., checking and savings accounts, stocks, and bonds) in addition to home equity and other assets. Savings rates and rates of return on assets affect net worth.</p>
      <p>Median family net worth increased from the early 1990s through the early 2000s but plummeted during the Great Recession. In 2010, median net worth was about 40 percent lower than it had been three years earlier, and it had not begun to recover by 2013. By 2016, wealth had begun to recover but had not returned to prerecession levels. Some families did not have the resources they had anticipated to help pay for college.</p>
      <p><strong>Families headed by 45-to-54-year-olds&mdash;the most common age range for the parents of dependent college students&mdash;have higher net worth than other families, but, in 2016, their median wealth was of median wealth for similarly aged families in 2007.</strong></p>
      <Graph file={require('./json/050203.json')}/>
      <p><strong>Unsurprisingly, households with higher incomes tend to have higher net worth than those with lower incomes, but there is considerable variation within income groups. </strong>In other words, knowing a family&rsquo;s current income does not give a full picture of the resources it has available to pay for college.</p>
      <Graph file={require('./json/050204.json')}/>
    <h2>Demographic differences</h2>
      <p><strong>In addition to having higher current incomes, white non-Hispanic families have greater assets, on average, to help pay for college than other families.</strong></p>
      <Graph file={require('./json/050205.json')}/>
      <p>For all families, the recession diminished net worth. Asset levels are lower than parents likely anticipated while they were saving for college. First-generation college students are less likely than others to have family resources to rely on to help them pay for college.</p>
      <Graph file={require('./json/050206.json')}/>
      <h3>College Savings Accounts</h3>
        <p>Families can use assets of all sorts to help pay for college, but some forms of savings are designed specifically to help families prepare for this expense. For example, 529 college savings plans offer tax benefits to individuals and families saving for college. These plans allow savings to grow tax-free. No tax is assessed on withdrawals if the funds are used for qualifying postsecondary education expenses.</p>
        <p>These college savings accounts are most helpful to households in higher income tax brackets, because the value of tax deductions increases as the tax rate that would otherwise be applicable increases. Those whose incomes are too low to owe federal income taxes do not receive any benefit from the tax-free status. Moreover, the penalty for withdrawing funds for noncollege expenses creates a risk for families who do not know whether their children will go to college, making these accounts less desirable for low-income families even if they can afford to save. <a href="http://www.taxpolicycenter.org/taxvox/what-can-we-learn-obamas-failure-curb-sec-529-college-savings-accounts" target="_blank">In fact</a>, these accounts largely benefit students from high-income families, with only 3 percent of all households&mdash;but 20 percent of households earning more than $500,000&mdash;holding accounts.</p>
        <p><strong>Despite the overall decline in savings, the number of people putting money into designated college savings accounts has increased.</strong></p>
        <p>In 2016, 1.7 million savers&mdash;about 6 percent of postsecondary students&mdash;withdrew funds from these accounts to help pay for college.</p>
        <Graph file={require('./json/050207.json')}/>
        <Graph file={require('./json/050208.json')}/>
        <Graph file={require('./json/050209.json')}/>
        <Box>
          <h3><em>529 College Savings Accounts</em></h3>
            <p><em>529 college savings plans are sponsored by states, state agencies, and educational institutions but are authorized by the federal income tax code. Each of the 50 states and the District of Columbia sponsors a plan, as does a group of private nonprofit colleges and universities.</em></p>
            <p><em>Most 529 college savings plan funds are invested in stocks and bonds (usually through mutual funds), and their values fluctuate with the market. The funds can be withdrawn tax-free to pay for tuition, fees, room, board, and required books and supplies. </em><strong><a href="http://www.savingforcollege.com/compare_529_plans/index.php?plan_question_ids%5B%5D=437&amp;mode=Compare&amp;page=compare_plan_questions&amp;plan_type_id="><em>Thirty-one states and the District of Columbia</em></a></strong><em> allow tax deductions for the contributed funds. </em><strong><em><a href="http://www.savingforcollege.com/compare_529_plans/index.php?plan_question_ids%5B%5D=438&amp;mode=Compare&amp;page=compare_plan_questions&amp;plan_type_id=">A few</a> </em></strong><em>&nbsp;provide matching funds for some contributions from some residents.</em></p>
            <p><em>Though less common, some 529 plans are prepaid tuition plans that allow savers to purchase in advance specified numbers of credits or terms at participating institutions. Savers can transfer funds to other beneficiaries or withdraw their funds, sacrificing the tax benefits, if the student does not use the money to attend a qualifying institution.</em></p>
        </Box>
 
  </div>
);

let specifications = {
  'name': 'savings',
  'title': 'Savings',
  'content': <SinglePage content={singlepage} />
};

const Savings = React.createClass({
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
util.printToPage('savings', Savings);

module.exports = Savings;
