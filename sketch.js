const Bodies=Matter.Bodies
const Engine=Matter.Engine
const World=Matter.World

var ground1

var world,engine
function setup() {
  
  createCanvas(1600,600);
  engine = Engine.create();
  world=engine.world
  ground1=new Ground(600,height,1200,40)
}

function draw() {
  background(255,255,255);
  Engine.update(engine)  
 ground1.display();


}