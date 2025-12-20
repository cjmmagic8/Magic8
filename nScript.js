//variables
// reflip preflipped cards
/*	remember which card was flipped last
	when flipping a new card call 2 print statements using logic
	one flips the new card and call flipped, leaving it flipped
	second flips the new card and calls defualt.
*/


globalValue = 3;

function declare(){
	infoBoxElements = document.getElementsByClassName("infoBox").length;
	infoBox = document.getElementsByClassName("infoBox");
	learn = document.getElementById("learn").style;
	grow = document.getElementById("grow").style;
	heal = document.getElementById("heal").style;
}

function reset(){
declare();
	for(counter = 0;counter < infoBoxElements;counter++){
	/* everything here happens to reset the element
	   Make everything default "infoBox" */
		let currentClass = document.getElementsByClassName("infoBox")[counter].style;
		currentClass.transition = ".4s";
		currentClass.backgroundColor = "#632D22";

		currentClass.width = "30%";
		currentClass.marginLeft = "4%";
		currentClass.marginRight = "4%";

		//custom backgrounds

		learn.backgroundImage = "url('stetch.png')";
		grow.backgroundImage = "url('stetch.png')";
		heal.backgroundImage = "url('stetch.png')";

	}

}

function changeColor(value){
declare();
	reset();
	infoBox[value].style.backgroundColor = "brown";
//clicked the same box twice
if(globalValue == value){
	globalValue = 3;
	flip(value,0);
	reset();
}
else{
console.log("should be flipped");
	flip(value,1);
globalValue = value;

}
	//reset();
}

function flip(value,keepFlipped){
	infoBox[value].style.transition = ".05s";
	infoBox[value].style.width = ".1%";
	infoBox[value].style.marginLeft = "16%";
	infoBox[value].style.marginRight = "16%";
	setTimeout(reset, 100);

	if(keepFlipped == 1){
		setTimeout(flipped, 100);
	}
	else{
		console.log("reflip old card");
	}

}

function flipped(){
declare();
value = globalValue;
infoBox[value].style.backgroundColor = "black";
infoBox[value].style.backgroundImage = "url('null')";
	//infoBox[value].style.backgroundImage = "testBackground.png";
//	infoBox[value].style.backgroundImage = "url('flipped.png')";

}

