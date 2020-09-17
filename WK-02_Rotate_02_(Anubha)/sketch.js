//  Additional references to understanding controlling angles
//  https://p5js.org/reference/#/p5/rotate
//  https://www.youtube.com/watch?v=o9sgjuh-CBM&t=18m0s
//  https://genekogan.com/code/p5js-transformations/


let angle = 0;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(188, 143, 143);
  fill(255);

  push();
  translate(300, 300);
  strokeWeight(2);
  stroke(24);
  rotate(angle);
  rect(150, 50, 150, 250, 25);
  fill(255);
  rect(215, 80, 25, 5);
  fill(255)
  circle(225, 280, 20);
  fill(0);
  rect(155, 105, 140, 160);
  pop();

  angle++;
}
