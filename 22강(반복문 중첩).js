function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  for(let x = 0; x <= width; x = x + 20) {
    for (let y = 0; y <= height; y = y + 20) {
       fill(random(255), random(255), random(255));
       ellipse(x, y, 10); 
    }
  }
}
