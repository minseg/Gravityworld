let ball;

function setup() {
  createCanvas(400, 200);

  ball = new Particle();
}


function draw() {
  background(220);

  let gravity = createVector(0, 0.3);
  ball.addForce(gravity);

  ball.update();
  ball.show();

  FileList(0);
  textsize(100);
  text('2423032 김민서', 100,200);
}
