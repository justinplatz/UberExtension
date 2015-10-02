var oauth = ChromeExOAuth.initBackgroundPage({
  'request_url': 'https://api.uber.com/v1/',
  'authorize_url': 'https://login.uber.com/oauth/authorize',
  'access_url': 'https://login.uber.com/oauth/token',
  'consumer_key': 'boiai-4FnFBhlDZn_wS7pQgv3qC1aJW4',
  'consumer_secret': 'jmh4AQxxPxdVv5ouzJ2XXuWQ-naA51tx73Moc2b9',
  'app_name': 'UberExtension'
});

oauth.authorize(function() {
  // ... Ready to fetch private data ...
  
});







