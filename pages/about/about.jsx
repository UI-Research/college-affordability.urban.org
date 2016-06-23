'use strict';

const React = require('react');
const Template = require('20-templates/default/default.jsx');
const Text = require('30-components/basic/text/text.jsx'),
      BarGraph = require('30-components/graphs/bar/bar.jsx'),
      LineGraph = require('30-components/graphs/line/line.jsx'),
      MultiPage = require('30-components/multipage/multipage.jsx');

const util = require('util.jsx');


let specifications = {
  'name': 'about',
  'content': (
    <div>
      <h1>About</h1>
      <p>Rising concerns over college tuition and student debt combined with the widespread conviction that a degree is essential for a middle-class lifestyle have led to a sense that college in the United States has become "unaffordable." <strong>But what does affordability actually mean?</strong></p>
      <h2>Affordability depends on what you’re buying</h2>
      <p>"College" means many different things, and whether college is "worth it depends on what kind of institution and program you’re talking about. There are thousands of postsecondary institutions in the United States offering a wide range of undergraduate credentials, from short-term certificates in very specific occupational areas to associate degrees in either general academic fields or more targeted vocational areas to bachelor’s degrees—which also come in many different forms.</p>
      <p>Just as someone who can afford to pay $20,000 for a new car cannot afford to pay nearly that much for a television, students should think of the price of a bachelor's degree quite differently than they think of the price of a short-term certificate. They should also consider the quality of the credential and the experiences of similar students. In addition, although we almost always focus on a year's tuition when talking about college prices, the number of years for which you pay that price matters a great deal. It is much more expensive to spend five years than four years in college to earn a bachelor’s degree.</p>
      <h2>Sticker price is not an indicator of affordability</h2>
      <p>Most students and families don't actually pay the whole cost of education. They attend institutions that charge less in tuition and fees than the amount they spend educating students, relying on funds from state and local tax revenues, endowment income, and other philanthropic sources to cover part of the costs. Moreover, many students receive grants and tax benefits that help them cover the tuition and fees that are charged.</p>
      <p>On the flipside, students don't just have to pay tuition and fees. They also have to cover their living expenses while they are in college. What resources are available to pay all of these bills? Students can pay their share of the costs with a combination of income before college (including income earned by their parents), income earned during college, and income earned after college. They supplement these resources with financial aid from federal and state governments, colleges and universities, and other sources.</p>
      <h2>Affordability is about more than what you can pay right now</h2>
      <p>Having a sense of the value of the educational experience is critical to thinking about college affordability. The benefits of college are certainly not just in the form of future earnings. Students should expect to develop personally and intellectually, to open up lots of different kinds of opportunities, and to enjoy the process. But the money matters. Even if you have all the money in your pocket for four years of tuition, the education is unaffordable if it doesn’t do enough to increase your earnings potential.</p>
      <p><strong><em>There is not a yes-or-no answer to the question of whether or not college is affordable.</em></strong>  But the information on this website can increase understanding of how much students in different circumstances pay for different kinds of education and of the resources they can draw on to cover their expenses. By presenting the big picture, trends over time, and the option to look more closely at the details, this website should support a more coherent and nuanced conversation about students’ financial access to a college education worth its cost.</p>
      <p><em>Lumina Foundation provided funding for the development of this website. The views represented here are those of the authors and do not necessarily reflect the views of Lumina Foundatio</em></p>
    </div>
  )
};

const About = React.createClass({
  render: function() {
    return (
      <Template title="About US" machineName={specifications.name} includeHTML={this.props.includeHTML}>
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
