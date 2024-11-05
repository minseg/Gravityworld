let ball;

function setup() {
  createCanvas(400, 200);

  ball = new Particle();
}

function draw() {
    background(220);
  
    // Create an angled force vector instead of downward gravity
    let angledForce = createVector(0.2, 0.3);  // Adjust x and y values as needed
    ball.addForce(angledForce);
  
    ball.update();
    ball.show();
  }
  


