"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var List = require('./components/List.jsx');
var Modal = require('./components/Modal.jsx');

ReactDOM.render(<List />, document.getElementById('app'));
ReactDOM.render(<Modal modalId='about' linkName="About VocabGiant" />, document.getElementById('about'));
