class Level1 {
    constructor(){
        //Hero.hero.x=50
    }
  
    display(){
     background(lvl1Img)
     Hero.hide()
     lvl1.hide()
     lvl2.hide()
     lvl3.hide()
     lvl4.hide()
     lvl5.hide()
     Hero.hero.visible=true;
     Hero.hero.scale=0.5
     if(keyDown(UP_ARROW)){
         Hero.hero.y=Hero.hero.y-5
     }
     if(keyDown(DOWN_ARROW)){
        Hero.hero.y=Hero.hero.y+5
    }
    if(keyDown(LEFT_ARROW)){
        Hero.hero.x=Hero.hero.x-5
    }
    if(keyDown(RIGHT_ARROW)){
        Hero.hero.x=Hero.hero.x+5
    }
}


}