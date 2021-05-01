function setup() {
  createCanvas(600, 600);
}

let bubble = {
  x: 300,
  y: 300,
  show: function() {
    fill(0);
    stroke(255);
    strokeWeight(3);
    ellipse(this.x, this.y, 20);
  },
  move: function() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
}

function draw() {
  background(0);
  bubble.show();
  bubble.move();
}


