"use strict";

var Counter = React.createClass( { 

	componentWillReceiveProps: function(nextProps) {
		console.log("Receiving props!");
		console.log(nextProps);
	},

	shouldComponentUpdate: function(nextProps, nextState) {
		if (nextProps.counter == 3) {
			console.log("Not rendering this time!");
			return false;
		}
		return true;
	},

  render: function() {

    return (
      <div className="terms-counter">
        <h1>Terms Reviewed: {this.props.counter}</h1>
      </div>
    );
  }

});

var Hello = React.createClass({

  getInitialState: function(){
     return {
       count: 0
     }
  },

	componentWillMount: function() {
    	console.log("About to mount the component.");
	},

	componentDidMount: function() {
		console.log("Component has been mounted. We can interact with DOM now: ");
		console.log(React.findDOMNode(this).innerHTML);
	},

	componentWillUnmount: function() {
		console.log("Component has been unmounted.");
	},

	shouldComponentUpdate: function() {
		return true;
	},

	clickHandler: function(e) {
		this.setState({
			count: this.state.count + 1
		});
	  	e.stopPropagation(); 
	},

	unmountComponent: function(e) {
		React.unmountComponentAtNode(document.getElementById('app')); 
	},

    render: function() {

    	console.log("Component rendering.");

        return (
         <div>
         <h1>Welcome to VocabGiant</h1>
         <button type="button" onClick={this.clickHandler}>Increment</button>
         <Counter counter={this.state.count}/>
         <button type="button" onClick={this.unmountComponent}>Unmount Component</button>         
         </div>
        );
    }

});

React.render(<Hello />, document.getElementById('app'));
