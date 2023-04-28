//create global variable for the score.
var score = 0;
//x is me
var x = 0;
//y is bot
var y = 0;
//create an array for the computer to use.
var rpsArray = ["", "paper", "scissors"];
//rpsArray[0];
//rpsArray[1];//paper
//rpsArray[2];//scissors

var counterElement = document.getElementById("counter");
function playerMove(playerChoice) {
  console.log(playerChoice);
  x = playerChoice;
  y = rpsArray[Math.floor(Math.random() * 3)];
  console.log(y);
  winner();
}

function winner() {
  if (x == "guard") {
    score -= 0.5;
    console.log(score);
  } else if (x == y) {
    console.log("You tied try again");
  } else if (
    (x == "" && y == "scissors") ||
    (x == "paper" && y == "") ||
    (x == "scissors" && y == "paper")
  ) {
    score += 1;
    console.log("You WIN " + score);
  } else if (
    (y == "" && x == "scissors") ||
    (y == "paper" && x == "") ||
    (y == "scissors" && x == "paper")
  ) {
    score -= 1;
    console.log("You LOST " + score);
  }
  counterElement.innerHTML = "Score:" + score;
}
