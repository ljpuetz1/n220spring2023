//create canvas
function setup(){
    createCanvas(400,300);
    background(255,255,255);

}
//create draw for mouse pointer
function draw(){
    
    ellipse(mouseX,mouseY,10,10);
    fill(0,0,0);
//if the mouse is to the right of the screen make the pointer red
    if(mouseX> 200){
        fill(255,0,0)

    }
//if x is to the left of the screen make the pointer blue
        if(mouseX<200){
            fill(0,0,255)
        }
   
    
}
//idk why but if I move the mouse fast enough i can get the colors on the opposite sides, couldn't really find a fix for that.


