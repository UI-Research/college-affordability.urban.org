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
    <h1>Student Debt</h1>
      <p>Many students <a href="http://collegeaffordability.urban.org/covering-expenses/borrowing/"><strong>borrow</strong></a> a portion of the funds they need to pay tuition, fees, and other expenses associated with going to college. After they graduate or, for many students, after they leave school without a credential, they face the prospect of repaying the debt they have accumulated.</p>
      <p>Student debt <a href="http://collegeaffordability.urban.org/after-college/student-debt/#by_sector"><strong>varies dramatically</strong></a> within and across degree types, sectors, and demographic groups. Debt levels depend on how much money a family has to pay for college, how much aid the student gets, and how long it takes to earn a degree. Though borrowing has increased <a href="http://collegeaffordability.urban.org/after-college/student-debt/#over_time"><strong>over time</strong></a>, most students leave with debts they can reasonably repay out of the higher earnings they have as a result of their college education. <a href="http://collegeaffordability.urban.org/after-college/student-debt/#by_student_characteristics"><strong>Some groups</strong></a>, however, are particularly vulnerable to bad outcomes.</p>
      <p>Loans can make college seem more affordable at the time, allowing students and families to pay less out of their own resources right away. And for people whose debt payments require a manageable share of their earnings, it is reasonable to say that a college education was affordable. But for those whose education did not pay off and who can&rsquo;t earn enough to make the payments, the education was not affordable.</p>
      <p>This would be true even if they hadn&rsquo;t borrowed&mdash;they would have paid for something that wasn&rsquo;t worth it. But the reality is more visible for those with debt. The real challenge is making better predictions in advance and preventing people from enrolling in and borrowing for programs that are unlikely to serve them well. Those programs are unaffordable.</p>
    <h2>Who Has Student Debt?</h2>
      <p><strong>Almost one-third of student debt is held by those now in households in the highest income quartile of the population.</strong></p>
      <p>Although plenty of people juggle student debt and low incomes, because of the correlation between college education&mdash;and graduate education&mdash;and earnings, people with student debt are concentrated in the upper half of the income distribution. Most of the borrowers with high debt levels borrowed for <a href="http://www.urban.org/sites/default/files/alfresco/publication-pdfs/2000191-Student-Debt-Who-Borrows-Most-What-Lies-Ahead.pdf" target="_blank"><strong>graduate school</strong></a>. Households in the top 25 percent of the income distribution hold 34 percent of outstanding education debt. Those in the lowest 25 percent hold only 12 percent.</p>
      <Graph file={require('./json/060301.json')}/>
    <h2>Over Time</h2>
      <p><strong>The share of all bachelor&rsquo;s degree recipients borrowing $40,000 or more (in 2016 dollars) before they graduated doubled between 1995&ndash;96 and 2003&ndash;04 and again between 2003&ndash;04 and 2011&ndash;12 but did not increase between 2011&ndash;12 and 2015&ndash;16.</strong></p>
      <p>The increase in the share of four-year college graduates borrowing $40,000 or more from 4 percent in 1995&ndash;96 to 9 percent in 2003&ndash;04 and to 19 percent 2011&ndash;12 (and 18 percent in 2015&ndash;16) is dramatic. Breaking those high debt levels down reveals that 8 percent of graduates in 2015&ndash;16 borrowed between $40,000 and $49,999, 9 percent borrowed between $50,000 and $74,999, and 2 percent borrowed $75,000 or more. At the other end of the spectrum, 29 percent of four-year college graduates had not borrowed, and another 24 percent had less than $20,000 in debt.</p>
      <Graph file={require('./json/060302.json')}/>
    <h2>By Sector</h2>
      <p><strong>Average debt burden varies by type of institution. These differences are rooted in variations in prices and grant aid, time to degree, and differences in who attends which types of institutions.</strong></p>
      <p>Only 7 percent of undergraduates leaving college with a bachelor&rsquo;s degree in 2015&ndash;16 had borrowed $50,000 or more. But 12 percent of those graduating from private nonprofit colleges and universities and 32 percent from for-profit institutions had debt of $50,000 or more. At public four-year colleges, 31 percent of graduates left with no debt, and only 7 percent borrowed $50,000 or more.</p>
      <Graph file={require('./json/060303.json')}/>
      <p>Associate degree recipients accumulate less debt than bachelor&rsquo;s degree recipients. They are in school for a shorter period and are more likely to finance their education by working while they study.</p>
      <p>The patterns differ markedly between the 11 percent who earned their degrees at for-profit institutions and others. Only 12 percent of for-profit associate degree recipients graduated without debt and 33 percent borrowed $30,000 or more, compared with 59 percent with no debt and 5 percent with $30,000 or more among those who graduated from public two-year colleges.</p>
      <p><strong>Most associate degree recipients from for-profit colleges borrowed $20,000 or more, and most associate degree recipients from public colleges did not borrow.</strong></p>
      <Graph file={require('./json/060304.json')}/>
      <p>Certificates require less time and fewer credits than associate degrees, and graduates tend to accrue less debt.</p>
      <p>In 2015&ndash;16, for-profit colleges awarded more than half all of undergraduate certificates, and most students receiving them had student loans.</p>
      <p><strong>In 2015&ndash;16, 35 percent of students&mdash;55 percent of those at for-profit institutions and 13 percent of those at public institutions&mdash;earning undergraduate certificates accumulated $10,000 or more in debt.</strong></p>
      <Graph file={require('./json/060305.json')}/>
    <h2>By Student Characteristics</h2>
      <p>Borrowing patterns differ by student characteristics, even among students earning the same type of degree. For example, independent students graduate with more debt than dependent students, students from high-income families are less likely than others to borrow, and black students tend to accrue more debt than others earning similar degrees. Patterns in borrowing may be influenced by differences across demographic groups in attendance patterns, time to degree, and grant aid, in addition to available resources.</p>
      <h3>By Dependency Status</h3>
        <p><strong>Eleven percent of dependent 2015&ndash;16 bachelor&rsquo;s degree recipients borrowed $40,000 or more, compared with more than 28 percent of independent students.</strong></p>
        <p>Independent students are allowed to borrow more than dependent students through the federal student loan program. Although more than half these students attend community colleges with low tuition levels, they frequently use borrowed funds to cover a significant portion of their living expenses while they are in school.</p>
        <Graph file={require('./json/060306.json')}/>
      <h3>By Income</h3>
        <p><strong>In 2015&ndash;16, graduates from the highest family income quartile of dependent bachelor&rsquo;s degree recipients borrowed less than those from less affluent families. Most dependent students from even the highest-income families, however, graduated with at least some debt.</strong></p>
        <Graph file={require('./json/060307.json')}/>
      <h3>By Race or Ethnicity</h3>
        <p><strong>Black bachelor&rsquo;s degree recipients in 2015&ndash;16 were the most likely to graduate with debt, and Asian students were the least likely. Twenty-one percent of black bachelor&rsquo;s degree recipients borrowed $50,000 or more compared with 10 percent or less in other groups.</strong></p>
        <p>Patterns in debt burden by race or ethnicity are partially explained by differences in wealth and income. They also reflect other factors, such as dependency and age, as well as where students of different racial or ethnic backgrounds enroll. For example, black and Hispanic students were more likely to be older and independent, and black students were more likely than others to earn their bachelor&rsquo;s degrees in the for-profit sector in 2015&ndash;16.</p>
        <Graph file={require('./json/060308.json')}/>

      
      
      
      
      
     
      
     
  </div>
);

let specifications = {
  'name': 'student-debt',
  'title': 'Student Debt',
  'content': <SinglePage content={singlepage} />
};

const StudentDebt = React.createClass({
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
util.printToPage('student-debt', StudentDebt);

module.exports = StudentDebt;
