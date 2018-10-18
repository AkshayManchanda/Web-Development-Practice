//creating secretNumber
var secretNumber=7;

//ask user to guess the number
var guess = Number(prompt("Guess a number: "));

//check if the guess is right or not
if(guess==secretNumber){
	alert("You Got it right");	
}
else if(guess<secretNumber){
	alert("Too Low. Try again");
}
else if(guess>secretNumber){
	alert("Too High. Try again");
}
else{
	alert("Wrong Input");
}