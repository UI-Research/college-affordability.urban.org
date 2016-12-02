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
    <h1>Variation in earnings</h1>
      <p><strong>Most college degrees pay off very well in the labor market.</strong> <strong>Average earnings increase sharply with higher levels of education.</strong></p>
      <p>The earnings gaps between bachelor&rsquo;s and advanced degree recipients and those with only a high school education are largest, but the typical associate degree holder earns more than someone with some college but no degree, who earns more than those with no college experience. And even though median earnings <a href="#over_time">have not risen</a> much for young people at any level of education in recent years, the gap between those with college degrees and those with only a high school education continues to grow, as finding a well-paying job without any college gets harder. </p>
      <p>It is not easy to know how much of the earnings differential is really caused by education and how much results from preexisting differences between those who go to college and those who do not. But careful <a href="https://www.stlouisfed.org/publications/regional-economist/january-2010/the-return-to-education-isnt-calculated-easily#sidebar1" target="_blank">statistical analyses</a> suggest that most of the gaps are, indeed, caused by college education. </p>
      <p>Not every bachelor&rsquo;s degree or every associate degree is the same. Both the <a href="#field_of_study">field of study</a> and the quality of the institution matter. In particular, general associate degrees that do not prepare graduates for specific occupations bring limited earnings premiums. Data about the growing number of <a href="../../what-is-college">postsecondary certificates</a> are less available, but here too, the evidence suggests that some lead to very strong job opportunities, but others do not.</p>
      <p>There is also considerable variation within groups, even after controlling for field of study, race, ethnicity, gender, and age. It is not surprising to find a bachelor&rsquo;s degree recipient who earns less than the average for individuals with associate degrees or a high school graduate who earns more than the average for four-year college graduates. But the data clearly show that, for most people, college education pays off very well in the labor market. </p>
      <p>The earnings premium is an important component of college affordability because students can pay for college out of their post-college earnings, not just out of the funds they have available when they are enrolled. <a href="../../covering-expenses/borrowing">Borrowing</a> against future income to pay the bills while in college opens up educational opportunities that would not otherwise be available.<em><br clear="all" /></em></p>
    <h2>Over Time</h2>
      <p><strong>Median earnings have not risen for young people at any level of education in recent years, but the gap between those with college degrees and those with only a high school education continues to grow. </strong></p>
      <p>In 2014, median earnings for individuals ages 25 to 34 whose highest degree was a bachelor&rsquo;s degree were 70 percent higher than the median for high school graduates. During the economic downturn from 2008 to 2012, gaps by educational attainment widened as those with no college education experienced steeper declines in earnings.</p>
      <Graph file={require('./json/06_0040.json')} />
    <h2>Variation by Age</h2>
      <p><strong>The earnings gap between high school graduates and college graduates is larger for older people because earnings tend to increase more rapidly for individuals with higher levels of education.</strong></p>
      <p>The earnings gaps across levels of education are larger for 35- to 44-year olds than for younger adults.</p>
      <Graph file={require('./json/06_0050.json')} />
    <h2>Variation within Education Levels</h2>
      <p>There is considerable variation in earnings among workers in the same age group with the same level of education, though as level of education increases the percentage of workers with low earnings declines rapidly and the percentage of workers with high earnings increases.</p>
      <p>For example, among employed 35- to 44-year-olds whose highest degree was a bachelor&rsquo;s degree, 13 percent earned less than $21,650 in 2014, putting them in the lowest 20 percent of all employed workers in this age group. For most of those people, a college education didn&rsquo;t pay off as well as expected and, in retrospect, may not have really been affordable. But 32 percent earned $80,000 or more, placing them in the highest earnings quintile for their age group. </p>
      <p>Almost half of the individuals with advanced degrees had earnings of $80,000 or higher, and only 6 percent of those with no college experience had earnings this high.</p>
      <Graph file={require('./json/06_0060.json')} />
    <h2>Field of Study</h2>
      <p>Within each level of educational attainment, earnings vary by occupation, which, for those who attend college, frequently relates to a chosen field of study or college major. Of course, many liberal arts majors go into business and many science majors find jobs outside their fields. Nonetheless, students who earn their bachelor&rsquo;s degrees in engineering typically have different occupational profiles from those who study education.</p>
      <p><strong>Median earnings are highest for 35- to 44-year-olds who earned their bachelor&rsquo;s degrees in computers, mathematics, or engineering and lowest for those who studied arts and education. But there is a lot of overlap in earnings across disciplines.</strong></p>
      <Graph file={require('./json/06_0070.json')} />
  </div>
);

let specifications = {
  'name': 'variation-in-earnings',
  'title': 'Variation in Earning',
  'content': <SinglePage content={singlepage} />
};

const VariationInEarning = React.createClass({
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
util.printToPage('variation-in-earnings', VariationInEarning);

module.exports = VariationInEarning;
