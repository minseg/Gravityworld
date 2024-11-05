let ball;

function setup() {
  createCanvas(400, 200);
  ball = new Particle();
  wind = createVector(0, 0); // 바람 초기화
}

function draw() {
  background(220);

  // 중력 벡터 설정 (아래 방향)
 // let gravity = createVector(0, 0.3);
  //ball.addForce(gravity);

  //if (mouseIsPressed) {
 // let wind = createVector(0.1, 0);
 // ball.addForce(wind);
  //}

  
  ball.pos
  

  // 파티클 업데이트 및 표시
  ball.update();
  ball.show();
}

function mouseClicked() {
//let took = createVector();
let mPos = createVector(mouseX, mouseY);
let took = p5.Vector.sub(ball.pos, mPos);
took.mult(0.1);
ball.addForce(took);
}
