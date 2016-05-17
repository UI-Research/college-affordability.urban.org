'use strict';

const React = require('react'),
      ReactDOM = require('react-dom'),
      Router = require('react-router'),
      Route = Router.Route,
      hashHistory = require('react-router/lib/hashHistory');

const Home = './home/home.jsx',
      About = './about/about.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={Home}/>
    <Route path='/home' component={Home}/>
    <Route path='/about' component={About}/>
  </Router>
), document.body);

