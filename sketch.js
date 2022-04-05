const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;

var bg_img;
var watermelon;
var rabbit;
var rabbit1, omnom;

var button;


function preload()
{
  bg_img = loadImage('back.cut the rope.jpeg');
  watermelon = loadImage ('Om Nom/candy.png');
  rabbit = loadImage('Rabbit-01.png');
  omnom = loadAnimation ('Om Nom/img1.png','Om Nom/img2.png','Om Nom/img3.png','Om Nom/img4.png','Om Nom/img5.png','Om Nom/img6.png','Om Nom/img7.png','Om Nom/img8.png');
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  rabbit1=createSprite (250,550,200,300);
  rabbit1.addAnimation ("om nom",omnom);
  rabbit1.scale = 0.7;

  fruit_con = new Link(rope,fruit);
  button = createImg ('cut_button.png');
  button.position (400,300);
  button.size (50,50);
  button.mouseClicked (break1);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
  
}

function draw() 
{
  background(51);

  image(bg_img,width/2,height/2,490,690);
  //image (rabbit,250,550,200,300);
  image (watermelon, fruit.position.x, fruit.position.y,70,70);
  rope.show();
  Engine.update(engine);
  ground.show();
  drawSprites ();
 
}

function break1 (){
 rope.break ();
 fruit_con.romper ();
 fruit_con = null;
}
