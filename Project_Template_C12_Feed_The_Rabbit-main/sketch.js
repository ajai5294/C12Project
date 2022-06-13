var garden,rabbit;
var gardenImg,rabbitImg,appleImg,leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createApples(){
  apple = createSprite(random(50, 350),40, 10, 10);
  apple.addImage(appleImg);
  apple.velocityY = 4;
  apple.scale = 0.10;
  apple.lifetime;
}

function createLeaves(){
  leaves = createSprite(random(50, 350),40, 10, 10);
  leaves.addImage(leavesImg);
  leaves.velocityY = 4;
  leaves.scale = 0.10;
  leaves.lifetime;
}

function draw() {
  background(0);
  rabbit.x = World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var select_sprites = Math.round(random(1,2));

if (frameCount% 80==0) {
  if (select_sprites == 1) {
    createApples()
  }
  else {
    createLeaves()
  }
} 

  drawSprites();
}