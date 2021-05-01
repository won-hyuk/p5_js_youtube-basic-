let bubble1;
let bubble2;

function setup() {
  createCanvas(600, 600);
  bubble1 = new Bubble();
  bubble2 = new Bubble();
}

function draw() {
  background(0);
  bubble1.show();
  bubble1.move();
  bubble2.show();
  bubble2.move();
}

class Bubble{
  constructor() {
    this.x = 300;
    this.y = 300;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }
  show() {
    fill(0);
    stroke(this.r, this.g, this.b);
    strokeWeight(3);
    ellipse(this.x, this.y, 20); 
  }
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
}
