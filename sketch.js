var fixedRect, movingRect;
var object1,object2,object3;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1=createSprite(100,100,50,50);
  object1.shapeColor = "green";
  object2=createSprite(200,100,50,50);
  object2.shapeColor = "green";
  object3=createSprite(300,100,50,50);
  object3.shapeColor = "green";
  object3.velocityX=-2;
  object2.velocityX=2;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(object1,movingRect)){
    object1.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    object1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
bounceOff(object2,object3);

 
  drawSprites();
}

function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX=-object1.velocityX;
      object2.velocityX=-object2.velocityX;
  return true;
}
if( object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY=-object1.velocityY;
    object2.velocityY=-object2.velocityY;

  }

}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true;
}
else {
  return false;
}


}