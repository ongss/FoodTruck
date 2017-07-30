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
		var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
        	//13.738143, 100.533617
          center: {lat: 13.738143, lng: 100.533617},
          zoom: 15
        });
      }
		return(
			<div id="map" ></div>
		);
	}
}

class NavigationBar extends React.Component{
	constructor(props) {
		super(props);
		this.manu = [{name:"Home",ref:"home",active:""},{name:"Map",ref:"map",active:"active"},{name:"Manu",ref:"manu",active:""}];
	}
	onSelect(item){
		for(var i=0;i<this.manu.length;i++){
			if(this.manu[i].name!==item){
				this.manu[i].active = "";
			}
			else{
				this.manu[i].active = "active";
			}
		}
		this.forceUpdate()
	}
	render(){
		this.navmanu = this.manu.map(function(item,index){
			return(<NavManu a={item.ref} name={item.name} active={item.active} key={index} onSelect={this.onSelect.bind(this)}/>);
		}.bind(this));
		return(
			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">Food truck</a>
					</div>
					<ul className="nav navbar-nav navbar-right">
						{this.navmanu}
					</ul>
				</div>
			</nav>
		);
	}
}

class NavManu extends React.Component{
	constructor(props) {
		super(props);
	}
	handleClick(){
		this.props.onSelect(this.props.name);
	}
	render(){
		return(
			<li className={this.props.active}><a onClick={this.handleClick.bind(this)} href={"#"+this.props.a}>{this.props.name}</a></li>
		);
	}
}

var app = document.getElementById('app');
ReactDOM.render(<Layout />,app);
