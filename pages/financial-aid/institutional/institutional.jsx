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
      <p>Institutional aid may be awarded based on the student&rsquo;s and the family&rsquo;s financial capacity, or it may be awarded to attract applicants with academic accomplishments, athletic skills, or other characteristics the college values. Higher-priced private nonprofit colleges and universities tend to rely more on financial need to determine institutional aid than do lower-priced institutions in that sector, so low-income students might actually pay less at institutions with higher sticker prices. </p>
      <p>In 2015&ndash;16, the&nbsp;share&nbsp;of full-time first-year students receiving institutional grant aid ranged from 16 percent in public two-year colleges to 81 percent in private nonprofit four-year colleges.</p>
      <Graph file={require('./json/040501.json')}/>
    <h2>Average Institutional Grants</h2>
      <p><strong>The average institutional grant per recipient is more than three times as high in private nonprofit colleges and universities as in public four-year colleges and universities. The $13,000 difference in average institutional aid fills about 60 percent of the $21,000 difference in average tuition and fee prices.</strong></p>
      <h3>Average Institutional Grant Aid Relative to Tuition and Fees</h3>
        <p><strong>Institutions with higher tuition prices narrow, but do not close, the price gaps by awarding more institutional grant aid.</strong></p>
        <p>Although students at private nonprofit four-year colleges and universities receive more institutional grant and scholarship aid than do students at public four-year universities, they still pay higher average net tuition and fees.</p>
        <p>Students attending for-profit institutions receive somewhat higher average institutional aid than those at public two-year colleges,, but students receiving this aid in the for-profit sector pay net prices that are almost four times as high as the average published tuition and fees at public two-year colleges.</p>
        <p>On average, in 2015&ndash;16, students receiving institutional&nbsp;grant&nbsp;aid at public four-year colleges received discounts worth more than 40 percent of tuition and fees. Average institutional grants at private nonprofit colleges covered 55 percent of the published tuition and fee price.</p>
        <Graph file={require('./json/040502.json')}/>
      <h3>Distribution of Need-Based and Non-need–based Institutional Grant Aid</h3>
      <p>Both public and private nonprofit institutions award &ldquo;need-based&rdquo; institutional grants, which depend on financial circumstances, and &ldquo;non-need-based&rdquo; or &ldquo;merit-based&rdquo; institutional grants, which are based on other characteristics. Low-income students receive more need-based aid than their peers from more affluent families, but even students from families in the highest income quartile receive some need-based aid. Non-need-based aid goes to students from all income backgrounds.</p>
      <p><strong>At the highest-price private nonprofit colleges and universities, where most aid is need based, students from low-income families receive significantly more institutional grant aid than their more affluent classmates, but this is not the case at low-price institutions in the sector.</strong></p>
      <Graph file={require('./json/040503.json')}/>
      <p>At the highest-tuition private nonprofit colleges and universities, on average students from low-income families received about three times as much institutional grant aid in 2015&ndash;16 as those from families in the highest income quartile.. But at the lowest-price institutions in the sector, students from more affluent families received more institutional grant aid than those from the lower half of the income distribution.</p>
      <Multiples 
        title="Average Need-Based and Non-need-Based Grant Aid per Full-Time Student (and Percentage Receiving Institutional Aid), Public Four-Year Institutions" 
        source="Baum et al, Trends in Student Aid 2014, The College Board, based on NPSAS 2012."
      >
        <Graph file={require('./json/040504.json')} small="true"/>
        <Graph file={require('./json/040505.json')} small="true"/>
        <Graph file={require('./json/040506.json')} small="true"/>
       </Multiples>
       <p>Full-time first-year dependent students the top 25 percent of the income distribution enrolled in public four-year institutions received very little need-based institutional grant aid. But because they received more non-need-based aid than less affluent students, their total institutional grant aid was as high as the aid received by other students.</p>
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
