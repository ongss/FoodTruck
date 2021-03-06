var React = require('react');
var ReactDOM = require('react-dom');
var BrowserRouter = require('react-router-dom').BrowserRouter
var NavigationBar = require('./navbar.js');
var MyRouter = require('./router.js');


var menu = [{name:"Home",ref:"",active:""},{name:"Map",ref:"map",active:""},{name:"Menu",ref:"menu",active:""},{name:"Contract",ref:"contract",active:""}];
// our google map api key :AIzaSyBhLGO469q-32KaFQ-AisNCs4EYgIx6ldU

class Layout extends React.Component{
	constructor(props) {
		super(props);
		this.setActive();
	}
	setActive(){
		var mypath = window.location.href.split('/')[3];
		menu.forEach(function(obj){
			if(obj.ref === mypath){
				obj.active = "active";
			}
		}); 
	}
	render(){
		return(
			<BrowserRouter>
				<div className="myapp">
					<NavigationBar menu={menu} />
					<MyRouter />
				</div>
			</BrowserRouter>
		);
	}
}


var app = document.getElementById('app');
ReactDOM.render(<Layout />,app);
