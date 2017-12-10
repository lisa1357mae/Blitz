function initMap(){directionsDisplay=new google.maps.DirectionsRenderer,directionsService=new google.maps.DirectionsService;var e=new google.maps.Map(document.getElementById("map"),{center:{lat:40.7831,lng:-73.9712},zoom:11,styles:[{elementType:"geometry",stylers:[{color:"#ebe3cd"}]},{elementType:"labels.text.fill",stylers:[{color:"#523735"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#c9b2a6"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{color:"#dcd2be"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#ae9e90"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#a5b076"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#447530"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#fdfcf8"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#f8c967"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#e9bc62"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#e98d58"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.stroke",stylers:[{color:"#db8555"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#806b63"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"transit.line",elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"transit.line",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#b9d3c2"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#92998d"}]}]});directionsDisplay.setMap(e),directionsDisplay.setPanel(document.getElementById("right-panel"))}function calculateAndDisplayRoute(e,t){e.route({origin:{lat:origin_lat,lng:origin_lng},destination:{lat:dest_lat,lng:dest_lng},travelMode:"BICYCLING"},function(e,l){"OK"===l?t.setDirections(e):window.alert("Directions request failed due to "+l)})}setTimeout(initMap,10),setTimeout(function(){calculateAndDisplayRoute(directionsService,directionsDisplay)},30);