var LIKES = (function () {

	// Private functions
	
	// constructor
	var likes = {};

// LOAD //
	likes.loadLikes = function (likes) {
		
		LIKES = likes;

		for(var i=0;i<likes.length;i++){

			
			var like = likes[i],
				imgHTML = "<img src='" +like.pic_small +"'/>",
				nameHTML = "<p>" + like.name + "</p>",
				typeHTML = "<p>" + like.type + "</p>",
				fanHTML = "<p>" + like.fan_count + " likes</p>";

			//console.log(like);

			var likeHTML = "<div class='fb-likes'>" + imgHTML + nameHTML + typeHTML + fanHTML + "</div>"; 


			$("#fb-like-container").append(likeHTML);

		}
		
	};

	return likes;
}());