var tutorIndex = 1;

function showTutor(pl) {
	
  
  let i;
  let tutors = document.getElementsByClassName("mytutors");
  let dt;
  
  const div = tutors[tutorIndex-1];
  
  
  
  
  if(pl == +1){
	  div.classList.add('moveleft');
  }else{
	  div.classList.add('moveright');
  }
  
  
  function temp1(){
	dt.classList.remove('moveleftU');
	dt.classList.remove('moverightU');
	
	dt.removeEventListener('animationend', temp1);
  }
  
  function temp(){
	div.classList.remove('moveleft');
	div.classList.remove('moveright');
	div.style.display = "none";	
   
	tutorIndex += pl;
    if (tutorIndex > tutors.length) {tutorIndex = 1;}
    if (tutorIndex < 1) {tutorIndex = tutors.length;}


	
	
   
   dt = tutors[tutorIndex-1];
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
  
  
	
  
  /*
  if(pl == -1){
	  tutors[tutorIndex-1].style.animation = "left_to_right 0.5s ease";
  }else{
	  tutors[tutorIndex-1].style.animation = "right_to_left 0.5s ease";
  }
  */
 
  
  
  
}
function moveup(){
	window. scroll({
	top: 0,
	left: 0,
	behavior: 'auto'
	});
}


function next(){

setTimeout(showTutor(+1), 0);

moveup();
}
function prev(){
	setTimeout(showTutor(-1), 0);
	moveup();
}



