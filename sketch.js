
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


//const Constraint=Matter.Constraint
var  circle1,ground;	
var world,sling;


function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
 // ground=createSprite(400,400,230,20)
ground=new Ground(400,400,230,20)
 	World.add(world, ground);

 	box1=new Box(310,370,30,40)

box2=new Box(340,370,30,40)
box3=new Box(370,370,30,40)
box4=new Box(400,370,30,40)
box5=new Box(430,370,30,40)
box6=new Box(460,370,30,40)
box7=new Box(490,370,30,40)
box8=new Box(340,330,30,40)
box9=new Box(370,330,30,40)
box10=new Box(400,330,30,40)
box11=new Box(430,330,30,40)
box12=new Box(460,330,30,40)
box13=new Box(370,290,30,40)
box14=new Box(400,290,30,40)
box15=new Box(430,290,30,40)
box16=new Box(400,250,30,40)
circle1=new Circle(100,200,40)
//slingShot =new SlingShot (circle1.body,{x:130,y:200})

	//paper1.body=Bodies.circle(height/6, 200, 20, option1)
	//paper1=new Paper(height/6,200,20,option1);
	//World.add(world, paper1);
	
	
	sling =new SlingShot (circle1.body,{x:130,y:200})
	// Online Code
	//dustbinObj=new dustbin(1200,650);
	//paperObject=new paper(200,450,40);
	//groundObject=new ground(width/2,670,width,20);
	//Create a Ground

Engine.run(engine);
	
  
}


function draw() {
	background("grey");
Engine.update(engine);
  //rectMode(CENTER);
  


 
 // ellipse(paper1.position.x,paper1.position.y, 20,20);
 //launcher1.display();

  //dustbinObj.display();
  //paperObject.display();
  //groundObject.display();
 // ground=createSprite(400,400,230,20)
  circle1.display();
  sling.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  ground.display();
  //circle1.display();
  drawSprites();

 
}

/* function keyPressed() {


  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(circle1,circle1.position,{x:55,y:-75});
    
  	}


	
	else if (keyCode === LEFT_ARROW) {
  
		boxleftSprite.x=boxleftSprite.x-20;  
		boxrightSprite.x=boxrightSprite.x-20;
		boxBase.x=boxBase.x-20;
	  translation={x:-20,y:0}
	  Matter.Body.translate(boxRightBody, translation)
	  Matter.Body.translate(boxLeftBody, translation)
	  Matter.Body.translate(boxBase, translation)
	  
   
 	} else if (keyCode === RIGHT_ARROW) {
		boxleftSprite.x=boxleftSprite.x+20;  
		boxrightSprite.x=boxrightSprite.x+20;
		boxBase.x=boxBase.x+20;
		translation={x:20,y:0}
	  Matter.Body.translate(boxRightBody, translation)
	  Matter.Body.translate(boxLeftBody, translation)
	  Matter.Body.translate(boxBase, translation)
	} 
	
		
		
		
		
  }
	 
    */
  function mouseDragged(){
	Matter.Body.setPosition(circle1.body,{x:mouseX,y:mouseY})
	
	
	}
 	function mouseReleased (){
	sling.fly();
	
  }
  function keyPressed(){
	if(keyCode===32){
	 sling.attach(circle1.body)   
	
	
	
	}
	}
