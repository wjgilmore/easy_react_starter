"use strict";

var Hello = React.createClass({

  handleChange: function() {
    this.props.onUserInput();
  },

	render: function() {

		var headerStyle = {
			color: '#CF4A2B',
			borderWidth: this.props.border,
			borderStyle: 'solid'
		};

    return (
     <div>
       <h1 key="welcome" style={headerStyle}>Welcome to VocabGiant</h1>
       <a href="#" ref="changeBorder" onClick={this.handleChange}>
        Increase Border
       </a>
     </div>
    );

	}

});

var Home = React.createClass({

  getInitialState: function(){
    return {
      borderWidth: 1
    };
  },

  handleUserInput: function() {
      this.setState({
          borderWidth: this.state.borderWidth + 1
      });
  },

  render: function() {
    return (
      <div>
        <Hello 
          border={this.state.borderWidth} 
          onUserInput={this.handleUserInput} />
      </div>
    );
  }
});

React.render(<Home />, document.getElementById('app'));
