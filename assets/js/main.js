var nav = document.getElementById('navbar');
var section = document.getElementById('services');

var sticky = nav.offsetTop +10;
var secY = section.offsetTop ;

function stickyNav(){
	if(window.pageYOffset >=sticky){

	nav.classList.add("sticky");

	if(window.pageYOffset >=sticky+100){

		nav.classList.add('white-nav');
	}else{

		nav.classList.remove('white-nav');
	}
	}else {
	nav.classList.remove("sticky");
	}	
}

function toggleMenu(){
    var x = document.getElementById("navbar");
    if (x.className === "nav-container") {
        x.className += "  responsive ";
    } else {
        x.className = "nav-container";
    }
}