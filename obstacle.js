// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow

// Implements the features of the Car object from the processing version,
// but renamed to reflect that the logs also use this object.
function Obstacle(x, y, w, h, s) {
  Rectangle.call(this, x, y, w, h);
  this.speed = s;
}

Obstacle.prototype = Object.create(Rectangle.prototype);

Obstacle.prototype.update = function() {
  this.move(this.speed, 0);
  if(this.x > width + grid_size) {
    this.x = - this.w - grid_size;
  }
  if(this.x < - this.w - grid_size) {
    this.x = width + grid_size;
  }
}

Obstacle.prototype.show = function() {
  fill(200);
  rect(this.x, this.y, this.w, this.h);
}
