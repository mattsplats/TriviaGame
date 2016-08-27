<<<<<<< HEAD
// Game object
let game = {
	// "Static" vars
	questionArr: [],

	// Game state vars
	wins: 0,
	losses: 0,
	unanswered: 0,

	// Sound effect settings
	currentSfx: false,
	sfxOn: true,
	
	// Methods
	initialize: function(data) {
		// Store sheets data in local array
		game.questionArr = data;
		game.loadingScreen("done");
		game.newGame(true);
	},

	loadingScreen: function(status) {
		if (typeof this.interval == "undefined") { this.interval = setInterval(animate, 200); }
		if (status == "done") { clearInterval(this.interval); }

		function animate() {
			if (typeof animate.count == "undefined") { animate.count = 0; }

			if (animate.count < 3) {
				$("#game h2").append(" .");
				animate.count++;
			} else {
				$("#game h2").html("Loading");
				animate.count = 0;
			}
		}
	},

	newGame: function(firstTime) {
		game.wins = game.losses = game.unanswered = 0;
		
		if (firstTime) {
			$("#game").html("<br/><br/><br/>");
			$("<button>").addClass("btn btn-lg").text("Start").attr("id","start").appendTo("#game");
		} else {
			$("<button>").addClass("btn btn-lg").text("Play again?").attr("id","start").appendTo("#game");
		}

		$("#start").on("click", function(event){
			$("#logo").css("width", "200px")
			$("#game_title").empty();
			game.showQuestion(0);
		});
	},

	showQuestion: function(questionNum) {
		let currQ = game.questionArr[questionNum];
		let timer = setInterval(countdown, 1000);
		let secondsLeft = 30;
		let gameHtml = "";

		gameHtml += "<h4>Time Remaining: <span id='timer'>30</span> Seconds</h4><br/>"
		gameHtml += "<h3>" + currQ.quesText + "</h3><br/>"
		gameHtml += "<button id='ans_A' class='btn btn-primary btn-large bottom-margin answer' value='a'>" + currQ.ansA + "</button><br/>"
		gameHtml += "<button id='ans_B' class='btn btn-primary btn-large bottom-margin answer' value='b'>" + currQ.ansB + "</button><br/>"
		gameHtml += "<button id='ans_C' class='btn btn-primary btn-large bottom-margin answer' value='c'>" + currQ.ansC + "</button><br/>"
		gameHtml += "<button id='ans_D' class='btn btn-primary btn-large bottom-margin answer' value='d'>" + currQ.ansD + "</button><br/>"

		$("#game").html(gameHtml);

		$(".answer").on("click", function(event) {
			clearInterval(timer);
			if ($(this).val() == currQ.corrAns) { endQuestion("correct"); }
			else { endQuestion("wrong"); }
		});

		function countdown() {
			secondsLeft--;
			$("#timer").html(secondsLeft);
			if (secondsLeft < 1) {
				clearInterval(timer);
				endQuestion("timeUp");
			}
		}

		function endQuestion(outcome) {
			$("#game").html("<h4>Time Remaining: <span id='timer'>" + secondsLeft + "</span> Seconds</h4>");

			switch (outcome) {
				case "correct":
					$("#game").append("<h3>Correct!</h3><br/>");
					game.wins++;
					break;
				case "wrong":
					$("#game").append("<h3>Nope!</h3><br/>");
					$("#game").append("<h4>The correct answer was: " + rightAns() + "</h4><br/>");
					game.losses++;
					break;
				default:
					$("#game").append("<h3>Time's Up!</h3><br/>");
					$("#game").append("<h4>The correct answer was: " + rightAns() + "</h4><br/>");
					game.unanswered++;
					break;
			}

			$("#game").append("<img style='height: 200px;' src='" + currQ.image + "'>");

			setTimeout(nextQuestion, 3500);

			function rightAns() {
				switch (currQ.corrAns) {
					case "a": return currQ.ansA;
					case "b": return currQ.ansB;
					case "c": return currQ.ansC;
					case "d": return currQ.ansD;
				}
			}
		}
		
		function nextQuestion() {
			questionNum++;
			if (questionNum == game.questionArr.length) { endGame(); }
			else { game.showQuestion(questionNum); }
		}

		function endGame() {
			$("#game").html("<h3>All done! Here's how you did:</h3><br/>");
			$("#game").append("<h4>Correct answers: " + game.wins + "<h4/>");
			$("#game").append("<h4>Incorrect answers: " + game.losses + "<h4/>");
			$("#game").append("<h4>Unanswered: " + game.unanswered + "<h4/><br/>");

			game.newGame(false);
		}
	}
};

