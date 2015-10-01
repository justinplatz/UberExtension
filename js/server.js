var Uber = require('node-uber');
 
var uber = new Uber({
  client_id: 'boiai-4FnFBhlDZn_wS7pQgv3qC1aJW4',
  client_secret: 'jmh4AQxxPxdVv5ouzJ2XXuWQ-naA51tx73Moc2b9',
  server_token: 'gNrOjdO50kRSYu7ROOYv6Y8UBQjMz6L2R2nw2Zoh',
  redirect_uri: 'http://localhost:8888/UberExtension/popup.html',
  name: 'Uber Chrome'
});


uber.authorization({ refresh_token: 'REFRESH_TOKEN' }, 
  function (err, access_token, refresh_token) {
    if (err) console.error(err);
    else {
      console.log(access_token);
      console.log(refresh_token);
    }
 });

// uber.products.list({ latitude: 3.1357, longitude: 101.6880 }, function (err, res) {
//   if (err) console.error(err);
//   else console.log(res);
// });



// uber.estimates.price({ 
//   start_latitude: 3.1357, start_longitude: 101.6880, 
//   end_latitude: 3.0833, end_longitude: 101.6500 
// }, function (err, res) {
//   if (err) console.error(err);
//   else console.log(res);
// });



// uber.estimates.time({ 
//   start_latitude: 3.1357, start_longitude: 101.6880
// }, function (err, res) {
//   if (err) console.error(err);
//   else console.log(res);
// });


