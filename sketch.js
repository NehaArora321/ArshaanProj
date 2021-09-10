var canvas, backgroundImage;
var mainMenuImg
var arrowImg;
var playedLvls=0;
var lvlNum;
var lvl1Img;

var gameState = 0;
var database;
var funObj,lvlObj;


function preload(){
  mainMenuImg = loadImage("Images/mainmenuBackground.png");;
  SuperHeroimg = loadImage("Images/HeroMain1.png");
  arrowImg = loadImage("Images/arrow.png");
  OpenLockImg = loadImage("Images/openLock.png");
  CloseLockImg = loadImage("Images/lock.png");
  lvl1Img = loadImage("Images/lvl1bgIMG.png")
}


function setup(){
  canvas = createCanvas(1000,900);
  database = firebase.database();

  funObj = new GameFunctions()
  //lvlObj = new GameFunctions()

  funObj.getLvls();
  funObj.getGameState();
  Hero = new MainScreen(450,500);
  lvl1 = new Levels(400,150,"1");
   lvl2 = new Levels(600,150,"2");
  lvl3 = new Levels(400,300,"3");
  lvl4 = new Levels(600,300,"4");
  lvl5 = new Levels(500,450,"5");
  
  lvl1screen = new Level1();
}



function draw(){
  background("yellow")
 if(gameState === 0){
  Hero.display();
 }

 if(gameState === 1){
  lvl1.display();
   lvl2.display();
  lvl3.display();
  lvl4.display();
  lvl5.display(); 
 }

 if(gameState === 2){
  lvl1screen.display()
 }
 
 drawSprites();
}


// Working now! 
