var React = require('react');
var NavMenu = require('./navmenu.js')
var Link = require('react-router-dom').Link;

module.exports = class NavigationBar extends React.Component{
	constructor(props) {
		super(props);
		this.menu = this.props.menu;
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
			return(<NavMenu a={item.ref} name={item.name} active={item.active} key={index} onSelect={this.onSelect.bind(this)}/>);
		}.bind(this));
		return(
			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<Link className="navbar-brand" to="/">Food truck</Link>
					</div>
					<div className="collapse navbar-collapse" id="myNavbar">
						<ul className="nav navbar-nav navbar-right">
							{this.navmenu}
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}