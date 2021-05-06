let myArray = ['행복한', '밸리', '환영합니다'];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  textSize(32);
  fill(255);
  for(let i = 0; i < myArray.length; i++) {
    text(myArray[i], 100, 100 * i + 100);
  }
}


// 등차수열
// 1, 3, 5, 7, 9, 11, 13
// 공차 = 2
// 1 * (n-1)*2
// 100, 200, 300, 400
// 100 * i + 100

// i = i + 1
// i += 1
// i++
