var LIKES = (function () {

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
	function isSameCategory(like, cat) 
	{
		for(var i=0;i<cat.length;i++)
		{
			if (like.type.toLowerCase() === cat[i].toLowerCase())
				return true;
		}
		return false;
	}
	
	// constructor
	var likes = {};

	// Public property
	likes.travel = [];
	likes.arts	= [];
	likes.style	= [];
	likes.food	= [];
	likes.music	= [];
	likes.film	= [];

// LOAD //
	likes.loadLikes = function (likes) {
		
		LIKES = likes;
		likes.travel = [];
		likes.arts	= [];
		likes.style	= [];
		likes.food	= [];
		likes.music	= [];
		likes.film	= [];

		// TOTAL //
		likes.getTotal = function () {
			var tot = LIKES.travel.length
					+ LIKES.arts.length
					+ LIKES.style.length
					+ LIKES.food.length
					+ LIKES.music.length
					+ LIKES.film.length
					+ CHECKINS.travel.length
					+ CHECKINS.arts.length
					+ CHECKINS.style.length
					+ CHECKINS.food.length
					+ CHECKINS.music.length
					+ CHECKINS.film.length
					;
			return tot;
		};

		// JSON //
		likes.getJsonData = function () {
			var jsonObj = []; //declare object

				jsonObj.push({category: "travel", total: LIKES.travel.length + CHECKINS.travel.length});
				jsonObj.push({category: "arts", total: LIKES.arts.length + CHECKINS.arts.length});
				jsonObj.push({category: "style", total: LIKES.style.length + CHECKINS.style.length});
				jsonObj.push({category: "food", total: LIKES.food.length + CHECKINS.food.length});
				jsonObj.push({category: "music", total: LIKES.music.length + CHECKINS.music.length});
				jsonObj.push({category: "film", total: LIKES.film.length + CHECKINS.film.length});

			return jsonObj;
		}

		// TEMPLATES //
		function getCategoryTemplate(title, likes)
		{
			var context = {title: title, likes: likes}
			//var html    = TEMPLATES.like_cat_template(context);

			return html;
		}

		likes.renderLikes = function()
		{
			//$("#category-list").html("Total Likes: "+LIKES.getTotal());
			$("#travel-num").html(getCategoryTemplate("Travel", LIKES.travel));
			$("#arts-num").html(getCategoryTemplate("Arts", LIKES.arts));
			$("#style-num").html(getCategoryTemplate("Style", LIKES.style));
			$("#food-num").html(getCategoryTemplate("Food", LIKES.food));
			$("#music-num").html(getCategoryTemplate("Music", LIKES.music));
			$("#film-num").html(getCategoryTemplate("Film", LIKES.film));

			$("#travel-score-val").html(LIKES.travel.length + CHECKINS.travel.length);
			$("#arts-score-val").html(LIKES.arts.length + CHECKINS.arts.length);
			$("#style-score-val").html(LIKES.style.length + CHECKINS.style.length);
			$("#food-score-val").html(LIKES.food.length + CHECKINS.food.length);
			$("#music-score-val").html(LIKES.music.length + CHECKINS.music.length);
			$("#film-score-val").html(LIKES.film.length + CHECKINS.film.length);

			console.log('Likes Done...testing Checkins value before render visual');
			console.log(CHECKINS.travel);
			console.log(CHECKINS.arts);
			console.log(CHECKINS.style);
			console.log(CHECKINS.food);
			console.log(CHECKINS.music);
			console.log(CHECKINS.film);

			//TastePrint.visualizeWithRalf(LIKES.getJsonData(), "likes-visualization-ralf");
			//TastePrint.visualizeWithD3(LIKES.getJsonData(), "likes-visualization-d3");
			console.log('Render Done');
		}

		for(var i=0;i<likes.length;i++){
			var like = likes[i];

			if (isSameCategory(like, travelCats))
				LIKES.travel.push(like);
			if (isSameCategory(like, artsCats))
				LIKES.arts.push(like);
			if (isSameCategory(like, styleCats))
				LIKES.style.push(like);
			if (isSameCategory(like, foodCats))
				LIKES.food.push(like);
			if (isSameCategory(like, musicCats))
				LIKES.music.push(like);
			if (isSameCategory(like, filmCats))
				LIKES.film.push(like);
		}
		//likes.renderLikes();	
		
	};

	return likes;
}());