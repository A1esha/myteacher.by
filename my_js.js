
let subject, grade;

let currentlyshow;

let nowshow = 0;

let dots;
    

let Lslide,Rslide,Cslide;


function fun1() {
  var sel=document.getElementById('select-box1').selectedIndex;
  var options=document.getElementById('select-box1').options;
  var sub = options[sel].text;
  
  subject = sub;
  
  document.getElementById('label1').innerHTML = sub;
}

function fun2() {
  var sel=document.getElementById('select-box2').selectedIndex;
  var options=document.getElementById('select-box2').options;
  var sub = options[sel].text;
  
  grade = sub;
  
  document.getElementById('label2').innerHTML = sub;
}

function get_img(id){
	id = (id + currentlyshow.length) % (currentlyshow.length);
	return document.getElementById("ti"+currentlyshow[id]["Описание"]);
} 

function get_tutor(id){
	id = (id + currentlyshow.length) % (currentlyshow.length);
	return document.getElementById("t"+currentlyshow[id]["Описание"]);
} 



var tutorIndex = 1;




var first = 1;

function showTutor(pl) {

  dots[(tutorIndex)%dots.length].classList.remove("fadeout"); 
  dots[(tutorIndex)%dots.length].classList.add("fadein");


  let i;
  let dt;
  
  var div = get_tutor(tutorIndex-1);

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




function represent(id){

	var widget = document.getElementById("tutor-widget");
	widget.style.display = "block";

	
	var cur = get_tutor(id);
	var prv = get_img(id-1);
	var nxt = get_img(id+1);



	Cslide = (document.getElementsByClassName("Cslide"))[0];
	Rslide = (document.getElementsByClassName("Rslide"))[0];
	Lslide = (document.getElementsByClassName("Lslide"))[0];


    Cslide.innerHTML = cur.innerHTML;
    Lslide.innerHTML = prv.innerHTML;
    Rslide.innerHTML = nxt.innerHTML;


	((Lslide.getElementsByTagName("img"))[0]).classList.add("Lpic");

	((Rslide.getElementsByTagName("img"))[0]).classList.add("Rpic");
	
	
}
function delete_represent(id){
	var widget = document.getElementById("tutor-widget");
	widget.style.display = "none";

	Cslide = (document.getElementsByClassName("Cslide"))[0];
	Rslide = (document.getElementsByClassName("Rslide"))[0];
	Lslide = (document.getElementsByClassName("Lslide"))[0];

	Cslide.innerHTML = "";
	Rslide.innerHTML = "";
	Lslide.innerHTML = "";
}

function chosen(){


	let Candidates = Get_Candidates('Предмет', subject);
	
    console.log(Candidates);
	
	
	currentlyshow = Choose(Candidates, parseInt(grade));
    console.log(currentlyshow);

	
	
	let but = document.getElementById("button_find");
	but.style.display = "none";
	
/*
	let tutors = document.getElementsByClassName("tutor-widget");
	tutors[0].style.dipslay = "inline-block";
*/
	(get_tutor(0)).style.display = "block";
	/// there is no check that currentlyshow can be empty
	let form1 = document.getElementsByClassName("form1");
	let form2 = document.getElementsByClassName("form2");
	
	form1[0].style.display = "none";
	form2[0].style.display = "none";
	
	
	let buttonnext = document.getElementsByClassName("button_next");
	let buttonback = document.getElementsByClassName("button_back");
	
	
	
	buttonnext[0].style.display = "block";
	buttonback[0].style.display = "block";
	nowshow = 1;

	let j = 0;
	
	let dt = document.getElementsByClassName("dots");
	
	
	for(; j < currentlyshow.length; j += 1){
		dt[0].innerHTML += "<li></li>";
	}
	//alert(currentlyshow.length);
	dots = document.getElementsByTagName("li");
	
	
	dots[0].classList.add("active");
	dots[(tutorIndex)%dots.length].classList.add("fadeout");

	var inst = document.getElementById("instruction");
	inst.style.display = "inline-block";


	setTimeout(()=> showTutor(+1), 1000);
	setTimeout(()=> showTutor(-1), 2000);
	
    setTimeout(()=> showTutor(-1), 3000);
	   
	
	setTimeout(()=> showTutor(+1), 4000);
	   
	setTimeout(()=> 	inst.style.display = "none", 4100);	


}

$("select").on("click" , function() {
  
  $(this).parent(".select-box").toggleClass("open");
  
});

$(document).mouseup(function (e)
{
    var container = $(".select-box");

    if (container.has(e.target).length === 0)
    {
        container.removeClass("open");
    }
});


$("select").on("change" , function() {
  
  var selection = $(this).find("option:selected").text(),
      labelFor = $(this).attr("id"),
      label = $("[for='" + labelFor + "']");
    
  label.find(".label-desc").html(selection);
    
});
