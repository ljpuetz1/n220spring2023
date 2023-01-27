function setup() {
    createCanvas(400, 400);
    colorMode(HSB, 400);
}

function draw() {
    background(220);
    noFill();
    noStroke();
    for(var y=10;y<400; y+=40){
        for(var x=10; x<400; x+=40){

            var myHue = map(y,0,400,230,320);
            fill(myHue,400-x,400);

            var rad = dist(x,y,mouseX, mouseY)/4;
            ellipse(x,y,rad);
        }
    }
}