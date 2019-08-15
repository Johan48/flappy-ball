var bird;
var pipes = [];

function setup() {
  createCanvas(640, 480);
  bird = new Bird();
  pipes.push(new Pipe());
}
//Begin to draw objects
function draw() {
  background(99,04,04);
  
  for (var i = pipes.length-1; i >=0; i--) {
    pipes[i].show();
    pipes[i].update();
    
    if (pipes[i].hits(bird)) {
     console.log("HIT"); 
    }
  }
  
  bird.update();
  bird.show();
  
  
  if (frameCount % 75 == 0) {
   pipes.push(new Pipe()); 
  }
}

function keyPressed() {
  if (key == ' ') {
   bird.up(); 
  }
}
