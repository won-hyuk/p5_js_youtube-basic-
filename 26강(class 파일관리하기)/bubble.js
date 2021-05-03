class Bubble {
  constructor(tempX, tempY) {
    this.x = tempX;
    this.y = tempY;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }
  
  show() {
    fill(0);
    stroke(this.r, this.g, this.b);
    strokeWeight(3);
    ellipse(this.x, this.y, 50);
  }
  
  move() {
    this.x = this.x + random(-15, 15);
    this.y = this.y + random(-15, 15);
  }
}
