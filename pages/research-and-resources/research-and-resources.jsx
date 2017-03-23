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
    <h1>Research and Resources</h1>
<h2>Datasets</h2>
<p class="hangingIndent">1989–2013 Survey of Consumer Finances</p>
<p class="hangingIndent">American Community Survey, five-year samples, 2009–13 and 2010–14</p>
<p class="hangingIndent">College Scoreboard, 2016</p>
<p class="hangingIndent">Current Population Survey, Annual Social and Economic Supplement, 1991–2016</p>
<p class="hangingIndent">Digest of Education Statistics, 2015</p>
<p class="hangingIndent">Federal Reserve Bank of New York Consumer Credit Panel/Equifax, 2016</p>
<p class="hangingIndent">Federal Reserve Bank of St. Louis, Personal Savings Rate, 2016</p>
<p class="hangingIndent">Integrated Postsecondary Education Data System, 2001–02 through 2015–16</p>
<p class="hangingIndent">National Association of State Student Grant and Aid Programs Annual Survey, 2014–15 </p>
<p class="hangingIndent">National Postsecondary Student Aid Study, 2012 </p>
<p class="hangingIndent"><a href="http://www.sheeo.org/projects/shef-fy15" target="_blank">State<strong> </strong>Higher<strong> </strong>Education<strong> </strong>Finance</a>, fiscal year 2015.</p>
<p class="hangingIndent">US Census Bureau, <a href="http://www.census.gov/data/tables/time-series/demo/income-poverty/historical-income-families.html" target="_blank">Historical Income Tables: Families</a>, 2016</p>
<p class="hangingIndent">———, <a href="https://www.census.gov/people/wealth/data/disttables.html" target="_blank">Detailed Tables on Distribution of Wealth and Debt</a>, 2011</p>
<h2>Periodicals and Publications </h2>
<p class="hangingIndent">Barry, Mary Nguyen, and Michael Dannenberg. 2016. <em>Out of Pocket: The High Cost of Inadequate High Schools and High School Student Achievement on College Affordability. </em>Washington, DC: Education Reform Now. </p>
<p class="hangingIndent">Baum, Sandy, and Charles Kurose. 2013. &ldquo;Community Colleges in Context: Exploring Financing of Two- and Four-Year Institutions.&rdquo; In <em>Bridging the Higher Education Divide: Strengthening Community Colleges and Restoring the American Dream.</em> New York: Century Foundation, 73–108.</p>
<p class="hangingIndent">Baum, Sandy, and Martha Johnson. 2015. <a href="http://www.urban.org/research/publication/student-debt-who-borrows-most-what-lies-ahead" target="_blank"><em>Student Debt: Who Borrows Most? What Lies Ahead?</em></a> Washington, DC: Urban Institute. </p>
<p class="hangingIndent">Baum, Sandy, and Jennifer Ma. 2011. <a href="https://trends.collegeboard.org/sites/default/files/College_Pricing_2011.pdf" target="_blank"><em>Trends in College Pricing, 2011</em></a>. New York: College Board.</p>
<p class="hangingIndent">———. 2012. <a href="https://trends.collegeboard.org/sites/default/files/college-pricing-2012-full-report-121203.pdf" target="_blank"><em>Trends in College Pricing, 2012</em></a>. New York: College Board.</p>
<p class="hangingIndent">———. 2014. <a href="https://trends.collegeboard.org/sites/default/files/2014-trends-college-pricing-final-web.pdf" target="_blank"><em>Trends in College Pricing, 2014</em></a>. New York: College Board.</p>
<p class="hangingIndent">Baum, Sandy, Jennifer Ma, Matea Pender, and Diane Cardenas Elliott. 2014. <a href="https://secure-media.collegeboard.org/digitalServices/misc/trends/2014-trends-student-aid-report-final.pdf" target="_blank"><em>Trends in Student Aid 2014</em></a><em>. </em>New York: College Board. </p>
<p class="hangingIndent">Baum, Sandy, Jennifer Ma, Matea Pender, and D&rsquo;Wayne Bell. 2015. <a href="http://trends.collegeboard.org/sites/default/files/trends-student-aid-web-final-508-2.pdf" target="_blank"><em>Trends in Student Aid 2015</em></a><em>. </em>New York: College Board.</p>
<p class="hangingIndent">Baum, Sandy, Jennifer Ma, Matea Pender, and Meredith Welch. 2016. <a href="https://trends.collegeboard.org/sites/default/files/2016-trends-student-aid_0.pdf"><em>Trends in Student Aid 2016</em></a><em>. </em>New York: College Board. </p>
<p class="hangingIndent">Carnevale, Anthony P., Stephen Rose, and Andrew R. Hanson. 2012. <a href="https://cew.georgetown.edu/wp-content/uploads/2014/11/Certificates.FullReport.061812.pdf" target="_blank"><em>Certificates: Gateway to Gainful Employment and College Degrees</em></a><em>. </em>Washington, DC: Georgetown University, Center on Education and the Workforce.</p>
<p class="hangingIndent">College Board. 2001. <a href="https://trends.collegeboard.org/sites/default/files/CP_2001.pdf"><em>Trends in College Pricing, 2001</em></a>. New York.</p>
<p class="hangingIndent">———. 2006. <a href="https://trends.collegeboard.org/sites/default/files/CP_2006.pdf" target="_blank"><em>Trends in College Pricing, 2006</em></a><em>. </em>New York.</p>
<p class="hangingIndent">College Savings Plan Network. 2016. <a href="http://www.collegesavings.org/wp-content/uploads/2015/09/FINAL-CSPN-Report-March-15-2016.pdf"><em>529 Report: An Exclusive Year-End Review of 529 Plan Activity</em></a>. Lexington, KY.</p>
<p class="hangingIndent">Complete College America. 2011. <a href="http://completecollege.org/docs/Time_Is_the_Enemy.pdf" target="_blank"><em>Time is the Enemy</em></a><em>. </em>Washington, DC. </p>
<p class="hangingIndent">Delisle, Jason, and Kim Dancy. 2015. <a href="https://static.newamerica.org/attachments/10416-a-new-look-at-tuition-tax-benefits/TaxCredits11.2.277d3f7daa014d5a8632090f97641cee.pdf"><em>A New Look at Tuition Tax Benefits</em></a><em>.</em> New York: New America. </p>
<p class="hangingIndent">Federal Student Aid. 2015. <a href="https://ifap.ed.gov/efcformulaguide/100615EFCFormulaGuide1617.html" target="_blank"><em>The EFC Formula, 2016–17</em></a><em>. </em>Washington, DC: US Department of Education, Federal Student Aid.</p>
<p class="hangingIndent">Jaschik, Scott. 2012. &ldquo;<a href="https://www.insidehighered.com/quicktakes/2012/08/29/huge-waiting-lists-california-community-colleges" target="_blank">Huge Waiting Lists at California Community Colleges</a>,&rdquo; <em>Inside Higher Ed</em>, August 29.</p>
<p class="hangingIndent">Kolesnikova, Natalia. 2010. &ldquo;<a href="https://www.stlouisfed.org/~/media/Files/PDFs/publications/pub_assets/pdf/re/2010/a/education.pdf" target="_blank">The Return to Education Isn&rsquo;t Calculated Easily</a><em>.</em>&rdquo;Federal Reserve Bank of St. Louis. </p>
<p class="hangingIndent">Looney, Adam, and Constantine Yannelis. 2015. &ldquo;A Crisis in Student Loans? How Changes in the Characteristics of Borrowers and in the Institutions They Attended Contributed to Rising Loan Defaults.&rdquo; Washington, DC: Brookings Institution.</p>
<p class="hangingIndent">Ma, Jennifer, Sandy Baum, Matea Pender, and D&rsquo;Wayne Bell. 2015. <a href="http://trends.collegeboard.org/sites/default/files/2015-trends-college-pricing-final-508.pdf" target="_blank"><em>Trends in College Pricing 2015</em></a><em>. </em>New York: College Board. </p>
<p class="hangingIndent">Ma, Jennifer, Sandy Baum, Matea Pender, and Meredith Welch. 2016. <a href="https://trends.collegeboard.org/sites/default/files/2016-trends-college-pricing-web_0.pdf" target="_blank"><em>Trends in College Pricing 2016</em></a><em>. </em>New York: College Board. </p>
<p class="hangingIndent">Ma, Jennifer, Matea Pender, and Meredith Welch. 2016. <a href="https://trends.collegeboard.org/sites/default/files/education-pays-2016-full-report.pdf" target="_blank"><em>Education Pays: The Benefits of Higher Education for Individuals and Society</em></a><em>. </em>New York: College Board.</p>
<p class="hangingIndent">Middaugh, Michael F., Rosalinda Graham, and Abdus Shahid. 2003. <a href="http://sites.udel.edu/ire/files/2015/04/NCES-report-Middaugh-et-al-14yu7gv.pdf" target="_blank"><em>A Study of Higher Education Instructional Expenditures: The Delaware Study of Instructional Costs and Productivity</em></a><em>. </em>Washington, DC: US Department of Education, National Center for Education Statistics.</p>
<p class="hangingIndent">Morgenson, Gretchen. 2016. &ldquo;<a href="https://www.nytimes.com/2016/06/23/business/corinthian-colleges-used-recruiting-incentives-documents-show.html" target="_blank">Corinthian Colleges Used Recruiting Incentives, Documents Show</a>,&rdquo; <em>New York Times, </em>June 22.</p>
<p class="hangingIndent">NASFAA (National Association of Student Financial Aid Administrators) Task Force. 2014. <a href="https://www.nasfaa.org/uploads/documents/ektron/02449fc6-a14e-40f4-b9de-e22d19252947/80d69b186d124195b22a59471714e3d14.pdf" target="_blank"><em>The Campus-Based Formula</em></a><em>.</em> Washington, DC: NASFAA. </p>
<p class="hangingIndent">Reuters. 2015. &ldquo;<a href="http://fortune.com/2015/04/06/starbucks-expands-college-tuition-benefit-for-workers/" target="_blank">Starbucks Expands College Tuition Benefit for Workers</a>.&rdquo; <em>Fortune. </em>April 6.</p>
<p class="hangingIndent">Shenker-Osiorio, Anat. 2013. &ldquo;<a href="https://www.theatlantic.com/politics/archive/2013/08/why-americans-all-believe-they-are-middle-class/278240/">Why Americans All Believe They Are &lsquo;Middle Class&rsquo;</a>.&rdquo; <em>Atlantic. </em>August 1.</p>
<p class="hangingIndent">Shapiro, Doug, Afet Dundar, Xin Yuan, Autumn T. Harrell, and Phoebe Khasiala Wakhungu. 2014. <a href="https://nscresearchcenter.org/wp-content/uploads/SignatureReport8.pdf" target="_blank"><em>Completing College: A National View of Student Attainment Rates – Fall 2008 Cohort</em></a>. Herndon, VA: National Student Clearinghouse Research Center.</p>
<p class="hangingIndent">Shapiro, Doug, Afet Dundar, Phoebe Khasiala Wakhungu, Xin Yuan, Angel Nathan, and Youngsik Hwang. 2016.&nbsp;<a href="https://nscresearchcenter.org/wp-content/uploads/SignatureReport11.pdf" target="_blank"><em>Time to Degree: A National View of the Time Enrolled and Elapsed for Associate and Bachelor&rsquo;s Degree Earners</em></a>. Herndon, VA: National Student Clearinghouse Research Center. </p>
<p class="hangingIndent">Zinshteyn, Mikhail. 2015. &ldquo;<a href="http://www.theatlantic.com/education/archive/2015/11/strayer-university-fiat-chrysler-partnership/417417/" target="_blank">A For-Profit College Initiative That Just Might Work</a>.&rdquo; <em>Atlantic.</em> November 24.</p>
<h2>Web Material</h2>
<p class="hangingIndent">&ldquo;<a href="http://www.savingforcollege.com/compare_529_plans/index.php?plan_question_ids%5B%5D=437&amp;mode=Compare&amp;page=compare_plan_questions&amp;plan_type_id=" target="_blank">Compare 529 Plans</a>,&rdquo; Saving for College, accessed February 14, 2017.</p>
<p class="hangingIndent">&ldquo;<a href="https://studentaid.ed.gov/sa/repay-loans/deferment-forbearance" target="_blank">Deferment and Forbearance</a>,&rdquo; Federal Student Aid, accessed February 15, 2017. </p>
<p class="hangingIndent">&ldquo;<a href="https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit" target="_blank">Earned Income Tax Credit</a>,&rdquo; Internal Revenue Service, last modified January 23, 2017.</p>
<p class="hangingIndent">&ldquo;<a href="https://studentaid.ed.gov/sa/about/data-center/student/portfolio" target="_blank">Federal Student Loan Portfolio</a>,&rdquo; Federal Student Aid, accessed February 15, 2017.</p>
<p class="hangingIndent">&ldquo;<a href="https://www.dol.gov/whd/minwage/chart.htm" target="_blank">History of Federal Minimum Wage Rates under the Fair Labor Standards Act, 1938–2009</a>,&quot; US Department of Labor, Wage and Hour Division, accessed February 15, 2017. </p>
<p class="hangingIndent">&ldquo;<a href="https://www.nacs.org/advocacynewsmedia/StudentSpendingInfographics.aspx" target="_blank">Infographic: Course Materials: Student Spending and Preferences</a>,&rdquo; National Association of College Stores, fall 2005. </p>
<p class="hangingIndent">&ldquo;<a href="https://www.irs.gov/publications/p970/ch03.html">Lifetime Learning Credit</a>,&rdquo; Internal Revenue Service, accessed February 14, 2017.</p>
<p class="hangingIndent"> &ldquo;<a href="http://plans.collegesavings.org/viewState.aspx" target="_blank">My State&rsquo;s 529 Plan</a>,&rdquo; College Savings Plan Network, accessed February 14, 2017.</p>
<p class="hangingIndent">&ldquo;<a href="https://www.irs.gov/publications/p17/ch03.html#en_US_2015_publink1000170883" target="_blank">Personal Exemptions and Dependents</a>,&rdquo; Internal Revenue Service, accessed February 14, 2017. </p>
<p class="hangingIndent">&ldquo;<a href="https://studentaid.ed.gov/sa/repay-loans/understand/plans" target="_blank">Repayment Plans</a>,&rdquo; Federal Student Aid, accessed February 15, 2017.</p>
<p class="hangingIndent">&ldquo;<a href="https://www.irs.gov/taxtopics/tc457.html">Topic 457: Tuition and Fees Deduction</a>,&rdquo; Internal Revenue Service, last modified December 30, 2016.</p>
  </div>
);

let specifications = {
  'name': 'research-and-resources',
  'title': 'Research and Resources',
  'content': <SinglePage content={singlepage} />
};

const ResearchandResources = React.createClass({
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
util.printToPage('research-and-resources', ResearchandResources);

module.exports = ResearchandResources;
