function setup() {
  createCanvas(600, 600);
}

let r2 = 0;
let speed = 10;

function draw() {
  background(0);
  fill(255);
  r2 = r2 + speed;
  if(r2 > width) {
    speed = speed * -1;
  } else if(r2 < 0) {
    speed = speed * -1;
  }
  ellipse(width/2, height/2, r2);
}
