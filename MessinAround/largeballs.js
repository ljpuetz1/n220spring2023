//Create an application that draws a circle to the center of the screen every update frame, starting with a diameter of 1. Using a global variable, 
//change increase the diameter of the circle by 1 every frame. Once the circle gets a diameter of 200, set its diameter back to 1.
//the ball gets big until it doesnt.
var x = 0;
var y = 10;
var value = 1;//global variable :)?
//create canvas
function setup(){
    createCanvas(800,600)
}
//create ball

function draw(){
    ellipse(400,300,1,1);

    if (mouseIsPressed){
        if(value<200);
        value++
    }
    else if(value>200)
    value=1;
    
}
console.log(value)