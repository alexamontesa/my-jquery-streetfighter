$(document).ready(function() {

    var lastState = "still";

	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		lastState="ready";
	});
	$('.ryu').mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
		lastState="still";
	});
	$('.ryu').mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
			.animate(
				{'left': '300px'},
				500,
				function() {
					$(this).hide();
					$(this).css('left', '-222px');
			}
		);
	});
	$('.ryu').mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
	$(document).keydown(function(e) {
		if (e.keyCode == 88) {
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-x').show();
		}
	});
	$(document).keyup(function(e) {
		if (e.keyCode == 88) {
			if (lastState=="still") {
				$('.ryu-still').show();
			}
			else {
				$('.ryu-ready').show();
			}
			$('.ryu-x').hide();
		}
	});
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
