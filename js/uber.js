// // Uber API Constants
// var uberClientId = "boiai-4FnFBhlDZn_wS7pQgv3qC1aJW4"
//   , uberServerToken = "gNrOjdO50kRSYu7ROOYv6Y8UBQjMz6L2R2nw2Zoh";

// // Create variables to store latitude and longitude
// var userLatitude
//   , userLongitude
//   , partyLatitude = 42.266055
//   , partyLongitude = -83.748765;

// // Create variable to store timer
// var timer;

// navigator.geolocation.watchPosition(function(position) {
//   // Update latitude and longitude
//   userLatitude = position.coords.latitude;
//   userLongitude = position.coords.longitude;


//   // Create timer if needed
//   // Once initialized, it will fire every 60 seconds as recommended by the Uber API
//   // We only create the timer after we've gotten the user's location for the first time 
//   if (typeof timer === typeof undefined) {
//     timer = setInterval(function() {
//         getEstimatesForUserLocation(userLatitude, userLongitude);
//     }, 60000);

//     // Query Uber API if needed
//     getEstimatesForUserLocation(userLatitude, userLongitude);
//   }
// });

// function getEstimatesForUserLocation(latitude,longitude) {
//   $.ajax({
//     url: "https://api.uber.com/v1/estimates/price",
//     headers: {
//       Authorization: "Token " + uberServerToken
//     },
//     data: { 
//       start_latitude: latitude,
//       start_longitude: longitude,
//       end_latitude: partyLatitude,
//       end_longitude: partyLongitude
//     },
//     success: function(result) {
//       console.log(JSON.stringify(result));

//       // 'results' is an object with a key containing an Array
//       var data = result["prices"]; 
//       if (typeof data != typeof undefined) {
//         // Sort Uber products by time to the user's location 
//         data.sort(function(t0, t1) {
//           return t0.duration - t1.duration;
//         });

//         // Update the Uber button with the shortest time
//         var shortest = data[0];
//         if (typeof shortest != typeof undefined) {
//           console.log("Updating time estimate...");
//           $("#time").html("IN " + Math.ceil(shortest.duration / 60.0) + " MIN");
//           $("#price").html(shortest.estimate);

//         }
//       }

//     }
//   });

//  $("a").click(function(tab){
//     // Redirect to Uber API via deep-linking to the mobile web-app
//     var uberURL = "https://m.uber.com/sign-up?";

//     // Add parameters
//     uberURL += "client_id=" + uberClientId;
//     if (typeof userLatitude != typeof undefined) uberURL += "&" + "pickup_latitude=" + userLatitude;
//     if (typeof userLongitude != typeof undefined) uberURL += "&" + "pickup_longitude=" + userLongitude;
//     uberURL += "&" + "dropoff_latitude=" + partyLatitude;
//     uberURL += "&" + "dropoff_longitude=" + partyLongitude;

//     // Redirect to Uber
//     //window.location.href = uberURL;
//     console.log(uberURL);
//  });
// }