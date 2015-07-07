var Hello = React.createClass({
    render: function() {
        return (
         <h1>Welcome to VocabGiant</h1>
        );
    }
});

React.render(<Hello />, document.getElementById('app'));
