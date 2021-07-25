
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var paper

var engine, world;

//function preload(){}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     paper = new Paper(100, 600, 10);
	   ground = new Ground(400, 680, 800, 20);

    firstSide = new Dustbin(550 , 620, 20, 100); 
    secondSide = new Dustbin(610, 660, 100, 20);
	  thirdSide = new Dustbin(670, 620, 20, 100);

    slingShot = new SlingShot(paper.body, {x:200,y:500});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
 Engine.update(engine);

  paper.display();
  ground.display();
  firstSide.display();
  secondSide.display();
  thirdSide.display();

  slingShot.display();    

  drawSprites();
 
}
 

 function mouseDragged(){

  Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}

 function mouseReleased(){

  slingShot.fly()
}
