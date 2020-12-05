
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var particles = [];
var plinkos = [];
var divisions = [];


function setup() {
  createCanvas(800,400);
  world = engine.world;
  engine = Engine.create();
  

  ground = new Ground(400,790,400,10);
  
}

var divisionHeight = 300; 

function draw() {
  background("black"); 
  
  Engine.update(engine);
  if(frameCount%90==0){
    particles.push(new Particle(width/2-10, width/2+10),10,10);
  }
  ground.display();

}

for(var i = 0; i <= width; i = i+80){
  divisionHeight.push(new Division(i, height*divisionHeight/2, 10, divisionHeight));
}

for(var p1 = 40; p1 <=width; p1 = p1 +50){
  plinkos.push(new Plinkos(p1,75));
}

for(var p2 = 15; p2 <=width-10; p2 = p2 +50){
  plinkos.push(new Plinkos(p2,175));
}

for(var p3 = 40; p1 <=width-20; p3 = p3 +50){
  plinkos.push(new Plinkos(p3,275));
}

for(var p4 = 15; p1 <=width-30; p4 = p4 +50){
  plinkos.push(new Plinkos(p4,375));
}  