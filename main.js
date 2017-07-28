var React = require('react');
var ReactDOM = require('react-dom');
var mapStorage = require('./storage/mapStorage')

// our google map api key :AIzaSyBhLGO469q-32KaFQ-AisNCs4EYgIx6ldU

class Layout extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className="myapp">
				<NavigationBar />
				<Map />
			</div>
		);
	}
}

class Map extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div id="map" ></div>
		);
	}
}

class NavigationBar extends React.Component{
	render(){
		return(
			<nav>
				Hello
			</nav>
		);
	}
}

var app = document.getElementById('app');
ReactDOM.render(<Layout />,app);
