var x = 0;
var y = 0;
var z = 0;
$(document).ready(function(){
    //mouseover triggers on footer when the mouse pointer enters the div element, and its child elements.
    $("div.over").mouseover(function(){
        $(".over span").text(x += 1);
    });
//mouseenter triggers on figcaption only when the mouse pointer enters the div element.
    $("div.enter").mouseenter(function(){
        $(".enter span").text(y += 1);
    });
//mousemove triggers on section header every time the mouse pointer is moved over the div element.
    $("div.move").mousemove(function(){
        $(".move span").text(z += 1);
    });
});


//event 3
