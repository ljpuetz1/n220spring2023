//create some variables to place in the boxes on click
var oText = "O";
var xText = "X";
var cube = document.querySelectorAll(".cube");
//create a variable that will stop the game if a win condition is met using booleans
var gameActive = true;

function refreshPage() {
  window.location.reload();
}
//create a click counter that will allow to know which turn it is
cube.forEach((cube) => {
  console.log(cube.innerHTML);
  cube.addEventListener("click", () => {
    //using an if statement so that if the block is filled in it can not be overided
    if (cube.innerHTML == "") {
      clickCount++;
    }
  });
});

//variable to grab the cube in order to have an event listener
let clickCount = 0;
function check(event) {
  cube.forEach((cube) => {
    cube.addEventListener("click", () => {
      if (cube.innerHTML == "" && gameActive) {
        if (clickCount % 2 == 0) {
          cube.innerHTML = xText;
          winCon();
        } else {
          cube.innerHTML = oText;
          winCon();
        }
      }
    });
  });

  let tellMe = event.target.getAttribute("data-answer");
}

function tieCon() {
  if ((gameActive = true)) {
    let valCount = 0;
    cube.forEach((cube) => {
      if (cube.innerHTML != "") {
        valCount++;
      }
    });
    if (valCount == 9) {
      gameActive = false;
      console.log("its a tie");
    }
  }
}
function winCon() {
  var winConditions = [
    //rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winConditions.length; i++) {
    let a = winConditions[i][0];
    let b = winConditions[i][1];
    let c = winConditions[i][2];
    if (
      cube[a].innerHTML !== "" &&
      cube[a].innerHTML === cube[b].innerHTML &&
      cube[b].innerHTML === cube[c].innerHTML
    ) {
      //end the game
      let youWon = document.getElementById("Win");
      youWon.innerHTML = cube[a].innerHTML + " win";
      console.log(cube[a].innerHTML + " win");
      //change game active to false to allow no other moves to be played.
      gameActive = false;
      return true;
    }
  }
  return false;
}
