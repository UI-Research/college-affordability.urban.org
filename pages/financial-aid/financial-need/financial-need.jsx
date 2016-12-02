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
				<p><em>Historically, the FAFSA has asked for tax information from the calendar year preceding the student&rsquo;s college enrollment. Beginning in the 2017–18 academic year, applicants will provide information from one year earlier. The use of &ldquo;prior-prior&rdquo; year data will allow applicants to complete the FAFSA earlier, using tax returns that were filed months ago. The new process will also allow applicants to learn about their federal aid eligibility well before they have to make their college decisions. </em></p>
				<p><em>A drawback to assessing financial need based on a single year of income two years before enrollment is that some families&rsquo; incomes fluctuate </em><em>dramatically from year to year. The need analysis system cannot distinguish between parents with consistently high income and those with high income in the one year only. If a family&rsquo;s income falls dramatically after filling out the FAFSA—a parent loses his or her job, for example—students can appeal to their college financial aid offices, which can update submitted FAFSAs based on the new information.</em></p>
		</Box>
		<p>EFC is the basis for eligibility in the <a href="../federal">federal Pell Grant program</a>, which awards grants to over seven million low- and moderate-income undergraduates each year. A student with a $0 EFC is eligible for the maximum Pell grant—$5,815 in 2016–17. The grant declines $1 for every $1 increase in EFC. </p>
		<p>But EFC is not just used in determining federal student aid. Most state governments and institutions also use it, sometimes in combination with their own measures, to award their own need-based aid.</p>
		<p>Despite the name &ldquo;expected family contribution,&rdquo; families could end up having to pay less—or, more likely, more—than the EFC to cover all college expenses. Even though students with lower EFCs receive more aid than those with higher ability to pay, there is no guarantee that either the government or the college will be able to provide enough funds to fill the gap between a family&rsquo;s EFC and the total student budget. Any remaining gap is the student&rsquo;s<a href="#unmet_need"> unmet need</a>.</p>
		<Box>
			<h3><em>Can students have different EFCs at different schools?</em></h3>
				<p><em>All colleges and universities must allocate federal student aid on the basis of the FAFSA, and most states also rely on the federal EFC. But institutions maybe use alternative calculations to distribute their own resources to students.</em></p>
				<p><em>Some colleges and scholarship programs require students to complete another financial aid application in addition to the FAFSA. The most common is the College Board&rsquo;s Profile form. This form asks for more detailed information than the FAFSA. For example, the federal formula does not ask about a family&rsquo;s home, but the Profile does. When parents are divorced, the federal government asks only about the finances of the custodial parent and, if that parent has remarried, the step parent. The Profile asks for information about both parents. The Profile EFC may be higher or lower than the federal EFC.</em></p>
		</Box>
		<h2>EFC by Income</h2>
			<p><strong>Most, families who earned less than $30,000 had no EFC in 2011–12. Expected contributions rose steadily at a rate of roughly $1,000 for every additional $4,000 in family income.</strong></p>
			<p>Most 2011–12 dependent students whose family incomes were less than $30,000 in 2010—136 percent of the federal poverty level for a family of four—had no resources to contribute to their own education, according to the federal formula. About a quarter of dependent undergraduates were in this income category. The median EFC for families with incomes of $50,000 to $55,000 was $3,800, and for those with incomes of $120,000 to $139,999 it was $25,800.</p>
			<Graph file={require('./json/04_0010.json')}/>
			<p>For independent students, EFC depends not just on income, but on whether they are married and whether they are supporting their own children (or other dependents). </p>
			<p>The median EFC in 2011–12 for single independent students with no dependents and incomes between $20,000 and $24,999 was $5,300. Married students whose household incomes were in this range had median EFCs of $2,700, and the majority of students in this income range with dependents had no expected contribution. </p>
			<Graph file={require('./json/04_0020.json')}/>
			<p>In 2011–12, 38 percent of undergraduate students had $0 EFCs. <strong>Independent students of all family types were more likely than dependent students to have $0 EFCs, but nearly a quarter of dependent students had $0 EFCs.</strong></p>
			<Graph file={require('./json/04_0030.json')}/>
		<h2>Unmet Need</h2>
			<p><strong>Most undergraduate students do not receive enough financial aid in the form of grants and federal loans to cover the gap between their estimated total budget and their EFC. </strong></p>
			<p>The gap between a student&rsquo;s EFC and the estimated budget is the student&rsquo;s official financial need. For most students, grants and federal loans can help fill this gap, but many also have unmet need—expenses they can&rsquo;t cover through grants, federal loans, or out of their own pockets.</p>
			<p>Students with high unmet need may take out private student loans or their parents might take out federal parent PLUS loans. They may also work more than anticipated while they are in school.</p>
			<Multiples title="Distribution of Unmet Need by Dependency Status and Sector, 2011–12" source="National Postsecondary Student Aid Study 2012">
        		<Graph file={require('./json/04_0041.json')} small="true"/>
        		<Graph file={require('./json/04_0042.json')} small="true"/>
        		<Graph file={require('./json/04_0043.json')} small="true"/>
        		<Graph file={require('./json/04_0044.json')} small="true"/>
         		<Graph file={require('./json/04_0045.json')} small="true"/>
    		</Multiples>
			<p>Financial aid meets the full measured financial need of only 40 percent of undergraduate students, ranging from 23 percent of independent students in for-profit institutions to 51 percent of dependent students in public four-year colleges and universities.</p>
			<p>Almost 20 percent of students in for-profit and private four-year nonprofit institutions are left with over $15,000 of expenses to cover after adding their financial aid to their EFCs. </p>
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
