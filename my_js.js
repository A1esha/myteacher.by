
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
	represent(0);

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
