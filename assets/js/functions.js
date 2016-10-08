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
})

$(window).load(function() {
  $('.classes-lockup').flexslider({
    animation: "fade",
    slideshow: false,
    controlsContainer: $(".custom-controls-container"),
    customDirectionNav: $(".custom-navigation a")
  });
});