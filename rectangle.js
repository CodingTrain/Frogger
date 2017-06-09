// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow

// Implements a rectangle for testing collisions.
function Rectangle(x, y, w, h) {
  this.left = x;
  this.top = y;
  this.right = x + w;
  this.bottom = y + h;
}

// Check intersection with any other Rectangle object.
Rectangle.prototype.intersects = function(other) {
  return !(
    this.right  < other.left   ||
    this.left   > other.right  ||
    this.bottom < other.top    ||
    this.top    > other.bottom
  );
}

// Moves this rectangle by the provided x and y distances.
Rectangle.prototype.move = function(x, y) {
  this.left += x;
  this.right += x;
  this.top += y;
  this.bottom += y;
}
