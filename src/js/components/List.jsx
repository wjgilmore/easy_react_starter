"use strict";

var React = require('react'),
    ListItem = require('./ListItem.jsx');

var List = React.createClass({
  render: function() {

    var words = [
      {
        "origin": "accogliere",
        "translation": "to welcome"
      },
      {
        "origin": "affrettarsi",
        "translation": "to hurry"
      },
      {
        "origin": "ammettere",
        "translation": "to admit"
      }
    ];

    var listItems = words.map(function(item){
      return <ListItem item={item} />;
    });

    return (
     <div>
     <h1>Italian Verbs</h1>
     <ul className="list-group">
     {listItems}
     </ul>
     </div>
    );
  }
});

module.exports = List;
