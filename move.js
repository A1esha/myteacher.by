var tutorIndex = 1;






function showTutor(pl) {

  dots[(tutorIndex)%dots.length].classList.remove("fadeout"); 
  dots[(tutorIndex)%dots.length].classList.add("fadein");


  delete_represent(tutorIndex-1);	

  let i;
  let dt;
  
  var div = get_tutor(tutorIndex-1);

  div.style.display = "block";

  if(pl == +1){
	  div.classList.add('moveleft');
  }else{
	  div.classList.add('moveright');
  }
 	

  function temp1(){
	dt.classList.remove('moveleftU');
	dt.classList.remove('moverightU');
	dt.style.display = "none";
	represent(tutorIndex-1);
    
    
	dt.removeEventListener('animationend', temp1);
	moveup();
  }
  
  function temp(){
  	
	div.classList.remove('moveleft');
	div.classList.remove('moveright');
	div.style.display = "none";	
   
	tutorIndex += pl;
    if (tutorIndex > currentlyshow.length) {tutorIndex = 1;}
    if (tutorIndex < 1) {tutorIndex = currentlyshow.length;}


   dt = document.getElementById("t"+currentlyshow[tutorIndex-1]["Описание"]);
   dt.style.display = "block";
    
   dots[(tutorIndex)%dots.length].classList.remove("fadein");
   dots[(tutorIndex)%dots.length].classList.add("fadeout");





   if(pl == +1){
	   dt.classList.add('moveleftU');
   }else{
	   dt.classList.add('moverightU');
   }
   
	dt.addEventListener('animationend', temp1);
	
	
	
	div.removeEventListener('animationend', temp);
  }
  div.addEventListener('animationend', temp); 


}



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




