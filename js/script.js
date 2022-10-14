var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    if (document.body.scrollTop > 360 || document.documentElement.scrollTop > 360) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
        }
  }


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}