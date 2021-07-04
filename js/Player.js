class Player{
    constructor(){


    }

    getCount(){
        var pcr = database.ref('playerCount');
        pcr.on('value', function(data){
            playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
        playerCount : count
        })
    }

    updateName(name){
        var playerIndex = 'players/player ' + playerCount;
        database.ref(playerIndex).set({name : name}) 

    }

    static getPlayerInfo(){
        var playerinfoRef = database.ref('players')
        playerinfoRef.on('value', (data)=>{
            allplayers = data.val();
        })
    }



}