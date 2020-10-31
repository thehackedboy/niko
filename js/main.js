function day() {
	document.querySelector("#mode_2").style.display="block";
	document.querySelector("#mode_1").style.display="none";
	document.querySelector("#header").style.backgroundColor="black";


	var x, y;
	x = document.querySelectorAll(".ia");
	for(y = 0; y <x.length; y++){
		x[y].style.color="white";
	}
}


function night() {
	document.querySelector("#mode_1").style.display="block";
	document.querySelector("#mode_2").style.display="none";
	document.querySelector("#header").style.backgroundColor="#e8e8e8";


	var x, y;
	x = document.querySelectorAll(".ia");
	for(y = 0; y <x.length; y++){
		x[y].style.color="black";
	}
}




function ham_opn() {
	document.querySelector("#ham_2").style.display="block";
	document.querySelector("#ham_1").style.display="none";
}


function ham_cls() {
	document.querySelector("#ham_1").style.display="block";
	document.querySelector("#ham_2").style.display="none";
}


function s_bar_opn() {
	document.querySelector("#s_bar").style.display="block";
	document.querySelector("#ib3b").style.display="block";
	document.querySelector("#ib3b").style.color="white";
	document.querySelector("#ib3").style.display="none";
}


function s_bar_cls() {
	document.querySelector("#s_bar").style.display="none";
	document.querySelector("#ib3b").style.display="none";
	document.querySelector("#ib3").style.display="block";
}