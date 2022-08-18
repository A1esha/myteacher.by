

let REVIEWS_NUMBER = 2;
let reviewIndex = 0;
function load_reviews(id){
	
	id = (id + REVIEWS_NUMBER) % REVIEWS_NUMBER;
	prvid = id-1;
	nxtid = id+1;

	prvid = (prvid + REVIEWS_NUMBER) % REVIEWS_NUMBER;
	nxtid = (nxtid + REVIEWS_NUMBER) % REVIEWS_NUMBER;
	
	cur = document.getElementById('review__div');
	var xhr3 = new XMLHttpRequest();

	text = './reviews/'+ (reviewIndex).toString() +'.html';
	xhr3.open('GET', text); 
	xhr3.onload = function(){
		let inside = xhr3.response;
		console.log(inside);
		console.log("done");
		cur.innerHTML = inside;
	}
	xhr3.send();
}
function get_review(){
	return document.getElementById('review__div');
}
function showReview(pl) {
  
  let dt;
  
  var div = get_review();

  //div.style.display = "block";

  if(pl == +1){
	  div.classList.add('moveleft');
  }else{
	  div.classList.add('moveright');
  }
 	

  function temp1(){
	dt.classList.remove('moveleftU');
	dt.classList.remove('moverightU');

	dt.removeEventListener('animationend', temp1);
	moveto(document.getElementsByClassName("recommend")[0]);
  }
  
  function temp(){
  	
	div.classList.remove('moveleft');
	div.classList.remove('moveright');
	div.style.display = "none";	
   
	reviewIndex += pl;
    if (reviewIndex >= REVIEWS_NUMBER) {reviewIndex = 0;}
    if (reviewIndex < 0) {reviewIndex = REVIEWS_NUMBER-1;}

   load_reviews(reviewIndex);
   dt = get_review(reviewIndex);
   dt.style.display = "block";
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
load_reviews(reviewIndex);
/*showReview(0);*/
