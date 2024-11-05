let ball;

function setup() {
  createCanvas(400, 200);

  ball = new Particle();
  wind = createVector(0, 0);
}

function draw() {
    background(220);
  
  // let gravity = createVector(0, 0.3);
  // ball.addForce(gravity);

  // if(mouseIsPressed){
  // let wind = createVector(0.1, 0);
  // ball.addForce(wind);
  // }

  //let took = createVector();
  

    ball.pos

    ball.update();
    ball.show();
}
 
  

  function mouseCliked(){

  //let took = createVector();
  
  let mPos = createVector(mouseX, mouseY);
  let took = p5.Vector.sub(ball.pos, mPos);
  took.mult(0.1);
  ball.addForce(took);
  }
  


