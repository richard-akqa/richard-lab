var APP = (function(){

	var app = {};

	app.onUserLogin = function (response){
		FB.api('/me', onUserLoad);
	}
	function onUserLoad(me){

		//load name & avatar
	}

	return app;
}());