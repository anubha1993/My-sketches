let opacity = 1.0;
let isVisible = true;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  if (opacity < 0.0) {
    opacity = 0;
    isVisible = true;
  } else if (opacity > 1.0) {
    isVisible = false;
  }

  // Render Phone
  background(188, 143, 143);
  fill ('rgba(255, 255, 255, ' + opacity + ')');
  strokeWeight(2);
  stroke('rgba(0, 0, 0, ' + opacity + ')');
  rect(150, 50, 300, 500, 25);
  fill ('rgba(255, 255, 255, ' + opacity + ')');
  rect(275, 90, 50, 10);
  fill ('rgba(255, 255, 255, ' + opacity + ')');
  circle(300, 500, 60);
  fill ('rgba(0, 0, 0, ' + opacity + ')');
  rect(160, 130, 280, 320);

  // Control Visibility
  if (isVisible) {
    opacity = opacity + 0.007;
  } else {
    opacity = opacity - 0.007;
  }
}
