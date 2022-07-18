

function moveup(){
	window. scroll({
	top: 0,
	left: 0,
	behavior: 'smooth'
	});
}


function next(){
	showTutor(+1);
}
function prev(){
	showTutor(-1);
}



$(function() {
   $(".widget").swipe( { fingers:'all', swipeLeft:swipeleft, swipeRight:swiperight, allowPageScroll:"auto"} );

    function swipeleft(event, direction, distance, duration, fingerCount) {
		next();
	}
	function swiperight(event, phase, direction, distance) {
		prev();
	}

});