$(function() {
	// Load music on start
	$("#music").trigger("load");
	$("#music").prop("volume", 0.05);
	$("#music").trigger("play");

	game.loadingScreen("loading");

    // Music toggle button
	$("#music_toggle").on("click", function(event){
		// Play if paused, pause if playing
		if ($("#music").prop("paused")) {
			$("#music").trigger("play");
			$("#music_text").html("Playing");
		} else {
			$("#music").trigger("pause");
			$("#music_text").html("Paused");
		}
	});

	// Sfx toggle button
	// $("#sfx_toggle").on("click", function(event){
	// 	if (game.sfxOn) {
	// 		game.sfxOn = false;
	// 		$("#sfx_text").html("Off");
	// 	} else {
	// 		game.sfxOn = true;
	// 		$("#sfx_text").html("On");
	// 	}
	// });
=======
// Game object
let game = {
	// "Static" vars
	questionArr: [],

	// Game state vars
	wins: 0,
	losses: 0,
	unanswered: 0,

	// Sound effect settings
	currentSfx: false,
	sfxOn: true,
	
	// Methods
	initialize: function(data) {
		// Store sheets data in local array
		game.questionArr = data;
		game.loadingScreen("done");
		game.newGame(true);
	},

	loadingScreen: function(status) {
		if (typeof this.interval == "undefined") { this.interval = setInterval(animate, 200); }
		if (status == "done") { clearInterval(this.interval); }

		function animate() {
			if (typeof animate.count == "undefined") { animate.count = 0; }

			if (animate.count < 3) {
				$("#game h2").append(" .");
				animate.count++;
			} else {
				$("#game h2").html("Loading");
				animate.count = 0;
			}
		}
	},

	newGame: function(firstTime) {
		game.wins = game.losses = game.unanswered = 0;
		
		if (firstTime) {
			$("#game").html("<br/><br/><br/><br/>");
			$("<button>").addClass("btn btn-default btn-large").text("Start").attr("id","start").appendTo("#game");
		} else {
			$("<button>").addClass("btn btn-default btn-large").text("Play again?").attr("id","start").appendTo("#game");
		}

		$("#start").on("click", function(event){
			game.showQuestion(0);
		});
	},

	showQuestion: function(questionNum) {
		let currQ = game.questionArr[questionNum];
		let timer = setInterval(countdown, 1000);
		let secondsLeft = 30;
		let gameHtml = "";

		gameHtml += "<div>Time Remaining: <span id='timer'>30</span> Seconds</div><br/>"
		gameHtml += "<div>" + currQ.quesText + "</div><br/>"
		gameHtml += "<button id='ans_A' class='btn btn-default btn-large answer' value='a'>" + currQ.ansA + "</button><br/>"
		gameHtml += "<button id='ans_B' class='btn btn-default btn-large answer' value='b'>" + currQ.ansB + "</button><br/>"
		gameHtml += "<button id='ans_C' class='btn btn-default btn-large answer' value='c'>" + currQ.ansC + "</button><br/>"
		gameHtml += "<button id='ans_D' class='btn btn-default btn-large answer' value='d'>" + currQ.ansD + "</button><br/>"

		$("#game").html(gameHtml);

		$(".answer").on("click", function(event) {
			clearInterval(timer);
			if ($(this).val() == currQ.corrAns) { endQuestion("correct"); }
			else { endQuestion("wrong"); }
		});

		function countdown() {
			secondsLeft--;
			$("#timer").html(secondsLeft);
			if (secondsLeft < 1) {
				clearInterval(timer);
				endQuestion("timeUp");
			}
		}

		function endQuestion(outcome) {
			$("#game").html("<div>Time Remaining: <span id='timer'>" + secondsLeft + "</span> Seconds</div><br/>");

			switch (outcome) {
				case "correct":
					$("#game").append("<h3>Correct!</h3>");
					game.wins++;
					break;
				case "wrong":
					$("#game").append("<h3>Nope!</h3>");
					$("#game").append("<p>The correct answer was: " + rightAns() + "</p><br/>");
					game.losses++;
					break;
				default:
					$("#game").append("<h3>Time's Up!</h3>");
					$("#game").append("<p>The correct answer was: " + rightAns() + "</p><br/>");
					game.unanswered++;
					break;
			}

			$("#game").append("<img src='" + currQ.image + "'>");

			setTimeout(nextQuestion, 3500);

			function rightAns() {
				switch (currQ.corrAns) {
					case "a": return currQ.ansA;
					case "b": return currQ.ansB;
					case "c": return currQ.ansC;
					case "d": return currQ.ansD;
				}
			}
		}
		
		function nextQuestion() {
			questionNum++;
			if (questionNum == game.questionArr.length) { endGame(); }
			else { game.showQuestion(questionNum); }
		}

		function endGame() {
			$("#game").html("<h3>All done! Here's how you did:</h3><br/>");
			$("#game").append("<p>Correct answers: " + game.wins + "<br/>");
			$("#game").append("<p>Incorrect answers: " + game.losses + "<br/>");
			$("#game").append("<p>unanswered: " + game.unanswered + "<br/>");

			game.newGame(false);
		}
	}
};

$(function() {
	// Load music on start
	// $("#music").trigger("load");
	// $("#music").prop("volume", 0.05);
	// $("#music").trigger("play");

	game.loadingScreen("loading");

    // Music toggle button
	$("#music_toggle").on("click", function(event){
		// Play if paused, pause if playing
		if ($("#music").prop("paused")) {
			$("#music").trigger("play");
			$("#music_text").html("Playing");
		} else {
			$("#music").trigger("pause");
			$("#music_text").html("Paused");
		}
	});

	// Sfx toggle button
	// $("#sfx_toggle").on("click", function(event){
	// 	if (game.sfxOn) {
	// 		game.sfxOn = false;
	// 		$("#sfx_text").html("Off");
	// 	} else {
	// 		game.sfxOn = true;
	// 		$("#sfx_text").html("On");
	// 	}
	// });
>>>>>>> 6637d523bbd02476ba3282de66eb8fc89c2ba93b
});