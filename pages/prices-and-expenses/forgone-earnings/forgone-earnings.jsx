'use strict';

import React, { Component } from 'react';
import Template from '20-templates/default/default.jsx';
import Graph from '30-components/graphs/graph/graph.jsx';
import Multiples from '30-components/graphs/multiples/multiples.jsx';
import Box from '30-components/box/box/box.jsx';
import SinglePage from '30-components/singlepage/singlepage.jsx';
import util from 'util.jsx';


let singlepage = (
  <div>
    <h1>Forgone Earnings</h1>
      <p>Some of the &ldquo;costs of college&rdquo; are expenses people would incur anyway, such as food and housing. <strong>But forgone earnings are a real cost of going to college instead of working</strong>. Taking time out of the workforce or cutting back on hours to attend school means giving up the money one might have earned at a full-time job. Like paying tuition, however, the lower income for a few years is part of an investment that pays off well in <a href="http://collegeaffordability.urban.org/after-college/employment-after-college/"><strong>future earnings</strong></a> for most students.</p>
      <p>Most students work and <a href="http://collegeaffordability.urban.org/covering-expenses/working-during-college/"><strong>earn</strong></a> money both during the months they are taking classes and over summers between academic years, so they are not giving up the full amount they would have earned if they were not in college. Moreover, many people who might be considering enrolling in college aren&rsquo;t employed or, if they have jobs, don&rsquo;t work full time. The figures reported here on young full-time workers overestimate the forgone earnings of many college students, but they provide benchmarks for people thinking about how much they are really paying for a college education.</p>
    <h2>Earnings of High School Graduates in Recent Years</h2>
      <p>The discussion of forgone earnings sometimes assumes a person not in college could find full-time work, but the data show that is not always true.</p>
      <p>From 2012 to 2016, less than 30 percent of high school graduates ages 18 to 23&mdash;the ages of dependent undergraduates&mdash;who were not in school worked full time year-round. The most common pattern was working part time or part of the year.</p>
      <p>About 47 percent of 24-to-34-year-olds&mdash;the age range of most independent undergraduates&mdash;worked full time for the full year, but about 23 percent were not employed.</p>
      <Graph file={require('./json/030401.json')}/>
      <p><strong>Even among those who find year-round full-time work, there is considerable variation in earnings.</strong> Men typically earn more than women, and, among both men and women, white and Asian workers earn more than black and Hispanic workers.</p>
      <p>But even within demographic groups, there is a wide range in earnings. The graphs below show the median (half the workers earn more and half earn less than this amount). They also show the 25th percentile (a quarter of the workers earn less than this amount) and the 75th percentile (a quarter of the workers earn more than this amount).</p>
      <Multiples 
        title="Earnings by Age among Full-Time Full-Year Workers with Only a High School Diploma or GED and Not Currently Attending School" 
        imageOverride= "Earnings by Age among Full-Time Full-Year Workers with Only a High School Diploma or GED and Not Currently Attending School__Ages 18–34, by gender and age" 
        subtitle="Ages 18–34, by gender and age" 
        source="2012–16 American Community Survey, five-year sample."
      >
        <Graph file={require('./json/030402.json')} small="true"/>
        <Graph file={require('./json/030403.json')} small="true"/>
      </Multiples>
      <Multiples 
        title="" 
        subtitle="Ages 18–23, by gender and race and ethnicity" 
        imageOverride= "Earnings by Age among Full-Time Full-Year Workers with Only a High School Diploma or GED and Not in School__Ages 18–23, by gender and race and ethnicity" 
        source="2012–16 American Community Survey, five-year sample."
      >
        <Graph file={require('./json/030404.json')} small="true"/>
        <Graph file={require('./json/030405.json')} small="true"/>
      </Multiples>
      <Multiples 
        title="" 
        subtitle="Ages 24–34, by gender and race and ethnicity" 
        imageOverride= "Earnings by Age among Full-Time Full-Year Workers with Only a High School Diploma or GED and Not in School__Ages 24–34, by gender and race and ethnicity" 
        source="2012–16 American Community Survey, five-year sample."
      >
        <Graph file={require('./json/030406.json')} small="true"/>
        <Graph file={require('./json/030407.json')} small="true"/>
      </Multiples>
    <h2>Earnings of High School Graduates over Time</h2>
      <p><strong>Changes in the earnings of high school graduates affect the real cost of going to college. When the economy is strong and the choice is between college and a well-paying job, the cost of college is higher than when the economy is weak and many high school graduates have trouble finding work.</strong></p>
      <p>Because of the gaps in earnings by gender, it is important to look at men and women separately. From 1991 to 2017 for year-round full-time male workers ages 18 to 23, the highest median earnings (in 2017 dollars) were in 1999 ($28,000). The lowest were in 2012 ($22,400). By 2017, median earnings had risen to $25,000.</p>
      <p>As<strong> college prices have risen, the alternatives available to men have been on a long-term downward trend. </strong>The option of not going to college is less financially rewarding, reducing the real cost of going to college for men. In the years since the Great Recession, men&rsquo;s earnings have recovered somewhat, though not enough to reverse the long-run trend.</p>
      <Graph file={require('./json/030408.json')}/>
      <Graph file={require('./json/030409.json')}/>
      <p>The pattern for women has been a little different, but the story is similar. Median earnings for female&nbsp;high school&nbsp;graduates ages 18 to 23 working full time year-round were 11 percent lower in inflation-adjusted dollars in 2017 than in 1991.</p>
      <p>Earnings among 24- to 34-year-olds have also declined in inflation-adjusted dollars from their&nbsp;levels in the 1990s and early 2000s. Median earnings among male high school graduates in this age group working full time year-round fell steadily from about $38,400 in 2000 to $35,000 in 2017. Median earnings among women of the same age and work status were slightly lower in 2017 than they were in 2000.</p>
  </div>
);

let specifications = {
  'name': 'forgone-earnings',
  'title': 'Forgone Earnings',
  'content': <SinglePage content={singlepage} />
};

const ForgoneEarnings = React.createClass({
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
util.printToPage('forgone-earnings', ForgoneEarnings);

module.exports = ForgoneEarnings;
