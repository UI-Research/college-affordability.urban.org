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
    <h1>Producing Education</h1>
    <h2>Overview</h2>
    <p>Students see the prices colleges charge, but what they might not realize is that the tuition amount they see is only a fraction of what their education really costs.</p>
    <p>To educate a student, a college must pay for instructors, student services, administrative support, and maintenance, among other things. Average education and related spending1 per student varies considerably across sectors, partially because of differences in institutions’ activities. For example, public two-year colleges almost exclusively educate lower-level undergraduates, while public research universities educate these students, upper-level undergraduates, and graduate students, in addition to engaging in a significant amount of research activity.</p>
    <p>To cover costs, all colleges and universities use revenues from tuition and fees, but nonprofit colleges also supplement that revenue with their own resources, which include state and local tax revenues in the public sector and endowment income and annual giving in the private sector.</p>

    <Box>
      <h4>Education and related spending</h4>
      <p>"Education and related expenditures" include spending by colleges and universities on instruction, student services, and a portion of academic and administrative support and operations and maintenance. This measure excludes the cost of college buildings and spending on research and public service. It also excludes scholarships and fellowships, which are discounts to student. Institutions never get this revenue and cannot spend it.   Instruction, the largest single cost category at public and private nonprofit institutions, includes faculty salaries and benefits. Student services include expenses such as admissions, registrars, health services, and student affairs. Academic support includes advising, libraries, technology, academic administration, and related expenditures.</p>
    </Box>

    <h2>Subsidies</h2>
    <p>An institutional subsidy is the share of the total cost that is covered by the institution rather than by the students’ tuition. This share varies significantly both across sectors and within sectors. Though a student likely doesn’t know the size of the subsidy he’s receiving, it can be an important factor in determining the cost of his education.</p>

    <h3>By Sector</h3>
    <p><strong>Public</strong> research universities spend almost 50 percent more per student per year than public master’s universities and more than twice as much as public two-year colleges. These gaps have grown over time.</p>
    <p>Because the funds states provide to public institutions have not kept up with growing enrollments, students received smaller subsidies in 2013-14 than in 2005-06. This means <strong>that tuition and fees cover an increasing portion of educational expenses</strong>, as these prices have risen much more rapidly than total institutional expenditures.</p>

    <Multiples title="Education and Related Spending per Full-Time Equivalent Student at Public Institutions, 2005–06 to 2013–14" source="Integrated Postsecondary Education Data System" notes="Institutions are sorted according to the Carnegie Classification of Institutions of Higher Education framework.">
      <Graph file={require('./json/02_0071.json')} small="true" />
      <Graph file={require('./json/02_0072.json')} small="true" />
      <Graph file={require('./json/02_0073.json')} small="true" />
  </Multiples>

    <p>The pattern is quite different at <strong>private</strong> nonprofit colleges and universities, which are not dependent on state funding. Average per-student spending was two and a half times as high at private research universities as at public research universities, although the gap between private and public master’s universities was much smaller. Additionally, at private institutions, <strong>the share of spending covered by tuition revenues has remained constant</strong>.</p>

    <Multiples title="Education and Related Spending per Full-Time Equivalent Student at Private Nonprofit Institutions, 2005–06 to 2013–14" source="Integrated Postsecondary Education Data System" notes="Institutions are sorted according to the Carnegie Classification of Institutions of Higher Education framework.">
      <Graph file={require('./json/02_0081.json')} small="true" />
      <Graph file={require('./json/02_0082.json')} small="true" />
      <Graph file={require('./json/02_0083.json')} small="true" />
  </Multiples>

    <p>Average subsidies in each sector <strong>conceal wide variation across institutions, with a small number of colleges and universities in each sector providing a high percentage of total subsidies.</strong></p>
    <p>To examine within-sector variation, we broke students in the different sectors into deciles by the size of the subsidies their institutions gave them. This reveals that the institutions with the biggest subsidies skew the averages. <strong>The differences in per-student subsidy across types of institutions are less extreme when considering the middle 60 percent of undergraduate students.</strong></p>

    <Multiples title="Average Subsidy per Full-Time Equivalent Student within Undergraduate Deciles" source="Integrated Postsecondary Education Data System" notes="Average subsidy per student is calculated by dividing an institution’s total subsidy by its full-time equivalent student enrollment, including graduate students. Calculations represent the average subsidy per student within deciles of undergraduate students (institutions weighted by undergraduate enrollment).">
      <Graph file={require('./json/02_0091.json')} small="true" />
      <Graph file={require('./json/02_0092.json')} small="true" />
      <Graph file={require('./json/02_0093.json')} small="true" />
      <Graph file={require('./json/02_0094.json')} small="true" />
      <Graph file={require('./json/02_0095.json')} small="true" />
      <Graph file={require('./json/02_0096.json')} small="true" />
  </Multiples>

    <Box>
      <h4>Q: Why do students in the top subsidy decile at research universities receive so much more?</h4>
      <p>A: Among the third through eighth deciles, subsidy per student ranges from $4,000 to $10,000 across all public institutions and private nonprofit bachelor’s colleges. Even in this decile range, however, average subsidies in private nonprofit research universities far exceed those in master’s universities.</p>
    </Box>

    <h3>Variations Within Sectors</h3>
    <p>Average subsidies in each sector conceal wide variation across institutions, with a small number of colleges and universities in each sector providing a high percentage of total subsidies.</p>
    <Box>
      <h4>Q: Why do students in the top subsidy decile at research universities receive so much more?</h4>
      <p>A: Estimated subsidies are many times higher among students attending research institutions in the top decile than among those at less well-resourced institutions, regardless of sector. But the per-student subsidies in research universities do not necessarily represent the resources devoted to undergraduate education. These institutions educate many graduate students and have active research agendas. Precise measurements are not available, but research universities with the highest estimated subsidies spend considerably less per undergraduate student than these figures would suggest.</p>
    </Box>



    <h2>Appropriations</h2>
    <p>At public colleges and universities, subsidies come in the form of state and local government appropriations. Over time, state funds have covered a smaller and smaller the portion of the cost of education at public colleges and universities. As state taxpayers foot less of the bill, students and families see tuition and fees rising.</p>
    <p>State tax revenues are the primary source of state and local funding for higher education institutions, but community colleges are also supported by local taxes. State and local appropriations are dedicated primarily to public colleges and universities, but some of the funds go to student aid, some benefit students in private colleges, and some are restricted funds for special purposes like research, agriculture, or medical education.</p>
    <Box>
      <h4>Q: How do states determine appropriation levels</h4>
      <p>A: State financing of higher education varies across the country. Though funding is usually tied the number of credit hours students enrolled in or completed, states have adopted different methods for determining appropriations. For example:</p>
      <ul>
        <li>Some states make annual adjustments to the previous year’s funding received by each institution, while some have less defined approaches determined by legislative priorities.</li>
        <li>Some formulas for allocating funds to institutions are based only on enrollments, but an increasing number of states use some variety of performance-based funding (PBF), incorporating measures of outcomes into their formulas. There is little evidence that PBF has had a significant impact on the efficiency and outcomes of postsecondary institutions in the past, but there is widespread optimism that new models with more carefully defined outcomes measures and consideration of the characteristic of incoming students will be more successful in improving student success rates.</li>
        <li>Many states have explicit formulas for allocating all or part of their funding to instructional expenditures, the operation and maintenance of physical plants, or other expenditures across institutions.</li>
        <li>Most state funding goes directly to public institutions, but some goes to higher education coordinating boards or to other state agencies that allocate funds to institutions, including, in some states, private colleges and universities.</li>
      </ul>
    </Box>

    <h3>Changes over time</h3>
    <p>Over the period from FY2000 to FY2014, enrollment in public colleges and universities grew by more than 30 percent. Meanwhile, in FY2014 overall state and local appropriations to public higher education fell below the FY2001 level. <strong>These two trends resulted in a 40 percent decline in appropriations per public-sector student between FY2000 and FY2014.</strong></p>

    <Graph file={require('./json/02_0010.json')} />

    <p>Because state and local governments fund public higher education using tax revenue, changes in appropriations tend to follow trends in tax revenues, which follow trends in the economy. The Great Recession dealt a blow to state budgets, leading states to reduce public funding for higher education. This funding would likely have declined more, had the federal government not supplemented state revenues with funds from the American Recovery and Reinvestment Act of 2009 (ARRA).</p>
    <p><strong>Yet now, even as tax revenues are increasing, appropriations continue to decline.</strong> Higher education appropriations declined from 5.9 percent of state and local tax revenues in FY2000 and 6.4 percent in FY2002 to 5.4 percent in FY2007 and 4.7 percent in FY2013.</p>

    <Graph file={require('./json/02_0020.json')} />

    <h3>Local Support</h3>
    <p><strong>While state support has been falling, local higher education support has been increasing.</strong> Still, in FY 2014, local support made up just 11 percent of state and local support for higher education</p>

    <Graph file={require('./json/02_0030.json')} />

    <h3>Variation Across States</h3>
    <p>National averages provide a meaningful overview of the circumstances facing college students, but state funding patterns and the prices students pay for college vary dramatically across states. <strong>Indeed, college affordability depends heavily on where students live.</strong></p>
    <p>In the 2014-15 school year, most states provided between $4,000 and $8,000 per student enrolled in a public college or university. However, New Hampshire provided just $2,632 per student, while Alaska provided $17,216. Some of the variation in per-student appropriations across states is attributable to differences in state wealth and costs of living, but some of the variation is the result of policy choices.</p>

    <Graph file={require('./json/02_0040.json')} />


    <h2>Endowments</h2>
    <p>Many universities, primarily those in the private sector, use endowment funds as a means of subsidizing the cost of an education. Endowments come from donations to colleges and universities that are designated for investment, rather than immediate expenditure. Maintaining the principal of the endowment over time—as required by law for true endowments funds—means ensuring that the value of the funds keeps up with inflation. Additional income can be used either for expenditures or for reinvestment. Most institutions spend four to five percent of the endowment value each year. (The analyses below rely on the approximation that institutions receive 4.5% of their endowment as income each year.) Because of donor specifications, however, a substantial share of endowment funds are restricted-use, meaning they can only be spent for specifically prescribed purposes. Both public and private institutions hold endowments, but the vast majority of these funds are in the private sector. In both sectors, endowment assets are highly concentrated among a small number of institutions.</p>
    <Box>
      <h4>The myth of massive endowments</h4>
      <p>While only a few institutions have endowments large enough to cover a significant portion of their annual budgets, policymakers tend to focus on this small segment of the industry. For example, in 2016 Rep. Tom Reed (R-NY) proposed legislation that would require colleges with endowments exceeding $1 billion to spend 25 percent of the annual income from the endowment on financial aid or lose their tax-exempt status. In 2012-13, fewer than 60 US institutions—most of them private research universities—had endowments this high. There are 1,700 private institutions and 4,700 degree-granting postsecondary in the United States.</p>
    </Box>

    <h3>Income from Endowments</h3>
    <p>Income from endowments fluctuates considerably from year to year, along with financial markets.</p>
    <Box>
      <h4>More about endowment income</h4>
      <p>Income from endowments fluctuates considerably from year to year, along with financial markets. For example, average endowment assets per student at private nonprofit institutions fell by 29 percent between 2007-08 and 2008-09 and were 12 percent lower in 2012-13 than they had been five years earlier. Investment income provided more than the income from all other sources combined at private doctoral universities in 2006-07, but in 2008-09 generated losses slightly greater than the total revenues</p>
    </Box>

    <p>Since institutions can only spend a limited percentage of their assets each year, their spending is constrained when stocks and other financial assets lose value.</p>
    <p>Private nonprofit research and private nonprofit bachelor’s institutions have much greater endowment income per student than other institutions on average, because these sectors include most of the institutions with large endowments.</p>
        <Multiples title="Average Endowment Income per Student within Deciles of Enrolled Students" source="Integrated Postsecondary Education Data System" notes="Average endowment income per student is calculated by dividing an institution’s total endowment income by its full-time equivalent student enrollment, including graduate students. Calculations represent the average endowment income per student within deciles of undergraduate students.">
      <Graph file={require('./json/02_0051.json')} small="true" />
      <Graph file={require('./json/02_0052.json')} small="true" />
      <Graph file={require('./json/02_0053.json')} small="true" />
      <Graph file={require('./json/02_0054.json')} small="true" />
      <Graph file={require('./json/02_0055.json')} small="true" />
  </Multiples>

    <h3>Variations Within Sectors</h3>
    <p>The vast majority of undergraduates attend institutions with much more modest endowment income per student than averages across institutions would suggest. The majority of undergraduates in all sectors except private nonprofit research institutions attend school with less than $1,500 per student in endowment income.</p>
    <Box>
      <h4>Q: Do schools spend money from their endowments on graduate students, too</h4>
      <p>A: Many of the institutions with the largest endowments are doctoral universities, where graduate students make up a significant share of total enrollment. At these universities, simply dividing endowment income by student enrollment overstates the resources available for undergraduates, because it costs more to educate graduate students than undergraduates, who require more faculty attention and resources.</p>
      <p>Across all sectors, institutions with higher endowment income per student tend to have more graduate students as a share of total enrollment. At institutions with $500 to $1,500 of endowment income per student, graduate students make up about 20 percent of enrollment. But at institutions with endowment income per student of more than $9,000, graduate students make up 35 to 45 percent of enrollment.</p>

      <p>Existing data do not allow separation of institutional spending on graduate versus undergraduate students. But assuming that graduate students receive two or three times the support from endowment income that undergraduates do reduces the estimated endowment spending per undergraduate student at public and private research universities. Assuming that they receive three times the support almost closes the gap between private nonprofit research and bachelor’s institutions. It may be more accurate to estimate that both types of institutions spend an average of close to $1,500 of endowment on undergraduates, rather than that private nonprofit research universities spend twice that.</p>

    </Box>

    <p>In each sector, only a small number of institutions have the necessary endowment income to provide significant subsidies to students.</p>
    <p>In 2013-14, ten percent of students enrolled in private doctoral universities were at schools that spend about $60,400 per student from their endowments. Yet, the median endowment spending per student in this sector was $3,200. Among public doctoral universities, ten percent of students were enrolled in institutions that spent an average of $5,500 of their endowments per student, in contrast to $733 for the median student.</p>

    <Multiples title="Median endowment income per student by level of selectivity" source="Integrated Postsecondary Education Data System" notes="">
      <Graph file={require('./json/02_0061.json')} small="true" />
      <Graph file={require('./json/02_0062.json')} small="true" />
  </Multiples>

    <p>More selective schools tend to have higher endowment income with which to subsidize their students.</p>
    <p>At both private nonprofit and public four-year institutions, those with open admissions policies have less than $400 in endowment income per student. In contrast, private nonprofit four-year institutions that admit fewer than 25 percent of their applicants have an average of more than $22,000 in endowment income per student.</p>
    <p>Public four-year institutions that admit between 25 percent and 50 percent of applicants actually have higher endowment incomes per student than those in the more selective category, likely because the small number of public research universities with large endowments fall into the latter category.</p>

  </div>
);

let specifications = {
  'name': 'producing-education',
  'title': 'Producing Education',
  'content': <SinglePage content={singlepage} />
};

const ProducingEducation = React.createClass({
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
util.printToPage('producing-education', ProducingEducation);

module.exports = ProducingEducation;
