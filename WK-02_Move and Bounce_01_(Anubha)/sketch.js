//  Step 1: declare a variable
let boxX = 150;
let boxY = 275;
let boxC = 300;
let boxZ = 160;
let rightdirection = true;

//  Step 2: initialize the variable
//  ____ = 300;

function setup() {
  createCanvas(600, 600);

}

function draw() {
  if(boxX > 300){
    rightdirection = false;
  }
  if(boxX < 0){
    rightdirection = true;
  }
  background(188, 143, 143);
   fill (255)
  strokeWeight(2);
stroke(24);
  rect(boxX,50,300,500,25);
  fill (255);
  rect(boxY,90,50,10);
  fill (255)
  circle(boxC,500,60);
  fill(0);
     rect(boxZ,130,280,320);
  //background(0);

// Move this box to the right
  //rectMode(CENTER);
//  rect(300, 300, 50, 50)



//  Step 3: use the variable!
//rect(boxX, 300, 50 ,50)
if (rightdirection){
  boxX = boxX + 1;
  boxY = boxY + 1;
  boxC = boxC + 1;
  boxZ = boxZ + 1;
} else {
  boxX = boxX - 1;
  boxY = boxY - 1;
  boxC = boxC - 1;
  boxZ = boxZ - 1;
}

//  rect(____, 300, 50, 50)
}
