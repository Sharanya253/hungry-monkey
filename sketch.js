var backdesign,backimage;
var monkey,monkeyimg;
var stone,stoneimg;
var ground,groundimg;

function preload(){
  
  //lets make the bakground fun!
  backimage=loadImage("jungle.jpg");
  
  //monkey is assigned a image.
monkeyimg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
 
  //bananas are given the identity.
  bananaimg=loadImage("banana.png");
  
  //stones are given an image.
  stoneimg=loadImage("stone.png");
  
  
  
}

function setup() {
  createCanvas(400, 400);
  
  backdesign=createSprite(400,400);
  backdesign.addImage("backimg",backimage);
  backdesign.velocityX=-6;
  
 monkey=createSprite(50,260,20,20);
monkey.addAnimation("monkey",monkeyimg);
  
  banana=createSprite(387,random(135,260),20,20);
  
  
  
  

  
  
}

function draw() {
  background("white");
 
  if (backdesign.x<0){
      backdesign.x=backdesign.width/2;
    }
  
  
  
  
  
  
  
  drawSprites();
}







