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
      <p><strong>The personal savings rate has declined over time, diminishing the resources families have available to finance their children&rsquo;s education.</strong></p>
      <p>Families who save in advance generally face fewer challenges financing their children&rsquo;s college education. Paying the entire price of college out of current income over the few years the student is enrolled requires significantly reducing the family&rsquo;s standard of living relative to the pre-college and the post-college years. Saving in advance allows the expense to be spread more evenly over a longer period of time. Borrowing has the same smoothing effect, but instead of accruing interest, the student or family pays interest.</p>
      <p>The personal savings rate in the United States peaked at 13.3 percent of after-tax income in 1971, then fell continuously to 2.6 percent in 2005. Households have saved somewhat more since then. </p>
      <p><strong>The personal savings rate has been declining at the same time that college prices have been rising.</strong></p>
      <Graph file={require('./json/05_0250.json')}/>
      <p>Some families may fail to save for college because they expect their incomes to rise as the time for their children to enroll approaches. But other expenses tend to grow over time as well, and not saving means not benefitting from the interest and other gains that can accumulate over time.</p>
      <p>Families sometimes hesitate to save for college, believing that accumulating assets will diminish their chances of getting need-based financial aid. It is true that the federal formula for determining need considers some families&rsquo; assets, but assets do not play a role at all if the family&rsquo;s income is less than $50,000 and they are eligible to file a simple federal income tax form (1040A or 1040EZ). Even when the formula includes assets, it excludes retirement savings, home equity, and some other types of assets. In addition, the system protects a portion of remaining assets, so that families can save for retirement and for college without having those savings reduce their eligibility for aid. The protected portion increases with parents&rsquo; ages. </p>
      <p>For families with assets remaining after these exclusions, federal expected family contribution (EFC) will rise by a maximum of $56 for each $1,000 of assets. So, for example, savings of $10,000 would increase a family&rsquo;s EFC of $5,000 based on income to $5,560 at most. Saving more in advance can only make paying for college easier.</p>
      <Graph file={require('./json/05_0260.json')}/>
    <h2>Net Worth</h2>
      <p>Household wealth includes financial assets, such as checking and savings accounts, stocks, and bonds, in addition to home equity and other types of assets. Both savings rates and rates of return on existing assets affect net worth.</p>
      <p>Median family net worth increased from the early 1990s through the early 2000s, but plummeted during the Great Recession. In 2010, median net worth was about 40 percent lower than it had been three years earlier and it had not begun to recover by 2013. This meant families did not have the resources they had anticipated to help pay for college.</p>
      <p><strong>Families headed by 45- to 54-year-olds—the most common age range for the parents of dependent college students—have higher net worth than other families, but their median wealth was almost 50 percent lower in 2013 than it had been in 2007.</strong></p>
      <Graph file={require('./json/05_0270.json')}/>
      <p><strong>Unsurprisingly, households with higher incomes tend to have higher net worth than those with lower incomes, but there is considerable variation within income groups. </strong>In other words, knowing a family&rsquo;s current income level does not give a full picture of the resources they have available to pay for college.</p>
      <Graph file={require('./json/05_0280.json')}/>
    <h2>Demographic differences</h2>
      <p><strong>In addition to having higher current incomes, white non-Hispanic families have much greater resources, on average, to help pay for college than other families.</strong></p>
      <Graph file={require('./json/05_0290.json')}/>
      <p>For all types of families, the recession diminished net worth below the levels that prevailed when the parents of students now ready to start college should have been beginning to plan for this expenditure. First-generation college students are less likely than others to have family resources to rely on to help them pay for college.</p>
      <Graph file={require('./json/05_0300.json')}/>
      <h3>College Savings Accounts</h3>
        <p>Families can use assets of all sorts to help pay for college, but some forms of savings are designed specifically to help families prepare for this expense. For example, 529 college savings plans offer tax benefits to individuals and families saving for college. These plans allow savings to grow tax-free; no tax is assessed on withdrawals if the funds are used for qualifying postsecondary education expenses. </p>
        <p>These college savings accounts are most helpful to households in higher income tax brackets, because the value of tax deductions increases as the tax rate that would otherwise be applicable increases. Those whose incomes are too low to owe federal income taxes do not receive any added benefit from the tax-free status of the accounts. Though some young families with low current incomes will have both higher incomes and higher tax rates by the time their children are ready for college, these 529 plans make the biggest difference for higher-income families who can afford to save a significant amount and who are subject to the highest income tax rates. Moreover, the penalty for withdrawing funds for noncollege expenses creates a risk for families who do not know whether or not their children will go to college—making these accounts less desirable for lower-income families even if they can afford to save.</p>
        <p><strong>Despite the overall decline in savings rates, the number of people putting money into designated college savings accounts has increased over time.</strong></p>
        <p>In 2015, 1.6 million savers—about 8 percent of postsecondary students— withdrew funds from these accounts to help pay for college. </p>
        <Graph file={require('./json/05_3110.json')}/>
        <Graph file={require('./json/05_3120.json')}/>
        <Graph file={require('./json/05_0320.json')}/>
        <Box>
          <h3><em>529 College Savings Accounts</em></h3>
            <p><em>529 college savings plans are sponsored by states, state agencies, or educational institutions, but authorized by the federal income tax code. Each of the 50 states and the District of Columbia sponsors a plan, as does a group of private nonprofit colleges and universities. </em></p>
            
            <p><em>Most 529 college savings plan funds are invested in stocks and bonds (usually through mutual funds), and their values fluctuate with the market. The funds can be withdrawn tax-free to pay for tuition, fees, room, board, and required books and supplies. </em><a href="http://www.savingforcollege.com/compare_529_plans/index.php?plan_question_ids%5B%5D=437&amp;mode=Compare&amp;page=compare_plan_questions&amp;plan_type_id=" target="_blank"><em>Thirty-three states</em></a><em> allow tax deductions for the contributed funds. </em><a href="http://www.savingforcollege.com/compare_529_plans/index.php?plan_question_ids%5B%5D=438&amp;mode=Compare&amp;page=compare_plan_questions&amp;plan_type_id=" target="_blank"><em>Twelve states</em></a><em> provide matching funds for some contributions from some residents.</em></p>
          <p><em>Though less common, some 529 plans are pre-paid tuition plans that allow savers to purchase in advance specified numbers of credits or terms at participating institutions. Savers can transfer funds to other beneficiaries or withdraw their funds, sacrificing the tax benefits, if the student does not use the money to attend a qualifying institution.</em></p></Box>
 
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
