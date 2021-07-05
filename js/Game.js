class Game{
    constructor(){

    }


    getState(){
        var gamestateRef = database.ref('gameState');
        gamestateRef.on('value', function(data){
            gameState = data.val();
        })

    }

    updateState(state){
        database.ref('/').update({
            gameState : state

        })
    }

    start(){
        if(gameState === 0){
            //necesita ser asincrone
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        
        car1 = createSprite( 200, 400, 20, 20);
        car2 = createSprite( 350, 430, 20, 20);
        car3 = createSprite( 530, 500, 20, 20);
        car4 = createSprite( 500, 530, 20, 20);

        car1.addImage("1", carI1);
        car2.addImage("2", carI2);
        car3.addImage("3", carI3);
        car4.addImage("4", carI4);

        cars = [car1, car2];
        console.log(cars);

    }

    play(){
        form.hide();
        textSize(25);
        text("Inicia", 200, 50);
        // llamar info de los jugadores
        Player.getPlayerInfo();
        var displayPos = 150;
        if(allplayers != undefined){
            textSize(25);

            for(var plr in allplayers){
                if (plr === "player" + player.index)
                    fill("red") 
                else
                     fill("black");

                text(allplayers [plr].name + allplayers [plr].distance, 200, displayPos)
                displayPos += 30;
            }

        }

        if(keyIsDown(UP_ARROW)&& player.index != null){
            player.distance += 50;
            player.updateName();           
        }


    }

}