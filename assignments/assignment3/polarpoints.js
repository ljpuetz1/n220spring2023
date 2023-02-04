//polar points assignment

//start with canvas
function setup(){
    createCanvas(800,600);
    angleMode(degrees);
}
//create polar point function and add argument r
function polarPoint(){
    
    var r=50;
    
    
    var dx=r* Math.sin(mouseX);
    var dy=r* Math.cos(mouseX);
    return createVector(x,y)
   
   
}


function draw(){
    //give a little color for funsies
    
    var res=polarPoint;
   circle(res.x,res.y,10)
    background(230,210,189);
    
    drawPolar(mouseX+100,mouseY);
    drawPolar(mouseX+75,mouseY-40);
    drawPolar(mouseX+45,mouseY-70);
    drawPolar(mouseX,mouseY-100);

    drawPolar(mouseX-100,mouseY);
    drawPolar(mouseX-75,mouseY+40);
    drawPolar(mouseX-45,mouseY+70);
    drawPolar(mouseX,mouseY+100);

    drawPolar(mouseX+35,mouseY+70);
    drawPolar(mouseX+70,mouseY+40);
    drawPolar(mouseX-35,mouseY-70);
    drawPolar(mouseX-70,mouseY-40);
    
}
function drawPolar(mouseX,mouseY){
    circle(mouseX,mouseY,40);
    //blue
    fill(32,70,190);


}

