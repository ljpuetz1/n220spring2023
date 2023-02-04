
// creating a var to have a precise shape for the apples to be uniform
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
//setting up the draw funciton to make the apples show. 
function draw(){
    apple(20,20,x);
    apple(mouseX,mouseY,x);
    apple(90,90,x)
}
//setting up some logs to scheck how they will come out on the webpage.
console.log(apple);
console.log(draw);