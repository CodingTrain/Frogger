// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow

function Frog(x, y, size) {
  Rectangle.call(this, x, y, size, size);
}

Frog.prototype = Object.create(Rectangle.prototype);
