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

    async start(){
        if(gameState === 0){
            //necesita ser asincrone
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once('value'); 
            if(playerCountRef.exists()){ 
                playerCount=playerCountRef.val(); 
                player.getCount; 
            }
            player.getCount();
            form = new Form();
            form.display();
        }
        //que no se vean desde el inicio
        car1 = createSprite( 410, 700, 20, 20);
        car2 = createSprite( 550, 730, 20, 20);
        //car3 = createSprite( 530, 500, 20, 20);
        //car4 = createSprite( 500, 530, 20, 20);

        car1.addImage("1", carI1);
        car2.addImage("2", carI2);
        //car3.addImage("3", carI3);
        //car4.addImage("4", carI4);

        cars = [car1, car2];
       

    }

    play(){
        form.hide();
        textSize(25);
        text("Inicia", 200, 50);
        // llamar info de los jugadores
        Player.getPlayerInfo();
        var displayPos = 150;
        if(allplayers != undefined){
            background("#6e471b");
            image(trackI, 0, -displayHeight*3, displayWidth, displayHeight*10)
            textSize(25);

            var index = 0;
            var x = 195;
            var y;

            for(var plr in allplayers){
                if (plr === "player" + player.index)
                    fill("red") 
                else
                     fill("black");

                text(allplayers [plr].name + allplayers [plr].distance, 200, displayPos)
                displayPos += 30;

                index += 1;
                x += 225;
                y =displayHeight - allplayers [plr].distance;

                cars[index-1].x = x;
                cars[index-1].y = y;

                if(index === player.index){
                    stroke(7)
                    fill("#18adb5")
                    ellipse(x, y, 70, 70);
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }
            }

        }

        if(keyIsDown(UP_ARROW)&& player.index != null && player.distance<3080){
            player.distance += 50;
            player.updateName();           
        }

        if( player.distance >= 3050){
            gameState = 2;
            
        }

    }


    end(){
        console.log("fin")

        //el coche se repite
    }
}