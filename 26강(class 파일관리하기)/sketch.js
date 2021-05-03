let bubble1;
let bubble2;
function setup() {
  createCanvas(600, 600);
  bubble1 = new Bubble(200, 200);
  bubble2 = new Bubble(400, 400);
}

function draw() {
  background(0);
  bubble1.show();
  bubble1.move();
  bubble2.show();
  bubble2.move();
}


