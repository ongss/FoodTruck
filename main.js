var React = require('react');
var ReactDOM = require('react-dom');

class Layout extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className="container-fulid">
				<h1> SAY HI! </h1>
			</div>
		);
	}
}

var app = document.getElementById('app');
ReactDOM.render(<Layout />,app);