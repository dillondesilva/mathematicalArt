// Based on a mathematical formula by Hamid Naderi Yeganeh
// Source: https://blogs.scientificamerican.com/guest-blog/making-mathematical-art/

var n = 3000; 
var s = 1;
const MAX = 100;

function setup() { 
  createCanvas(800, 800);
	noFill();
  strokeWeight(0.1);
	background(30);
  frameRate(5);
	push();
  translate(width/2,height/2);
  
	for(k=0; k<=n; k++) {
   
    var radius = (cos(k) / sin(k)) * 100;
    var x = radius * cos(k);
    var y = radius * sin(k);

    ellipse(x * s, y * s, radius * s);

    stroke((k % 150) + 25)
  }
  
	pop();
} 


var k = 0;

function draw() {
  // translate(width/2,height/2); 
  // var radius = (cos(k) / sin(k)) * 100;
  // var x = radius * cos(k);
  // var y = radius * sin(k);

  // ellipse(x, y, radius);

  // stroke((k % 150) + 25);
  // pop();

  // if (k > n) {
  //   k = 0;
  //   clear();
  //   save("coolcat", ".png")
  // } else {
  //   k++;
  // }
}