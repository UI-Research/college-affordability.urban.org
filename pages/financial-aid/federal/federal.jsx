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
    <h1>Federal Grant Aid</h1>
      <p>The federal government provides student aid through several programs:</p>
      <ul>
        <li><strong>Pell grants</strong>, the largest source of federal grant aid, are available to low- and moderate-income students. Students receive federal Pell grants based on their financial circumstances and whether they enroll full time or part time. It doesn&rsquo;t matter where they go to school.</li>
        <li><strong>Federal Supplemental Educational Opportunity Grants</strong> are also based on financial need, often supplementing Pell grants for low-income students. But these grants are limited to students at participating colleges, which must contribute a quarter of the aid their students receive through this program.</li>
        <li><strong>GI Bill benefits </strong>and other veterans&rsquo; or military benefits are restricted to veterans, members of the military, and their dependents. The Post-9/11 GI Bill is the largest of these programs, providing about $12 billion in support to undergraduates in 2016&ndash;17.</li>
      </ul>
      <p><strong>The federal government provides more grant aid to students now than it did before the Great Recession. The two main types of federal grants&mdash;Pell grants and aid to veterans&mdash;increased dramatically in 2009&ndash;10 and 2010&ndash;11.</strong></p>
      <p>More than 7.5 million students received Pell grants in 2015&ndash;16, with an average award of $3,720. In contrast, about 1.6 million students received Federal Supplemental Educational Opportunity Grants, averaging $450 each. Fewer than 1 million students received veterans&rsquo; benefits, but the average benefit was more than $14,500 per recipient.</p>
    <h2>Pell Grants</h2>
      <p>About two-thirds of federal grant aid for undergraduate students comes from the Pell grant program. This program has funded low- and moderate-income students to enroll in the colleges and universities of their choice since the 1970s. In 2018&ndash;19 the lowest-income students received $6,095 toward their college expenses.</p>
      <p>WHO GETS PELL GRANTS?</p>
      <p><strong>Almost all Pell grant recipients are independent students or dependent students from the bottom half of the income distribution.</strong> In 2015&ndash;16, 47 percent of full-time students received Pell grants, and the average grant per recipient was $4,700.</p>
      <p>In 2015&ndash;16, averaged across all full-time students, the program provided $1,860 per dependent student and $3130 per independent student. Among dependent students, those whose parental incomes was less than $27,900 received an average of $5,160 per student, and those whose parental income was between $27,900 and $63,000 received an average of $2,960 per full-time student.</p>
      <p><strong>Not everyone who gets a Pell grant receives the maximum amount. Instead, the grant size varies by income, family circumstances, and full-time or part-time enrollment.</strong></p>
      <p>In 2015&ndash;16&ndash;12, the average grant for dependent full-time Pell recipients from families with incomes below $27,900 was $5,530.</p>
      <Multiples 
        title="Pell Grant by Dependency Status and Income, Full-Time Students, 2015–16 (with Share Receiving Pell Grants)" 
        subtitle= "Dollars per recipient" 
        imageOverride = "Pell Grant by Dependency Status and Income, Full-Time Students, 2015–16 (with Percentage Peceiving Pell Grants)__Dollars per recipient" 
        source="2016 National Postsecondary Student Aid Study."
        notes="Includes all full-time students, both Pell grant recipients and nonrecipients."
      >
        <Graph file={require('./json/040301.json')} small="true"/>
        <Graph file={require('./json/040302.json')} small="true"/>
        <Graph file={require('./json/040303.json')} small="true"/>
    </Multiples>
    <Multiples 
      title="" 
      subtitle="Dollars per full-time student" 
      imageOverride = "Pell Grant by Dependency Status and Income, Full-Time Students, 2015–16 (with Percentage Peceiving Pell Grants)__Dollars per full-time student" 
      source="2016 National Postsecondary Student Aid Study." 
      notes="Includes all full-time students, both Pell grant recipients and nonrecipients."
    >
        <Graph file={require('./json/040304.json')} small="true"/>
        <Graph file={require('./json/040305.json')} small="true"/>
        <Graph file={require('./json/040306.json')} small="true"/>
    </Multiples>
      <p>Part-time students also receive Pell grants, but their awards are smaller than those of similar students who are enrolled full time.</p>
      <p>PELL GRANTS OVER TIME</p>
      <p><strong>After adjusting for inflation, both the average and maximum Pell award levels&nbsp; have&nbsp; declined from their 2010-11 peaks.</strong></p>
      <Graph file={require('./json/040307.json')}/>
    <h2>Post-9/11 GI Benefits</h2>
      <p><strong>Some veterans are eligible for generous benefits from the Post-9/11 GI Bill. The program covers full tuition for in-state students at public institutions and, in 2017&ndash;18, up to </strong> <strong> students at participating private colleges.</strong></p>
      <p>Participation in the Post-9/11 GI Bill program has grown rapidly since it was introduced in 2009&ndash;10. Almost 770,000 students received this support in 2017&ndash;18. On average, recipients got $15,310 a year toward tuition, fees, and living expenses while they were in school.</p>
      <Graph file={require('./json/040308.json')}/>
    <h2>Federal Grant Aid over Time</h2>
      <p><strong>Both Pell grants and aid to veterans through the Post-9/11 GI Bill increased dramatically in 2009&ndash;10 because of policy changes, increased financial need, and increased enrollment during the economic downturn.</strong></p>
      <p>In 2008&ndash;09, undergraduate students received an average of $1,630 (in 2017 dollars) in Pell grants and $280 in veterans&rsquo; and military assistance. The following year, they received an average of $2,520 in Pell grants and $590 in veterans&rsquo; and military assistance. In 2017&ndash;18, veterans&rsquo; and military educational support provided over 40 percent as much aid as Pell grants.</p>
      <Graph file={require('./json/040309.json')}/>      
  </div>
);

let specifications = {
  'name': 'federal',
  'title': 'Federal',
  'content': <SinglePage content={singlepage} />
};

const Federal = React.createClass({
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
util.printToPage('federal', Federal);

module.exports = Federal;
