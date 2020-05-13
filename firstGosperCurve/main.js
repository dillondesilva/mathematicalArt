var x = 0;
var y = 0;

// Parameters for Gosper Curve Control
const initOrder = 2;
const sizePerDash = 10;
const tiltAngle = 60;

let count = 1;
// L-System Rulesets
const aSet = "A-B--B+A++AA+B-";
const bSet = "+A-BB--B-A++A+B";

let currAngle = 90;

let strokeColor = "#F2AF88";
let strokeCount = 0;

function degreesToRadians(degrees) {
  return degrees * (Math.PI/180);
}

function handleChar(character, order) {
  switch (character) {
    case "A":
      GosperCurve(order, true);
      break;
    case "B":
      GosperCurve(order,  false);
      break;
    case "+":
      console.log("cow")
      currAngle += tiltAngle;
      break;
    case "-":
      currAngle += -1 * tiltAngle;
      break;
  }
}

function changeStrokeColor() {
  switch (strokeCount) {
    case 0:
      stroke("#5E88BF");
      strokeCount++;
      break;
    case 1:
      stroke("#F2E41D");
      strokeCount++;
      break;
    case 2:
      stroke("#D9C24E");
      strokeCount = 0;
      break;
  }
}

function GosperCurve(order, isA = true) {
  if (order === 0) {
    changeStrokeColor();

    var currAngleRads = degreesToRadians(currAngle);
    line(x, y, x + (sizePerDash * Math.cos(currAngleRads)), y + (sizePerDash * Math.sin(currAngleRads)));
    ellipse(x, y, 2);
    // stroke(255);
    // line(x, y, x, y + 10);
    // line(0, 0, sizePerDash, 0);
    // translate(sizePerDash, 0);
  
    y = y + sizePerDash * Math.sin(currAngleRads);
    x = x + sizePerDash * Math.cos(currAngleRads);
    count++;
    // console.log("yeet")
  } else if (isA) {
    for (var character = 0; character < aSet.length; character++) {
      console.log(currAngle, character, aSet[character])
      handleChar(aSet[character], order - 1);
    }
  } else {
    for (var character = 0; character < bSet.length; character++) {
      handleChar(bSet[character], order - 1);
    } 
  }
}

function drawGosperCurveSet(numberOfCurves, order) {
  for (i=0; i<numberOfCurves; i++) {
    push();
    translate(0, 0);
    GosperCurve(order);
    pop();
  }

}

function setup() { 
  createCanvas(1860, 1860);
  noFill();
  stroke(10);
  strokeWeight(1);
	background("#011140");
  frameRate(5);
  translate(0, height/5);
  drawGosperCurveSet(2, 1);
  drawGosperCurveSet(2, initOrder); 
  drawGosperCurveSet(2, initOrder + 1); 
  drawGosperCurveSet(2, initOrder + 2); 
  drawGosperCurveSet(3, initOrder + 3); 

  // push();
  // translate(width / 2, height / 2);
  // GosperCurve(initOrder);
  // pop();
  
} 


// var k = 0;

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