
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango,tree,boy,stone;
var boyimg;
function preload()
{
	
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	boy=new Boy(200,300,20,40);
	
	mango1=new Mango(500,100,20)
    mango2=new Mango(510,100,20)
	mango3=new Mango(520,100,20)
	mango4=new Mango(530,100,20)






	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 boy.display();

 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();








  drawSprites();
 
}



