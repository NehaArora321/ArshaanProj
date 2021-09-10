class GameFunctions {
    constructor(){

    }

    getGameState(){
      database.ref("gameState").on("value",(data)=>{
        gameState = data.val();
    })
    }

  gameStateUpdate(state){
      database.ref("/").update({gameState:state})
  }
  
  getLvls(){
    database.ref("level").on("value",(data)=>{
        playedLvls = data.val();
    })
  }

  levelUpdate(lvl){
    database.ref("/").update({level:lvl})
}
}