// https://mappa.js.org/docs/getting-started.html

// Other possible interesting videos:
// Subscribers data: https://www.youtube.com/watch?v=Ae73YY_GAU8&feature=youtu.be
// Earthquake Data: https://www.youtube.com/watch?v=ZiYdOwOrGyc&t=1083s

// For integrating images: https://www.youtube.com/watch?v=FVYGyaxG4To

// Create a variable to hold our map
let myMap;
// Create a variable to hold our canvas
let canvas;
// Create a new Mappa instance using Leaflet
const mappa = new Mappa('Leaflet');

// These are all our map options in a single JavaScript object
// We will access these map options with the DOT notation
let options = {
  lat: 42.95,
  lng: -78.82,
  zoom: 15,
  style: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
}

function preload() {
  // With this code, you will need to convert your GPX file to CSV
  // Google search online converters and select one to test
  // firstPath = loadTable('track_points.csv', 'csv', 'header');

  // STEP 1: Swap out your CSV file
  firstPath = loadTable('Anubha.csv', 'csv', 'header');
}

function setup() {
  canvas = createCanvas(800, 800);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  myMap.onChange(clear);

  myMap.onChange(drawPath.bind(null, firstPath));
}

function draw() {
}

function drawPath(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    console.log(latitude);
    console.log(longitude);

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      console.log("Yes!");
      // Step 2: Customize graphics
      noStroke(); // Control stroke: https://p5js.org/reference/#/p5/stroke
      fill(200, 150, 155, 10); // Control fill: https://p5js.org/reference/#/p5/fill
      // pos.x and pos.y are the x & y position on the 2D screen
      // Control the size of the circles in parameters 3 and 4 (currently they are 20)
      // Instead of an ellipse, consider using any of the other shapes in the p5 library
      ellipse(pos.x, pos.y, 20, 20)

      stroke('green');
      strokeWeight(2);
      line(pos.x, pos.y, pos.x, pos.y);
    }
  }
}
