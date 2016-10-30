$(document).ready(function(){
// grab an element
var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement, {
    "offset": 75,
    "tolerance": 10

});
// initialise
headroom.init(); 
smoothScroll.init();
    
$('.classes-lockup').flexslider({
    animation: "fade",
    slideshow: false,
    customDirectionNav: $(".custom-navigation a")
  });
    
$(".custom-nav-prev").click(function(){
    $('.classes-lockup').flexslider('prev')
    return false;
});

$('.custom-nav-next').click(function(){
    $('.classes-lockup').flexslider('next')
    return false;
});

$('.classes-hyperlink').click(function(){
    var levelString = " " + $(this).attr("data-level") + " ";
    var fullString = "Hello! I am interested in learning more about Paria Theatre's level" + levelString + "course :)";
    $('#message-box').text(fullString);
});
})