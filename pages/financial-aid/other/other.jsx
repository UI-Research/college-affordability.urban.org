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
    <h1>Other Grant Aid</h1>
      <p>About 10 percent of the grant aid undergraduate students receive comes from sources other than federal and state governments or the colleges and universities in which students enroll.</p>
      <p><strong>Employer assistance:&nbsp;</strong>About 5 percent of undergraduates receive assistance from their own or their parents&rsquo; employers. In 2015&ndash;16, the average grant to full-time students receiving this assistance was $8,300.</p>
      <p>Employer tuition assistance programs come in different forms.&nbsp;<a href="http://fortune.com/2015/04/06/starbucks-expands-college-tuition-benefit-for-workers/" target="_blank">Starbucks</a>&nbsp;reimburses employees for the tuition for Arizona State University&rsquo;s online degree programs.&nbsp;<a href="http://www.theatlantic.com/education/archive/2015/11/strayer-university-fiat-chrysler-partnership/417417/" target="_blank">Fiat Chrysler Automobiles</a>&nbsp;pays tuition for employees and their dependents who enroll in the for-profit Strayer University. But many employers in both the public and private sectors provide general tuition assistance as part of their benefits packages. These plans usually do not require employees to enroll in specific institutions. Employer tuition assistance is a taxable benefit only if it exceeds $5,250 per year.</p>
      <p><strong>Private scholarships:&nbsp;</strong>Foundations and other private organizations provide scholarships to students with financial need, to those whose accomplishments the organizations wish to recognize, or to members of the local community. In 2015&ndash;16, the average private-source grant for the 19 percent of full-time undergraduates who received this aid was $3,900.&nbsp;</p>
      <p>The largest source of private grants is&nbsp;<a href="https://scholarshipamerica.org/" target="_blank">Scholarship America</a>, an umbrella organization for local Dollars for Scholars programs that provide scholarships to college students in their communities. The organization distributes more than $200 million to students across the country each year. A number of foundations also each distribute more than $10 million a year in scholarships, and numerous organizations provide smaller amounts, sometimes targeting very specific types of students, such as American Indians, foster children, and academic leaders.</p>
      <p><strong>Among the small number of undergraduates who receive tuition assistance from employers, the largest average awards go to dependent students from higher-income families and those enrolled in private nonprofit four-year institutions. Grants from private sources are more common among dependent than independent students and more common among those enrolled in public and private nonprofit four-year colleges and universities than among those attending two-year public and for-profit institutions</strong></p>
      <Multiples 
        title="Percentage of Undergraduates Receiving Employer Assistance, 2015-16" 
        source="National Postsecondary Student Aid Study 2016"
      >
        <Graph file={require('./json/040601.json')} small="true"/>
        <Graph file={require('./json/040602.json')} small="true"/>
        <Graph file={require('./json/040603.json')} small="true"/>
        <Graph file={require('./json/040604.json')} small="true"/>
      </Multiples>
      <Multiples 
        title="Percentage of Undergraduates Receiving Private Scholarships, 2015-16" 
        source="National Postsecondary Student Aid Study 2016"
      >
        <Graph file={require('./json/040605.json')} small="true"/>
        <Graph file={require('./json/040606.json')} small="true"/>
        <Graph file={require('./json/040607.json')} small="true"/>
        <Graph file={require('./json/040608.json')} small="true"/>
      </Multiples>
      <Multiples 
        title="Average Employer Assistance and Private Scholarships per Recipient, 2015-16" 
        source="National Postsecondary Student Aid Study 2016"
      >
        <Graph file={require('./json/040609.json')} small="true"/>
        <Graph file={require('./json/040610.json')} small="true"/>
        <Graph file={require('./json/040611.json')} small="true"/>
        <Graph file={require('./json/040612.json')} small="true"/>
      </Multiples>
      <Multiples 
        title="Private Scholarships per Recipient, 2015-16" 
        source="National Postsecondary Student Aid Study 2016"
      >
        <Graph file={require('./json/040613.json')} small="true"/>
        <Graph file={require('./json/040614.json')} small="true"/>
        <Graph file={require('./json/040615.json')} small="true"/>
        <Graph file={require('./json/040616.json')} small="true"/>
      </Multiples>
  </div>
  
);

let specifications = {
  'name': 'other',
  'title': 'Other Grant Aid',
  'content': <SinglePage content={singlepage} />
};

const Other = React.createClass({
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
util.printToPage('other', Other);

module.exports = Other;