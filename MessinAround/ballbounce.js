//position variables
let x =0;
let y =0;
//speed - velocity
let spd = 0;
let vel =0;
//acceleration
let acc =0;
let axe =0;

    let sMultiplier =0.07
    let vMultiplier =0.05

//make a canvas
    function setup(){
    createCanvas(800,600);
}
//create a ball 
    function draw(){
        background(100);
        ballMove();
        ellipse(40,40,40,40);
        }
//make the ball move
function ballMove(){
    acc = accelerationX;
    axe = accelerationY;
        spd = spd + axe;
        vel = vel + acc;
        y= y +vel * sMultiplier;
        x= x +spd * sMultiplier;
    //Bounce when at edge
    if(x<0){
     x=0;
     acc= -acc * vMultiplier;   
    }
    if(y<0){
    y=0;
    axe= -axe * vMultiplier;  
}
if (x> width - 20){
    x= width -20;
    spd= -spd * vMultiplier;
}
if( y> height -20){
    y = height -20;
    vel= -vel * vMultiplier
}
}