// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow

function Frog(x, y, size) {
  Rectangle.call(this, x, y, size, size);
}

Frog.prototype = Object.create(Rectangle.prototype);

Frog.prototype.show = function() {
  rectMode(CORNERS);
  color(255);
  rect(this.left,  this.top,
       this.right, this.bottom);
}
