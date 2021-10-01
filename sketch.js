const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var myEngine,myWorld
var snowIMG
function preload() {
snowIMG = loadImage("snow2.jpg")
}
function setup() {
  myEngine = Engine.create();
  myWorld = myEngine.world;
  createCanvas(800,400);
  snowflakes = new Snowflakes(100,25,100,100)
  snowflakes1 = new Snowflakes(200,25,100,100)
  snowflakes2 = new Snowflakes(300,25,100,100)
  snowflakes3 = new Snowflakes(400,25,100,100)
  snowflakes4 = new Snowflakes(500,25,100,100)
  snowflakes5 = new Snowflakes(600,25,100,100)
  snowflakes6 = new Snowflakes(700,25,100,100)
}

function draw() {
  background(snowIMG);  
  Engine.update(myEngine);
  snowflakes.show()
  snowflakes1.show()
  snowflakes2.show()
  snowflakes3.show()
  snowflakes4.show()
  snowflakes5.show()
  snowflakes6.show()
}