var React = require('react');
var Switch = require('react-router-dom').Switch
var Route = require('react-router-dom').Route;
var withGoogleMap = require('react-google-maps').withGoogleMap;
var MyMap = require('./map.js');
var Home = require('./home.js');
var Contract = require('./contract.js');
var Menu = require('./menu.js')

MyMap = withGoogleMap(MyMap);

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
					<Route path={"/home"} component={home} />
					<Route exact path={"/"} component={map} />
					<Route path={"/menu"} component={mymenu} />
				</Switch>
			</div>
		);
	}
}