 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 // This is a protocol-relative URL as described here:
 //     http://paulirish.com/2010/the-protocol-relative-url/
 // If you're testing a local page accessed via a file:/// URL, please set tag.src to
 //     "https://www.youtube.com/iframe_api" instead.
 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 var player;
 function onYouTubeIframeAPIReady() {
	 player = new YT.Player('player', {
		 height: '390',
		 width: '640',
		 videoId: 'McIjQcx9Vxg',
		 events: {
	'onReady': onPlayerReady,
	'onStateChange': onPlayerStateChange
		 }
	 });
 }

 // 4. The API will call this function when the video player is ready.
 function onPlayerReady(event) {
	 event.target.playVideo();
 }

 // 5. The API calls this function when the player's state changes.
 //    The function indicates that when playing a video (state=1),
 //    the player should play for six seconds and then stop.
 var done = false;
 function onPlayerStateChange(event) {
	 if (event.data == YT.PlayerState.PLAYING && !done) {
		 //setTimeout(stopVideo, 6000);
		 done = true;
	 }
 }

 function playVideo(){
	 player.playVideo();
 }

 function pauseVideo(){
	 player.pauseVideo();
 }

 function stopVideo() {
	 player.stopVideo();
 }

 function muteVideo(){
	 player.mute();
 }

 function unmuteVideo(){
	 player.unMute();
 }

 function volume1(){
	 player.setVolume(30);
 }

 function volume2(){
	 player.setVolume(80);
 }

 function volume3(){
	 player.setVolume(100);
 }

 $("#videoPlay").click(function() {
	 playVideo();
 });

 $("#videoPause").click(function() {
	 pauseVideo();
 });

 $("#videoStop").click(function() {
	 stopVideo();
 });

 $("#videoMute").click(function() {
	 muteVideo();
 });

 $("#videoUnmute").click(function() {
	 unmuteVideo();
 });

 $("#videoVolume1").click(function() {
	 volume1();
 });

 $("#videoVolume2").click(function() {
	 volume2();
 });

 $("#videoVolume3").click(function() {
	 volume3();
 });

 $("#videoFullScreen").click(function() {
	 //playVideo();
 });

function backgroundScroll(){
	var scroll_pos = $(document).scrollTop();

	$('#background').css('top', function(){
			var top = ((scroll_pos + 50) * .05) * -1;
			console.log('hello');
			return top;
	});

	$('#background .cloud1').css('left', function(){
		var left = scroll_pos * .05;
		return left;
	});

	$('#background .cloud2').css('right', function(){
		var right = (scroll_pos * .05) * -1;
		return right;
	});
}

$(window).scroll(function(){
		backgroundScroll();
});
