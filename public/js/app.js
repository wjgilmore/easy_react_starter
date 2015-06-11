var SearchBox = React.createClass({
    handleChange: function() {
      this.props.onUserInput(
          this.refs.filterTerms.getDOMNode().value
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

var Home = React.createClass({

  getInitialState: function(){
    return {
      filterTerm: ''
    }
  },

  handleUserInput: function(filterTerm) {
      this.setState({
          filterTerm: filterTerm
      });
  },

  render: function() {
    return (
      <div>
      	<br />
        <SearchBox 
          filterTerm={this.state.filterTerm} 
          onUserInput={this.handleUserInput} />
          <br />
        <div>{this.state.filterTerm}</div>
      </div>
    );
  }
});

React.render(<Home />, document.body);
