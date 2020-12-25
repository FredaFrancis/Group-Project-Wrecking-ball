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
  box2=new Box(780,510,70,70)
  box3=new Box(780,460,70,70)
  box4=new Box(780,410,70,70)
  box5=new Box(780,360,70,70)
  box6=new Box(780,310,70,70)
  box7=new Box(780,260,70,70)
  box8=new Box(780,210,70,70)

  box11=new Box(900,560,70,70)
  box12=new Box(900,510,70,70)
  box13=new Box(900,460,70,70)
  box14=new Box(900,410,70,70)
  box15=new Box(900,360,70,70)
  box16=new Box(900,310,70,70)
  box17=new Box(900,260,70,70)
  box18=new Box(900,210,70,70)
 rope=new Rope(ball.body,{x:650,y:0})
 Engine.run(engine);
}

function draw() {
  background(255,255,255);
  Engine.update(engine)  
  ground1.display();
  ball.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()

  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()

  rope.display()
}
function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}