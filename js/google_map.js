window.google = window.google || {};
google.maps = google.maps || {};
(function() {
  
  function getScript(src) {
    var s = document.createElement('script');
    
    s.src = src;
    document.body.appendChild(s);
  }
  
  var modules = google.maps.modules = {};
  google.maps.__gjsload__ = function(name, text) {
    modules[name] = text;
  };
  
  google.maps.Load = function(apiLoad) {
    delete google.maps.Load;
    apiLoad([0.009999999776482582,[[["https://mts0.googleapis.com/vt?lyrs=m@323000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.googleapis.com/vt?lyrs=m@323000000\u0026src=api\u0026hl=en-US\u0026"],null,null,null,null,"m@323000000",["https://mts0.google.com/vt?lyrs=m@323000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.google.com/vt?lyrs=m@323000000\u0026src=api\u0026hl=en-US\u0026"]],[["https://khms0.googleapis.com/kh?v=185\u0026hl=en-US\u0026","https://khms1.googleapis.com/kh?v=185\u0026hl=en-US\u0026"],null,null,null,1,"185",["https://khms0.google.com/kh?v=185\u0026hl=en-US\u0026","https://khms1.google.com/kh?v=185\u0026hl=en-US\u0026"]],null,[["https://mts0.googleapis.com/vt?lyrs=t@132,r@323000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.googleapis.com/vt?lyrs=t@132,r@323000000\u0026src=api\u0026hl=en-US\u0026"],null,null,null,null,"t@132,r@323000000",["https://mts0.google.com/vt?lyrs=t@132,r@323000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.google.com/vt?lyrs=t@132,r@323000000\u0026src=api\u0026hl=en-US\u0026"]],null,null,[["https://cbks0.googleapis.com/cbk?","https://cbks1.googleapis.com/cbk?"]],[["https://khms0.googleapis.com/kh?v=88\u0026hl=en-US\u0026","https://khms1.googleapis.com/kh?v=88\u0026hl=en-US\u0026"],null,null,null,null,"88",["https://khms0.google.com/kh?v=88\u0026hl=en-US\u0026","https://khms1.google.com/kh?v=88\u0026hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt?hl=en-US\u0026","https://mts1.googleapis.com/mapslt?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/ft?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/ft?hl=en-US\u0026"]],[["https://mts0.googleapis.com/vt?hl=en-US\u0026","https://mts1.googleapis.com/vt?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/loom?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/loom?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt?hl=en-US\u0026","https://mts1.googleapis.com/mapslt?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/ft?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/ft?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/loom?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/loom?hl=en-US\u0026"]]],["en-US","US",null,0,null,null,"https://maps.gstatic.com/mapfiles/","https://csi.gstatic.com","https://maps.googleapis.com","https://maps.googleapis.com",null,"https://maps.google.com","https://gg.google.com","https://maps.gstatic.com/maps-api-v3/api/images/","https://www.google.com/maps",0,"https://www.google.com"],["https://maps.googleapis.com/maps-api-v3/api/js/22/7","3.22.7"],[2131638053],1,null,null,null,null,null,"initMap",null,null,1,"https://khms.googleapis.com/mz?v=185\u0026","AIzaSyALjs1slCfon9OYicPLo7egx7jY2Ol-R5c","https://earthbuilder.googleapis.com","https://earthbuilder.googleapis.com",null,"https://mts.googleapis.com/vt/icon",[["https://mts0.googleapis.com/vt","https://mts1.googleapis.com/vt"],["https://mts0.googleapis.com/vt","https://mts1.googleapis.com/vt"],null,null,null,null,null,null,null,null,null,null,["https://mts0.google.com/vt","https://mts1.google.com/vt"],"/maps/vt",323000000,132],2,500,[null,"https://g0.gstatic.com/landmark/tour","https://g0.gstatic.com/landmark/config",null,"https://www.google.com/maps/preview/log204","","https://static.panoramio.com.storage.googleapis.com/photos/",["https://geo0.ggpht.com/cbk","https://geo1.ggpht.com/cbk","https://geo2.ggpht.com/cbk","https://geo3.ggpht.com/cbk"],"https://maps.googleapis.com/maps/api/js/GeoPhotoService.GetMetadata","https://maps.googleapis.com/maps/api/js/GeoPhotoService.SingleImageSearch",["https://lh3.ggpht.com","https://lh4.ggpht.com","https://lh5.ggpht.com","https://lh6.ggpht.com"]],["https://www.google.com/maps/api/js/master?pb=!1m2!1u22!2s7!2sen-US!3sUS!4s22/7","https://www.google.com/maps/api/js/widget?pb=!1m2!1u22!2s7!2sen-US"],null,0,null,"/maps/api/js/ApplicationService.GetEntityDetails",0,null,null,[null,null,null,null,null,null,null,null,null,[0,0],[0,null,1,0,0,"U",0,0,0,0,0,0,0]]], loadScriptTime);
    apiLoad([0.009999999776482582,[[["https://mts0.googleapis.com/vt?lyrs=m@323000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.googleapis.com/vt?lyrs=m@323000000\u0026src=api\u0026hl=en-US\u0026"],null,null,null,null,"m@323000000",["https://mts0.google.com/vt?lyrs=m@323000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.google.com/vt?lyrs=m@323000000\u0026src=api\u0026hl=en-US\u0026"]],[["https://khms0.googleapis.com/kh?v=185\u0026hl=en-US\u0026","https://khms1.googleapis.com/kh?v=185\u0026hl=en-US\u0026"],null,null,null,1,"185",["https://khms0.google.com/kh?v=185\u0026hl=en-US\u0026","https://khms1.google.com/kh?v=185\u0026hl=en-US\u0026"]],null,[["https://mts0.googleapis.com/vt?lyrs=t@132,r@323000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.googleapis.com/vt?lyrs=t@132,r@323000000\u0026src=api\u0026hl=en-US\u0026"],null,null,null,null,"t@132,r@323000000",["https://mts0.google.com/vt?lyrs=t@132,r@323000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.google.com/vt?lyrs=t@132,r@323000000\u0026src=api\u0026hl=en-US\u0026"]],null,null,[["https://cbks0.googleapis.com/cbk?","https://cbks1.googleapis.com/cbk?"]],[["https://khms0.googleapis.com/kh?v=88\u0026hl=en-US\u0026","https://khms1.googleapis.com/kh?v=88\u0026hl=en-US\u0026"],null,null,null,null,"88",["https://khms0.google.com/kh?v=88\u0026hl=en-US\u0026","https://khms1.google.com/kh?v=88\u0026hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt?hl=en-US\u0026","https://mts1.googleapis.com/mapslt?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/ft?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/ft?hl=en-US\u0026"]],[["https://mts0.googleapis.com/vt?hl=en-US\u0026","https://mts1.googleapis.com/vt?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/loom?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/loom?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt?hl=en-US\u0026","https://mts1.googleapis.com/mapslt?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/ft?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/ft?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/loom?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/loom?hl=en-US\u0026"]]],["en-US","US",null,0,null,null,"https://maps.gstatic.com/mapfiles/","https://csi.gstatic.com","https://maps.googleapis.com","https://maps.googleapis.com",null,"https://maps.google.com","https://gg.google.com","https://maps.gstatic.com/maps-api-v3/api/images/","https://www.google.com/maps",0,"https://www.google.com"],["https://maps.googleapis.com/maps-api-v3/api/js/22/7","3.22.7"],[2131638053],1,null,null,null,null,null,"initAutocomplete",["places"],null,1,"https://khms.googleapis.com/mz?v=185\u0026","AIzaSyALjs1slCfon9OYicPLo7egx7jY2Ol-R5c","https://earthbuilder.googleapis.com","https://earthbuilder.googleapis.com",null,"https://mts.googleapis.com/vt/icon",[["https://mts0.googleapis.com/vt","https://mts1.googleapis.com/vt"],["https://mts0.googleapis.com/vt","https://mts1.googleapis.com/vt"],null,null,null,null,null,null,null,null,null,null,["https://mts0.google.com/vt","https://mts1.google.com/vt"],"/maps/vt",323000000,132],2,500,[null,"https://g0.gstatic.com/landmark/tour","https://g0.gstatic.com/landmark/config",null,"https://www.google.com/maps/preview/log204","","https://static.panoramio.com.storage.googleapis.com/photos/",["https://geo0.ggpht.com/cbk","https://geo1.ggpht.com/cbk","https://geo2.ggpht.com/cbk","https://geo3.ggpht.com/cbk"],"https://maps.googleapis.com/maps/api/js/GeoPhotoService.GetMetadata","https://maps.googleapis.com/maps/api/js/GeoPhotoService.SingleImageSearch",["https://lh3.ggpht.com","https://lh4.ggpht.com","https://lh5.ggpht.com","https://lh6.ggpht.com"]],["https://www.google.com/maps/api/js/master?pb=!1m2!1u22!2s7!2sen-US!3sUS!4s22/7","https://www.google.com/maps/api/js/widget?pb=!1m2!1u22!2s7!2sen-US"],null,1,null,"/maps/api/js/ApplicationService.GetEntityDetails",0,null,null,[null,null,null,null,null,null,null,null,null,[0,0],[0,null,1,0,0,"C",0,0,0,0,0,0,0]]], loadScriptTime);
  };
  var loadScriptTime = (new Date).getTime();
  getScript("https://maps.googleapis.com/maps-api-v3/api/js/22/7/main.js");
  getScript("https://maps.googleapis.com/maps-api-v3/api/js/22/7/places.js");

})();








