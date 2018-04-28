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
  var header = document.querySelector('.nav-container').getBoundingClientRect();
  var height = header.height;

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = Math.abs(e.offsetTop - height);

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
var scroll = new SmoothScroll('a[href*="#"]',{
	header:'[data-scroll-header]'
});
