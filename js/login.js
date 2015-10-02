


	document.addEventListener('DOMContentLoaded', function () {
    	document.getElementById('signup').addEventListener('click', clickHandler);
	})

	function clickHandler(e) {
	    chrome.runtime.sendMessage({directive: "popup-click"}, function(response) {
	    	console.log("clicked");
			
			$( document ).ready(function() {
				
				console.log('ready');
				$('#signup').click(function () {
				  $.get('https://login.uber.com/oauth/v2/authorize', {client_id: 'boiai-4FnFBhlDZn_wS7pQgv3qC1aJW4', response_type: 'code', scope: 'history'}, function (r,s,req) {
				    	console.log(req.src);
				    	//console.log(req.getAllResponseHeaders());
				    	//console.log(r.getAllResponseHeaders());

				   });
					// var request = new XMLHttpRequest();
					// request.open('HEAD', 'https://login.uber.com/oauth/v2/authorize?client_id=boiai-4FnFBhlDZn_wS7pQgv3qC1aJW4&response_type=code&scope=history',false);
					// request.send(null);
					// var headers = request.getAllResponseHeaders();
					// console.log(headers);
				

				});

			});
	    	
	    });
	}





			// <input type = "hidden" value="code" name="response_type">
			// 	<input type = "hidden" value="OawcXJ9-fI4AsAUlbgZXFwp_sYVNiOAT" name="client_id">
			// 	<input type = "hidden" value="profile" name="scope">
			// 	<input type = "hidden" value="http://localhost:3000/uber" name="redirect_uri">
			// 	<input type = "text" class = "form-control" placeholder = "phone #" name="phoneNum">