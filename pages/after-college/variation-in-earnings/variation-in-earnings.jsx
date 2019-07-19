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
    <h1>Variation in Earnings</h1>
      <p><strong>Most college degrees pay off well in the labor market. Average earnings increase sharply with higher levels of education.</strong></p>
      <p>The earnings gaps between bachelor&rsquo;s and advanced degree recipients and those with only a high school education are largest, but the typical associate degree holder earns more than someone with some college but no degree, who earns more than those with no college experience. And even though median earnings <a href="http://collegeaffordability.urban.org/after-college/variation-in-earnings/#over_time"><strong>have not risen</strong></a> much for young people at any level of education in recent years, the gap between those with college degrees and those with only a high school education continues to grow, as finding a well-paying job without any college gets harder.</p>
      <p>It is not easy to know how much of the earnings differential is really caused by education and how much results from preexisting differences between those who go to college and those who do not. But careful <a href="https://www.stlouisfed.org/publications/regional-economist/january-2010/the-return-to-education-isnt-calculated-easily#sidebar1" target="_blank"><strong>statistical analyses</strong></a> suggest that most of the gaps are, indeed, caused by college education.</p>
      <p>Not every bachelor&rsquo;s degree or every associate degree is the same. Both the <a href="http://collegeaffordability.urban.org/after-college/variation-in-earnings/#field_of_study"><strong>field of study</strong></a> and the quality of the institution matter. In particular, general associate degrees that do not prepare graduates for specific occupations bring limited earnings premiums. Data about the growing number of <a href="https://cew.georgetown.edu/cew-reports/certificates/" target="_blank"><strong>postsecondary certificates</strong></a> are less available, but here, too, the evidence suggests that some lead to strong job opportunities, but others do not.</p>
      <p>There is also considerable variation within groups, even after controlling for field of study, race, ethnicity, gender, and age. It is not surprising to find a bachelor&rsquo;s degree recipient who earns less than the average for people with associate degrees or a high school graduate who earns more than the average for four-year college graduates. But the data show that, for most people, college education pays off well in the labor market.</p>
      <p>The earnings premium is an important component of college affordability because students can pay for college out of their postcollege earnings, not just out of the funds they have available when they are enrolled. <a href="http://collegeaffordability.urban.org/covering-expenses/borrowing"><strong>Borrowing</strong></a> against future income to pay the bills while in college opens up educational opportunities that would not otherwise be available.</p>
    <h2>Over Time</h2>
      <p><strong>Median earnings have not risen for young people at any level of education in recent years, but the gap between those with college degrees and those with only a high school education continues to grow.</strong></p>
      <p>In 2017, median earnings for 25-to-34-year-olds whose highest degree was a bachelor&rsquo;s were over 65 percent higher than the median for high school graduates. Median earnings have reached their prerecession level only for young people with advanced degrees. But those with bachelor&rsquo;s degrees earned 1 percent less in 2017 than in 2007, and those with associate degrees earned 2 percent less. High school graduates earned 15 percent less.</p>
      <Graph file={require('./json/060201.json')} />
    <h2>Variation by Age</h2>
      <p><strong>Earnings tend to increase more rapidly for people with higher levels of education as they age.</strong></p>
      <p>The earnings gaps across levels of education are larger for 35-to-44-year-olds than for 25-to-34-year-olds and are even larger for 45-to-54-year-olds.</p>
      <Graph file={require('./json/060202.json')} />
    <h2>Variation within Education Levels</h2>
      <p>There is considerable variation in earnings among workers in the same age group with the same level of education, though as level of education increases, the share of workers with low earnings declines rapidly and the share of workers with high earnings increases.</p>
      <p>For example, between 2012 and 2016 among employed 35-to-44-year-olds whose highest degree was a bachelor&rsquo;s degree, 13 percent earned less than $21,000, placing them in the lowest quintile of all employed workers in this age group. For most of those people, a college education didn&rsquo;t pay off as well as expected and, in retrospect, may not have been affordable. But 32 percent earned $80,000 or more, placing them in the highest earnings quintile for their age group.</p>
      <p>Almost half of 35-to-44-year-olds with advanced degrees earned at least $80,000, and only 6 percent of those with no college experience had earnings this high.</p>
      <Graph file={require('./json/060203.json')} />
    <h2>Field of Study</h2>
      <p>Within each level of educational attainment, earnings vary by occupation, which, for those who attend college, frequently relates to a chosen field of study or college major. Of course, many liberal arts majors go into business, and many science majors find jobs outside their fields. Nonetheless, students who earn their bachelor&rsquo;s degrees in engineering typically have different occupational profiles from those who study education.</p>
      <p><strong>Median earnings are highest for 35-to-44-year-olds who earned their bachelor&rsquo;s degrees in computers, mathematics, or engineering and lowest for those who studied education, psychology, and the arts. But there is a lot of overlap in earnings across disciplines.</strong></p>
      <Graph file={require('./json/060204.json')} />
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
