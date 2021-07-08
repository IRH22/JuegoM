class Form{
    constructor(){
        this.titulo = createElement('h2');
        this.inputN = createInput("Nombre");
        this. botonP = createButton("Play");
        this.saludos = createElement('h3');
        this.botonR = createButton("Reiniciar")
        this.botonR.hide();

    }
    hide(){
        this.titulo.hide();
        this.inputN.hide();
        this.botonP.hide();
        this.saludos.hide();
    }

    display(){ 
        this.titulo.html('Carrera De Coches');
        this.titulo.position(560, 50);

        this.inputN.position(600, 180);

        this.botonP.position(690, 230); 

        this.botonR.position(90, 90);

        this.botonP.mousePressed(()=>{
            //lo que pasa si se aprieta}
            this.inputN.hide();
            this.botonP.hide();
            // guardar en DB
            player.name = this.inputN.value();
            playerCount +=1;
            player.index = playerCount
            player.updateCount(playerCount);
            player.updateName();
            this.saludos.html('hola ' + player.name);
            this.saludos.position(630, 200);
            this.botonR.show();
            
        })
        
        this.botonR.mousePressed(()=>{
            player.updateCount(0);
            game.updateState(0);
            Player.delete();
            window.location.reload();

        })

    }
}