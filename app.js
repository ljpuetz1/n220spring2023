



let x = 1;
function setup(){
    createCanvas(800,800);
console.log(x)}

function draw(){
    
    circle(mouseX,mouseY, x );
    //once clicked, draw a circle.
    if(mouseIsPressed){
    //create an if that only allows the variable to grow up until 50 pixels
    //increase the size of the circle on mouse click
        if (x <50){
             x++;
        } 
    
}
//Log the variable x in draw
console.log(x);

    
}