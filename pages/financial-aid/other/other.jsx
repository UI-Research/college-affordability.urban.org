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
<<<<<<< HEAD
    <h1>Other Sources of Grant Aid</h1>
      <p>About 10 percent of the grant aid undergraduate students receive comes from sources other than federal and state governments or the colleges and universities in which students enroll. </p>
      <p><strong>Employer Assistance: </strong>About 6 percent of undergraduates receive assistance from their own or their parents&rsquo; employers. In 2011–12, the average grant to full-time students receiving this assistance was $5,700.</p>
      <p>Employer tuition assistance programs come in different forms. <a href="http://fortune.com/2015/04/06/starbucks-expands-college-tuition-benefit-for-workers/" target="_blank">Starbucks</a> reimburses employees for the tuition for Arizona State University&rsquo;s online degree programs. Fiat <a href="http://www.theatlantic.com/education/archive/2015/11/strayer-university-fiat-chrysler-partnership/417417/" target="_blank">Chrysler</a> Automobiles pays tuition for employees and their dependents who enroll in the for-profit Strayer University. But many employers in both the public and private sectors provide general tuition assistance as part of their benefits packages. These plans usually do not require employees to enroll in specific institutions. Employer tuition assistance is a taxable benefit only if it exceeds $5,250 per year.</p>
      <p><strong>Private Scholarships: </strong>Foundations and other private organizations provide scholarships to students with financial need, to those whose accomplishments the organizations wish to recognize, or to members of the local community. In 2011–12, the average private-source grant for the 14 percent of full-time undergraduates who received this aid was $3,800.  </p>
      <p>The largest source of private grants is Scholarship America, an umbrella organization for local Dollars for Scholars programs that provide scholarships to college students in their communities. The organization distributes more than $200 million to students across the country each year. A number of foundations also each distribute more than $10 million a year in scholarships and numerous organizations provide smaller amounts, sometimes targeting very specific types of students, such as American Indians, foster children, and academic leaders. </p>
      <p><strong>Students from low-income families are less likely than those from higher-income families to receive either employer assistance or private grants. Both forms of aid are most common among students enrolled in private nonprofit four-year institutions</strong></p>
      <Graph file={require('./json/04_0220.json')}/>
=======
    <h1>What is College?</h1>
    <h2>Overview</h2>
    <p>Quisque nec orci at mi iaculis ornare vel eu enim. Fusce vestibulum cursus nisi, vestibulum rhoncus ligula porta non. Maecenas dignissim sagittis ante, at porta urna elementum vitae. Donec accumsan ac sapien vitae maximus. Integer malesuada auctor congue. Maecenas molestie efficitur risus ac ullamcorper. Proin orci leo, luctus vitae erat ac, tristique aliquam eros. Aliquam lobortis lorem ante, ut volutpat ante ornare ut. Vestibulum facilisis ullamcorper ornare. Praesent volutpat tincidunt felis, at convallis tortor elementum id.</p>
    <p>Duis imperdiet posuere fermentum. Sed bibendum ultricies sapien sed placerat. Etiam ac nunc condimentum, ultrices velit a, malesuada nisi. Vestibulum risus justo, varius et orci ut, commodo convallis purus. Nulla velit urna, viverra eget accumsan quis, feugiat vitae erat. Pellentesque in porttitor orci. Suspendisse id risus et leo laoreet luctus sit amet et tellus. Donec urna nunc, dictum a quam a, ultrices dignissim nisl. Nulla lobortis cursus erat, id rhoncus quam mollis non. Nam ut ipsum dui.</p>
    <h2>Heading 2</h2>
    <p>Duis in diam sem. Nunc tempus malesuada nisl ac tincidunt. Donec eget rhoncus erat. Mauris finibus enim eget libero eleifend, sit amet pellentesque leo dignissim. Proin quis orci eu lectus iaculis iaculis. Mauris gravida vehicula eros, sit amet eleifend ex porttitor et. Ut eget tincidunt nisi.</p>
    <h3>Sub Heading</h3>
    <p>Donec ornare, sem id consectetur dapibus, tortor mi pretium metus, ac malesuada mauris ligula commodo massa. Phasellus sed aliquam risus. Curabitur id dui lacus. Sed eleifend dolor at pellentesque molestie. Maecenas fringilla sem condimentum, aliquam nisl sit amet, dignissim ex. Mauris mattis justo risus, ac sodales neque euismod quis. Duis porttitor eget risus ut dictum. Aenean laoreet elit elit, et pellentesque leo pellentesque eu. Duis sodales gravida lobortis. Suspendisse potenti. Vivamus urna nunc, viverra nec nulla sed, volutpat eleifend metus. Duis nec nisi a magna lobortis ultrices in id justo. Pellentesque vestibulum odio vehicula bibendum hendrerit. Maecenas dignissim lectus sapien, ut faucibus libero tempor sit amet. Aliquam erat volutpat.</p>
      <Multiples title="Percentage of Undergraduates Receiving Employer Assistance and Private Scholarships, 2011–12">
        <Graph file={require('./json/04_0221.json')} small="true"/>
        <Graph file={require('./json/04_0222.json')} small="true"/>
        <Graph file={require('./json/04_0223.json')} small="true"/>
        <Graph file={require('./json/04_0224.json')} small="true"/>
    </Multiples>
          <Multiples title="Percentage of Undergraduates Receiving Employer Assistance and Private Scholarships, 2011–12">
        <Graph file={require('./json/04_02211.json')} small="true"/>
        <Graph file={require('./json/04_02222.json')} small="true"/>
        <Graph file={require('./json/04_02233.json')} small="true"/>
        <Graph file={require('./json/04_02244.json')} small="true"/>
    </Multiples>
    <Multiples title="Average Employer Assistance and Private Scholarships per Recipient, 2011–12">
        <Graph file={require('./json/04_0231.json')} small="true"/>
        <Graph file={require('./json/04_0232.json')} small="true"/>
        <Graph file={require('./json/04_0233.json')} small="true"/>
        <Graph file={require('./json/04_0234.json')} small="true"/>
    </Multiples>
          <Multiples title="Average Employer Assistance and Private Scholarships per Recipient, 2011–12">
        <Graph file={require('./json/04_02311.json')} small="true"/>
        <Graph file={require('./json/04_02322.json')} small="true"/>
        <Graph file={require('./json/04_02333.json')} small="true"/>
        <Graph file={require('./json/04_02344.json')} small="true"/>
    </Multiples>

>>>>>>> 1224dc473e1966023c3a5e958772f1fbb04d1028
  </div>
);

let specifications = {
  'name': 'other',
  'title': 'Other',
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

