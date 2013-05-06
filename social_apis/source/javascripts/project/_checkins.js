var CHECKINS = (function () {
	
	// constructor
	var checkins = {};

	// Public property

// LOAD //
	checkins.loadCheckins = function (checkins) {
		
		CHECKINS = checkins;


		for(var i=0;i<checkins.length;i++){
			var checkin = checkins[i],
				imgHTML = "<img src='" +checkin.pic_small +"'/>",
				nameHTML = "<p>" + checkin.name + "</p>",
				typeHTML = "<p>" + checkin.type + "</p>",
				fanHTML = "<p>" + checkin.fan_count + " likes</p>"
				checkinsHTML = "<p>" + checkin.checkins + " checkins</p>";
				wereHereHTML = "<p>" + checkin.were_here_count + " were here.</p>";

			console.log(checkins);

			var likeHTML = "<div class='fb-checkins'>" + imgHTML + nameHTML + typeHTML + fanHTML + checkinsHTML + wereHereHTML +"</div>"; 


			$("#fb-checkins-container").append(likeHTML);

		}
	};

	return checkins;
}());