// $( document ).ready(function() {
//     if(chrome.storage.get({'state': 'map'}, function() {
//           // Notify that we saved.
//           message('Go to map');
// 	})

// });




document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('auth');
    // onClick's logic below:
    link.addEventListener('click', function() {
          console.log("heeeere");
          var xhr = new XMLHttpRequest();
			xhr.open('GET', 'https://api.uber.com/v1/me');
			xhr.setRequestHeader("Authorization", "Bearer MY_BEARER_TOKEN");
			xhr.send();

    });
});