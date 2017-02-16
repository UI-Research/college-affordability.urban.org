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
      <p>Many students <a href="../../covering-expenses/borrowing/">borrow</a> a portion of the funds they need to pay tuition, fees, and other expenses associated with going to college. After they graduate or, for too many students, after they leave school without a credential, they face the prospect of repaying the debt they have accumulated. </p>
      <p>Student debt <a href="#by_sector">varies dramatically</a> within and across degree types, sectors, and demographic groups. Debt levels depend on how much money a family has to pay for college, how much aid the student gets, and how long it takes to earn a degree. Though borrowing has increased <a href="#over_time">over time</a>, most students leave with debts they can reasonably repay out of the higher earnings they have as a result of their college education. <a href="#by_student_characteristics">Some groups</a>, however, are particularly vulnerable to bad outcomes. </p>
      <p>Loans can make college seem more affordable at the time, requiring students and families to pay less out of their own resources right away. And for people whose debt payments require a manageable percentage of their earnings, it is reasonable to say that a college education was affordable. But for those whose education did not pay off and who can&rsquo;t earn enough to make the payments, the education was not affordable. </p>
      <p>This would be true even if they hadn&rsquo;t borrowed—they would have paid for something that wasn&rsquo;t worth it. But the reality is more visible for those with debt. The real challenge is making better predictions in advance and preventing people from enrolling in and borrowing for programs that are unlikely to serve them well. Those programs are unaffordable.</p>
    <h2>Who Has Student Debt?</h2>
      <p><strong>Almost half of student debt is held by those now in households in the highest income quartile of the population. </strong></p>
      <p>Although there are plenty of people juggling student debt with low incomes, because of the correlation between college education—and graduate education—and earnings, people with student debt are concentrated in the upper half of the income distribution. Most of the borrowers with high debt levels borrowed for <a href="http://www.urban.org/sites/default/files/alfresco/publication-pdfs/2000191-Student-Debt-Who-Borrows-Most-What-Lies-Ahead.pdf" target="_blank">graduate school</a>. Households in the top 25 percent of the income distribution hold almost half of the outstanding education debt. Those in the lowest 25 percent hold only 11 percent of the debt.</p>
      <Graph file={require('./json/06_0080.json')}/>
    <h2>Over Time</h2>
      <p><strong>The percentage of all bachelor&rsquo;s degree recipients borrowing a total of $40,000 or more before they graduated doubled between 2003</strong><strong>–04 and 2011</strong><strong>–12, while the percentage graduating with less than $10,000 in debt declined from 50 to 40 percent.</strong></p>
      <p>The increase in the percentage of four-year college graduates accumulating $40,000 or more in debt is dramatic. But breaking those high debt levels down reveals that very few students borrowed significantly more than $40,000. Thirteen percent of graduates in 2011–12 borrowed between $40,000 and $49,999, 4 percent borrowed between $59,000 and $99,999, and 1 percent borrowed $100,000 or more. At the other end of the spectrum, 30 percent of four-year college graduates had not borrowed and another 23 percent had less than $20,000 in debt.</p>
      <Graph file={require('./json/06_0090.json')}/>
    <h2>By Sector</h2>
      <p><strong>Average debt burden varies by type of institution. These differences are rooted in variations in prices and grant aid, time to degree</strong><strong>, and differences in who attends </strong><strong>which types of institutions.</strong></p>
      <p>More than half of all undergraduates leaving college with a bachelor&rsquo;s degree had less than $20,000 in debt in 2012. But about 20 percent of those graduating from private nonprofit colleges and universities and close to 50 percent from for-profit institutions had debt over $40,000. At public four-year colleges, 35 percent of graduates left with no debt, and only 11 percent borrowed $40,000 or more.</p>
      <Graph file={require('./json/06_0100.json')}/>
      <p>Associate degree recipients accumulate significantly less debt than bachelor&rsquo;s degree recipients. They are in school for a shorter period of time and are more likely to finance their education by working while they are studying. </p>
      <p>The patterns differ markedly between the 14 percent who earned their degrees at for-profit institutions and others. Only 12 percent of for-profit associate degree recipients graduated without debt and 28 percent borrowed $30,000 or more compared with 59 percent with no debt and 4 percent with $30,000 or more among those who graduated from public two-year colleges. </p>
      <p><strong>The majority of associate degree recipients from for-profit colleges borrowed $20,000 or more. The majority of associate degree recipients from public colleges did not borrow.</strong></p>
      <Graph file={require('./json/06_0110.json')}/>
      <p>Certificates require less time and fewer credits than associate degrees and graduates tend to accrue much less debt. </p>
      <p>In 2011–12, for-profit colleges awarded over half all of undergraduate certificates, and the majority of students receiving them had student loans.</p>
      <p><strong>In 2011</strong><strong>–12, 35 percent of individuals—55 percent of those at for-profit institutions and 13 percent of those at public institutions—earning undergraduate certificates accumulated $10,000 or more in debt. </strong></p>
      <Graph file={require('./json/06_0120.json')}/>
    <h2>By Student Characteristics</h2>
      <p>Borrowing patterns differ by student characteristics, even among students earning the same type of degree. For example, independent students graduate with much more debt than dependent students, students from higher-income families are less likely than others to borrow, and black students tend to accrue larger amounts of debt than others earning similar degrees. Patterns in borrowing may be influenced by differences across demographic groups in attendance patterns, time to degree, and grant aid, in addition to available resources.  </p>
      <h3>By Dependency Status</h3>
        <p><strong>Eleven percent of dependent 2011</strong><strong>–12 bachelor&rsquo;s degree recipients graduated with $40,000 or more in debt compared with more than 25 percent of independent students.</strong></p>
        <p>Independent students are allowed to borrow more through the federal student loan program. Although more than half these students, according to NPSAS 2012 data, attend community colleges with relatively low tuition levels, they frequently use borrowed funds to cover a significant portion of their living expenses while they are in school.</p>
        <Graph file={require('./json/06_0130.json')}/>
      <h3>By Income</h3>
        <p><strong>Among 2011</strong><strong>–12 bachelor&rsquo;s degree recipients, dependent students from families in the lower half of the income distribution graduated with more debt than those from more affluent families. A majority of dependent students from even the highest-income families, however, graduated with at least some debt.</strong></p>
        <Graph file={require('./json/06_0140.json')}/>
      <h3>By Race and Ethnicity</h3>
        <p><strong>Black bachelor&rsquo;s degree recipients in 2011</strong><strong>–12 were the most likely to graduate with debt, and Asian students the least likely. Twice as many black bachelor&rsquo;s degree recipients as white degree recipients graduated with $40,000 or more in debt. </strong></p>
        <p>Patterns in debt burden by race and ethnicity are partially explained by differences in wealth and income. They also reflect other factors, such as dependency and age, as well as where students of different racial and ethnic backgrounds enroll. For example, black and Hispanic students are more likely to be older and independent, and black students in particular were more likely than others to earn their bachelor&rsquo;s degrees in the for-profit sector in 2011–12. <strong></strong></p>
        <Graph file={require('./json/06_0150.json')}/>

      
      
      
      
      
     
      
     
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
