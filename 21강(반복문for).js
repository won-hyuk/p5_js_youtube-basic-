function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  // let x = 0;
  // while(x <= width) {
  //   fill(random(255), random(255), random(255));
  //   ellipse(x, 300, 10);
  //   x = x + 20;
  // }  
  for(let x = 0; x <= width; x = x + 20) {
    fill(random(255), random(255), random(255));
    ellipse(x, x, 10);
  }
}
