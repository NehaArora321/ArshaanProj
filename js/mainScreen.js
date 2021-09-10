class MainScreen {
   constructor(x,y){
       console.log("Hi")
       this.hero=createSprite(x,y)
       this.hero.addImage(SuperHeroimg)
       this.hero.scale=1.5
       
       this.arrow = createSprite(775,425)
       this.arrow.addImage(arrowImg);
       this.arrow.scale=0.3;

       this.button = createButton('Reset');
   }

    hide(){
     this.hero.visible=false; 
     this.arrow.destroy();
    }

    display(){
        background(mainMenuImg);
        fill("Red")
        stroke("Black")
        strokeWeight(10)
        textSize(35)
        text("SUPER NOVA - THE PROTECTOR OF UNIVERSE",100,230)

        this.button.position(width-100,20);

        if(mousePressedOver(this.arrow)){
            gameState = 1;
            funObj.gameStateUpdate(1)
            funObj.levelUpdate(1)
        }

        this.button.mousePressed(()=>{
            funObj.gameStateUpdate(0);
            funObj.levelUpdate(0)
          });
    }
}



