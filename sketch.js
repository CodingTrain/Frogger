// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow

var frog;

var grid_size = 50;

function setup() {
  createCanvas(500, 500);
  frog = new Frog(width / 2, height - grid_size, grid_size);
}

function draw() {
  background(0);
  frog.show();
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    frog.move(0, -grid_size);
  } else if(keyCode === DOWN_ARROW) {
    frog.move(0, grid_size);
  } else if(keyCode === LEFT_ARROW) {
    frog.move(-grid_size, 0);
  } else if(keyCode === RIGHT_ARROW) {
    frog.move(grid_size, 0);
  }
}
