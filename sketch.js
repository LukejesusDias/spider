var city
var city1
var invisibleGround
var spidermanImg,spiderman
var ground
var droneimg,drone
var droneGroup
var spiderimg,spider
var spiderGroup

function preload(){
city=loadImage("city picture.png");
ground_image=loadImage("ground.png")
spidermanImg=loadAnimation("spiderman.png","spiderman image 2.png","spiderman image 4.png","spiderman.png")
droneimg=loadImage("drone.png")
spiderimg=loadImage("spider image.png")
}

function setup() {
 createCanvas(windowWidth, windowHeight)

 
 invisibleGround = createSprite(width/2,height+6,width,1);  
 invisibleGround.addImage(ground_image)
 invisibleGround.x = width/2
 invisibleGround.velocityX=-3

 spiderman = createSprite(105,height-99,50)
spiderman.addAnimation("spiderman",spidermanImg)
spiderman.scale=0.3

ground=createSprite(width/2,height+20,width,50)
ground.visible=false

droneGroup=new Group()
spiderGroup=new Group()

}

function draw() 
{
 background(city);
 if (invisibleGround.x < 0){
    invisibleGround.x = invisibleGround.width/2;
  }
spiderman.collide(ground)
if(keyDown("space")){
spiderman.velocityY=-5
}
spiderman.velocityY=spiderman.velocityY+0.8

spawnDrone()
spiderSym()

drawSprites();
}

function spawnDrone(){
  if(frameCount%200 === 0){
drone=createSprite(width+20,height-500,20,30)
drone.addImage(droneimg)
drone.velocityX=-2
drone.scale=0.2
drone.y=Math.round(random(100,400))
droneGroup.add(drone)
  }
}

function spiderSym(){
  if(frameCount%500 === 0){
spider=createSprite(width+21,height-200,15,20)
spider.addImage(spiderimg)
spider.velocityX=-2
spider.scale=0.01
spider.y=Math.round(random(99,450))
spiderGroup.add(spider)
  }
}
