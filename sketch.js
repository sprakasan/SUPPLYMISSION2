var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var body1,body2,body3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	 
	bodyLeft=createSprite(285,620,20,100)
	bodyLeft.shapeColor="red";

	bodyBottom=createSprite(350,650,150,20)
	bodyBottom.shapeColor="red";

	bodyRight=createSprite(420,620,20,100);
	bodyRight.shapeColor="red";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);

	body1=Bodies.rectangle(300,650,20,100,{isStatic:true});
	World.add(world,body1);

	body2=Bodies.rectangle(350,650,150,20,{isStatic:true});
	World.add(world,body2);

	body3=Bodies.rectangle(420,620,20,100, {isStatic:true});
	World.add(world,body3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
    
  }
}



