var x=15;
//create an object
let someApple={weight:1,height:2
}
// call the object 
function apple(xpos,ypos,radius,fill){
    circle(xpos,ypos,15);
    rect(xpos,ypos-10,2,7)

}
function setup(){
    createCanvas(800,600)

}

function draw(){
    apple(20,20,x);
    apple(mouseX,mouseY,x);
}