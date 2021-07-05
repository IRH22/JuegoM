class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;

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

    updateName(){
        var playerIndex = 'players/player ' + this.index;
        database.ref(playerIndex).set({name : this.name, distance : this.distance}) 

    }

    static getPlayerInfo(){
        var playerinfoRef = database.ref('players')
        playerinfoRef.on('value', (data)=>{
            allplayers = data.val();
        })
    }



}