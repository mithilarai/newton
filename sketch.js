
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1;
var wire1;
var bob2;
var roof,wire2,bob3,wire3,bob4,wire4,bob5,wire5;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(width/2,height/4,width/2,20);


bobStartX = width/2;
bobStartY = height/4+500;
bobDiameter = 70;
bob4 = new Bob(bobStartX-bobDiameter*2,bobStartY,bobDiameter);
bob3 = new Bob(bobStartX-bobDiameter,bobStartY,bobDiameter);
bob1 = new Bob(bobStartX,bobStartY,bobDiameter);
bob2 = new Bob(bobStartX+bobDiameter,bobStartY,bobDiameter)
bob5 = new Bob(bobStartX+bobDiameter*2,bobStartY,bobDiameter);

wire4 = new Wire(roof.body,bob4.body,-bobDiameter*2,0);
wire3 = new Wire(roof.body,bob3.body,-bobDiameter,0);
wire1 = new Wire(roof.body,bob1.body,0,0);
wire2 = new Wire(roof.body,bob2.body,bobDiameter,0);
wire5 = new Wire(roof.body,bob5.body,bobDiameter*2,0);

Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);

  rectMode(CENTER);
  background("skyblue");
  roof.display();
  bob4.display();
  bob3.display();
  bob1.display();
  bob2.display();
  bob5.display();
  
  
  wire4.display();
  wire3.display();
  wire1.display();
  wire2.display();
  wire5.display();

  //console.log(Bob1.body.position);
}
function keyPressed() {
  if (keyCode === 32) {

   Matter.Body.applyForce(bob4.body,bob4.body.position,{x:-150,y:0});
  
  }
}








