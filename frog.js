// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow

function Frog(x, y, size) {
  Rectangle.call(this, x, y, size, size);

  this.sitting_on = null;
}

Frog.prototype = Object.create(Rectangle.prototype);

Frog.prototype.attach = function(other) {
  this.sitting_on = other;
}

Frog.prototype.update = function() {
  if(this.sitting_on !== null) {
    this.x += this.sitting_on.speed;
  }
  this.x = constrain(this.x, 0, width - this.w);
}

Frog.prototype.show = function() {
  fill(0, 255, 0, 200);
  rect(this.x, this.y, this.w, this.h);
}
