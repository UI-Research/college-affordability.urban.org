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
      <h1>Endowments</h1>
      <p>Endowments are financial assets colleges and universities hold that provide long-term funding.</p>
      <p>Both public and private nonprofit institutions hold endowments, but they are more common in the private sector. In both sectors, endowment assets are highly concentrated among a small number of institutions&mdash;just 25 institutions hold about half of all US endowment assets.</p>
      <Box>
        <h3><em>The Myth of Massive Endowments</em></h3>
        <p><em>Although only a few institutions have endowments large enough to cover a significant portion of their annual budgets, policymakers tend to give disproportionate attention to this small segment of the industry.</em></p>
        <p><em>The Tax Cuts and Jobs Act passed by Congress in December 2017 imposed a tax of 1.4 percent on the endowment income of private nonprofit colleges and universities that have assets exceeding $500,000 per student and enroll more than 500 students. About 25 of the more than 2,600 institutions in the sector meet these criteria, and the exact design of the tax remains unclear, but the policy opens the door to modifying the tax-exempt status of these nonprofit institutions. </em></p>
        <p><em>Unlike other proposals, such as the legislation introduced by Rep. Tom Reed (R-NY), the new tax does not include any provisions related to how much of their endowment income colleges and universities spend or how they spend it.</em></p>
      </Box>
      <p>Although some endowment funds can <a href="http://collegeaffordability.urban.org/cost-of-educating/subsidies"><strong>subsidize</strong></a> the cost of education as the institution chooses, private donors often donate to endowment funds and specify how the institution can spend the donated money. Those funds can be spent only on prescribed activities. Endowment principal must be maintained, with only earnings beyond inflation available to spend.</p>
      <p>Measuring <strong>endowment income</strong> per student, rather than total endowment, allows us to compare subsidies students may receive from endowments across institutions of different sizes. Most institutions have rules that allow them to spend between 4 and 5 percent of the value of their endowments (usually averaged over a few years) each year. The analyses below assume that institutions receive 4.5 percent of their endowments as income each year.</p>
    <h2>Income from Endowments</h2>
      <p>Income from endowments fluctuates from year to year along with financial markets. Because institutions can spend only a limited amount of their assets each year, their spending is constrained when stocks and other financial assets lose value. <strong>Only a few institutions in each sector have the necessary endowment income to provide significant subsidies to students.</strong></p>
      <Box>
        <h3><em>More About Endowment Income</em></h3>
        <p><em>Endowment assets and associated income fluctuate with financial markets. Between 2007&ndash;08 and 2016&ndash;17, </em><a href="https://www.nacubo.org/-/media/Nacubo/Documents/EndowmentFiles/2017-NCSE-Public-Tables--Annual-Rates-of-Return.ashx?la=en&amp;hash=EA2402B5AB061931DCB8E2BBEBAD66C933F02430" target="_blank">average rates of return</a><em> on endowments ranged from -18.7 percent in 2008&ndash;09 to 15.5 percent in 2013&ndash;14.</em></p>
      </Box>
      <p>The few public and private nonprofit doctoral universities with high endowment income per student use those assets to support undergraduate and graduate students and to further their research missions. <strong>During the 2015&ndash;16 academic year, 10 percent of students enrolled at private doctoral universities benefited from about $66,800 of endowment spending per full-time equivalent (FTE) student, but median endowment spending per FTE student in this sector was only $3,900. In public universities, 10 percent of students attended institutions with an average of $6,200 of endowment spending per student compared with just $900 for the median student.</strong></p>
      <Multiples 
        title="Average Endowment Income per Student by Decile" 
        source="Integrated Postsecondary Education Data System (IPEDS)." 
        // notes="Institutions are sorted according to the Carnegie Classification of Institutions of Higher Education framework." 
        pluralNotes="true">
        <Graph file={require('./json/020301.json')} small="true"/>
        <Graph file={require('./json/020302.json')} small="true"/>
        <Graph file={require('./json/020303.json')} small="true"/>
        <Graph file={require('./json/020304.json')} small="true"/>
        <Graph file={require('./json/020305.json')} small="true"/>
    </Multiples>
      <p><strong>More selective schools tend to have higher endowment income.</strong></p>
      <p>At private nonprofit institutions with open-admissions policies, average annual endowment income per student is about $700. It is about $100 at public open-admissions institutions. In contrast, the median private nonprofit four-year institution that admits fewer than 25 percent of applicants has almost $22,000 in annual endowment income per .</p>
        <Graph file={require('./json/020306.json')}/>
        <Graph file={require('./json/020307.json')}/>

      <Box>
        <h3><em>How Do Graduate Students Affect Per-Student Spending from University endowments? </em></h3>
        <p><em>Estimated subsidies are higher among students attending research institutions in the top decile than among those at less resourced institutions in both the public and private sectors. But per student subsidies at research universities do not represent resources devoted solely to undergraduate education. These institutions also educate many graduate students and have active research agendas.</em></p>
        <p><em>Many institutions with large endowments are doctoral universities, where graduate students make up a large share of total enrollment. At these universities, simply dividing endowment income by number of students enrolled overstates the resources available for undergraduates because it <a href="https://tcf.org/assets/downloads/20130523-Bridging_the_Higher_Education_Divide-Baum_Kurose.pdf" target="_blank">costs more</a> to educate graduate students, who require more faculty attention and resources.</em></p>
        <p><em>Across all sectors, institutions with higher endowment income per student tend to have more graduate students as a share of total enrollment. </em></p>
      </Box>
  </div>
);

let specifications = {
  'name': 'endowments',
  'title': 'Endowments',
  'content': <SinglePage content={singlepage} />
};

const Endowments = React.createClass({
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
util.printToPage('endowments', Endowments);

module.exports = Endowments;
