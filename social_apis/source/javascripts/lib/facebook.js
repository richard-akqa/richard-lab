// Load the SDK Asynchronously
(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/all.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.fbAsyncInit = function() {
	FB.init({
		appId      : 360431780729831, // App ID
		channelUrl : '/channel.html', // Channel File
		status     : true, // check login status
		cookie     : true, // enable cookies to allow the server to access the session
		xfbml      : true // parse XFBML
	});

	FB.Canvas.setAutoGrow();

	FB.Event.subscribe('auth.statusChange', function(response) {
		if (response.authResponse) 
		{
			APP.onUserLogin(response);
		} 
		else 
		{
			APP.onUserLogout(response);
		}
	});

	document.getElementById('login-link').addEventListener('click', function(){

		 FB.login(function(response) {
			if (response.authResponse) {
				
				console.log('Welcome!  Fetching your information.... ');

				APP.onUserLogin(response);
				
				FB.api('/me', function(response) {
					console.log('Good to see you, ' + response.name + '.');
				});

			 } else {

				 console.log('User cancelled login or did not fully authorize.');
				 APP.onUserLogout(response);

			 }
		 }, 
		 {scope: 'publish_actions, user_status, user_likes, user_checkins'});

	});

	document.getElementById('logout-link').addEventListener('click', function(){
		FB.logout();
		APP.onUserLogout();
	}); 
};

