/* JavaScript Document */

var FaiFlix = {

	titles: {
		"bunny": {
			videoUrl:'media/bunny.ogv', 
			posterUrl:'images/bunny-poster.png'
		},
		"sintel": {
			videoUrl:'media/sintel.ogv', 
			posterUrl:'images/sintel-poster.png'
		}
	},

	init: function() {
		FaiFlix.setButtons();
		FaiFlix.setPostersClick();
	},

	setButtons: function() {
		var video = document.getElementById('video'),
		    btnPlay = document.getElementById('btn-play'),
		    btnPause = document.getElementById('btn-pause'),
		    btnStop = document.getElementById('btn-stop');

		btnPlay.onclick = function() {
			video.play();
		};

		btnPause.onclick = function() {
			video.pause();
		};

		btnStop.onclick = function() {
			video.pause();
			video.currentTime = 0;
		}
	},

	setPostersClick: function() {
		var posterContainer = document.getElementById('posters'),
			posters = posterContainer.getElementsByTagName('img');

		for (var i = 0; i < posters.length; i++) {
			posters[i].onclick = function() {
				var poster = this, //this is the img element
				    titleId = poster.getAttribute('data-video');
				FaiFlix.switchTitle(titleId);
			};
		}

	},

	switchTitle: function(titleId) {
		var title = FaiFlix.titles[titleId],
		    video = document.getElementById('video');

		video.poster = title.posterUrl;
		video.src = title.videoUrl;
	}

};

//initialization
FaiFlix.init();