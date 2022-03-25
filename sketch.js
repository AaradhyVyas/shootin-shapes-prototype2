var v = 2; 
var eNum = 3; 
var fc = 120; 
var enemy;

var gameState = "play";
var stage = 1;

var kill = 0, total=5; // enemies killed
var collected = 0; 
var direction;

var gameState = "play";
var stage = 1;

// var tunnel = createSprite(0,0,100,50);
// tunnel.shapeColor = "blue";

// var tunnelUp = createSprite(0,0,100,10);
// tunnelUp.shapeColor = "black";
// var tunnelDown = createSprite(0,0,100,10);
// tunnelDown.shapeColor = "black";

// var enemyGroup = new Group();
enemyGroup.setRotateToDirectionEach(true);

// var gate = createSprite(0,0,20,70);
// gate.shapeColor = "purple";

function setup(){

  createCanvas (windowWidth, windowHeight);

  colorMode(HSB, 360, 100, 100, 100);
  rectMode(CENTER);

 bow = createSprite(200,370,70,70);
  bow.visibility = false;
  
   zoom = createSprite(200, 370,20,20);
zoom.shapeColor=("red");

var tunnel = createSprite(400,550,100,50);
tunnel.shapeColor = "blue";

var tunnelUp = createSprite(0,0,100,10);
tunnelUp.shapeColor = "black";
var tunnelDown = createSprite(0,0,100,10);
tunnelDown.shapeColor = "black";


var gate = createSprite(0,0,20,70);
gate.shapeColor = "purple";

}


function draw(){
  
  background("white");

  // glowRect(width/4, height/2, 300, 1, 10, color(255, 100));
  // glowRect(width/2+55, height/2, 200, 3, 7, color(27, 42, 97, 100));
  // glowRect(width*3/4, height/2, 100, 6, 10, color(3, 48, 93, 100));
  
  zoom.velocityX=0;
  zoom.velocityY=0;

  if(gameState=="play"){
  
if (keyDown(UP_ARROW)) {
    zoom.velocityY=-9;
  }
  
   if (keyDown(DOWN_ARROW)) {
    zoom.velocityY=8;
  }
  
   if (keyDown(LEFT_ARROW)) {
    zoom.velocityX=-8;
  }
  
  if (keyDown(RIGHT_ARROW)) {
    zoom.velocityX=7;
  }

  spawnEnemy();
  
  // if (keyDown("space")) {
  //   createArrow();
  // }


  // bullet function 'key went up'
     if (keyWentUp("space")) {
     createArrow();
     } 
    }
  
  bow.y = zoom.y;
  bow.x = zoom.x;
  
  drawSprites();
}

function spawnEnemy(){
  
  if(World.frameCount%fc==0){
    
      for(var i=1; i<=eNum; i++){
        var randX = random(120,width-120);
        var randY = random(0,-20);
        var xOffset = random([-9,-7,7,9]);
        var yOffset = random([-15,-10,-9,-7,7,9,10,15]);
        var enemy = createSprite(randX+xOffset,randY+yOffset, 10,10);
        enemy.shapeColor = "red";
        enemy.velocityY = v;
        enemy.lifetime = height/v+20;
        enemyGroup.add(enemy);
      }
      
    eNum = random([3,4,5,6])  ;
  }
}

function createArrow() {
  var arrow= createSprite(200,370, 120, 120);
  //arrow.addImage(arrowImage);
  arrow.x = zoom.x;
  arrow.y=bow.y;
  arrow.velocityX = 4;
  arrow.lifetime = width/4+10;
  arrow.scale = 0.08;
  // arrowGroup.add(arrow);
  return arrow;
   
}

function glowRect(x, y, size, depth, blurriness, rectColor){
  noFill();
  stroke(rectColor);
  strokeWeight(size/12);

  glow(rectColor, blurriness);

  for(let i=0; i<depth; i++){
    rect(x, y, size, size, size/10);
  }
}

function glow(glowColor, blurriness){
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = blurriness;
  drawingContext.shadowColor = glowColor;
}

