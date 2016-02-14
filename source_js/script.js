var sections = document.getElementsByTagName('section');
for(var i=0; i<sections.length; i++) {
  // divs[i].addEventListener("click", highlightThis);
  /*
  divs[i].addEventListener("click", highlightThis, true);
  divs[i].addEventListener("click", highlightThis, false);*/
}

// smooth scrolling
// http://jsfiddle.net/9SDLw/
$('.header-button').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 500);
  return false;
});

// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
// checking if element is in viewport
function isElInViewport(el) {
  var elRect = el.getBoundingClientRect(el);
  var rectCenterTop = (elRect.bottom + elRect.top)/16;
  var rectCenterBottom = 15*(elRect.bottom + elRect.top)/16;
  var rectTop = elRect.top;
  var rectBottom = elRect.bottom;
  // console.log('top' + rectCenterTop);
  // console.log('bot' + rectCenterBottom);
  // when scroll past the center of the first page, change to smaller toolbar
  // return rectBottom <= (window.innerHeight || document.documentElement.clientHeight);
  return rectCenterTop >= 0 && rectCenterBottom <= (window.innerHeight || document.documentElement.clientHeight);
}

$(document).ready(function(){
  $("#section-one-button").addClass("active");
});

var currentSection = 1;
// document scroll handler
$(document).on( 'scroll', function(){

  var sectionOneVisible = isElInViewport(document.getElementById('section-one'));
  var sectionTwoVisible = isElInViewport(document.getElementById('section-two'));
  var sectionThreeVisible = isElInViewport(document.getElementById('section-three'));
  var sectionFourVisible = isElInViewport(document.getElementById('section-four'));

  // console.log(currentSection);

  if(sectionOneVisible){
    currentSection = 1;
  }
  else if(sectionTwoVisible){
    currentSection = 2;
  }
  else if(sectionThreeVisible){
    currentSection = 3;
  }
  else if(sectionFourVisible){
    currentSection = 4;
  }

    // this is ugly im sorry

    if (currentSection == 1) {
      $(".header-container").removeClass("minimized");
      $("#section-one-button").addClass("active");
      $("#section-one-button").removeClass("minimized");
      $("#section-two-button").removeClass("minimized");
      $("#section-three-button").removeClass("minimized");
    }
    else { 
      $("#section-one-button").addClass("minimized");
      $("#section-two-button").addClass("minimized");
      $("#section-three-button").addClass("minimized");
      $("#section-one-button").removeClass("active");
    }

    if (currentSection == 2) {
      $(".header-container").addClass("minimized");
      $("#section-two-button").addClass("active");
    }
    else { 
      // $(".header-container").removeClass("minimized");
      $("#section-two-button").removeClass("active");
    }

    if (currentSection == 3) {
      $(".header-container").addClass("minimized");
      $("#section-three-button").addClass("active");
    }
    else { 
      // $(".header-container").removeClass("minimized");
      $("#section-three-button").removeClass("active");
    }



  });

// cheating the loop since loop isn't working
// $('video').on('ended', function () {
//   this.load();
//   this.play();
// });

// Get the modal
var modal = document.getElementById('bears-modal');

// Get the button that opens the modal
var btn = document.getElementById("bears-modal-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



/* carousel */

$('#left-button').on('click', function() {
  // alert('hi');
  toggleSlide(-1);
});
$('#right-button').on('click', function() {
  toggleSlide(1);
});

var curslide = 0;
// direction = boolean value: true or false. If true, go to NEXT slide; otherwise go to PREV slide
function toggleSlide(direction) {
  $(".hideable").eq(curslide).addClass("hidden");
  curslide += direction;
  if (curslide >= 3) curslide = 0;
  if (curslide < 0) curslide = 2;
  $(".hideable").eq(curslide).removeClass("hidden");
  


  // console.log(curslide);
}
