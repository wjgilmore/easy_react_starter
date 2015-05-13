var Hello = React.createClass({
    render: function() {
        return (
         <h1>Welcome to SpiesInDC</h1>
        );
    }
});

React.render(<Hello />, document.getElementById('example'));
