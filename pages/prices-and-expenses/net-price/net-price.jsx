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
        <p>Looking at tuition and fees, room and board, and total student budgets can make college seem really expensive. <strong>But the reality is most students don&rsquo;t pay the full sticker price.</strong></p>
        <p>Net price is the price students actually pay, after subtracting financial aid that doesn&rsquo;t have to be repaid from the total sticker price. <strong>The average net price is much lower than the sticker price.</strong></p>
        <p>Net prices vary quite a bit, even among students enrolled in the same college. Academic records, athletic abilities, and a variety of other factors can influence net price, but income is the most important factor, since it usually has a big impact on the amount of financial aid a student receives. Because low-income students typically receive more grant aid at high-price colleges than elsewhere, these schools can end up costing less for these students than schools with lower price tags.</p>
        <p>Increases in grant aid have helped lessen the effects of increases in sticker price. In fact, as sticker prices have risen over time, the average net tuition and fee prices paid by students in the lower half of the income distribution have actually declined (after adjusting for inflation) in the public and private nonprofit sectors.</p>
        <p>Though it is not possible to predict exactly what the net price will be for any individual student at a particular type of institution, or even a specific college, examining trends in net prices is critical to understanding college affordability.</p>
        <h2>Across Sectors</h2>
            <p>At all types of institutions, the average net price is lower than the sticker price, though there is wide variation across students and sectors.</p>
            <p>In the for-profit sector, students pay about 70 percent of the sticker price because of grant aid; at public and private nonprofit universities, on average full-time students pay between 40 and 45 percent of the tuition and fee price. On average, grant aid covers the full tuition and fee price for students at two-year colleges.</p>
            <Graph file={require('./json/030501.json')}/>
            <Graph file={require('./json/030502.json')}/>
            <p><strong>Students in the private nonprofit sector receive more grant aid, on average, than students in other sectors, shrinking the gap between the prices students in different sectors pay. Still, net prices are higher in the private nonprofit sector than in public institutions.</strong></p>
        <h2>By Income</h2>
            <p><strong>One of the biggest determinants of net price for an individual student is income, which has a big impact on the amount of need-based grant aid a student may receive.</strong> Lower-income students generally receive more grant aid, and, because the institutions with higher sticker prices are often the ones that offer more institutional grant aid, low-income students might find that the more expensive&mdash;on paper&mdash;institutions are actually cheaper for them.</p>
            <p>Full-time dependent students from the lowest family income quartile attending public two-year and four-year colleges in 2015&ndash;16 received enough grant aid, on average, to cover their tuition and fees and have some money left over to put toward living expenses. The same was true for independent students attending public two-year colleges.</p>
            <Multiples 
                title="Cost of Attendance (Total Expenses) Divided into the Portions of Tuition and Fees and Living Expenses Covered by Grant Aid, and the Tuition and Fees and Living Expenses Remaining, 2015–16" 
                source="2016 National Postsecondary Student Aid Study." 
                notes="Net tuition and fee amounts are calculated by subtracting average total grant aid for all full-time students, including those who do and do not receive grant aid, from the published tuition and fee price. This yields a slightly different measure than that identified in NPSAS as net tuition and fees, because that calculation excludes any aid individual students receive that exceeds their tuition and fee prices." 
                pluralNotes="true"
            >
                <Graph file={require('./json/030503.json')} small="true"/>
                <Graph file={require('./json/030504.json')} small="true"/>
                <Graph file={require('./json/030505.json')} small="true"/>
                <Graph file={require('./json/030506.json')} small="true"/>
            </Multiples>
            <p><strong>For most students, living expenses&mdash;not tuition and fees&mdash;are the largest expense after accounting for grant aid. </strong>Even when tuition and fees are totally covered by grant aid, students can face financial pressures because it is very difficult to earn enough for housing, food, and other basic needs while enrolled in college.</p>
        <h2>Over Time</h2>
            <p><strong>Increases in grant aid over time have diminished the impact of increases in published tuition and fee prices. </strong></p>
            <p>Between 1996 and 2016, both tuition and fees and grant aid rose rapidly in all sectors. On average, grant aid has consistently covered tuition and fees for dependent students in the lowest family income quartile at public two-year and four-year institutions. At private nonprofit colleges and universities, average net tuition and fees rose between 1996 and 2004 but was lower for this group in 2016 than 20 years earlier. This is not, however, the case at for-profit institutions.</p>
            <p>The average net price for students in the lower-middle-income group was lower in all sectors in 2016 than in 2008. It rose between 1996 and 2016 only in the for-profit sector.</p>
            <p>Grant aid has also risen rapidly for students in the upper half of the income distribution but not enough to prevent their net prices from increasing, except for upper-middle-income students enrolled in private nonprofit institutions.</p>
            <p>For independent students, net prices have risen in all sectors except at public two-year colleges, where their tuition and fees have consistently been covered by grant aid.</p>
            <Multiples 
                title="Total Student Budget, Divided into the Portions of Tuition and Fees and Living Expenses Covered by Grant Aid, and the Tuition and Fees and Living Expenses Remaining, from 1995–96 to 2015–16, in 2015 Dollars" 
                imageOverride = "Public four-year institutions"
                subtitle = "Public four-year institutions"
                source="2016 National Postsecondary Student Aid Study."
            >
                <Graph file={require('./json/030507.json')} small="true"/>
                <Graph file={require('./json/030508.json')} small="true"/>
                <Graph file={require('./json/030509.json')} small="true"/>
                <Graph file={require('./json/030510.json')} small="true"/>
                <Graph file={require('./json/030511.json')} small="true"/>
            </Multiples>
            <Multiples 
                title="Total Student Budget, Divided into the Portions of Tuition and Fees and Living Expenses Covered by Grant Aid, and the Tuition and Fees and Living Expenses Remaining, from 1995–96 to 2015–16, in 2015 Dollars" 
                imageOverride = "Private four-year institutions" 
                subtitle = "Private four-year institutions" 
                source="2016 National Postsecondary Student Aid Study. "
            >
                <Graph file={require('./json/030512.json')} small="true"/>
                <Graph file={require('./json/030513.json')} small="true"/>
                <Graph file={require('./json/030514.json')} small="true"/>
                <Graph file={require('./json/030515.json')} small="true"/>
                <Graph file={require('./json/030516.json')} small="true"/>
            </Multiples>
            <Multiples 
                title="Total Student Budget, Divided into the Portions of Tuition and Fees and Living Expenses Covered by Grant Aid, and the Tuition and Fees and Living Expenses Remaining, from 1995–96 to 2015–16, in 2015 Dollars" 
                imageOverride = "Public two-year institutions" 
                subtitle = "Public two-year institutions" 
                source="2016 National Postsecondary Student Aid Study. "
            >
                <Graph file={require('./json/030517.json')} small="true"/>
                <Graph file={require('./json/030518.json')} small="true"/>
                <Graph file={require('./json/030519.json')} small="true"/>
                <Graph file={require('./json/030520.json')} small="true"/>
                <Graph file={require('./json/030521.json')} small="true"/>
            </Multiples>
            <Multiples 
                title="Total Student Budget, Divided into the Portions of Tuition and Fees and Living Expenses Covered by Grant Aid, and the Tuition and Fees and Living Expenses Remaining, from 1995–96 to 2015–16, in 2015 Dollars" 
                imageOverride = "For-profit institutions" 
                subtitle = "For-profit institutions" 
                source="2016 National Postsecondary Student Aid Study.">
                <Graph file={require('./json/030522.json')} small="true"/>
                <Graph file={require('./json/030523.json')} small="true"/>
                <Graph file={require('./json/030524.json')} small="true"/>
                <Graph file={require('./json/030525.json')} small="true"/>
                <Graph file={require('./json/030526.json')} small="true"/>
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
