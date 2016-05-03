var mainMap;



function initMap()
{
//Get a reference to the map container (div)
var mapContainer = document.querySelector("#map-container");

//set some map options 
var options = {
	center: {
		lat:-41.297248,
		lng:174.782564
	},
	zoom: 15
};

//create new google maps 

mainMap = new google.maps.Map(mapContainer,options);

//now we r ready to show the store market
placeStoreMarkets();
	
}
function placeStoreMarkets(){
//Connect to database and get the locations

var locations = [
{
	title:"Hataitai Shop",
	lat: -41.304750,
	lng: 174.793838
},

{
	title:"Petone Store",
	lat: -41.226789,
	lng:174.883632
},

{
	title:"Porirua Store",
	lat:-41.135465, 
	lng:174.840499
},
{
	title:"Johnseville Store",
	lat:-41.217353, 
	lng:174.822301
},
{
	title:"Northland Store",
	lat:-41.274407, 
	lng:174.757395
}

];

//loop over each location

for (var i = 0; i < locations.length ; i++) {

	// create a new marker

	var marker = new google.maps.Marker({
		position:{
			lat:locations[i].lat,
			lng:locations[i].lng
		},
			map:mainMap,
			title:locations[i].title
	});

}

}