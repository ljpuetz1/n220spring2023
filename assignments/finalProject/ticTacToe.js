//create an array of numbers to track the ammount of times clicked. 
var numberClick = [];
for (var i = 0; i <= 50; i++) {
  numberClick.push(i);
}
//create some variables to place in the boxes on click 
var oText = "O";
var xText = "X";
//these variables will correspond to the array for the even and odd clicks
var xClick = numberClick.filter((x) => x % 2 === 0);
var oClick = numberClick.filter((n) => n % 2);
 

console.log(oClick);
console.log(numberClick);
console.log(xClick);
