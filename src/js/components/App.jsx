"use strict";

var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var About = require('./About.jsx');
var Lists = require('./List.jsx');

var App = React.createClass({
  render: function () {
    return (
      <div className="container">
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">VocabGiant</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-left">
                <li><Link to="about">About</Link></li>
                <li><Link to="lists">Lists</Link></li>
              </ul>
            </div>

          </div>

        </nav>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = App;