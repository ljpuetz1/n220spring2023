var x = 0;
var speed = 5;
//create canvas
function setup() {
  createCanvas(800, 600);
}
// create ball
function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  ellipse(x, 200, 100, 100);

  if (x > width) {
   
    speed = -7;
  }
  else if (x<0){
    speed=5;
  }
  // if off the right say off the screen
  if (x> width){
    print("OFF THE SCREEN");
  }
  // if on print on the creen
  else if(x < width){
    print("on the screen")
  }
//if off the left print off the screen
  if(x<0){
    print("OFF THE SCREEN");
  }
  else if(x > 0){
    print("on the screen")
  }

  x = x + speed;
}