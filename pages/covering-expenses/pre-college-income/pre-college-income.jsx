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
    <h1>Precollege Income</h1>
      <p>Whether college is affordable depends on the opportunities it opens up for a student, but it also depends on the resources available at the time the student enrolls. Those resources depend on how much income a family has earned over the previous years and how much the family has saved, in addition to current earnings.</p>
      <p>Income and savings can also affect financial aid, because the financial aid system in the United States is grounded in the principle that those who are in a financial position to do so should help pay for their own or their children&rsquo;s college education.</p>
      <p>Although there is considerable variation within groups, differences in savings and wealth, current incomes, and income paths over time mean that some students tend to have an easier time paying for college than others.</p>
    <h2>Income before College</h2>
      <p>About <a href="http://www.theatlantic.com/politics/archive/2013/08/why-americans-all-believe-they-are-middle-class/278240/" target="_blank">90 percent of Americans</a> perceive themselves as members of the lower, middle, or upper-middle class. This means many families overestimate how much financial aid they&rsquo;ll receive, not realizing that many families earn significantly less. In 2017 <a href="https://www.census.gov/data/tables/time-series/demo/income-poverty/historical-income-inequality.html" target="_blank">20 percent of families</a> had incomes below $34,000, and 20 percent had incomes above $145,000.</p>
      <p>To understand why people receive the financial aid they do, it&rsquo;s important to understand how income is distributed across families.</p>
      <p>In 2017, the <a href="https://www.census.gov/data/tables/time-series/demo/income-poverty/cps-finc/finc-01.html" target="_blank">median income</a> for all families was $75,900. But median income differs by race or ethnicity, by location, and by age. For example, median incomes for black and Hispanic families were about 70 percent of the overall median, and median family income was about $14,000 a year higher in the Northeast than in the South.</p>
      <p>Of particular importance for thinking about how people pay for college, incomes are higher among 45-to-54-year-olds&mdash;the age range of the parents of most traditional-age college students&mdash;than for both older and younger families. In 2017, median income for families headed by 45-to-54-year-olds was $93,900, 24 percent higher than the overall median.</p>
      <Multiples 
      title="Median Total Income of Families by Race or Ethnicity, Geographic Region, and Age, 2016" 
      source="2016 Annual Social and Economic Supplement to the Current Population Survey, table FINC-01."
      >
        <Graph file={require('./json/050101.json')} small="true"/>
        <Graph file={require('./json/050102.json')} small="true"/>
        <Graph file={require('./json/050103.json')} small="true"/>
        <Graph file={require('./json/050104.json')} small="true"/>
      </Multiples>
      <p>Another characteristic that predicts family income is education levels. In 2017, the median income of families headed by a person whose highest degree was a bachelor&rsquo;s degree was about twice as high as the median for high school graduates. Median income was 64 percent higher for those with professional degrees than for those with bachelor&rsquo;s degrees.</p>
      <Graph file={require('./json/050105.json')}/>
      <p>Family incomes vary widely by state, ranging from more than $17,000 below the US average in Mississippi and New Mexico to more than $27,000 above it in Connecticut, New Jersey, and Massachusetts. There are also significant differences in the cost of living by state.</p>
      <Graph file={require('./json/050106.json')}/>
    <h2>Income over Time</h2>
      <p>The financial aid system looks at one year of income to determine expected family contributions. This is an imperfect measure of a family&rsquo;s ability to pay because incomes fluctuate and not all families with the same current level of income have the same earnings histories.</p>
      <p>Median incomes for families of all ages fell between 2007 and 2011. The declines ranged from 7 percent (in inflation-adjusted dollars) for those ages 55 to 64 to 11 percent for those ages 24 to 34. However, by 2017, median incomes were slightly higher for all ages groups than they had been a decade earlier.</p>
      <p>Still, median incomes of families headed by people younger than 55 peaked (in inflation-adjusted dollars) in 2000, and families in 2017 had purchasing power less than their counterparts 17 years earlier. Moreover, the gap in median earnings between 35-to-44-year-olds and 45-to-54-year-olds fell from $15,900 (20 percent in 2017 dollars) in 2000 to $11,400 (14 percent) in 2017. These circumstances have made it harder for many of the parents now trying to pay for college to plan and save in advance.</p>
      <p>Given college price increases and income stagnation, it is no surprise that paying for college, even with the more generous financial aid now available, strains many families.</p>
      <Graph file={require('./json/050107.json')}/>
      <p>Median income for families ages 25 to 34 was $61,100 (in 2017 dollars) in 1997. Ten years later, when those families were ages 35 to 44, their median income was $80,400, and in 2017, when they were sending their children to college, it was $93,900. The figure below shows the typical income paths of families headed by people ages 45 to 54 in 2017.</p>
      <Graph file={require('./json/050108.json')}/>
  </div>
);

let specifications = {
  'name': 'pre-college-income',
  'title': 'Pre-College Income',
  'content': <SinglePage content={singlepage} />
};

const PreCollegeIncome = React.createClass({
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
util.printToPage('pre-college-income', PreCollegeIncome);

module.exports = PreCollegeIncome;