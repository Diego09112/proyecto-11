var sea,seaImg;
var ship,hip_floating,ship_collide,shipImg,shipImg1;
function preload(){
shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200);
  sea.addImage(seaImg);
  sea.scale=0.3;

 sea.velocityX =-4;
 
ship=createSprite(200,200,30,30);
ship.addAnimation("moving",shipImg1);
ship.scale=0.25;
ship.velocityx=3;
}

function draw() {
  background("blue");
  if (sea.x <0 ) {
    sea.x=sea.whidth/2;
     
   
  }
if (keyDown("up_ARROW")){

}
 drawSprites();
}