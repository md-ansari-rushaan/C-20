var Fixed,Moving;
function setup() {
  createCanvas(800,400);
  Fixed = createSprite(400, 200, 50, 50);
  Moving = createSprite(450, 250, 25, 25);
}

function draw() {
  background(255,255,255);  
  Moving.x=World.mouseX;
  Moving.y=World.mouseY;
  if(Moving.x-Fixed.x < 38 && Moving.y-Fixed.y < 38 && Fixed.x - Moving.x < 38 && Fixed.y-Moving.y <  38){
    Fixed.shapeColor="red";
    Moving.shapeColor="red";
  }
  else{
    
    Fixed.shapeColor="green";
    Moving.shapeColor="green";
  }
  console.log(Moving.x-Fixed.x);
  drawSprites();
}