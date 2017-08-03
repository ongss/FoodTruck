var React = require('react');
var GoogleMap = require('react-google-maps').GoogleMap;
var Marker = require('react-google-maps').Marker;
var withGoogleMap = require('react-google-maps').withGoogleMap;

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={15}
    defaultCenter={{lat: 13.738143, lng: 100.533617}}
    onClick={props.onMapClick}>
    {props.markers.map(marker => ( <Marker {...marker}/>))}
  </GoogleMap>
));

module.exports = class MyMap extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
    		markers: [{
      			position: {lat: 13.738143, lng: 100.533617},
      			key: `Chula`,
      			icon: "./grace_2.png",
				title: 'This is a food truck!!!'
    		}],
    		infowindow:[{
    			content: "hello world",
    			marker: 0
    		}]
  		};
  		this.handleMapClick = this.handleMapClick.bind(this);
	}
	handleMapClick(){

	}
	render() {
    	return (
      		<div style={{height: `100%`}}>
        		<GettingStartedGoogleMap containerElement={
            		<div style={{ height: `100%` }} />
 				}
          		mapElement={
            		<div style={{ height: `100%` }} />
          		}
          		onMapLoad={this.handleMapLoad}
          		onMapClick={this.handleMapClick}
          		markers={this.state.markers}
          		onMarkerRightClick={this.handleMarkerRightClick}/>
      		</div>
    	);
    }
}