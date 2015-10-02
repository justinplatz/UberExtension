var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var requestdog = require('request');
var mongoose = require('mongoose');
var geocoder = require('geocoder');

// var uber = new Uber({
//   client_id: 'boiai-4FnFBhlDZn_wS7pQgv3qC1aJW4',
//   client_secret: 'jmh4AQxxPxdVv5ouzJ2XXuWQ-naA51tx73Moc2b9',
//   server_token: 'gNrOjdO50kRSYu7ROOYv6Y8UBQjMz6L2R2nw2Zoh',
//   redirect_uri: 'https://login.uber.com/oauth/authorize?response_type=code&client_id=boiai-4FnFBhlDZn_wS7pQgv3qC1aJW4&scope=request&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fuber',
//   name: 'ChromeExtension'
// });

var app = express();
var CLIENT_ID = 'boiai-4FnFBhlDZn_wS7pQgv3qC1aJW4';
var SERVER_TOKEN = '';
var CLIENT_SECRET = 'jmh4AQxxPxdVv5ouzJ2XXuWQ-naA51tx73Moc2b9';
app.use(bodyParser());
app.use(bodyParser.json());

app.get('/uber', function(req, res) {
	console.log(req.originalUrl);

	var auth_code = req.originalUrl.split('code=')[1];
	var phone = req.body.phoneNum;
	console.log(req.body);
	//console.log(auth_code);
	console.log("HERE DOG");
	if (auth_code) { 
		//STEP 3 RECIEVE ACCESS TOKEN 
		//console.log(redirectURL);	
		console.log(auth_code);
		var postRequestObject = {
			client_secret: CLIENT_SECRET,
			client_id: CLIENT_ID,
			grant_type: 'authorization_code',
			redirect_uri: 'http://localhost:3000/uber',
			code: auth_code
		}

		requestdog({
			url: "https://login.uber.com/oauth/token",
			method: "POST",
			form: postRequestObject
		}, function(error, response, body) {
			if (error) {
				console.log(error);
			} else {
				var uber_token = response.body.split('access_token')[1].substr(3,30);
				console.log(uber_token);
				var user = new User({
					phone: lastNum,
					token: uber_token
				});

				user.save(function(err) {
					if (err) {
						console.log(err);
					} else {
						res.send("SUCCESS");
					}
				});
			}
		});
	}

});

app.post('/form', function(req, res) {
	console.log("HERE AT FORM POST");
	console.log(req.body.phoneNum);
	lastNum = req.body.phoneNum;
	var redirectURL = 'https://login.uber.com/oauth/authorize?response_type=code&client_id='+ CLIENT_ID +'&scope=request&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fuber'
	console.log(redirectURL);
	res.redirect(redirectURL);
});	

app.get('/', function(req, res) {
	console.log('HERE');
});

app.listen(3000, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log('LISTENING ON PORT 3000');
	}
});






