"use strict";

var ListItem = React.createClass({
  render: function() {
    return (
     <li>{this.props.item.origin}</li>
    );
  }
});

var ListItems = React.createClass({
  render: function() {

    var listItems = this.props.items.map(function(item){
      return <ListItem key={item.origin} item={item} />;
    });

    return (
     <ul>
     {listItems}
     </ul>
    );

  }
});

var Home = React.createClass({
  getInitialState: function(){
    return {
      vocabulary: [],
    }
  },

  componentDidMount: function() {
    $.get(this.props.url, function(result) {
      var words = result.words;
      if (this.isMounted()) {
        this.setState({
          vocabulary: words
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        <ListItems items={this.state.vocabulary} />
      </div>
    );
  }
});

React.render(<Home url="http://localhost:3000/vocabulary.json" />, document.getElementById('app'));