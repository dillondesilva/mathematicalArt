var x = 0;
var y = 0;

const lSystemReplacementRules = "A-B--B+A++AA+B-";

// Parameters for Gosper Curve Control
const initOrder = 3;
const sizePerDash = 50;
const tiltAngle = 60;

// L-System Rulesets
const aSet = "A-B--B+A++AA+B-";
const bSet = "+A-BB--B";

let currAngle = 90;

function changeAngle(thetaParams) {
  currAngle += thetaParams;
}

function handleChar(character, order) {
  switch (character) {
    case "A":
      GosperCurve(order, true);
    case "B":
      GosperCurve(order,  false);
    case "+":
      changeAngle(-1 * tiltAngle);
    case "-":
      changeAngle(tiltAngle);
  }
}

function GosperCurve(order, isA = true) {
  if (order === 0) {
    line(x, y, (sizePerDash * Math.cos(currAngle)), (sizePerDash * Math.sin(currAngle)));
    y = sizePerDash * Math.sin(currAngle);
    x = sizePerDash * Math.cos(currAngle);
  } else if (isA) {
    for (var character = 0; character < aSet.length; character++) {
      handleChar(aSet[character], order - 1);
    }
  } else {
    for (var character = 0; character < bSet.length; character++) {
      handleChar(bSet[character], order - 1);
    } 
  }
}

function setup() { 
  createCanvas(800, 800);
  noFill();
  stroke(10);
  strokeWeight(2);
	background(255);
  frameRate(5);
	push();
  translate(width/2,height/2);
  
	GosperCurve(initOrder);
	pop();
} 


var k = 0;

// function draw() {
//   // translate(width/2,height/2); 
//   // var radius = (cos(k) / sin(k)) * 100;
//   // var x = radius * cos(k);
//   // var y = radius * sin(k);

//   // ellipse(x, y, radius);

//   // stroke((k % 150) + 25);
//   // pop();

//   // if (k > n) {
//   //   k = 0;
//   //   clear();
//   //   save("coolcat", ".png")
//   // } else {
//   //   k++;
//   // }
// }