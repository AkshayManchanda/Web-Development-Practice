var p1button = document.getElementById("p1");
var p2button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var winningScoreDisplay = document.querySelector("p span");

var p1Score=0;
var p2Score=0;
var winningScore=5;
var gameOver = false;

p1button.addEventListener("click",function(){
	if(!gameOver){
		p1Score++;
		if(winningScore===p1Score){
			p1Display.classList.add("winner");
			gameOver=true;
		}
		p1Display.textContent = p1Score;
	}
})

p2button.addEventListener("click",function(){
	if(!gameOver){
		p2Score++;
		if(winningScore===p2Score){
			p2Display.classList.add("winner");
			gameOver=true;
		}
		p2Display.textContent = p2Score;
	}
})

resetButton.addEventListener("click",reset)

function reset(){
	p1Score=0;
	p2Score=0;
	p1Display.textContent=0;
	p2Display.textContent=0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver=false;
}

numInput.addEventListener("change",function(){
	winningScoreDisplay.textContent = numInput.value;
	winningScore=Number(numInput.value);
	reset();
})