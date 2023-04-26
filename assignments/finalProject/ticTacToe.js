var numberClick = [];
for (var i = 0; i <= 50; i++) {
  numberClick.push(i);
}
var oText = "O";
var xText = "X";
var xClick = numberClick.filter((x) => x % 2 === 0);
var oClick = numberClick.filter((n) => n % 2);

console.log(oClick);
console.log(numberClick);
console.log(xClick);
