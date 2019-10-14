// Based on a mathematical formula by Hamid Naderi Yeganeh
// Source: https://blogs.scientificamerican.com/guest-blog/making-mathematical-art/

var n = 3000;
var s = 340;
var count = 0;
const MAX = 100;

function setup() { 
  createCanvas(800, 800);
	fill(0, 30);
  // stroke(500);
  noStroke();
	background(255);
	frameRate(30);
	push();
	translate(width/2,height/2);
	for(k=0; k<n; k++) {
		var a = 100 * PI * k/n;
    var b = 0.9*(cos(2 * PI * k/n) * sin(2 * PI * k/n));
    var r = 0.1 * a;
		var x = cos(a) * r;
		var y = sin(a) * r;

		x *= s
		y *= s
		r *= s

    ellipse(x, y, r);
    
    // if (k > 500) {
    //   fill(200, 50, 30, 50)
    // }

    // if (k > 1000) {
    //   fill(50, 150, 30, 50)
    // }

    // if (k > 1500) {
    //   fill(50, 70, 230, 50)
    // }
	}
	pop();
} 

function draw() { 
}