// Based on a mathematical formula by Hamid Naderi Yeganeh
// Source: https://blogs.scientificamerican.com/guest-blog/making-mathematical-art/

var n = 3000; 
var s = 1;
const MAX = 100;

const WIDTH = 800;
const HEIGHT = 800;


function calculateStrokeColor(iteration) {
  var strokeColor = color(iteration % 100 + 50, (iteration % 100) + 10, (iteration % 100) + 100);
  return strokeColor;
}
function setup() { 
  createCanvas(WIDTH, HEIGHT);
	noFill();
  strokeWeight(1);
	background("#D5B895");
  frameRate(30);
	push();
  translate(width/2,height/2);
  
	// for(k=-1*WIDTH; k<=WIDTH; k++) {
   
  //   var y = -(k * k) * 0.009;
  //   const strokeColor = calculateStrokeColor(abs(k));
  //   stroke(strokeColor);
  //   ellipse(k, y, 10)
  // }
  
	pop();
} 


var k = -1 * WIDTH;

function draw() {
  translate(width/2,height/2);
   
  var y = -(k * k) * 0.009 + 400;
  const strokeColor = calculateStrokeColor(abs(k));
  stroke(strokeColor);
  ellipse(k, y, 10)

  pop();

  if (k > WIDTH) {
    k = 0;
    clear();
  } else {
    k++;
  }
}