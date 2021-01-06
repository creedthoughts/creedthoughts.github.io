let scranton;
function setup(){
    scranton=loadImage("map.png");
    createCanvas(1000,518);
    frameRate(30); //changes the framerate

}

function draw(){ //draw by default is 60 fps
        background(scranton);
}

function mousePressed() {
  ellipse(mouseX, mouseY, 5, 5);
  // prevent default
  return false;
}