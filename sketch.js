
var r = 50;
var g = 100;
var b = 200;

function setup(){

  createCanvas(1200,400);
}


function draw(){
  
  r = map(mouseX, 0 ,1200, 0, 255);
  g = map(mouseX, 0 ,1000, 0, 155);
  b = map(mouseX, 0 ,800, 0, 125);

  background(r,g,b);

  fill(0,200,200);
  ellipse(mouseX,mouseY,70,70);
}