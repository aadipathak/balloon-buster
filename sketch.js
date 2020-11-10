

var red_balloon1, blue_balloon1,  green_balloon1,  pink_balloon1, back_ground, bow, backGround_moving, arrow1, pinkballoon, greenballoon, blueballoon, redballoon, bowMove, backGround;

var arrowG,redG, blueG, greenG, pinkG;

var score = 0;

function preload(){
 //load your images here 
 bow = loadImage("bow0.png");
  
  backGround_moving = loadImage("background0.png");
  
  red_balloon1 = loadImage("red_balloon0.png");

  blue_balloon1 = loadImage("blue_balloon0.png");

   green_balloon1 = loadImage("green_balloon0.png");
 
   pink_balloon1 = loadImage("pink_balloon0.png");
   
   arrow1 = loadImage("arrow0.png");

  
}

function setup() {
  createCanvas(600, 600);
  
  //add code here
   backGround = createSprite(200,200, 600, 600);
  backGround.addImage(backGround_moving,"background0.png");
  backGround.x = backGround.width/2;
  backGround.velocityX = -4;
  backGround.scale = 4;
 
 bowMove = createSprite(500, 200, 10, 10);
bowMove.addImage(bow, "bow0.png");
bowMove.scale = 0.5;
  
  
  
  redG = new Group();
  blueG = new Group();
  greenG = new Group();
  pinkG = new Group();
  arrowG = new Group();
  
}

function draw() {
    //add code here
if (backGround.x < 0){
  backGround.x = backGround.width/2;
 }
  
  bowMove.y = World.mouseY;
  
 
  
  

 if(keyDown("space")){
 createArrow();
  }
  var rand_balloon = Math.round(random(1,4));
  if (frameCount % 100 === 0){
      if(rand_balloon === 1){
        redBalloon();
      } else if (rand_balloon === 2){
        greenBalloon();
      } else if (rand_balloon === 3){
        blueBalloon();
      } else{
        pinkBalloon();
      }
      }
  
  
  if(arrowG.isTouching(redG)){
    redG.destroyEach();
    arrowG.destroyEach();
    score = score+2;
    
  }
  
  if(arrowG.isTouching(blueG)){
    blueG.destroyEach();
    arrowG.destroyEach();
    score = score+1;
    
  }
  
  if(arrowG.isTouching(greenG)){
    greenG.destroyEach();
    arrowG.destroyEach();
    score = score+3;
    
  }
  if(arrowG.isTouching(pinkG)){
    pinkG.destroyEach();
    arrowG.destroyEach();
    score = score+4;
  }
  

  
  drawSprites();
  text("Score:"+score, 290, 30)
}
function createArrow(){
   var arrow = createSprite(450, 110, 10, 10);
     arrow.addImage(arrow1, "arrow0.png");
   arrow.scale= 0.2;
  arrow.velocityX = -4;
  arrow.y = bowMove.y;
  arrowG.add(arrow);
 // console.log(arrow.x);
}

function redBalloon(){
     redballoon = createSprite(0,Math.round(random(20, 370)),10, 10);
  redballoon.addImage(red_balloon1,"red_balloon0.png");
  redballoon.scale = 0.05;
  redballoon.velocityX = 3;
  redballoon.lifetime = 200;
  redG.add(redballoon);
}

function blueBalloon(){
  blueballoon = createSprite(0,Math.round(random(20, 370)),10, 10);
blueballoon.addImage(blue_balloon1,"blue_balloon0.png");
 blueballoon.scale = 0.05;
   blueballoon.velocityX = 3;
  blueballoon.lifetime = 200;
  blueG.add(blueballoon);
}

function greenBalloon(){
  greenballoon  = createSprite(0,Math.round(random(20, 370)),10, 10);
greenballoon.addImage(green_balloon1,"green_balloon0.png");
greenballoon.scale = 0.05;
greenballoon.velocityX = 3;
  greenballoon.lifetime = 200;
  greenG.add(greenballoon);
}

function pinkBalloon(){
  pinkballoon = createSprite(0,Math.round(random(20, 370)),10, 10);
pinkballoon.addImage(pink_balloon1,"pink_balloon0.png");
pinkballoon.scale = 0.5;
pinkballoon.velocityX = 3;
  pinkballoon.lifetime = 200;
  pinkG.add(pinkballoon);

}