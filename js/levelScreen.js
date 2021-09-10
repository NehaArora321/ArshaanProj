class Levels {
  constructor(x, y, lvlName) {
    this.levels = createSprite(x, y)
    this.levels.addImage(CloseLockImg)

    this.levels.scale = 0.5;
    this.levels.visible = false;

    this.lvl = lvlName
    this.posX = x;
    this.posY = y;
  }

  hide(){
    this.levels.destroy(); 
   }

  display() {
    // background("yellow"); i have commented this background as ot was overlapping the txt content.
    Hero.hide()
    this.levels.visible = true;
    //this.posY=this.posY+50

    //console.log(this.levels.x,this.levels.y,this.lvl)
    if (this.lvl <= playedLvls) {
      this.levels.addImage(OpenLockImg)
      if (mousePressedOver(this.levels)) {
        gameState = 2;
        funObj.gameStateUpdate(2);
      }
    }

    stroke("black")
    textSize(20);
    text("Level " + this.lvl, this.levels.x-50, this.levels.y-50 )
  }

}