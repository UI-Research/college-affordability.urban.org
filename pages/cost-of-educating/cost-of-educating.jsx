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
   <h1>The Cost of Educating Students</h1>
	<p>Students see the sticker prices colleges charge, but they might not realize that the tuition they pay, whether out of pocket or with financial aid, often covers only a fraction of what their education really costs. </p>
	<p>Colleges must pay for instructors, student services, administrative support, and maintenance, among other expenses. Average spending per student varies across institutions, partially because of differences in their missions and activities. For example, public two-year colleges focus almost exclusively on educating lower-level undergraduates, while public research universities educate both undergraduate and graduate students in addition to engaging in a significant amount of research activity. </p>
	<Box>
		<h3><em>Education and related spending</em></h3>
		<p><em>Education and related expenditures include money spent on instruction, student services, academic and administrative support, and operations and maintenance. This does not include the cost of constructing new buildings or spending on research and public service. It also excludes scholarships and fellowships, which are discounts to students. </em></p>
		<p><em>Instruction, the largest single cost at public and private nonprofit institutions, includes faculty salaries and benefits. Student services spending includes expenses such as the admissions and registrar&rsquo;s offices, provision of health services, and student affairs, which includes extracurricular activities, social and emotional supports, and related services. Academic support includes advising, libraries, technology, and academic administration.</em></p>
	</Box>
	<p>Almost all colleges and universities use revenues from tuition and fees to help cover these costs, and nonprofit colleges supplement that revenue with their own resources. Public colleges and universities use <strong>state and local tax revenues</strong><strong>, </strong>and most private universities use <strong>endowment income </strong>or other<strong> </strong>private funding sources<strong>.</strong> Money from these sources <strong>subsidizes the cost of education</strong>, so the sticker prices students see are lower than the actual cost. </p>
	<Box>
		<h3><em>Comparing costs: undergraduate and graduate students</em></h3>
		<p><em>Because of how higher education accounting systems work, spending on graduate students cannot be precisely separated from spending on undergraduates, but there is broad agreement that it is about </em><a href="https://tcf.org/assets/downloads/20130523-Bridging_the_Higher_Education_Divide-Baum_Kurose.pdf"  target="_blank"><em>three times more</em></a><em> expensive</em><em> to educate graduate students.</em></p>
		<p><em>Why are there cost differences? Undergraduate introductory courses are generally larger than smaller graduate seminars, and teaching loads vary both within and across institutions. Moreover, graduate students teaching introductory courses and assistant professors teaching upper-level undergraduates are paid much less than full professors teaching graduate courses. </em></p>
		<p><em>Field of study also factors into cost. For example, instructional costs in mechanical engineering programs are </em><a href="http://sites.udel.edu/ire/files/2015/04/NCES-report-Middaugh-et-al-14yu7gv.pdf"  target="_blank"><em>about three times as high</em></a><em> as those in English programs. Professors in the sciences also require more investment in laboratory space and equipment for research and teaching at the graduate level.</em></p>
	</Box>
  </div>
);

let specifications = {
  'name': 'cost-of-educating',
  'title': 'Cost of Educating',
  'content': <SinglePage content={singlepage} />
};

const CostOfEducating = React.createClass({
  render: function() {
    return (
      <Template title={specifications.title} machineName={specifications.name} includeHTML={this.props.includeHTML}>
        {specifications.content}
      </Template>
    );
  }
});

util.printToPage('cost-of-educating', CostOfEducating);

if (util.canUseDOM()) {
  require('./' + specifications.name.toLowerCase() + '.scss');
}

module.exports = CostOfEducating;
