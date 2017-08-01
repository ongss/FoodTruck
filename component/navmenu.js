var React = require('react');
var Link = require('react-router-dom').Link;

module.exports = class NavMenu extends React.Component{
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