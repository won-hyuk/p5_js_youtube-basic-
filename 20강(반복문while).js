function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  let x = 0;
  while(x <= width) {
    fill(random(255), random(255), random(255));
    ellipse(x, 300, 10);
    x = x + 20;
  }  
}
