
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, ballOptions;
var ground;
var leftSide, rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	ballOptions = {
		isStatic:false,
		restitiution: 0.3,
		friction: 0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide =new Ground(1300,600,20,120);
	//Create the Bodies Here.

	ball = Matter.Bodies.circle(260,100,20,ballOptions);
	World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  leftSide.display();
  rightSide.display();
  ellipse(ball.position.x,ball.position.y,20,20);
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}



