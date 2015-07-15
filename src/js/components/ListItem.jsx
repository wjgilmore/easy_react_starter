"use strict";

var React = require('react');

var ListItem = React.createClass({
  render: function() {
    return (
      <li key={this.props.origin} className="list-group-item">
      <h4 className="list-group-item-heading">
        {this.props.item.origin}
      </h4>
      <p className="list-group-item-text">
        {this.props.item.translation}
      </p>
      </li>     
    );
  }
});

module.exports = ListItem;
