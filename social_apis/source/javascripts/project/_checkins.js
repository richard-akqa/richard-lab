var CHECKINS = (function () {

	var travelCats = ["airport",
					"attractions/things to do", 
					"hotel",
					"landmark",
					"outdoor gear/sporting goods",
					"real estate",
					"tours/sightseeing",
					"travel/leisure",
					"bags/luggage"];
	
	var artsCats = ["arts/entertainment/nightlife",
					"book store",
					"book",
					"club",
					"event planning/event services",
					"library",
					"museum/art gallery",
					"amateur sports team",
					"professional sports team"];

	var styleCats = ["automotive",
					"cars",
					"home improvement",
					"shopping/retail",
					"spas/beauty/personal care",
					"health/beauty",
					"retail and consumer merchandise"];

	var foodCats = ["food/beverages",
					"bar",
					"food/grocery",
					"restaurant/cafe"];

	var musicCats = ["musician/band",
					"concert venue",
					"album",
					"song",
					"studio",
					"concert tour",
					"concert venue",
					"movie theater",
					"music award",
					"music video",
					"radio station",
					"record label",
					"music chart"];

	var filmCats = ["movie theater",
					"movie",
					"tv/movie award"];


	// Private functions
	function isSameCategory(checkin, cat) 
	{
		for(var i=0;i<cat.length;i++)
		{
			if (checkin.type.toLowerCase() === cat[i].toLowerCase())
				return true;
		}
		return false;
	}
	
	// constructor
	var checkins = {};

	// Public property
	checkins.travel = [];
	checkins.arts	= [];
	checkins.style	= [];
	checkins.food	= [];
	checkins.music	= [];
	checkins.film	= [];

// LOAD //
	checkins.loadCheckins = function (checkins) {
		
		CHECKINS = checkins;
		checkins.travel = [];
		checkins.arts	= [];
		checkins.style	= [];
		checkins.food	= [];
		checkins.music	= [];
		checkins.film	= [];

		// TOTAL //
		/*checkins.getTotal = function () {
			var checkinsTot = CHECKINS.travel.length
					+ CHECKINS.arts.length
					+ CHECKINS.style.length
					+ CHECKINS.food.length
					+ CHECKINS.music.length
					+ CHECKINS.film.length
					;
			return checkinsTot;
		};

		// JSON //
		checkins.getJsonData = function () {
			var jsonObj = []; //declare object

				jsonObj.push({category: "travel", total: CHECKINS.travel.length});
				jsonObj.push({category: "arts", total: CHECKINS.arts.length});
				jsonObj.push({category: "style", total: CHECKINS.style.length});
				jsonObj.push({category: "food", total: CHECKINS.food.length});
				jsonObj.push({category: "music", total: CHECKINS.music.length});
				jsonObj.push({category: "film", total: CHECKINS.film.length});

			return jsonObj;
		}*/

		// TEMPLATES //
		function getCategoryTemplate(title, checkins)
		{
			var context = {title: title, checkins: checkins}
			//var html    = TEMPLATES.checkins_cat_template(context);
			return html;
		}

		checkins.renderCheckins = function()
		{
			//$("#category-list").html("Total Likes: "+CHECKINS.getTotal());
			/*$("#checkin-travel-num").html(getCategoryTemplate("Travel", CHECKINS.travel));
			$("#checkin-arts-num").html(getCategoryTemplate("Arts", CHECKINS.arts));
			$("#checkin-style-num").html(getCategoryTemplate("Style", CHECKINS.style));
			$("#checkin-food-num").html(getCategoryTemplate("Food", CHECKINS.food));
			$("#checkin-music-num").html(getCategoryTemplate("Music", CHECKINS.music));
			$("#checkin-film-num").html(getCategoryTemplate("Film", CHECKINS.film));*/
			console.log('Checkins Done');
			//TastePrint.visualizeWithRalf(CHECKINS.getJsonData(), "checkins-visualization-d3");
			//TastePrint.visualizeWithD3(CHECKINS.getJsonData(), "checkins-visualization-ralf");
		}

		for(var i=0;i<checkins.length;i++){
			var checkin = checkins[i];

			CHECKINS.push(checkin);

			/*if (isSameCategory(checkin, travelCats))
				CHECKINS.travel.push(checkin);
			if (isSameCategory(checkin, artsCats))
				CHECKINS.arts.push(checkin);
			if (isSameCategory(checkin, styleCats))
				CHECKINS.style.push(checkin);
			if (isSameCategory(checkin, foodCats))
				CHECKINS.food.push(checkin);
			if (isSameCategory(checkin, musicCats))
				CHECKINS.music.push(checkin);
			if (isSameCategory(checkin, filmCats))
				CHECKINS.film.push(checkin);*/
		}

		$("#checkin-arts-num").html
		//checkins.renderCheckins();	
	};

	return checkins;
}());