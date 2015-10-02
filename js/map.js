$( document ).ready(function() {
    console.log( "ready!" );
    chrome.storage.sync.set({'state': 'map'}, function(){
          // Notify that we saved.
          message('Settings saved');
	});
});