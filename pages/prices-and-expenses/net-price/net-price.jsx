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
    <h1>Net Price</h1>
        <p>Looking at tuition and fees, room and board, and total student budgets can make college seem really expensive. <strong>But the reality is most students don&rsquo;t pay the full sticker price. </strong></p>
        <p>Net price is the price students actually pay, after subtracting financial aid that doesn&rsquo;t have to be repaid from the total sticker price. <strong>The average net price is much lower than the sticker price.</strong></p>
        <p>Net prices vary quite a bit, even among students enrolled in the same college. Academic records, athletic abilities, and a variety of other factors can influence net price, but income is the most important factor, since it usually has a big impact on the amount of financial aid a student receives. Because low-income students typically receive more grant aid at high-price colleges than elsewhere, these schools can end up costing less for these students than schools with lower price tags. </p>
        <p>Increases in grant aid have helped lessen the effects of increases in sticker price. In fact, at some types of institutions, students in the lower half of the income distribution on average paid less in 2012 than in 1996. </p>
        <p>Though it is not possible to predict exactly what the net price will be for any individual student at a particular type of institution, or even a specific college, examining trends in net prices is critical to understanding how affordable college is.  </p>
        <Box>
            <h3><em>What Counts as Student Aid for Estimating Net Prices?</em></h3>
            <p><em>The difference between sticker price and net price is the amount of financial aid a student receives—excluding loans. Though loans </em><em>are often included in financial aid packages, they are different from grant aid. Loans change the timing of payments, but don&rsquo;t diminish the total amounts students have to pay. Tax credits and deductions, on the other hand, do lower net prices for students. Because the data on students&rsquo; tax benefits </em><em>are not readily available, however, most estimates of net price—including those on this website&mdash;do not incorporate this very real and often quite large source of aid. (</em><a href="https://trends.collegeboard.org/college-pricing/figures-tables/average-net-price-over-time-full-time-students-sector" target="_blank"><em>The College Board’s</em> Trends in College Pricing</a> <em>estimates do incorporate tax credits and deductions.) Federal estimates of net price also sometimes exclude employer assistance and private scholarships.</em></p>
        </Box>
        <h2>Across Sectors</h2>
            <p>At all types of institutions, the average net price is lower than the sticker price, though there is wide variation across students and sectors.</p>
            <p>In the for-profit sector, students pay about 70 percent of the sticker price because of grant aid; at private nonprofit universities, first-time full-time students pay just 46 percent of the sticker price, on average. In the public sector, students at four-year colleges and universities face net prices equal to 36 percent of the sticker price, and, on average, grant aid covers the full tuition and fee price for students at two-year colleges.</p>

                <Graph file={require('./json/03_0201.json')}/>
                <Graph file={require('./json/03_0202.json')}/>


            <p><strong>Students in the private nonprofit sector receive more grant aid, on average, than students in other sectors, shrinking the gap between the prices students in different sectors pay. Still, net prices are higher in the private nonprofit sector than in public institutions. </strong></p>
        <h2>By Income</h2>
            <p><strong>One of the biggest determinants of net price for an individual student is income because has a big impact on the amount of need-based grant aid a student may receive.</strong> Lower-income students generally receive more grant aid, and, because the institutions with higher sticker prices are often the ones that offer more institutional grant aid, low-income students might find that the more expensive—on paper—institutions are actually cheaper for them. </p>
            <p>Full-time dependent students from the lowest family income quartile attending public two-year and four-year colleges in 2011–12 received enough grant aid, on average, to cover their tuition and fees and have some money left over to put toward living expenses. The same was true for independent students attending public two-year colleges.</p>
            <Box>
                <h3><em>Net Price on College Scorecard</em></h3>
                <p><em>The federal government&rsquo;s </em><a href="https://collegescorecard.ed.gov/" target="_blank"><em>College Scorecard</em></a><em> reports the &ldquo;average annual cost&rdquo; for each institution, but these data provide only a loose approximation of the actual net prices students pay.</em></p>
                <p><em>The amount reported is the average annual cost of attendance—including tuition and fees, room and board, books and supplies, and other expenses—less federal, state, and institutional grant aid. The resulting number is the average net price for federal student aid recipients. Students who do not receive federal financial aid and out-of-state students at public colleges are not included in the averages. Grant aid from employers or other sources is not accounted for.</em></p>
                <p><em>The Scorecard includes information on average net price by income. But because higher-income students are less likely to receive federal aid, the net prices reported for these students are less accurate than those reported for lower-income students.</em></p>
                <p><em>Another issue is that the income categories available in these federal data do not distinguish between independent and dependent students. The financial aid system, however, treats students with similar family incomes quite differently, depending on whether the income is that of the student and spouse or that of their parents.</em></p>
            </Box>
            <Multiples title="Cost of Attendance (Total Expenses) Divided into the Portions of Tuition and Fees and Living Expenses Covered by Grant Aid, and the Tuition and Fees and Living Expenses Remaining, by Parental Income Quartile, 2011–12" source="National Postsecondary Student Aid Study (NPSAS), 2012.">
                <Graph file={require('./json/03_0211.json')} small="true"/>
                <Graph file={require('./json/03_0212.json')} small="true"/>
                <Graph file={require('./json/03_0213.json')} small="true"/>
                <Graph file={require('./json/03_0214.json')} small="true"/>
            </Multiples>
            <p><strong>As the charts show, for most students, living expenses—not tuition and fees—are the largest expense after accounting for grant aid. </strong>Even when tuition and fees are totally covered by grant aid, students can face financial pressures because it is very difficult to earn enough for housing, food, and other basic needs while enrolled in college. <em><br clear="all" /></em></p>
        <h2>Over Time</h2>
            <p><strong>Increases in grant aid over time have diminished the impact of increases in published tuition and fee prices. On average, students in the lower half of the income distribution enrolled in public and private nonprofit institutions paid lower net tuition (in inflation-adjusted dollars) in 2012 than in 1996.</strong></p>
            <p>Between 1996 and 2012, tuition and fees rose rapidly in all sectors, with the exception of community colleges. Grant aid also rose rapidly in the public and private nonprofit sectors, but it rose less rapidly in the for-profit sector. For dependent students in the lowest family income quartile, grant aid rose fast enough that net tuition and fees declined for these students in all sectors, except the for-profit sector.</p>
            <p>Net tuition and fees increased for dependent students in the upper half of the income distribution between 1996 and 2012, but not nearly as rapidly as published prices. For independent students, net tuition prices fell in public two-year and four-year institutions but rose in private nonprofit and for-profit institutions.<strong></strong></p> 
            <Multiples title="Total Student Budget, Divided into the Portions of Tuition and Fees and Living Expenses Covered by Grant Aid, and the Tuition and Fees and Living Expenses Remaining, from 1995–96 to 2011–12, in 2011 Dollars" imageOverride = "Total Student Budget, Divided into the Portions of Tuition and Fees and Living Expenses Covered by Grant Aid, and the Tuition and Fees and Living Expenses Remaining, from 1995–96 to 2011–12, in 2011 Dollars ___Public four-year institutions"
            subtitle = "Public four-year institutions"
            source="NPSAS, 2012.">
                <Graph file={require('./json/03_0221.json')} small="true"/>
                <Graph file={require('./json/03_0222.json')} small="true"/>
                <Graph file={require('./json/03_0223.json')} small="true"/>
                <Graph file={require('./json/03_0224.json')} small="true"/>
                <Graph file={require('./json/03_0225.json')} small="true"/>
            </Multiples>
            <Multiples title="" subtitle = "Private four-year institutions" source="NPSAS, 2012.">
                <Graph file={require('./json/03_02211.json')} small="true"/>
                <Graph file={require('./json/03_02212.json')} small="true"/>
                <Graph file={require('./json/03_02213.json')} small="true"/>
                <Graph file={require('./json/03_02214.json')} small="true"/>
                <Graph file={require('./json/03_02215.json')} small="true"/>
            </Multiples>
            <Multiples title="" subtitle = "Public two-year institutions" source="NPSAS, 2012.">
                <Graph file={require('./json/03_02221.json')} small="true"/>
                <Graph file={require('./json/03_02222.json')} small="true"/>
                <Graph file={require('./json/03_02223.json')} small="true"/>
                <Graph file={require('./json/03_02224.json')} small="true"/>
                <Graph file={require('./json/03_02225.json')} small="true"/>
            </Multiples>
            <Multiples title="" subtitle = "For-profit institutions" source="NPSAS, 2012.">
                <Graph file={require('./json/03_02231.json')} small="true"/>
                <Graph file={require('./json/03_02232.json')} small="true"/>
                <Graph file={require('./json/03_02233.json')} small="true"/>
                <Graph file={require('./json/03_02234.json')} small="true"/>
                <Graph file={require('./json/03_02235.json')} small="true"/>
            </Multiples>
  </div>
);

let specifications = {
  'name': 'net-price',
  'title': 'Net Price',
  'content': <SinglePage content={singlepage} />
};

const NetPrice = React.createClass({
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
util.printToPage('net-price', NetPrice);

module.exports = NetPrice;
