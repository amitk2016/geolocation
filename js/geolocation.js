var mainMap;
var allMarkers =[];


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
			title:locations[i].title,
			icon:'img/pizzahutt.png',
			id:i
	});

	allMarkers.push(marker);
}

// SHow the content of the allmarkers array
	console.log(allMarkers);
 // polpulate the store picker
 populateStorepicker(locations);

}

	function populateStorepicker(locations){

		
		//find the store picker element 

	var storePickerElement = document.querySelector('#store-picker');

	//create a 'please select....' options 
	var optionElement = document.createElement('option');
	optionElement.innerHTML = "Please Select a Store...";
	storePickerElement.appendChild(optionElement);


	
	//creat all the location options 
	for (var i = 0; i < locations.length; i++) {
		
		// create a new option element
		var optionElement = document.createElement('option');

		//put the name of this store in the option element

		optionElement.innerHTML = locations[i].title;

		//put this new option element in the select 
		storePickerElement.appendChild(optionElement);

		}	

		//listen for changes in the select element 

		storePickerElement.onchange = showChosenLocation;

}

 		function showChosenLocation(){
 		
 		//get the element that triggered this function

 		var selectElement = this;

 		//get the index of the option that was chosen

 		var selectedOptionIndex = selectElement.selectedIndex;

 		// get the option that was selceted 
 		var optionElement = selectElement[selectedOptionIndex];

 		//get the text that is inside this option 

 		var optionText = optionElement.value;

 		//this[this.selectedIndex].value;
 
 		// find the marker that matches the chosen option 
 		var theChosenMarker;

 		for (var i = 0; i<allMarkers.length; i++) {
 			
 			// is this the marker?

 			if (optionText == allMarkers[i].title) {
 					//Found!

 				theChosenMarker = allMarkers[i];
 				//make sure the loop finishes 

 				i = allMarkers.length;

 			}

	}
	// only if we found a marker 
	if (theChosenMarker != undefined) {

		// make google maps focus on marker position 
		mainMap.panTo({
			lat:theChosenMarker.getPosition().lat(),
			lng:theChosenMarker.getPosition().lng()
		});
	}

 }