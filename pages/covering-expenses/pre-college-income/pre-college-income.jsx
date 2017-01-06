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
    <h1>Pre-College Income</h1>
      <p>Whether college is affordable depends on the opportunities it opens up for a student, but it also depends on the resources available at the time the student enrolls. Those resources depend on how much income a family has earned over the previous years and how much the family has saved. </p>
      <p>Income and savings can also affect financial aid, since the financial aid system in the United States is grounded in the principle that those who are in a financial position to do so should help pay for their own or their children&rsquo;s college education. </p>
      <p>Although there is considerable variation within groups, differences in savings and wealth levels, current incomes, and income paths over time mean that some groups of students tend to have a much easier time paying for college than others.</p>
    <h2>Income Before College</h2>
      <p>About <a href="http://www.theatlantic.com/politics/archive/2013/08/why-americans-all-believe-they-are-middle-class/278240/" target="_blank">90 percent of Americans</a> perceive themselves as members of the lower-, middle-, or upper-middle class. This means that many families overestimate how much financial aid they&rsquo;ll receive, not realizing that there are many families out there earning significantly less. In 2015, 20 percent of families had incomes below $25,500 and 20 percent had incomes above $135,000.</p>
      <p>To understand why people receive the financial aid they do, it&rsquo;s important to understand how income is distributed across families and how it changes over time. </p>
      <p>In 2015, the median income for all families was $70,700. But median income differs by race and ethnicity, by location, and by age. For example, median incomes for black and Hispanic families were about two-thirds of the overall median; median family income was about $18,000 a year higher in the Northeast than in the South.</p>
      <p>Of particular importance for thinking about how people pay for college, incomes are higher among 45- to 54-year-olds—the age range of the parents of most traditional-age college students—than for both older and younger families. In 2015, median income for families headed by individuals in this age range was $85,700, 21 percent higher than the overall median.</p>
      <Multiples title="Median Total Income of Families by Race/Ethnicity, Geographical Region, and Age, 2015" source="U.S. Census Bureau, Current Population Survey, 2016 Annual Social and Economic Supplement, Table FINC-01">
        <Graph file={require('./json/05_0011.json')} small="true"/>
        <Graph file={require('./json/05_0012.json')} small="true"/>
        <Graph file={require('./json/05_0013.json')} small="true"/>
        <Graph file={require('./json/05_0014.json')} small="true"/>
      </Multiples>
      <p>Family incomes vary widely by state, ranging from more than $15,000 below the US average in Mississippi and New Mexico to more than $25,000 above it in Alaska and Maryland.<strong> </strong>There are also, of course, significant differences in the cost-of-living within states.</p>
      <Graph file={require('./json/05_0020.json')}/>
      <p>Another characteristic that predicts family income is education levels. In 2015, the median income of families headed by an individual whose highest degree was a bachelor&rsquo;s degree was about twice as high as the median for high school graduates. Median income was more than 50 percent higher for those with professional degrees than for those with bachelor&rsquo;s degrees.</p>
      <Graph file={require('./json/05_0030.json')}/>
    <h2>Incomes Over Time</h2>
      <p>The financial aid system looks at one year of income to determine expected family contributions. This is an imperfect measure of a family&rsquo;s ability to pay because incomes fluctuate over time and not all families with the same current level of income have the same earnings histories.</p>
      <p>Median incomes for families have been stagnant or declining recently. Only among those in the 55 to 64 age group was the median income higher in 2015 than it was for people who were in the same age group in 2005.</p>
      <p>In the late 1990s and early 2000s, around when current parents of college-age children would have started thinking about college, the median income for 45- to 54-year-olds was above $90,000 and climbing. Based on this trend, the then-30-year-old parents might have assumed they&rsquo;d earn more over time than they actually did. Instead, incomes of families headed by individuals in all age groups under 55 peaked in 2000, and families in 2015 had purchasing power equal to or less than their counterparts 15 years earlier. </p>
      <p>Given the increases in the price of college along with stagnation of incomes, it is no surprise that paying for college, even with the more generous financial aid now available, puts strain on many families.</p>
      <Graph file={require('./json/05_0040.json')}/>
      <p>Median income for families ages 25 to 34 was $55,700 (in 2015 dollars) in 1995. Ten years later, when those families were ages 35 to 44, their median income was $76,400, and in 2015, when they were sending their children to college, it was $85,700. The figure below shows the typical income paths of families headed by people ages 45 to 54 in 2015.  </p>
      <Graph file={require('./json/05_0050.json')}/>
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