var map;
var markers = [];
var polylineCoordinates = [];
var lines = [];
// Uber API Constants
var uberClientId = "boiai-4FnFBhlDZn_wS7pQgv3qC1aJW4"
  , uberServerToken = "gNrOjdO50kRSYu7ROOYv6Y8UBQjMz6L2R2nw2Zoh";

// Create variable to store timer
var timer;


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 18
  });


  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      userLatitude = position.coords.latitude;
      userLongitude = position.coords.longitude;
      map.setCenter(pos);
        var image = 'img/blue_dot.png';
        var marker = new google.maps.Marker({
          position: pos,
          map: map,
          title: 'Current Location',
          icon: image

        });

        polylineCoordinates.push(pos);


        var dest_pin = new google.maps.Marker({
          position: pos,
          map: map,
          title: 'Destination',
          draggable:true
        });
        markers.push(dest_pin);




    google.maps.event.addListener(dest_pin,'dragend',function(event) {
        console.log("THERE")
        for (i=0; i<lines.length; i++) 
        {                           
          lines[i].setMap(null); //or line[i].setVisible(false);
        }
        polylineCoordinates.splice(1,1);

        destination_lat = event.latLng.lat();
        destination_long = event.latLng.lng();

        markers.push(dest_pin);
        polylineCoordinates.push(event.latLng);
        addPolyline();
        getEstimatesForUserLocation(userLatitude, userLongitude, destination_lat, destination_long);
    });

    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

   
}



