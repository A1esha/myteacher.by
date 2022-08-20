
window.subject = 'not_defined';
window.grade = 'not_defined';

let currentlyshow;

let nowshow = 0;

let dots;
    
let first_search = 0;
let Lslide,Rslide,Cslide;

let avai = ['prv', 'cur', 'nxt', 'sec','fir'];
let ida = 0;

function fun1() {
  var sel=document.getElementById('select-box1').selectedIndex;
  var options=document.getElementById('select-box1').options;
  var sub = options[sel].text;
  
  window.subject = sub;
  
  document.getElementById('label1').innerHTML = sub;
}

function fun2() {
  var sel=document.getElementById('select-box2').selectedIndex;
  var options=document.getElementById('select-box2').options;
  var sub = options[sel].text;
  
  window.grade = sub;
  
  document.getElementById('label2').innerHTML = sub;
}

function get_img(id){
	id = (id + currentlyshow.length) % (currentlyshow.length);
	return document.getElementById("ti"+currentlyshow[id]["Описание"]);
}

function parse_3_els(text){
	let i = text.length - 1;

	let number = 0;
	let power = 1;

	let lst = [];
	let cnt = 0;
	let div = 1;
	for(; i > 0; i = i - 1){
		if(text[i] == ' '){
			continue;
		}
		if(text[i] == '.'){
			div = power;
			continue;
		}
		if(text[i] == ','){
			lst.push(number / div);
			cnt += 1;
			power = 1;
			number = 0;
			div = 1;
			if(cnt == 3)
				break;
		}else{
			number += power * (text[i] - '0');
			power *= 10;
		}
	}
	console.log("for debug ");
 console.log(lst);
	return lst;
} 
function load(id){
	
	id = (id + currentlyshow.length) % currentlyshow.length;
	
	let form = document.getElementById('reviewer-teacher');
  	form.value = currentlyshow[id]['Описание'];

	prvid = id-1;
	nxtid = id+1;

	prvid = (prvid + currentlyshow.length) % currentlyshow.length;
	nxtid = (nxtid + currentlyshow.length) % currentlyshow.length;
	
	cur = document.getElementById('cur');
	prv =  document.getElementById('prv');
	nxt = document.getElementById('nxt');
	

	var xhr = new XMLHttpRequest();	


	text = './tutors/'+ currentlyshow[id]['Описание'].toString()+'.html';
	xhr.open('GET', text); 
	xhr.onload = function(){
		console.log('done')

		let inside = xhr.response;
		let lst = parse_3_els(inside);

		let i = inside.length - 1;
		for(; i >= 0; i -= 1){
			if(inside[i] == ' ' || inside[i] == ','
			   || (inside[i] >= '0' && inside[i] <= '9')
			   || inside[i] == '.'){
				
			}else
				break;
		}
		inside = inside.substr(0 , i + 1);
		cur.innerHTML = inside + '<div onclick="ShowForm()" class="info__button-div"><p class="info__button-text">Выбрать репетитора</p></div>';
		fill__progress__bar(0,lst[2]);
		fill__progress__bar(1,lst[1]);
		fill__progress__bar(2,lst[0]);
	}
	xhr.send();
}


function get_prev(){
	return document.getElementById('prv');
}
function get_next(){
	return document.getElementById('nxt');
}
function get_tutor(){
	return document.getElementById('cur');
} 



var tutorIndex = 0;



function showTutor(pl) {





  dots[(tutorIndex)%dots.length].classList.remove("fadeout"); 
  dots[(tutorIndex)%dots.length].classList.add("fadein");


  let i;
  let dt;
  
  var div = get_tutor();

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
    if (tutorIndex >= currentlyshow.length) {tutorIndex = 0;}
    if (tutorIndex < 0) {tutorIndex = currentlyshow.length - 1;}

    load(tutorIndex);
  
   dt = get_tutor(tutorIndex);
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





function chosen(){
	let grade = window.grade;
	let subject = window.subject;


	if(first_search > 0){
		let dt = document.getElementsByClassName("dots");
		dt[0].innerHTML = "";
	}

	if(subject == "not_defined" || grade == "not_defined"){
		return;
	}
	let Candidates = Get_Candidates('Предмет', subject);
	
		
	currentlyshow = Choose(Candidates, parseInt(grade));
	//alert(1);
	console.log(currentlyshow);
	if(currentlyshow.length == 0){
		/// haven't find any such a tutor
		var xhr = new XMLHttpRequest();	

		(get_tutor()).style.display = "none";
		text = './tutors/not_found.html';
		xhr.open('GET', text); 
		xhr.onload = function(){
			let inside = xhr.response;
			(get_tutor()).classList.add("alert");
			(get_tutor()).innerHTML = inside;
			(get_tutor()).style.display = "block";
			
		}

		xhr.send();
		return;
	}



	(get_tutor()).classList.remove("alert");
	
	(get_tutor()).style.display = "none";	

	tutorIndex = 1 % currentlyshow.length;
	load(tutorIndex);




	(get_tutor()).style.display = "block";
	
	nowshow = 1;

	let j = 0;
	
	let dt = document.getElementsByClassName("dots");
	
	
	for(; j < currentlyshow.length; j += 1){
		dt[0].innerHTML += '<li class="special_li"></li>';
	}

	moveup();
	//alert(currentlyshow.length);
	dots = document.getElementsByClassName("special_li");
	for(let xi = 0; xi < dots.length; xi += 1){
		dots[xi].classList.add("fadein");
	}
	
	dots[0].classList.add("active");
	dots[(tutorIndex)%dots.length].classList.add("fadeout");


	if(first_search == 1){
	
		//disableScroll();

		//alert(2);
		callInstruction();


		setTimeout(()=> showTutor(+1), 1500);
		setTimeout(()=> showTutor(-1), 2500);
		
	    setTimeout(()=> showTutor(-1), 3500);
		   
		
		setTimeout(()=> showTutor(+1), 4500);

		setTimeout(()=> closeInstruction(), 4500);
		//setTImeout(()=> enableScroll(), 4500);
	}
	first_search += 1;

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


function init(){
window.subject='Физика';
window.grade='1';
first_search = 0;

chosen();

window.subject='not_defined';
window.grade='not_defined';
nav_home();
}
