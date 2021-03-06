var map;
function initMap() {

	var markers = [];
	var mycontent = '<div class="infoWin">'+"Hello World!!"+"</div>";

    map = new google.maps.Map(document.getElementById('map'), 
  	//13.738143, 100.533617
    {
        center: {lat: 13.738143, lng: 100.533617},
        zoom: 15
    });
    var FoodTrucks = [
		{
			position: new google.maps.LatLng(13.736938,100.532452),
			type: 'Food truck'
		},
	];
	FoodTrucks.forEach(function(FoodTruck){
		var marker = new google.maps.Marker({
			position: FoodTruck.position,
			map: map,
			icon: "./grace_2.png",
			title: 'This is a food truck!!!'
		})
		markers.push(marker);
	});
	var infowindow = new google.maps.InfoWindow({
		content: mycontent,
		maxWidth: 250
	});
	markers[0].addListener('click',function(){
		infowindow.open(map,markers[0]);
	})
}



