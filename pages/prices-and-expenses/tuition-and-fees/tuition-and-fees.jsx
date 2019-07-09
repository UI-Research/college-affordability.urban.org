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
    <h1>Tuition and Fees</h1>
		<p>Published&mdash;or &ldquo;sticker&rdquo;&mdash;prices are the most visible to students, and they&rsquo;re the prices politicians focus on when they decry the soaring cost of an education. Although most students receive <a href="http://collegeaffordability.urban.org/financial-aid/"><strong>financial aid</strong></a> that lowers the amount they actually pay (the <a href="http://collegeaffordability.urban.org/prices-and-expenses/net-price/"><strong>net price</strong></a>), the high sticker price of education in the United States can create the impression that college is unaffordable.</p>
		<p>Sticker prices vary widely both <a href="http://collegeaffordability.urban.org/prices-and-expenses/tuition-and-fees/#tuition_and_fees_by_sector"><strong>across</strong></a> and <a href="http://collegeaffordability.urban.org/prices-and-expenses/tuition-and-fees/#distribution_of_tuition_and_fees_within_sectors"><strong>within</strong></a> <a href="http://collegeaffordability.urban.org/prices-and-expenses/tuition-and-fees/#distribution_of_tuition_and_fees_within_sectors"><strong>sectors</strong></a> and, for public universities, <a href="http://collegeaffordability.urban.org/prices-and-expenses/tuition-and-fees/#variation_across_states"><strong>across states</strong></a>. And although sticker prices nationwide have increased <a href="http://collegeaffordability.urban.org/prices-and-expenses/tuition-and-fees/#tuition_and_fees_over_time"><strong>over time</strong></a>, the rate of increase has been different for different types of institutions.</p>
		<Box>
			<h3><em><strong>Sticker Prices Vary Even within Institutions</strong></em></h3>
			<p><em>Many institutions charge different prices depending on a student&rsquo;s major or year of study. Business, engineering, or nursing programs may be more expensive than other majors because they often require unique facilities and equipment. In addition, faculty members who have good job opportunities in their fields outside academia frequently command higher salaries than those whose expertise is more narrowly suited to university teaching.</em></p>
			<p><em>Some institutions, including both public ones such as the University of Illinois and private ones such as the George Washington University, freeze tuition for four years when students enroll, with each entering class facing higher prices than continuing students. Others, including state universities in Michigan, charge higher tuition to upper-level undergraduates than to first- and second-year students because smaller and more specialized upper-level classes are more expensive to deliver.</em></p>
			<p><em>The prices reported to the <strong><a href="https://nces.ed.gov/ipeds/" target="_blank">US Department of Education</a></strong> and in the College Board&rsquo;s <strong><a href="https://trends.collegeboard.org/college-pricing" target="_blank">Trends in College Pricing</a></strong>&nbsp;</em><em>reports and reflected in the sectoral averages do not necessarily incorporate this complexity.</em></p>
		</Box>
	<h2>Tuition and Fees by Sector</h2>
		<p>Media coverage of the few schools whose tuition and fees exceed $50,000 or $60,000 ignores the fact that prices at most colleges are lower. Tuition is&nbsp;<strong>highest at private nonprofit research universities</strong>, where tuition averaged $44,000 in 2018&ndash;19.</p>
		<Graph file={require('./json/030101.json')}/>
		<Box>
			<h3><em><strong>One-Year Prices and Time to Degree</strong></em></h3>
			<p><em>The tuition prices reported here are for one year of full-time enrollment. Institutions set their prices every year and charge students separately for each term they are enrolled, usually divided into semesters or quarters. But how much students pay&mdash;and how affordable their college education is&mdash;depends on how long they are enrolled.</em></p>
			<p><em>The &ldquo;normal&rdquo; time to degree is four years for a bachelor&rsquo;s degree, two years for an associate degree, and less than two years for a certificate. If all students completed their degrees on time, the sticker price of an associate degree would be twice the annual tuition and fees, an average of $7,200 in community colleges and $28,000 in the for-profit sector in 2018&ndash;19. The sticker price of a bachelor&rsquo;s degree would be four times the annual tuition and fees, an average of $40,900 in the public sector and $143,300 in the private nonprofit sector.</em></p>
			<p><em>But many students take longer to earn their degrees. Some enroll part time and don&rsquo;t pay the full price every year. Others do not arrive academically prepared for college-level work and must take noncredit </em><a href="https://www.americanprogress.org/issues/education-k-12/reports/2016/09/28/144000/remedial-education/" target="_blank"><em><strong>remedial classes</strong></em></a><em>. Students may also take longer to complete their degrees if they fail some of their courses, change majors, face </em><a href="https://www.insidehighered.com/quicktakes/2012/08/29/huge-waiting-lists-california-community-colleges" target="_blank"><em><strong>waiting lists</strong></em></a><em> for required courses, or accumulate </em><a href="https://hechingerreport.org/wasted-time-money-undergraduate-classes/" target="_blank"><em><strong>excess credits</strong></em></a><em> without meeting all their graduation requirements.</em></p>
			<p><em><strong>Staying in school longer means paying extra tuition and fees.</strong></em><em> It also means waiting longer before beginning to earn the wages that represent a central part of the return on investment of a college education.</em></p>
		</Box>
	<h2>Tuition and Fees over Time</h2>
		<p><strong>For decades, average published tuition and fee prices in all sectors have been rising faster than the average prices of all goods and services (as measured by the Consumer Price Index), but the rate of increase is not accelerating.</strong></p>
		<p>For example, tuition at public four-year institutions increased, on average, 3.5 percent a year beyond general inflation between 2003&ndash;04 and 2008&ndash;09 and 4.9 percent a year between 2008&ndash;09 and 2013&ndash;14, compared with 1.3 percent a year from 2013&ndash;14 to 2018&ndash;19.</p>
		<Graph file={require('./json/030102.json')}/>
		<p><strong>The </strong><strong><em>rate</em></strong><strong> of growth in tuition prices in the public four-year sector outpaced that in the public two-year and private nonprofit four-year sectors between 2000&ndash;01 and 2011&ndash;12. But even then, the </strong><strong><em>dollar</em></strong><strong> increases were larger in the private sector</strong>, where the average published tuition and fee price is three and a half times as high as in the public four-year sector, a decline from five times as high in the early 1990s. Between 2008&ndash;09 and 2018&ndash;19, tuition and fees for full-time students increased by an average of $740 a year (in 2018 dollars) at private nonprofit four-year institutions, $270 a year at public four-year institutions, and $90 a year at public two-year colleges.</p>
		<Box>
			<h3><em><strong>What Effect Does a Recession Have on College Tuition?</strong></em></h3>
			<p><em>Particularly in the public sector, published college prices tend to rise rapidly during and immediately following recessions. When the economy is healthier and state tax revenues are stronger, legislatures appropriate more funds for higher education, and prices rise more slowly. The cycles are less distinct in the private sector, but declines in endowment values and annual giving combined with increased demand for financial aid in a weak economy are reflected in larger sticker price increases.</em></p>
			<p><em>During the most recent recession, the one-year inflation-adjusted change in average public four-year tuition and fees rose from 3 percent, where it had been for three years, to 8.4 percent in 2009. Average tuition and fees at public two-year colleges increased by less than 1 percent each year from 2006&ndash;07 to 2008&ndash;09 before rising by 6.5 percent in 2009&ndash;10. At private four-year institutions, average tuition and fees rose by 2.3 percent, on average, each year between 2005&ndash;06 and 2008&ndash;09 but by 4.8 percent in 2009&ndash;10.</em></p>
		</Box>
	<h2>Distribution of Tuition and Fees within Sectors</h2>
		<p><strong>Tuition and fees vary within all sectors, but the differences are larger in the private nonprofit sector than in the public sector.</strong></p>
		<p>In the public sector, variation in tuition and fees across institutions is explained primarily by differences across states and by differences in institutional mission. Universities where faculty produce more research and teach more graduate students tend to charge the highest undergraduate tuition prices.</p>
		<p>In the private nonprofit sector, where institutions set their own prices, there is a wider range of prices. There are large differences among private institutions in the type of education offered, the number of students and faculty members, the size of endowments and other private resources, and religious affiliations. Moreover, sticker prices depend on discounting practices, which vary widely. At some private colleges, all or almost all students receive aid packages that save them from paying the full published price. Other institutions might have lower sticker prices but more students paying full price.</p>
		<p>The figure below shows the distribution of full-time students across the range of published tuition and fees charged by their public and private nonprofit four-year institutions. Although the median published tuition and fee price at private nonprofit institutions was $36,890 a year in 2018&ndash;19, 13 percent of students attended colleges charging less than $18,000. At the other end of the distribution, 26 percent faced published tuition and fee prices of $48,000 or more.</p>
		<Graph file={require('./json/030103.json')}/>
		<p>For 35 percent of full-time students in the public four-year sector, including both in-state and out-of-state students, the published tuition and fee price was less than $9,000 in 2018&ndash;19. The median sticker price in this sector was $10,600, but 19 percent of students faced sticker prices of $15,000 or higher.</p>
	<h2>Variation across States</h2>
		<p><strong>Tuition prices, particularly at public universities, vary dramatically across states.</strong></p>
		<p>In 2018&ndash;19, the average public two-year college tuition and fee price was almost six times as high in Vermont as in California, a difference of $6,760. The average published price at public four-year institutions was three times as high in Vermont as in Wyoming, a difference of $11,210.</p>
		<Graph file={require('./json/030104.json')}/>
		<Graph file={require('./json/030105.json')}/>
		<p><strong>In 2018&ndash;19, published tuition and fees for in-state students at public four-year institutions ranged from $5,400 in Wyoming to $16,610 in Vermont.</strong> Twenty-two states charged at least $1,000 less than the national average of $10,230, and 14 states charged more than $1,000 above the national average. These differences are associated with variation in state funding levels, but they are also related to enrollment patterns, cost of living, and other factors.</p>
  </div>
);

let specifications = {
  'name': 'tuition-and-fees',
  'title': 'Tuition and Fees',
  'content': <SinglePage content={singlepage} />
};

const TuitionAndFees = React.createClass({
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
util.printToPage('tuition-and-fees', TuitionAndFees);

module.exports = TuitionAndFees;