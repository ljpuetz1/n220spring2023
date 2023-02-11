//create an object to represent the ball

let Ball={xPos:100,yPos:200,radiusx:60,radiusy:60,speed:10,}

//create a canvas for the ball
function setup(){
    createCanvas(900,900);
    background(000000);
}
//invoke the object in a draw ball funcion
function drawBall(Ball){
fill("#ff0011");
ellipse(Ball.xPos,Ball.yPos,Ball.radiusx,Ball.radiusy,Ball.speed);

}







function draw(){
    drawBall(Ball);
  
}
