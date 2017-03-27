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
    <h1>Institutional Grant Aid</h1>
      <p><strong>Whether it is called institutional grant aid, scholarships, or discounts, about 40 percent of the grant aid that helps undergraduate students pay the sticker price of college comes from the institutions in which they enroll. </strong>This is on top of the <a href="../../cost-of-educating/subsidies/">subsidy</a> the institution already provides by charging students less than the amount it spends to educate them. </p>
      <p>Public four-year colleges and universities provide institutional aid to a smaller share of their students than do colleges in the private nonprofit sector; public two-year and for-profit colleges provide aid to the smallest share of students. </p>
      <p>Institutional aid may be awarded based on the student&rsquo;s and the family&rsquo;s financial capacity or it may be awarded to attract applicants with academic accomplishments, athletic skills, or other characteristics the college values. Higher-priced private nonprofit colleges and universities tend to rely more on financial need to determine institutional aid than do lower-priced institutions in that sector, so low-income students might actually pay less at institutions with higher sticker prices. </p>
      <p>In 2011–12, the share of full-time first-year students receiving institutional grant aid ranged from 7 percent in for-profit colleges to 75 percent in private nonprofit four-year colleges.</p>
      <Graph file={require('./json/04_0180.json')}/>
    <h2>Average Institutional Grants</h2>
      <p><strong>The average institutional grant per recipient is more than three times as high in private nonprofit as in public four-year colleges and universities—a ratio similar to that for published tuition and fees.</strong></p>
      <h3>Average Institutional Grant Aid Relative to Tuition and Fees</h3>
        <p><strong>Institutions with higher tuition prices narrow, but do not close, the price gaps by awarding more institutional grant aid.</strong></p>
        <p>Although students at private nonprofit four-year colleges and universities receive more institutional grant and scholarship aid than students at public four-year universities, they still pay higher average net tuition and fees.</p>
        <p>Students attending public two-year and for-profit institutions receive similar institutional aid, but those attending for-profits have much higher remaining tuition and fees because the sticker prices in that sector are much higher.</p>
        <p>On average, students receiving institutional grant aid at public and private nonprofit colleges receive discounts worth approximately 50 percent of tuition and fees.</p>
        <Graph file={require('./json/04_0190.json')}/>
      <h3>Distribution of Need-Based and Non-need–Based Institutional Grant Aid</h3>
      <p>Both public and private nonprofit institutions award a combination of &ldquo;need based&rdquo; institutional grants, which depend on financial circumstances, and &ldquo;non-need based&rdquo; or &ldquo;merit-based&rdquo; institutional grants, which are based on other characteristics. Lower-income students receive more need-based aid than their peers from more affluent families, but even students from families in the highest-income quartile receive some need-based aid. Non-need–based aid goes to students from all income backgrounds.</p>
      <p><strong>At the highest-priced private nonprofit colleges and universities, where most aid is need-based, students from low-income families receive significantly more institutional grant aid than their more affluent classmates, but this is not the case at lower-priced institutions in the sector.</strong></p>
      <Graph file={require('./json/04_0200.json')}/>
      <p>At the highest-tuition private nonprofit colleges and universities, students from low-income families receive much more institutional grant aid than those from higher-income families. However, at lower-price institutions in the sector, there is much less variation in the grant aid received by students from families with different income levels. In 2011-12, students from the lowest family income quartile received more than twice as much institutional grant aid, on average, as those from the highest family income quartile. But in the half of institutions with the lowest prices, grant aid was similar for these two groups.</p>
      <Multiples title="Average Need-Based and Non-need–Based Grant Aid per Full-Time Student (and Percentage Receiving Institutional Aid), Public Four-Year Institutions, 2011–12" source="Baum et al, <em>Trends in Student Aid 2014</em>, table 29B, based on data from NPSAS.">
        <Graph file={require('./json/04_0211.json')} small="true"/>
        <Graph file={require('./json/04_0212.json')} small="true"/>
        <Graph file={require('./json/04_0213.json')} small="true"/>
       </Multiples>
       <p>Full-time dependent students from the lower half of the income distribution attending public four-year institutions in 2011&ndash;12 received about two and half times as much need-based institutional grant aid as those from the upper half of the income distribution. But because the more affluent students received more non-need&ndash;based aid, the gap in total institutional grant aid was much smaller.</p>
  </div>
  
);

let specifications = {
  'name': 'institutional',
  'title': 'Institutional Grant Aid',
  'content': <SinglePage content={singlepage} />
};

const Institutional = React.createClass({
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
util.printToPage('institutional', Institutional);

module.exports = Institutional;