function addMarker(pos,title,map) {
 
}




function getEstimatesForUserLocation(latitude,longitude, destination_lat, destination_long) {
  $.ajax({
    url: "https://api.uber.com/v1/estimates/price",
    headers: {
      Authorization: "Token " + uberServerToken
    },
    data: { 
      start_latitude: latitude,
      start_longitude: longitude,
      end_latitude: destination_lat,
      end_longitude: destination_long
    },
    success: function(result) {
      console.log(JSON.stringify(result));

      // 'results' is an object with a key containing an Array
      var data = result["prices"]; 
      if (typeof data != typeof undefined) {
        // Sort Uber products by time to the user's location 
        data.sort(function(t0, t1) {
          return t0.duration - t1.duration;
        });

        // Update the Uber button with the shortest time
        var shortest = data[0];
        if (typeof shortest != typeof undefined) {
          console.log("Updating time estimate...");
          $("#time").html("Estimated Time: " + Math.ceil(shortest.duration / 60.0) + " MIN");
          $("#price").html("Estimated Price: " + shortest.estimate);

        }
      }

    }
  });

 $("a").click(function(tab){
    if (destination_lat && destination_long) {
            // Redirect to Uber API via deep-linking to the mobile web-app
            var uberURL = "https://m.uber.com/sign-up?";

            // Add parameters
            uberURL += "client_id=" + uberClientId;
            if (typeof userLatitude != typeof undefined) uberURL += "&" + "pickup_latitude=" + userLatitude;
            if (typeof userLongitude != typeof undefined) uberURL += "&" + "pickup_longitude=" + userLongitude;
            uberURL += "&" + "dropoff_latitude=" + destination_lat;
            uberURL += "&" + "dropoff_longitude=" + destination_long;

            // Redirect to Uber
            //window.location.href = uberURL;
            console.log(uberURL);
    };

 });
}


