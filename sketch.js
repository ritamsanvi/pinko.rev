
var particles= []
var pinkos= []
var divisions= []

var divisionHeight= 300;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var engine, world
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  division= new Divisions(200,450,30,300)
  division2= new Divisions(90,450,30,300)
  ground= new Ground(300,600,500,10)
  division3= new Divisions(300,450,30,300)
  division4= new Divisions(400,450,30,300)
  division5= new Divisions(500,450,30,300)
  pinko= new Pinko(200,200,10,10)
  pinko2= new Pinko(250,200,10,10)
  pinko3= new Pinko(300,200,10,10)
  pinko4= new Pinko(350,200,10,10)
  pinko5= new Pinko(400,200,10,10)
  pinko6= new Pinko(450,200,10,10)
  pinko7= new Pinko(500,200,10,10)
  pinko8= new Pinko(550,200,10,10)
  particle= new Particle(350,100,10,10)
	Engine.run(engine);  
}


function draw() {
  //rectMode(CENTER);

  background("black");
  Engine.update(engine);

  division.display();
  division2.display();
  division3.display();
  ground.display();
  division4.display();
  division5.display();
  pinko.display();
  pinko2.display();
  pinko3.display();
  pinko4.display();
  pinko5.display();
  pinko6.display();
  pinko7.display();
  pinko8.display();
  particle.display();

  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }

  for(var k = 0; k <= width; k= k+ 80){
    divisions.push(new Divisions(k,height- divisionHeight/2,10,divisionHeight))
    }
  
    for (var j= 40; j<= width; j= j+ 40){
      pinkos.push(new Pinko(j,75))
    }
    for (var j= 15; j<= width-10; j= j+ 50){
      pinkos.push(new Pinko(j,175))
    }
    for (var j= 15; j< particles.length;  j++){
      particles[j].display();
    }
    for (var k= 15;k< division.length;  k++){
      divisions[j].display();
    }
  drawSprites();
  
}
