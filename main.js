// Based on a mathematical formula by Hamid Naderi Yeganeh
// Source: https://blogs.scientificamerican.com/guest-blog/making-mathematical-art/

var n = 12000;
var s = 340;
var count = 0;
const MAX = 100;

function setup() { 
  createCanvas(800, 800);
	fill(0, 30);
	noStroke();
	background(255);
	frameRate(30);
	push();
	translate(width/2,height/2);
	for(k=0; k<n; k++) {
		var a = 10 * PI * k/n;
		var b = 1.2*(cos(29 * PI * k/n) * cos(22* PI * k/n));
		var x = cos(a)*b;
		var y = sin(a)*b;
    var r = 1/200 * sin(a);

		x *= s
		y *= s
		r *= s

		ellipse(x, y, r);
	}
	pop();
} 

function draw() { 
}