function clickHandler(e) {
    chrome.runtime.sendMessage({directive: "popup-click"}, function(response) {
    
        if (destination_lat && destination_long) {
            // Redirect to Uber API via deep-linking to the mobile web-app
            var uberURL = "https://m.uber.com/sign-up?";

            // Add parameters
            uberURL += "client_id=" + uberClientId;
            if (typeof userLatitude != typeof undefined) uberURL += "&" + "pickup_latitude=" + userLatitude;
            if (typeof userLongitude != typeof undefined) uberURL += "&" + "pickup_longitude=" + userLongitude;
            uberURL += "&" + "dropoff_latitude=" + destination_lat;
            uberURL += "&" + "dropoff_longitude=" + destination_long;

            // Redirect to Uber
            //window.location.href = uberURL;
            console.log(uberURL);
        };

        // var tabId;
        // chrome.tabs.getSelected(null, function(tab){
        //     console.log(tab);
        //     tabId = tab;

        // });
        // chrome.tabs.update(tabId, {
        //     url: uberURL
        // });

      

      //   HttpClient client = new HttpClient();
      // PostMethod post = new PostMethod("https://login.uber.com/oauth/token");
      // post.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      // post.setRequestHeader("Accept", "application/json");
      // post.setParameter("client_secret",jmh4AQxxPxdVv5ouzJ2XXuWQ-naA51tx73Moc2b9);
      // post.setParameter("client_id",boiai-4FnFBhlDZn_wS7pQgv3qC1aJW4);
      // post.setParameter("grant_type", "authorization_code");
      // post.setParameter("redirect_uri", "http://localhost:8888/UberExtension/popup.html");
      // post.setParameter("code", code);
        
        //this.close(); // close the popup when the background finishes processing request
    });
}


// var activeTab;
// chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {

//      // since only one tab should be active and in the current window at once
//      // the return variable should only have one entry
//      var activeTab = arrayOfTabs[0];
//      var activeTabId = arrayOfTabs[0].id; // or do whatever you need

// });


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('order').addEventListener('click', clickHandler);
})


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}


var placeSearch, autocomplete;

function initAutocomplete() {
  // Create the autocomplete object, restricting the search to geographical
  // location types.
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
      {types: ['geocode']});

  // When the user selects an address from the dropdown, populate the address
  // fields in the form.
  autocomplete.addListener('place_changed', fillInAddress);
}

// [START region_fillform]
function fillInAddress() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();
}



var polyline;
var destination_lat;
var destination_long;

var userLatitude
  , userLongitude

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('button_google');
    // onClick's logic below:
      link.addEventListener('click', function() {
      deleteMarkers();
      for (i=0; i<lines.length; i++) 
      {                           
        lines[i].setMap(null); //or line[i].setVisible(false);
      }
      polylineCoordinates.splice(1,1);
      var place = autocomplete.getPlace();
      var image = 'img/blue_dot.png';
      var dest_pin = new google.maps.Marker({
          position: place.geometry.location,
          map: map,
          title: 'Destination',
          draggable:true,
        });

        destination_lat = place.geometry.location['H'];
        destination_long = place.geometry.location['L'];

        markers.push(dest_pin);
        polylineCoordinates.push(place.geometry.location);
        addPolyline();
        getEstimatesForUserLocation(userLatitude, userLongitude, destination_lat, destination_long);

    google.maps.event.addListener(dest_pin,'dragend',function(event) {
        console.log("THERE")
        for (i=0; i<lines.length; i++) 
        {                           
          lines[i].setMap(null); //or line[i].setVisible(false);
        }
        polylineCoordinates.splice(1,1);

        destination_lat = event.latLng.lat();
        destination_long = event.latLng.lng();

        markers.push(dest_pin);
        polylineCoordinates.push(event.latLng);
        addPolyline();
        getEstimatesForUserLocation(userLatitude, userLongitude, destination_lat, destination_long);
    });




      // addMarker(place.geometry.location);
      // destination_lat = place.geometry.location['H'];
      // destination_long = place.geometry.location['L'];
      // addPolyline();

    
      //getEstimatesForUserLocation(userLatitude, userLongitude, destination_lat, destination_long);
      



    });
});

function addPolyline(){
      var polyline = new google.maps.Polyline({
        map: map,
        path: polylineCoordinates,
        strokeColor: '#0000FF',
        strokeOpacity: 0.7,
        strokeWeight: 5
      });
      lines.push(polyline);
};

// Adds a marker to the map and push to the array.
function addMarker(location) {
  var dest_pin = new google.maps.Marker({
    position: location,
    map: map,
    draggable: true
  });
  markers.push(marker);
  polylineCoordinates.push( location );
}






// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}

function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}
