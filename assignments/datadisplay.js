
let Block={xPos:100,yPos:200,width:40,height:50,color:"#FF0120",
}
function setup(){
createCanvas(800,600);

}
function drawBlock(Block){
rect(Block.xPos,Block.yPos,Block.width,Block.height,);
strokeWeight(10);


fill("#FF0120")



}

function draw(){
    drawBlock(Block);
}

