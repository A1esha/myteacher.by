function getBodyScrollTop(){
    return self.pageYOffset ||
    (document.documentElement && document.documentElement.scrollTop) ||
    (document.body && document.body.scrollTop);
}
function getElementTop(Name){
    return $(Name).offset().top;  
}
function checkButton(){
    document.querySelector('.info__button-div').style.display = 'block';
    document.querySelector('.info__button-div-f').style.display = 'none';
    
    var h = document.querySelector('.info__button-div').getBoundingClientRect().height;
    var h1 = getElementTop('.form');
    var h2 = getElementTop('.info__button-div');
    var h3 = h2  + h;
   //console.log(h1);console.log('WINDOW: '+document.documentElement.clientHeight);
    var l = h1 + h - document.documentElement.clientHeight + 10;
    var r = h3 - document.documentElement.clientHeight;
 

    //console.log($(this).scrollTop());console.log(r);
    if($(this).scrollTop() < l){
        //console.log("FIRST");
        document.querySelector('.info__button-div').style.display = 'none';
        document.querySelector('.info__button-div-f').style.display = 'none';
    }
    else if($(this).scrollTop() <= r){
        //console.log("SECOND");
        document.querySelector('.info__button-div').style.display = 'none';
        document.querySelector('.info__button-div-f').style.display = 'block';
    }
    else{
        //console.log("THIRD");
        document.querySelector('.info__button-div').style.display = 'block';
        document.querySelector('.info__button-div-f').style.display = 'none';
    }
}
$(window).scroll(function(){
    checkButton();
});