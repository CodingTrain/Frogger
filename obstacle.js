// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow

/* Implements the features of the Car object from the processing version,
 * but renamed to reflect that the logs also use this object.
 *
 * x: x position of the obstacle
 * y: y position of the obstacle
 * w: Obstacle width
 * h: Obstacle height
 * s: x speed of the obstacle
 */
function Obstacle(x, y, w, h, s) {
  Rectangle.call(this, x, y, w, h);
  this.speed = s;
}

// Extend Rectangle
Obstacle.prototype = Object.create(Rectangle.prototype);

// Move this obstacle by its speed, and wrap it if off the screen.
Obstacle.prototype.update = function() {
  this.move(this.speed, 0);
  if(this.x > width + grid_size) {
    this.x = - this.w - grid_size;
  }
  if(this.x < - this.w - grid_size) {
    this.x = width + grid_size;
  }
}

// Display this obstacle.
Obstacle.prototype.show = function() {
  fill(200);
  rect(this.x, this.y, this.w, this.h);
}
