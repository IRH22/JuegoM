class Form{
    constructor(){
        this.titulo = createElement('h2');
        this.inputN = createInput("Nombre");
        this. botonP = createButton("Play");
        this.saludos = createElement('h3')

    }
    hide(){
        this.titulo.hide();
        this.inputN.hide();
        this.botonP.hide();
        this.saludos.hide();
    }

    display(){ 
        this.titulo.html('Carera De Coches');
        this.titulo.position(560, 90);

        this.inputN.position(570, 140);

        this.botonP.position(630, 200); 

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
            
        })
        

    }
}