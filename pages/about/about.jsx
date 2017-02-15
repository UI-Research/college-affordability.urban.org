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
    <h1>About the Project</h1>

    <p>Rising concerns over college tuition and student debt combined with the widespread conviction that a degree is essential for a middle-class lifestyle have led to a sense that college in the United States has become &ldquo;unaffordable.&rdquo; <strong>But what does affordability actually mean?</strong></p>
<p><strong>Affordability depends on what you&rsquo;re buying</strong></p>
<p>&ldquo;College&rdquo; means many different things, and whether college is &ldquo;worth it&rdquo; depends on what kind of institution and program you&rsquo;re talking about. There are thousands of postsecondary institutions in the United States offering a wide range of undergraduate credentials. These include short-term certificates in very specific occupational areas to associate degrees in either general academic fields or more targeted vocational areas, and a variety of types of bachelor&rsquo;s degrees. Many of the institutions undergraduate students attend also educate graduate students.</p>
<p>Just as someone who can afford to pay $20,000 for a new car would not think of paying nearly that much for a television, students should think of the price of a bachelor&rsquo;s degree differently than they think of the price of a short-term certificate. They should also consider the quality of the credential and the experiences of similar students. In addition, although we almost always focus on a year&rsquo;s tuition when talking about college prices, the number of years for which you pay that price matters a great deal. It is much more expensive to spend five years than four years in college to earn a bachelor&rsquo;s degree. </p>
<p><strong>Sticker price is not an indicator of affordability</strong></p>
<p>Most students and families don&rsquo;t actually pay the whole cost of education. They attend institutions that charge less in tuition and fees than the amount they spend educating students, relying on funds from state and local tax revenues, endowment income, and other philanthropic sources to cover part of the costs. Moreover, many students receive grants and tax benefits that help them cover the tuition and fees that are charged.</p>
<p>On the flipside, students don&rsquo;t just have to pay tuition and fees. They also have to buy books and supplies and cover their living expenses while they are in college. What resources are available to pay all of these bills? Students can pay their share of the costs with a combination of income earned before college (including income their parents have earned), income earned during college, and income earned after college. They supplement these resources with financial aid from federal and state governments, colleges and universities, and other sources. </p>
<p><strong>Affordability is about more than what you can pay right now</strong></p>
<p>Having a sense of the value of the educational experience is critical to thinking about college affordability. The benefits of college are certainly not just in the form of future earnings. Students should expect to develop personally and intellectually, to open up lots of different kinds of opportunities, and to enjoy the process. But the money matters. Even if you have all the money in your pocket for four years of tuition, the education is unaffordable if it doesn&rsquo;t do enough to increase your earnings potential. </p>
<p><strong><em>There is not a yes-or-no answer to the question of whether college is affordable.</em></strong> But the information on this website can increase understanding of how much students in different circumstances pay for different kinds of education and of the resources they can draw on to cover their expenses. By presenting the big picture, trends over time, and the option to look more closely at the details, this website should support a more coherent and nuanced conversation about students&rsquo; financial access to a college education worth its cost.</p>
<hr />
<h2>Project Credits</h2>
<p>Lumina Foundation provided funding for the development of this website. The views represented here are those of the authors and do not necessarily reflect the views of Lumina Foundation. <br />
  <br />
As an organization, the Urban Institute does not take positions on issues, but it does empower and support its experts in sharing their own evidence-based views and policy recommendations that have been shaped by scholarship.</p>
<p><strong>Research</strong> <br />
Sandy Baum, Martha Johnson, and Victoria Lee</p>
<p><strong>Writing</strong> <br />
Alexandra Tisley</p>
<p><strong>Editorial</strong> <br />
  Elizabeth Forney and Daniel Matos</p>
  </div>
);

let specifications = {
  'name': 'about',
  'title': 'About',
  'content': <SinglePage content={singlepage} />
};

const About = React.createClass({
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
util.printToPage('about', About);

module.exports = About;
