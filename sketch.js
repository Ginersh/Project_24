const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player;
var computerPlayer;
var playerBase;
var computerBase;
var computerArcher;
var playerArcher;
var computerArrow;
var playerArrow;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
playerBase = new PlayerBase(300,random(450,height - 300),180,150);
player = new Player(300,playerBase.body.position.y - 153,50,180);
computerBase = new ComputerBase(width-300,random(450,height - 500),180,150);
computerPlayer = new ComputerPlayer(width-300,computerBase.body.position.y - 153,50,180);
playerArcher = new PlayerArcher(player.body.position.x+50,player.body.position.y-20,100,100);
computerArcher = new ComputerArcher(computerPlayer.body.position.x-50,computerPlayer.body.position.y-20,100,100);
playerArrow = new PlayerArrow(playerArcher.body.position.x,playerArcher.body.position.y,20,20);
computerArrow = new ComputerArrow(computerArcher.body.position.x,computerArcher.body.position.y,20,20);
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
  playerBase.display();
  computerBase.display();

   //display Player and computerplayer
  player.display();
  computerPlayer.display();

  playerArcher.display();
  computerArcher.display();

  playerArrow.display();
  computerArrow.display();

}
