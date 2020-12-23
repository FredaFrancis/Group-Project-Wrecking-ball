const Bodies=Matter.Bodies
const Engine=Matter.Engine
const World=Matter.World
const Constraint=Matter.Constraint
var ground1

var world,engine
function setup() {
  
  createCanvas(1600,600);
  engine = Engine.create();
  world=engine.world
  ground1=new Ground(600,height,1200,40)
  ball=new Ball(650,250,40)
  box1=new Box(780,560,70,70)

 rope=new Rope(ball.body,{x:650,y:0})
 Engine.run(engine);
}

function draw() {
  background(255,255,255);
  Engine.update(engine)  
  ground1.display();
  ball.display()
  box1.display()
  rope.display()
}
function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}