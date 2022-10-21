// курсор start//
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 500) {
        $(".js-btn-top").addClass("show")
    } else {
        $(".js-btn-top").removeClass("show")
    }
})

$(".js-btn-top").click(function (e) {
    e.preventDefault();
    $("html").animate({
        scrollTop: 10
    }, 1)
})
// курсор end//

// меню start//
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// меню end//

// slider
function currentSlide(l) {
  showSlides(slideIndex = l);
}

function showSlides(l) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (l > slides.length) {slideIndex = 1}
  if (l < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className = "active";
}
// slider


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySliders");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
} 

// select
document.getElementById("text").onchange = function() {
  localStorage.setItem('text', document.getElementById("text").value);
}

if (localStorage.getItem('text')) {
  document.getElementById("text").options[localStorage.getItem('text')].selected = true;
}
// select