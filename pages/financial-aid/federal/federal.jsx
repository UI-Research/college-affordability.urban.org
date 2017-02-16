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
          <li><strong>Pell grants</strong>, the largest source of federal grant aid, are available to low- and moderate-income students. Students receive federal Pell grants based on their financial circumstances and whether they enroll full time or part time. It doesn&rsquo;t matter where they go to school.  </li>
          <li><strong>Federal Supplemental Educational Opportunity Grants</strong> (FSEOG) are also based on financial need, often supplementing Pell grants for low-income students. But these grants are limited to students at participating colleges, which must contribute a quarter of the aid their students receive through this program.</li>
          <li><strong>GI Bill benefits </strong>and other veterans&rsquo; or military benefits are restricted to veterans, members of the military, or their dependents. The Post-9/11 GI Bill is the largest of these programs, providing more than $12 billion in support to undergraduates in 2015–16.</li>
        </ul>
      <p><strong>The federal government provides much more grant aid to students now than it did before the Great Recession. The two main types of federal grants—Pell grants and aid to veterans—increased dramatically in 2009</strong><strong>–10 and 2010–11. </strong></p>
      <p>More than 7.5 million students received Pell grants in 2015–16, with an average award of about $3,720. In contrast, about 1.6 million students received FSEOGs averaging about $450 each. Fewer than 1 million students received veterans&rsquo; benefits, but the average benefit was more than $14,500 per recipient.</p>
    <h2>Pell Grants</h2>
      <p>About two-thirds of federal grant aid for undergraduate students comes from the Pell Grant program. This program has funded low- and moderate-income students to enroll in the colleges and universities of their choice since the mid-1970s. In 2016–17, the lowest-income students received $5,815 toward their college expenses</p>
      <p>WHO GETS PELL GRANTS?</p>
      <p><strong>Almost all Pell grant recipients are independent students or dependent students from the bottom half of the income distribution.</strong> In 2011–12, 49 percent of full-time students received Pell grants and the average grant per recipient was $4,440. </p>
      <p>In 2011–12, averaged across all full-time students, the program provided $1,700 per dependent student and $3,300 per independent student. Among dependent students, those whose parents&rsquo; incomes were less than $30,000 received an average of $4,800 per student, and those whose parental income was between $30,000 and $65,000 received an average of $2,200 per full-time student.</p>
      <p><strong>Not everyone who gets a Pell grant receives the maximum amount. Instead, the size of the grant varies by income, family circumstances, and full-time or part-time enrollment.</strong></p>
      <p>In 2011–12, the average grant for dependent full-time Pell recipients from families with incomes under $30,000 was $5,200.  </p>
       <Multiples title="Pell Grant by Dependency Status and Income, 2011–12 (with Percentage Receiving Pell)" subtitle= "Dollars per recipient" source="National Postsecondary Student Aid Study (NPSAS), 2012.">
        <Graph file={require('./json/04_0911.json')} small="true"/>
        <Graph file={require('./json/04_0912.json')} small="true"/>
        <Graph file={require('./json/04_0913.json')} small="true"/>
    </Multiples>
        <Multiples title="" subtitle="Dollars per full-time student" source="NPSAS, 2012" notes="Includes all full-time students, both Pell grant recipients and nonrecipients.">
        <Graph file={require('./json/04_0921.json')} small="true"/>
        <Graph file={require('./json/04_0922.json')} small="true"/>
        <Graph file={require('./json/04_0923.json')} small="true"/>
    </Multiples>
      <p>Part-time students also receive Pell grants, but their awards are smaller than those of similar students who are enrolled full time. </p>
      <p>PELL GRANTS SINCE 2011–12</p>
      <p><strong>After adjusting for inflation, Pell award levels have declined somewhat since 2011</strong><strong>–12.</strong></p>
      <Graph file={require('./json/04_0100.json')}/>
    <h2>Post-9/11 GI Benefits</h2>
      <p><strong>Some veterans are eligible for generous benefits from the Post-9/11 GI Bill. The program covers full tuition for in-state students at public institutions and, in 2016</strong><strong>–17, up to </strong><a href="http://www.benefits.va.gov/GIBILL/resources/benefits_resources/rates/ch33/ch33rates080116.asp#TUITION" target="_blank"><strong>$21,970 </strong></a><strong>for students at participating private colleges.</strong></p>
      <p>Participation in the Post-9/11 GI Bill program has grown rapidly since it was introduced in 2009–10. Almost 850,000 students received this support in 2015–16. On average, recipients got $14,575 per year toward tuition, fees, and living expenses while they were in school.</p>
      <Graph file={require('./json/04_0110.json')}/>
    <h2>Federal Grant Aid over Time</h2>
      <p><strong>Both Pell grants and aid to veterans through the Post-9/11 GI Bill increased dramatically in 2009</strong><strong>–10 as a result of policy changes, increased financial need, and increased enrollment during the economic downturn. </strong></p>
      <p>In 2008–09, undergraduate students received an average of $1,400 (in 2015 dollars) in Pell grants and $360 in veterans&rsquo; and military assistance. The following year, they received an average of $2,170 in Pell grants and $650 in veterans&rsquo; and military assistance. In 2015–16, veterans&rsquo; and military educational support provided approximately half as much aid as Pell grants.</p>
      <Graph file={require('./json/04_0120.json')}/>      
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
