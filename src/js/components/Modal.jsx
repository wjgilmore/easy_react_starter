"use strict";

var React = require('react'),
    ReactDOM = require('react-dom'),
    Bootstrap = require('bootstrap');

var ModalOpen = React.createClass({ 

  clickHandler: function(e) {
    $(ReactDOM.findDOMNode(this.refs[this.props.modalId])).modal();
  }, 

  render: function() {
    return (
      <div onClick={this.clickHandler}>
        {this.props.open}
        <Modal ref={this.props.modalId}
          header={this.props.header}
          body={this.props.body}
          footer={this.props.footer}
        />
      </div>
      ); 
  }
  
});

var Modal = React.createClass( { 

  componentDidMount: function() {
    $(ReactDOM.findDOMNode(this)).modal({ show: false });
  }, 

  componentWillUnmount: function() {
    $(ReactDOM.findDOMNode()).modal('hide'); 
  },

  clickHandler: function(e) {
    e.stopPropagation(); 
  },

  render: function() {

    return (
      <div id={this.props.modalId} className="modal" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">{this.props.header}</div>
            <div className="modal-body">{this.props.body}</div>
            <div onClick={this.clickHandler} className="modal-footer">{this.props.footer}</div>
          </div>
        </div>
      </div>
    );
  }

});

var ModalPackage = React.createClass({
  render: function() {
    return (
      <ModalOpen
      modalId={this.props.modalId}
      open={<p><a href="#">{this.props.linkName}</a></p>}
      header={<h1>About VocabGiant</h1>}
      body={<div>VocabGiant is the best!</div>}
      footer={<button data-dismiss="modal">Close</button>}
      /> 
    );
  }
});
 
module.exports = ModalPackage;