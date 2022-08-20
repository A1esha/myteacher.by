
function moveto(elem){
elem.scrollIntoView({behavior: "smooth"});
/*	window. scroll({
	top: rect.x,
	left: 0,
	behavior: 'smooth'
	});
*/
}

function moveup(){

let elem = document.getElementsByClassName("dots")[0];
elem.scrollIntoView({behavior: "smooth"});
/*	window. scroll({
	top: rect.x,
	left: 0,
	behavior: 'smooth'
	});
*/
}


function next(){
	showTutor(+1);
}
function prev(){
	showTutor(-1);
}



$(function() {



 if($(window).width() <= 1000){
 $(".tutor__block").swipe( { fingers:'all', swipeLeft:swipeleft, swipeRight:swiperight, allowPageScroll:"auto"} );

    function swipeleft(event, direction, distance, duration, fingerCount) {
		//alert(1);
		next();
	}
	function swiperight(event, phase, direction, distance) {
		//alert(2);
		prev();
	}
$(".recommend").swipe( { fingers:'all', swipeLeft:swipeleft1, swipeRight:swiperight1, allowPageScroll:"auto"} );

    function swipeleft1(event, direction, distance, duration, fingerCount) {
		//alert(1);
		showReview(-1);
	}
	function swiperight1(event, phase, direction, distance) {
		//alert(2);
		showReview(+1);
	}
}

});




