function fun1() {
  var sel=document.getElementById('select-box1').selectedIndex;
  var options=document.getElementById('select-box1').options;
  var sub = options[sel].text;
  document.getElementById('label1').innerHTML = sub;
}

function fun2() {
  var sel=document.getElementById('select-box2').selectedIndex;
  var options=document.getElementById('select-box2').options;
  var sub = options[sel].text;
  document.getElementById('label2').innerHTML = sub;
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