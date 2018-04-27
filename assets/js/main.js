var nav = document.getElementById('navbar');
var services = document.getElementById('services');
var about = document.getElementById('about');
var contact = document.getElementById('contact');

var sticky = nav.offsetTop +10;

function navMenu(){



	if(window.pageYOffset >=sticky){

	nav.classList.add("sticky");

	}else {
	nav.classList.remove("sticky");
	}	
}



  var section = document.querySelectorAll(".section");
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function() {
  	navMenu();
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector('.current').setAttribute('class', ' ');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'current');
      }
    }
  };
var scroll = new SmoothScroll('a[href*="#"]');
