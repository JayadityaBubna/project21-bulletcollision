var bullet,wall,thickness,weight,speed,damage

function setup() {
 createCanvas(1600,400);
 bullet= createSprite(100, 200, 10, 5);
 bullet.shapeColor="blue";
 thickness=random(22,83);
 wall=createSprite(1200,200,thickness,height/2);
 wall.shapeColor=rgb(80,80,80);
 weight=random(30,52);
 speed=random(223,321);
 bullet.velocityX=speed;

}

function draw() {
  background(255,255,255);  
  
  if(collide(bullet,wall)){

    bullet.velocityX=0;
    var damage= 0.5* weight* speed* speed/ (thickness* thickness* thickness) ;
  }

  if(damage>10){
    wall.shapeColor="red";
    text("wall needs repair",100,800);

  }
   
  if(damage<10){
    wall.shapeColor="green";
    text("wall is perfect",100,800);

  }
 
  
  
  drawSprites();
}



function collide(object1,object2){

  bulletRightEdge=object1.x + object1.width ;
  wallLeftEdge=object2.x;

  if(bulletRightEdge>=wallLeftEdge){
   return true;
  }
  
  else{
   return false;
  }

}