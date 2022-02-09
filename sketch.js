const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4, BOX5, BOX6, BOX7, BOX8, BOX9,BOX10, BOX11, BOX12, BOX13, BOX14, BOX15, BOX16, BOX17, BOX18, BOX19, BOX20;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(655, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  BOX5 = new Box(900, 100, 70, 70);
  BOX6 = new Box(900, 100, 70, 70);
  BOX7 = new Box(900, 100, 70, 70);
  BOX8 = new Box(778, 100, 170, 70);
  BOX9 = new Box(778, 100, 170, 70);
  BOX10 = new Box(778, 100, 170, 70);
  BOX11 = new Box(778, 100, 170, 70);
  BOX12 = new Box(778, 100, 170, 70);
  BOX13 = new Box(778, 100, 170, 70);
  BOX14 = new Box(900, 100, 70, 70);
  BOX15 = new Box(655, 100, 70, 70);
  BOX16 = new Box(655, 100, 70, 70);
  BOX17 = new Box(655, 100, 70, 70);
  BOX18 = new Box(655, 100, 70, 70);
  BOX19 = new Box(655, 100, 70, 70);
  BOX20 = new Box(655, 100, 70, 70);
 
 
  

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  BOX5.display();
  BOX6.display();
  BOX7.display();
  BOX8.display();
  BOX9.display();
  BOX10.display();
  BOX11.display();
  BOX12.display();
  BOX13.display();
  BOX14.display();
  BOX15.display();
  BOX16.display();
  BOX17.display();
  BOX18.display();
  BOX19.display();
  BOX20.display();
  

  

  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}