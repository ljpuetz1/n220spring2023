
//trying to create a var to change colors depending on where cursor is
var a={
    from: 0,
    to:1000
}
//create something to be counted in console
let x= 10
// trying to create a var to change to a random color, not sure if this works I tried to make a range of numbers that would change by frame
var b={
    from:0,
    to:255
}
// create canvas 
function setup(){
    createCanvas(windowWidth,windowHeight);
    console.log(x);
// create draw
}function draw(){
    rect(mouseX,mouseY,x);
    fill(0,144,155);
    if(mouseIsPressed){

        if(x<100)
        x++

    }
    


    if(mouseX<a){
        fill(b,b,b)
    }
    //create log to be counted every frame
    console.log(x)
}

