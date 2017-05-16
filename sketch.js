var floor_height = 300;
var block_size = 50;

var x0 = 200; // starting position of block

var k = 1;    // spring constant
              // (The larger this value is, the
              // stiffer the spring.)
var m = 1;    // mass of block
var h = 1/60; // timestep

var x, v;     // position and velocity

function setup() {
    createCanvas(400, 400);
    
    // Set initial position and value.
    x = x0;
    v = 0;
    
    // Draw with thick black lines.
    stroke(0);
    strokeWeight(2);
}

function draw() {
    // Draw on a white background.
    background(255);
    
    // Drag the block to a different location
    // with the mouse.
    if (mouseIsPressed) {
        x += (mouseX - pmouseX);
    }
    
    // This is where the physics happens!
    update();
    
    // Draw the floor.
    line(0, floor_height,
        width, floor_height);
    
    // Draw the block.
    rect(x, floor_height - block_size,
        block_size, block_size);
}

function update() {
    // TODO: Implement the governing equations
    // that will make the block move as if it's
    // attached to a spring!
}
