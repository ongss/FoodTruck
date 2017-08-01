var React = require('react');
var GoogleMap = require('react-google-maps').GoogleMap;
var Marker = require('react-google-maps').Marker;

module.exports = class MyMap extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		const {onMapLoad, onMapClick} = this.props;
		return(
			<GoogleMap ref={onMapLoad} 
			defaultZoom={15} 
			defaultCenter={{lat: 13.738143, lng: 100.533617}} 
			onClick={onMapClick}>
    			{/*this.props.markers.map((marker, index) => (
      				<Marker {...marker} onRightClick={() => this.props.onMarkerRightClick(index)}/>
    			))*/}
  			</GoogleMap>
		);
	}
}