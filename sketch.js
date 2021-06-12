const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerbase, computerbase

function preload() {
playerbaseimg = loadImage("./assets/base1.png");
  
}


function setup() {
  canvas = createCanvas(1000, 1000);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
    playerbase = new PlayerBase(300,random(450,height-300),180,150);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
    playerbase.display();

   //display Player and computerplayer


}
