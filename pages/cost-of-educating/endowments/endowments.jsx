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
    <h1>Endowments consist of financial assets held by colleges and universities that provide long-term funding.</h1>
      <p>Both public and private institutions hold endowments, but they are more common in the private sector. In both sectors, endowment assets are highly concentrated among a small number of institutions: just 25 institutions hold about half of all endowment assets in the United States.</p>
      <Box>
        <h3><em>The myth of massive endowments</em></h3>
        <p><em>Although only a few institutions have endowments large enough to cover a significant portion of their annual budgets, policymakers tend to give disproportionate attention to this small segment of the industry. In 2016, Rep. Tom Reed (R-NY) proposed legislation that would require colleges and universities with endowments exceeding $1 billion to spend 25 percent of annual income from the endowment on financial aid or lose their tax-exempt status. In 2012–13, fewer than 60 institutions—most of them private research universities—had endowments this high. There are 1,700 private nonprofit institutions and 4,700 degree-granting postsecondary institutions in the United States.</em></p>
      </Box>
      <p>Although some endowment funds can be used to <a href="../subsidies">subsidize</a> the cost of education as the institution chooses, many of the endowments come from private donors who specify how their money can be spent. Those funds can only be spent on prescribed activities. Endowment principal must be maintained, with only earnings beyond inflation available to spend.</p>
      <p>Measuring <strong>endowment income</strong> per student, rather than total endowment, allows us to compare subsidies students may receive from endowments across institutions of different sizes. Most institutions have rules that allow them to spend between 4 percent and 5 percent of the value of their endowments (usually averaged over a few years) each year. The analyses below assume that institutions receive 4.5 percent of their endowments as income each year.</p>
    <h2>Income from Endowments</h2>
      <p>Income from endowments fluctuates from year to year along with financial markets. Because institutions can only spend a limited amount of their assets each year, their spending is constrained when stocks and other financial assets lose value. <strong>Only a small number of institutions in each sector have the necessary endowment income to provide significant subsidies to students.</strong></p>
      <Box>
        <h3><em>More about endowment income</em></h3>
        <p><em>Average endowment assets per student at private nonprofit institutions fell by 29 percent between 2007–08 and 2008–09 and were 12 percent lower in 2012–13 than they had been five years earlier. Investment income exceeded income from all other sources combined at private doctoral universities in 2006–07 but generated losses slightly greater than total income from other sources in 2008–09.</em></p>
      </Box>
      <p>The few public and private nonprofit doctoral universities with very high endowment income per student use those assets to support undergraduate and graduate students and to further their research missions. <strong>During the 2013–14 academic year, 10 percent of students enrolled at private doctoral universities benefited from about $60,400 of endowment spending per full-time equivalent (FTE) student, but median endowment spending per FTE student in this sector was only $3,200.</strong> <strong>In public doctoral universities, 10 percent of students attended institutions with an average of $5,500 of endowment spending per student compared to just $733 for the median student.</strong></p>
      <Multiples title="Average Endowment Income per Student by Decile" source="Integrated Postsecondary Education Data System (IPEDS).">
        <Graph file={require('./json/02_0051.json')} small="true"/>
        <Graph file={require('./json/02_0052.json')} small="true"/>
        <Graph file={require('./json/02_0053.json')} small="true"/>
        <Graph file={require('./json/02_0054.json')} small="true"/>
        <Graph file={require('./json/02_0055.json')} small="true"/>
    </Multiples>
      <h3>More selective schools tend to have higher endowment income.</h3>
        <p>At both private nonprofit and public four-year institutions with open admissions policies, median endowment income per student is about $200. In contrast, the median private nonprofit four-year institution that admits fewer than 25 percent of applicants has almost $16,000 in endowment income per student. </p>
        <Multiples title="Percentage Endowment Income per Student by Share of Applicants Admitted" source="Integrated Postsecondary Education Data System (IPEDS).">
          <Graph file={require('./json/02_0061.json')} small="true"/>
          <Graph file={require('./json/02_0062.json')} small="true"/>
        </Multiples>
        <Box>
          <h3><em>How do graduate students affect per-student spending from university endowments? </em></h3>
          <p><em>Estimated subsidies are much higher among students attending research institutions in the top decile than among those at less-resourced institutions in both the public and private sectors. But per-student subsidies at research universities do not represent resources devoted solely to undergraduate education. These institutions also educate many graduate students and have active research agendas.</em></p>
          <p><em>Many of the institutions with the largest endowments are doctoral universities, where graduate students make up a large share of total enrollment. At these universities, simply dividing endowment income by number of students enrolled overstates the resources available for undergraduates because it </em><a href="http://nces.ed.gov/pubs2003/2003161.pdf"><em>costs more</em></a><em> to educate graduate students, who require more faculty attention and resources. </em> </p>
          <p><em>Across all sectors, institutions with higher endowment income per student tend to have more graduate students as a share of total enrollment. At institutions with $500 to $1,500 of endowment income per student, graduate students make up about 20 percent of enrollment compared with 35 to 45 percent at institutions with endowment income per student of more than $9,000.</em></p>
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
