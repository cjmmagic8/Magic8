//	Next up!!!
/*
	Both the reflip and flip functions will call the spin function..
		All this function does is:
			changes the transition speed
			squeeze and expand the width
			rescalse the padding
*/


// global variables

	currentClass = document.getElementsByClassName("infoBox");
	grow = document.getElementById("grow");
	learn = document.getElementById("learn");
	heal = document.getElementById("heal");
	defaultImage = "url('stetch.png')";
	defaultColor = "black";
	old_card = 3;


function changeColor(value){
	currentSelected = document.getElementsByClassName("infoBox")[value];
	currentSelected.style.backgroundImage = defaultImage;
	currentSelected.style.backgroundColor = defaultColor;

//if a new card is chosen, reflip the old card to default
	if(old_card != value){
		if(old_card != 3){
			spinMeRightRound(old_card);
			//!!!console.log("old card")
			//console.log(old_card);
//!!!!After the card is flipped, you will need to alter the card
//The function after the card flip here should always set the card to it's default
 //because the old card should always go back to default.
			flipCardBackOver(old_card);
		}
	}

//store the current value into a "buffer" to know which card to reflip
old_card = value;

/*
	Important... the old card should be flipped before the new.
	This is because it looks better in the site, and...
	old_card = value may get messed up...!
	AND the padding/margin of 2 collapsing elements is much greater...
	so ima just keep is simple stupid!
*/



//time to flip the new card over
	//!!!!console.log("current card");
	//console.log(value);
//don't delay if no they pick the same or the first card


	setTimeout(timeout1, 800);
	function timeout1(){
		spinMeRightRound(value);
//!!!!!After the card is flipped, you will need to alter the card
//This is the card that should show new site data, since it's the current selected card.
		flipNewCardOver(value);
	}
}

function spinMeRightRound(cardBeingFlipped){
	currentClass[cardBeingFlipped].style.transition = ".125s";
	currentClass[cardBeingFlipped].style.width = "5px";
//	currentClass[cardBeingFlipped].style.marginleft = "16%";


	setTimeout(spin, 120);
	function spin(){
		currentClass[cardBeingFlipped].style.width = "500px";

	currentClass[cardBeingFlipped].style.transition = ".5s";
	}

}



//custom flipping functions
function flipCardBackOver(cardInQuestion){
	switch(cardInQuestion){
		case 0:
		currentClass[cardInQuestion].style.backgroundImage = "url('./stetch.png')";
		console.log("changing this card back to origin");
		console.log(cardInQuestion);
		console.log(0);
		break;
		case 1:
		currentClass[cardInQuestion].style.backgroundImage = "url('./stetch.png')";
		console.log("changing this card back to origin");
		console.log(cardInQuestion);
		console.log(1);
		break;
		case 2:
		currentClass[cardInQuestion].style.backgroundImage = "url('./stetch.png')";
		console.log("changing this card back to origin");
		console.log(cardInQuestion);
		console.log(2);
		break;
	}
}

function flipNewCardOver(cardInQuestion){
		switch(cardInQuestion){
		case 0:
		currentClass[cardInQuestion].style.backgroundImage = "url('./turkeyTail.png')";
		console.log("flipping over");
		console.log(cardInQuestion);
		console.log(0);
//		setTimeout(revert, 5000);
		break;
		case 1:
		currentClass[cardInQuestion].style.backgroundImage = "url('./turkeyTail.png')";
		console.log("flipping over");
		console.log(cardInQuestion);
		console.log(1);
		break;
		case 2:
		currentClass[cardInQuestion].style.backgroundImage = "url('./turkeyTail.png')";
		console.log("flipping over");
		console.log(cardInQuestion);
		console.log(2);
		break;
	}
}

/*delete later
All this does it close the active card after 5 seconds
function revert(){
	for(counter = 0; counter <= 2; counter++){
		spinMeRightRound(counter);
		currentClass[counter].style.backgroundImage = "url('stetch.png')";
	}
}
*/
