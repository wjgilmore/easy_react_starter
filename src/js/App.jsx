"use strict";

var React = require('react');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var browserHistory = require('react-router/lib/BrowserHistory').history;

//import BrowserHistory from 'react-router/lib/BrowserHistory';

var App = require('./components/App.jsx');
var Lists = require('./components/List.jsx');
var About = require('./components/About.jsx');

//new BrowserHistory()

React.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route name="lists" path="lists" component={Lists}/>
			<Route name="about" path="about" component={About}/>
		</Route>
	</Router>
), document.getElementById('content'));