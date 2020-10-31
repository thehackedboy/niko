function day() {
	document.querySelector("#mode_2").style.display="block";
	document.querySelector("#mode_2").style.color="white";
	document.querySelector("#ia1").style.color="white";
	document.querySelector("#ia2").style.color="white";
	document.querySelector("#ia3").style.color="white";
	document.querySelector("#ia4").style.color="white";
	document.querySelector("#ia5").style.color="white";
	document.querySelector("#ib1").style.color="white";
	document.querySelector("#ib2").style.color="white";
	document.querySelector("#ib3").style.color="white";
	document.querySelector("#mode_1").style.display="none";
	document.querySelector("#header").style.backgroundColor="black";
}


function night() {
	document.querySelector("#mode_1").style.display="block";
	document.querySelector("#mode_2").style.display="none";
	document.querySelector("#header").style.backgroundColor="whitesmoke";
	document.querySelector("#ia1").style.color="black";
	document.querySelector("#ia2").style.color="black";
	document.querySelector("#ia3").style.color="black";
	document.querySelector("#ia4").style.color="black";
	document.querySelector("#ia5").style.color="black";
	document.querySelector("#ib1").style.color="black";
	document.querySelector("#ib2").style.color="black";
	document.querySelector("#ib3").style.color="black";
}




function opn() {
	document.querySelector("#ham_2").style.display="block";
	document.querySelector("#ham_1").style.display="none";
}


function cls() {
	document.querySelector("#ham_1").style.display="block";
	document.querySelector("#ham_2").style.display="none";
}