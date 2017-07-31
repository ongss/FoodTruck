var React = require('react');
var ReactDOM = require('react-dom');
var BrowserRouter = require('react-router-dom').BrowserRouter
var Switch = require('react-router-dom').Switch
var Route = require('react-router-dom').Route;
var Link = require('react-router-dom').Link;

var menu = [{name:"Home",ref:"home",active:""},{name:"Map",ref:"map",active:"active"},{name:"Menu",ref:"menu",active:""}];
// our google map api key :AIzaSyBhLGO469q-32KaFQ-AisNCs4EYgIx6ldU

class Layout extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<BrowserRouter>
				<div className="myapp">
					<NavigationBar />
					<Map />
				</div>
			</BrowserRouter>
		);
	}
}

class Main extends React.Component{
	constructor(props){
		super(props);
		this.menu = menu;
	}
	render(){
		this.menu = this.menu.map(function(item,index){
			return(
				<Route path={"/"+item.ref} component={item.a} key={index}/>
			);
		}.bind(this))
		return(
			<div>
				<Switch>
					{ this.menu }
				</Switch>
			</div>
		);
	}
}


const home = () => (<Home />);


class Map extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div id="map" className="map" ></div>
		);
	}
}

class Home extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div> THIS IS Home !!</div>
		);
	}
}

class Menu extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div> THIS IS MENU !!</div>
		);
	}
}



class NavigationBar extends React.Component{
	constructor(props) {
		super(props);
		this.menu = menu;
	}
	onSelect(item){
		for(var i=0;i<this.menu.length;i++){
			if(this.menu[i].name!==item){
				this.menu[i].active = "";
			}
			else{
				this.menu[i].active = "active";
			}
		}
		this.forceUpdate()
	}
	render(){
		this.navmenu = this.menu.map(function(item,index){
			return(<NavManu a={item.ref} name={item.name} active={item.active} key={index} onSelect={this.onSelect.bind(this)}/>);
		}.bind(this));
		return(
			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container-fluid">
					<div className="navbar-header">
						<Link className="navbar-brand" to="/">Food truck</Link>
					</div>
					<ul className="nav navbar-nav navbar-right">
						{this.navmenu}
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
			<li className={this.props.active}><Link onClick={this.handleClick.bind(this)} to={"/"+this.props.a}>{this.props.name}</Link></li>
		);
	}
}

var app = document.getElementById('app');
ReactDOM.render(<Layout />,app);
