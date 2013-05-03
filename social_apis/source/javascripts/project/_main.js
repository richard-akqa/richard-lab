var APP = (function(){

	var app = {};

	app.onWindowInit = function(){
		$('#login-module').show();
		$('#logout-module').hide();
	}

	// LOGIN //
	app.onUserLogin = function (response){
		// user has auth'd your app and is logged into Facebook

		console.log("user has auth'd your app and is logged into Facebook");
		FB.api('/me', onUserLoad);

		function onUserLoad(me){

			console.log(me);
			$('#login-module').hide();
			$('#logout-module').show();
		}

		// load data
		APP.loadUser();
		APP.loadLikes();
		APP.loadCheckins();
	}

	app.onUserLogout = function (response){
		// user has not auth'd your app, or is not logged into Facebook

		console.log("user hasn't authorized your app, or is not logged");

		$('#login-module').show();
		$('#logout-module').hide();
	}

	app.me = []; 
	app.loadUser = function ()
	{
		FB.api('/me', onUserLoad);
	}
	function onUserLoad(me)
	{
		APP.me = me;
		if (me.name) {
			$('.fb-name').text(me.name);
			//$('#avatar').attr("src", "https://graph.facebook.com/"+me.id+"/picture?type=square");
		}
	}

	app.loadLikes = function ()
	{
		FB.api(
		{
			method: 'fql.query',
			query: 'SELECT page_id, name, type, pic_small, fan_count, were_here_count, checkins, talking_about_count FROM page WHERE page_id IN (SELECT page_id FROM page_fan WHERE uid=me())'
		}
		, onLikesLoad);

		function onLikesLoad(likes)
		{	
			//console.log(likes);

			LIKES.loadLikes(likes);

			//var context = {first_name: APP.me.first_name, rank: LIKES.getTotal()};
			//$("#user-info").html( TEMPLATES.user_info_template(context) );
		}
	}

	app.loadCheckins = function ()
	{
		FB.api(
		{
			method: 'fql.query',
			query: 'SELECT page_id, name, type, pic_small, fan_count, were_here_count, checkins, talking_about_count FROM page WHERE page_id IN (SELECT place_id FROM photo WHERE object_id IN (SELECT object_id FROM photo_tag WHERE subject=me()))OR page_id IN (SELECT target_id FROM checkin WHERE author_uid = me())'
		}
		, onCheckinsLoad);

		function onCheckinsLoad(checkins)
		{
			//console.log(checkins);
			//CHECKINS.loadCheckins(checkins);

			//LOAD LIKES & Render Visuals
			//APP.loadLikes();

		}
	}

	

	$(document).ready(function(){
		app.onWindowInit();
	});

	return app;
}());