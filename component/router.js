var React = require('react');
var Switch = require('react-router-dom').Switch
var Route = require('react-router-dom').Route;
var MyMap = require('./map.js');
var Home = require('./home.js');
var Contract = require('./contract.js');
var Menu = require('./menu.js')


const home = () => (<Home />);
const mymenu = () => (<Menu />);
const contract = () => (<Contract />);
const map = () => (<MyMap containerElement={<div style={{ height: `100%` }} />} mapElement={<div style={{ height: `100%` }} />} onMapLoad={() => {}} onMapClick={() => {}} onMarkerRightClick={() => {}}/>)


module.exports = class Router extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="switch">
				<Switch>
					<Route exact path={"/"} component={home} />
					<Route path={"/map"} component={map} />
					<Route path={"/menu"} component={mymenu} />
				</Switch>
			</div>
		);
	}
}