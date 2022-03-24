
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball 
function preload()
{
	
}

function setup() {
	createCanvas(1600 , 700);

var ball_options ={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
}
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball=Bodies.circle(200,200,20,ball_options)
World.add(world,ball)
ground=new Ground(width/2,670,width,20)
leftside=new Ground(1100,600,20,120)
rightside=new Ground(1350,600,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20,20)
ground.display() 
leftside.display()
rightside.display()
  drawSprites();

 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}

