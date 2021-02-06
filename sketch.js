var movingRect, fixedRect
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "red";
  fixedRect.velocityX = 5;
  //fixedRect.debug = true;

  movingRect = createSprite(600, 200, 50, 50);
  movingRect.shapeColor = "green";
  movingRect.velocityX = -5;
  //movingRect.debug = true;

  

}

function draw() {
  background("blue");  

  //move the rect with the mouse
  // movingRect.x = mouseX;
  // movingRect.y = mouseY;

  // if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  //   && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
  //   && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  //   && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
  //   movingRect.shapeColor = "red";
  // }
  // else{
  //   movingRect.shapeColor = "green";
  // }
  
if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    fixedRect.velocityX = fixedRect.velocityX * (-1);
    movingRect.velocityX = movingRect.velocityX * (-1);

  }
if(movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
      fixedRect.velocityY = fixedRect.velocityY * (-1);
      movingRect.velocityY = movingRect.velocityY * (-1);
}


  drawSprites();
}