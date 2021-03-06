var slider = document.querySelector(".featured-list");
var controls = document.querySelectorAll(".featured-controls i");

var position = 0;
var width = 1160;
var currentSlide = 0;

for ( var i = 0; i < controls.length; i++ ) {
  controls[i].addEventListener("click", function (event) {
    for ( var k = 0; k < controls.length; k++ ) {
      if ( controls[k].classList.contains("active") ) {
        currentSlide = k;
        controls[k].classList.remove("active");
      }
    }

    for ( var n = 0; n < controls.length; n++ ) {
      if ( controls[n] === event.target ) {
        controls[n].classList.add("active");
        if (n > currentSlide) {
          position = Math.min(position - n * width, 0);
          slider.style.marginLeft = position + 'px';
        }

        if (n < currentSlide) {
          position = Math.min(position + (n + 1) * width, 0);
          slider.style.marginLeft = position + 'px';
        }
      }
    }
  });
}
