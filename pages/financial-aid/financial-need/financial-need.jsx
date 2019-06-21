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
    <h1>Financial Need</h1>
		<p><strong>A student&rsquo;s financial need, as defined by the federal government, is equal to the cost of attendance or estimated budget </strong><strong>minus the amount the federal formula indicates the student and family are able to contribute.</strong></p>
		<p>The <strong>expected family contribution</strong> (EFC) is an index used to determine the amount of federal financial aid for which students are eligible. EFC is the federal government&rsquo;s approximation of a family&rsquo;s ability to pay for college based on information reported on the Free Application for Federal Student Aid (FAFSA). Higher incomes, more assets, and smaller family sizes generate higher EFCs. The total EFC for a family is divided across their children who are enrolled in college.</p>
		<Box>
			<h3><em>Free Application for Federal Student Aid</em></h3>
				<p><em>To apply for federal financial aid, as well as for most state and institutional grant aid, students must complete the FAFSA. The online form requests information on income, assets, and family structure. Advocates for students frequently raise concerns about the complexity of the form and the barriers it creates, particularly for first-generation students and parents who do not speak English. </em></p>
				<p><em>Both the form and the process have become much simpler in recent years, however. Filers can now import much of the financial information directly from the Internal Revenue Service and skip logic prevents applicants from having to answer irrelevant questions.</em></p>
				<p><em>Until 2017-18 the FAFSA asked for tax information from the calendar year preceding the student&rsquo;s college enrollment. &nbsp;Now applicants &nbsp;provide information from one year earlier. The use of &ldquo;prior-prior&rdquo; year data allows applicants to complete the FAFSA earlier, using tax returns that were filed months before. The new process also allows applicants to learn about their federal aid eligibility well before they have to make their college decisions.</em></p>
				<p><em>A drawback to assessing financial need based on a single year of income two years before enrollment is that some families&rsquo; incomes fluctuate&nbsp;dramatically from year to year. The need analysis system cannot distinguish between parents with consistently high income and those with high income in the one year only. If a family&rsquo;s income falls dramatically after filling out the FAFSA&mdash;a parent loses his or her job, for example&mdash;students can appeal to their college financial aid offices, which can update submitted FAFSA forms based on the new information.</em></p>
		</Box>
		<p>EFC is the basis for eligibility in the&nbsp;<a href="http://collegeaffordability.urban.org/financial-aid/federal/"><strong>federal Pell Grant program</strong></a>, which awards grants to more than 7 million low- and moderate-income undergraduates each year. A student with a $0 EFC is eligible for the maximum Pell grant&mdash;$6,195 In 2019-20. The grant declines $1 for every $1 increase in EFC.</p>
		<p>But EFC is not just used in determining federal student aid. Most state governments and institutions also use it, sometimes in combination with their own measures, to award their own need-based aid.</p>
		<p>Despite the name &ldquo;expected family contribution,&rdquo; families could end up having to pay less—or, more likely, more—than the EFC to cover all college expenses. Even though students with lower EFCs receive more aid than those with higher ability to pay, there is no guarantee that either the government or the college will be able to provide enough funds to fill the gap between a family&rsquo;s EFC and the total student budget. Any remaining gap is the student&rsquo;s<a href="#unmet_need"> unmet need</a>.</p>
		<Box>
			<h3><em>Can Students Have Different EFCs at Different Schools?</em></h3>
				<p><em>All colleges and universities must allocate federal student aid on the basis of the FAFSA, and most states also rely on the federal EFC. But institutions may use alternative calculations to distribute their own resources to students.</em></p>
				<p><em>Some colleges and scholarship programs require students to complete another financial aid application in addition to the FAFSA. The most common is the College Board&rsquo;s Profile form. This form asks for more detailed information than the FAFSA. For example, the federal formula does not ask about a family&rsquo;s home, but the Profile does. When parents are divorced, the federal government asks only about the finances of the custodial parent and, if that parent has remarried, the step parent. The Profile asks for information about both parents. The Profile EFC may be higher or lower than the federal EFC.</em></p>
		</Box>
		<h2>EFC by Income</h2>
			<p><strong>Most families who earned less than $30,000 had a $0 EFC in 2015&ndash;16. Expected contributions rose steadily at a rate of roughly $1,000 for every additional $4,000 in family income.</strong></p>
			<p>Most 2015&ndash;16 dependent students whose family incomes were less than $30,000 in 2014&mdash;126 percent of the federal poverty level for a family of four&mdash;had no resources to contribute to their own education, according to the federal formula. About a quarter of dependent undergraduates were in this income category. The median EFC for families with incomes from $50,000 to $55,000 was $3,550 and for those with incomes from $120,000 to $130,000 it was $23,480.</p>
			<Graph file={require('./json/040101.json')}/>
			<p>For independent students, EFC depends not just on income, but on whether they are married and whether they are supporting their own children (or other dependents). </p>
			<p>Only 16 percent of independent students with dependents had EFCs of $4,000 or more in 2015&ndash;16. Half of married independent students without dependents had EFCs of $10,000 or higher; 12 percent of unmarried independent students without dependents had EFCs this high.</p>
			<p>In 2015&ndash;16, 39 percent of undergraduate students had $0 EFCs.&nbsp;<strong>Independent students of all family types&mdash;with the exception of those who were married and had no dependents&mdash;were more likely than dependent students to have $0 EFCs, but nearly a quarter of dependent students had $0 EFCs.</strong></p>
			<Graph file={require('./json/040102.json')}/>
		<h2>Unmet Need</h2>
			<p><strong>Most undergraduate students do not receive enough financial aid in the form of grants and federal loans to cover the gap between their estimated total budget and their EFC. </strong></p>
			<p>The gap between a student&rsquo;s EFC and the estimated budget is the student&rsquo;s official financial need. For most students, grants and federal loans can help fill this gap, but many also have unmet need—expenses they can&rsquo;t cover through grants, federal loans, or out of their own pockets.</p>
			<p>Students with high unmet need may take out private student loans or their parents might take out federal Parent PLUS loans. They may also work more than anticipated while they are in school.</p>
			<Multiples 
				title="Distribution of Unmet Need by Dependency Status and Sector, 2015–16" 
				source="National Postsecondary Student Aid Study, 2016."
			>
        		<Graph file={require('./json/040103.json')} small="true"/>
        		<Graph file={require('./json/040104.json')} small="true"/>
        		<Graph file={require('./json/040105.json')} small="true"/>
        		<Graph file={require('./json/040106.json')} small="true"/>
         		<Graph file={require('./json/040107.json')} small="true"/>
    		</Multiples>
			<p>Financial aid meets the full measured financial need of only 37 percent of undergraduate students, ranging from 26 percent of independent students in for-profit institutions to 46 percent of dependent students in public and private nonprofit four-year colleges and universities.</p>
			<p>Almost 20 percent of students in for-profit and private four-year nonprofit institutions are left with more than $15,000 of expenses to cover after adding their financial aid to their EFCs.</p>
  </div>
);

let specifications = {
  'name': 'financial-need',
  'title': 'Financial Need',
  'content': <SinglePage content={singlepage} />
};

const FinancialNeed = React.createClass({
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
util.printToPage('financial-need', FinancialNeed);

module.exports = FinancialNeed;
