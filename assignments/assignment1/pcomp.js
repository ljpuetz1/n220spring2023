



let x = 1;
function setup(){
    createCanvas(800,800);
console.log(x)}

function draw(){
    
    rect(mouseX,mouseY, x );
    //once clicked, draw a circle.
    if(mouseIsPressed){
    
    //increase the size of the rectangle on mouse click
        if (x <20){
             x++;
        } 

        
        }
    
}
//Log the variable x in draw
console.log(x);

    
