
//create objects for rectangles.
let Tennis={xPos:100,yPos:200,width:40,height:100}

let TennisDown={xPos:140,yPos:200,width:40,height:100}

//create a canvas for the draw function.
function setup(){
    createCanvas(800,600);
    


}
//invoke the objects.
function drawTennis(Tennis){
    rect(Tennis.xPos,Tennis.yPos,Tennis.width,Tennis.height);
    fill("#6fa287");
    //create event listeners to allow for movement
    if(keyIsDown(UP_ARROW)){
        Tennis.yPos++;
    }
    if(keyIsDown(DOWN_ARROW)){
        Tennis.yPos--;
    }
}
function drawTennisDown(TennisDown){
    rect(TennisDown.xPos,TennisDown.yPos,TennisDown.width,TennisDown.height);
    fill("#ffff00")
     //create event listeners to allow for movement
    if(keyIsDown(UP_ARROW)){
        TennisDown.yPos--;}
    if(keyIsDown(DOWN_ARROW)){
        TennisDown.yPos++;
    }
}
//call the objects with the draw function. 
function draw(){
    drawTennis(Tennis);
    drawTennisDown(TennisDown);
    
}


