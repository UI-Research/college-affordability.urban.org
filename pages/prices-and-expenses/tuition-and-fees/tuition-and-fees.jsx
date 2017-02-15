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
		<p>Published—or &ldquo;sticker&rdquo;—prices are the most visible to students, and they&rsquo;re the prices politicians focus on when they decry the soaring cost of an education. Although most students receive <a href="../../financial-aid/">financial aid</a> that lowers the amount they actually pay (the <a href="../../prices-and-expenses/net-price/">net price</a>), the high sticker price of education in the United States can create the impression that college is unaffordable.</p>
		<p>Sticker prices vary widely both <strong><a href="#tuition_and_fees_by_sector">across</a></strong> and <strong><a href="#distribution_of_tuition_and_fees_within_sectors">within </a></strong><a href="#distribution_of_tuition_and_fees_within_sectors"><strong>sectors</strong></a><strong> </strong>and, for public universities, <strong><a href="#variation_across_states">across states</a></strong>. And although sticker prices nationwide have increased <strong><a href="#tuition_and_fees_over_time">over time</a></strong>, the rate of increase has been different for different types of institutions. </p>
		<Box>
			<h3><em><strong>Sticker prices vary even within institutions</strong></em></h3>
			<p><em>Many institutions charge different prices depending on a student&rsquo;s major or year of study. For example, business, engineering, or nursing programs may be more expensive than other majors because they often require unique facilities and equipment. In addition, faculty members who have good job opportunities in their fields outside of academia frequently command higher salaries than those whose expertise is more narrowly suited to university teaching.</em></p>
			<p><em>Some institutions, including both publics such as the University of Illinois and privates such as George Washington University, freeze tuition for four years when students enroll, with each entering class facing higher prices than continuing students. Others, including state universities in Michigan, charge higher tuition to upper-level undergraduates than to first- and second-year students because smaller and more specialized upper-level classes are more expensive to deliver. </em></p>
			<p><em>The prices reported to the <a href="https://nces.ed.gov/ipeds/" target="_blank">Department of Education</a> and in the College Board’s </em><a href="https://trends.collegeboard.org/college-pricing" target="_blank">Trends in College Pricing</a><em> reports and reflected in the sectoral averages do not necessarily incorporate this complexity.</em></p>
		</Box>
	<h2>Tuition and Fees by Sector</h2>
		<p>Media coverage of the few schools whose tuition and fees  exceed $50,000 ignores the fact that prices at most colleges are lower. As shown below, tuition is <strong>highest at private nonprofit research universities</strong>, where tuition averaged under $41,000 in 2016&ndash;17.</p>
		<Graph file={require('./json/03_0010.json')}/>
		<Box>
			<h3><em><strong>One-year prices and time to degree</strong></em></h3>
			<p><em>The tuition prices reported here are for one year of full-time enrollment. Institutions set their prices every year and charge students separately for each term they are enrolled, usually divided into semesters or quarters. But how much students pay—and how affordable their college education is—depends on how long they are enrolled.</em></p>
			<p><em>The &ldquo;normal&rdquo; time to degree is four years for a bachelor&rsquo;s degree, two years for an associate degree, and less than two years for a certificate. If all students actually completed their degrees in these time periods, the sticker price of an associate degree would be twice the annual tuition and fees—an average of about $7,000 in community colleges and $32,000 in the for-profit sector in 2016–17. The sticker price of a bachelor&rsquo;s degree would be four times the annual tuition and fees—an average of about $28,400 in the public sector and $129,600 in the private nonprofit sector.</em></p>
			<p><em>But many students take longer to earn their degrees. Some enroll part-time and don&rsquo;t pay the full price every year. Others do not arrive academically prepared for college-level work and must take noncredit </em><a href="https://edreformnow.org/app/uploads/2016/04/EdReformNow-O-O-P-Embargoed-Final.pdf" target="_blank"><em>remedial classes</em></a><em>. Students may also take longer to complete their degrees if they don&rsquo;t pass all of their courses, change majors, face </em><a href="https://www.insidehighered.com/quicktakes/2012/08/29/huge-waiting-lists-california-community-colleges" target="_blank"><em>waiting lists</em></a><em> for required courses, or accumulate </em><a href="http://www.completecollege.org/docs/Time_Is_the_Enemy.pdf" target="_blank"><em>excess credits</em></a><em> without meeting all of their graduation requirements. </em></p>
			<p><strong><em>Staying in school longer means paying extra tuition and fees.</em></strong><em> It also means waiting longer before beginning to earn the wages that represent a central part of the return on investment in a college education.</em></p>
		</Box>
		<p>The average prices for each sector conceal considerable variation. Average tuition and fee prices are higher at doctoral universities than at master&rsquo;s universities or undergraduate colleges. And even within these categories there is a wide range of published prices. </p>
		<p>Tuition can also vary within an institution. <strong>Out-of-state students at public colleges and universities face sticker prices about two and a half times the prices for state residents, and even in-state students may pay different prices depending on their year and field of study.</strong></p>
	<h2>Tuition and Fees Over Time</h2>
		<p><strong>For decades, average published tuition and fee prices in all sectors have been rising faster than the average prices of all goods and services (as measured by the Consumer Price Index), but the rate of increase is not accelerating. </strong></p>
		<p>For example, tuition at public four-year institutions increased, on average, about 7 percent per year beyond general inflation between 2001–02 and 2006–07 and about 5 percent per year between 2006–07 and 2011–12, compared with 2 percent per year for the last five years.</p>
		<Graph file={require('./json/03_0020.json')}/>
		<p><strong>As shown in the figure above, </strong><strong>the <em>rate </em>of growth in tuition prices has consistently been higher in the public four-year sector than for either public two-year or private nonprofit four-year colleges and universities. But the<em> dollar</em> increases are much larger in the private sector</strong>, where the average published tuition and fee price is about three and a half times as high as in the public four-year sector—a decline from five times as high in the early 1990s. Between 2006–07 and 2016–17, tuition and fees for full-time students increased by an average of $739 per year (in 2015 dollars) at private nonprofit four-year institutions, $273 per year at public four-year institutions, and $73 per year at public two-year colleges.</p>
		<Box>
			<h3><em><strong>What effect does a recession have on college tuition?</strong></em></h3>
			<p><em>Particularly in the public sector, college prices tend to rise rapidly during and immediately following recessions. When the economy is healthier and state tax revenues are stronger, legislatures appropriate more funds for higher education and prices rise more slowly. The cycles are less distinct in the private sector, but declines in endowment values and annual giving combined with increased demand for financial aid in a weak economy are reflected in larger price increases. </em></p>
			<p><em>During the most recent recession, the one-year inflation-adjusted change in average public four-year tuition and fees rose from around 3 percent, where it had been for three years, to 8.4 percent in 2009. Average tuition and fees at public two-year colleges increased by less than 1 percent each year from 2006–07 to 2008–09 before rising by 6.5 percent in 2009–10. At private four-year institutions, average tuition and fees rose by 2.3 percent, on average, each year between 2005–06 and 2008–09 but by 4.8 percent in 2009–10.</em></p>
		</Box>
	<h2>Distribution of Tuition and Fees within Sectors</h2>
		<p><strong>Tuition and fees vary within all sectors, but the differences are larger in the private nonprofit sector than in the public sector.</strong></p>
		<p>In the public sector, variation in tuition and fees across institutions is explained primarily by differences across states and by differences in institutional mission. Universities where faculty produce more research and teach more graduate students tend to charge the highest undergraduate tuition prices.</p>
		<p>In the private nonprofit sector, where individual institutions set their own prices, there is a much wider range of prices. There are large differences among private institutions in the type of education offered, the number of students and faculty members, the size of endowments and other private resources, and religious affiliations. Moreover, sticker prices depend on discounting practices, which vary widely. At some private colleges, all or almost all students receive aid packages that save them from paying the full published price. Other institutions might have lower sticker prices but more students paying full price.</p>
		<p>The figure below shows the distribution of full-time students across the range of published tuition and fees charged by their public and private nonprofit four-year institutions. Although the median published tuition and fee price at private nonprofit institutions was $35,020 per year in 2016-17, 18 percent of students attended colleges charging less than $18,000. At the other end of the distribution, 17 percent faced published tuition and fee prices of $48,000 or more.</p>
		<Graph file={require('./json/03_0030.json')}/>
		<p>For 40 percent of full-time students in the public four-year sector, including both in-state and out-of-state students, the published tuition and fee price was less than $9,000 in 2016-17. The median sticker price in this sector was $11,730, but 17 percent of students faced sticker prices of $15,000 or higher.</p>
	<h2>Variation across States</h2>
		<p><strong>Tuition prices—particularly at public universities—vary dramatically across states.</strong></p>
		<p>Because of differences in the cost of living and the characteristics of the institutions, including selectivity, programs offered, <a href="../../cost-of-educating/endowments/">endowment levels</a>, size, and religious affiliation, prices at private colleges follow geographical patterns. For example, in 2015–16, the average sticker price in this sector was $40,700 in the Northeast compared to $28,500 in the South. But the differences are clearest in the public sectors, where state policies play a big role.</p>
		<Graph file={require('./json/03_0410.json')}/>
		<Graph file={require('./json/03_0420.json')}/>
		<p><strong>In 2016-17, published tuition and fees for in-state students at public four-year institutions ranged from $5,060 in Wyoming to $15,650 in New Hampshire.</strong> Twenty-three states charged at least $1,000 less than the national average of $9,650, and 15 states charged more than $1,000 above the national average. These differences arise primarily from variation in state funding levels, but they are also associated with enrollment patterns, cost of living, and other factors. </p>
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