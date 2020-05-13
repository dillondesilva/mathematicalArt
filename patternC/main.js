var n = 7000; 
var s = 2;
const MAX = 100;

const numShapesToConstruct = 3;

function drawSection() {
  for(k=0; k<=n; k++) {
    var radius = sin(k) * 100;
    var x = (radius * cos(k)) / log(radius);
    var y = (radius * sin(k)) / log(radius);
  
    ellipse(x * s, y * s, radius * s);
  
    stroke((k % 150) + 25);
  } 
}

function setup() { 
  createCanvas(800, 800);
	noFill();
  strokeWeight(0.1);
	background(255);
  frameRate(24);
  push();
  translate(width/2, height/2); 
  let strokeCounter = 0.001;
  for(k=0; k<=n; k++) {
    var radius = sin(k) * 60;
    var x = (radius * cos(k))(sin(k/14000) * 100);
    var y = (radius * tan(k));
    ellipse(x * s, y * s, radius * s);
     
    if (k < n*0.5) {
      stroke("#1A1B4A");
    } else if (k < n*0.5) {
      stroke("#3F416E") 
    } else if (k<n*0.75) {
      stroke("#775D9E")  
    } else {
      stroke("#3E939E")
    }

    if(strokeCounter <= 0.1) {
      strokeCounter += 0.001;
    } else {
      strokeCounter = 0.001;
    }

    strokeWeight(strokeCounter);

  } 

  // translate((width/2), height/2 * -1); 
  // for(k=0; k<=n; k++) {
  //   var radius = sin(k) * 100;
  //   var x = (radius * cos(k));
  //   var y = (radius * tan(k));
  
  //   ellipse(x * s, y * s, radius * s);
  
  //   stroke((k % 150) + 25);
  // } 
  pop();
} 
var k = 0;
function draw() {
  // translate(width/2, height/2); 
  // let strokeCounter = 0.001;
  // var radius = sin(k) * 60;
  // var x = (radius * cos(k));
  // var y = (radius * tan(k));
  // ellipse(x * s, y * s, radius * s);
    
  // if (k < n*0.5) {
  //   stroke("#1A1B4A");
  // } else if (k < n*0.5) {
  //   stroke("#3F416E") 
  // } else if (k<n*0.75) {
  //   stroke("#775D9E")  
  // } else {
  //   stroke("#3E939E")
  // }

  // if(strokeCounter <= 0.1) {
  //   strokeCounter += 0.001;
  // } else {
  //   strokeCounter = 0.001;
  // }

  // strokeWeight(strokeCounter);


  // if (k > n) {
  //   k = 0;
  //   clear();
  // } else {
  //   k++;
  // }
}