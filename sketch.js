// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow

var frog;

// This serves to replace the cars and logs array from the processing verion.
var obstacles = [];

var grid_size = 50;

function resetGame() {
  frog = new Frog(width / 2, height - grid_size, grid_size);
}

function setup() {
  createCanvas(500, 500);
  resetGame();

  // ROW 1
  for(var i = 0; i < 2; i++) {
    var x = i * 300;
    var y = height - 2 * grid_size;
    obstacles.push(new Obstacle(x, y, 2 * grid_size, grid_size, 2));
  }

  // ROW 2
  for(var i = 0; i < 2; i++) {
    var x = i * 200 + 150;
    var y = height - 3 * grid_size;
    obstacles.push(new Obstacle(x, y, grid_size, grid_size, -3.5));
  }

  // ROW 3
  for(var i = 0; i < 3; i++) {
    var x = i * 150 + 25;
    var y = height - 4 * grid_size;
    obstacles.push(new Obstacle(x, y, grid_size, grid_size, 1.2));
  }

  // ROW 5
  for(var i = 0; i < 2; i++) {
    var x = i * 250 + 100;
    var y = height - 6 * grid_size;
    obstacles.push(new Obstacle(x, y, 3 * grid_size, grid_size, 2.3));
  }

  // ROW 6
  for(var i = 0; i < 3; i++) {
    var x = i * 200 + 30;
    var y = height - 7 * grid_size;
    obstacles.push(new Obstacle(x, y, 2 * grid_size, grid_size, -1.3));
  }

  // ROW 7
  for(var i = 0; i < 2; i++) {
    var x = i * 400 + 10;
    var y = height - 8 * grid_size;
    obstacles.push(new Obstacle(x, y, 4 * grid_size, grid_size, 0.5));
  }
}

function draw() {
  background(0);
  fill(255, 100);
  rect(0, height - grid_size, width, grid_size);
  rect(0, height - 5 * grid_size, width, grid_size);
  rect(0, 0, width, 2 * grid_size);

  var intersects = null;

  for(var i = 0; i < obstacles.length; i++) {
    obstacles[i].show();
    obstacles[i].update();
    if(frog.intersects(obstacles[i])) {
      intersects = obstacles[i];
    }
  }

  frog.attach(null);
  if(frog.y >= height - grid_size * 5) {
    if(intersects !== null) {
      // Intersection with car
      resetGame();
    }
  } else if(frog.y >= 2 * grid_size){
    if(intersects === null) {
      // Not on a log/turtle
      resetGame();
    } else {
      frog.attach(intersects);
    }
  }

  frog.update();
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
