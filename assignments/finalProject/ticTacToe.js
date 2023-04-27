//create an array of numbers to track the ammount of times clicked.
var numberClick = [];
for (var i = 0; i <= 50; i++) {
  numberClick.push(i);
}
//these variables will correspond to the array for the even and odd clicks
var xClick = numberClick.filter((x) => x % 2 === 0);
var oClick = numberClick.filter((n) => n % 2);

//create some variables to place in the boxes on click
var oText = "O";
var xText = "X";
var cube = document.querySelectorAll(".cube");

cube.forEach((cube) => {
  cube.addEventListener("click", () => {
    clickCount++;
  });
});

//variable to grab the cube in order to have an event listener
let clickCount = 0;
function check(event) {
  cube.forEach((cube) => {
    cube.addEventListener("click", () => {
      if (clickCount % 2 == 0) {
        cube.innerHTML = xText;
      } else {
        cube.innerHTML = oText;
      }
    });
  });
  let tellMe = event.target.getAttribute("data-answer");
  console.log(tellMe);
  console.log(clickCount);
}
function winCon() {
  for (let i = 0; i < 9; i + 3) {
    if (
      cube[i].innerHTML !== "" &&
      cube[i].innerHTML === cube[i + 1].innerHTML &&
      cube[i + 1].innerHTML === cube[i + 2].innerHTML
    ) {
      return true;
    }
  }
}

console.log(winCon);
