"use strict";

var SearchBox = React.createClass({
    handleChange: function() {
      this.props.onUserInput(
          this.refs.filterTerms.value
      );
    },
    render: function() {
      return (
          <form>
            <input 
              type="text"
              id="filter"
              ref="filterTerms" 
              placeholder="Find term"
              onChange={this.handleChange}
              value={this.props.filterTerm} />
          </form>
      );
    }
});

var ListItem = React.createClass({
  render: function() {
    return (
        <li>{this.props.term}</li>
    );
  }
});

var ListItems = React.createClass({

  render: function(){

    var items = [];

    var filterTerm = this.props.filterTerm;

    this.props.terms.forEach(function(term){

      if (term.indexOf(filterTerm) != -1) {
        items.push(<ListItem key={term} term={term} />);
      }
    });

    return (
      <ul>
        {items}
      </ul>
    );

  }

});

var Home = React.createClass({

  getInitialState: function() {
    return {
        filterTerm: '',
    };
  },
  handleUserInput: function(filterTerm) {
      this.setState({
          filterTerm: filterTerm
      });
  },
  render: function(){
    return (
      <div>
        <SearchBox 
          filterTerm={this.state.filterTerm} 
          onUserInput={this.handleUserInput} />
        <ListItems
          filterTerm={this.state.filterTerm} 
          terms={this.props.terms} />
      </div>
    )
  }

});

var terms = ['mare', 'sole', 'sabbia', 'acqua', 'spiaggia'];

React.render(<Home terms={terms} />, document.getElementById('app'));

