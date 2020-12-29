
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperSprite, paperBody,paperIMG;
var binIMG, bin;

function preload(){
	paperIMG = loadImage("dustbingreen.png");
	binIMG = loadImage("paper.png");
}
function setup() {

	createCanvas(800, 700);
	rectMode(CENTER);
	

	paperSprite=createSprite(30, 450, 20,20);
	bin = createSprite(760,660,20,20);




	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	

	engine = Engine.create();
	world = engine.world;

	paperBody = Bodies.circle(width/2 , 200 , 20 , {restitution : 1, isStatic:true});
	World.add(world, paperBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperSprite.x = 50;
 paperSprite.y= 50;
  drawSprites();
 
}
bounceoff(paperSprite, box3);

function keyPressed() {
 if (keyCode === UP_ARROW) {

Matter.Body.setStatic(paperBody,false)

  paperSprite.velocityX = 2;
paperSprite.velocityY = 3;
	restitution : 0.8
	friction : 5.0
  }


 
    
  }



