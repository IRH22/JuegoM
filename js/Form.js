class Form{
    constructor(){

    }

    display(){
        var titulo = createElement('h2');
        titulo.html('Carera De Coches');
        titulo.position(560, 90);

        var inputN = createInput("Nombre");
        inputN.position(570, 140);

        var botonP = createButton("Play");
        botonP.position(630, 200); 

        var saludos = createElement('h3')

        botonP.mousePressed(function(){
            //lo que pasa si se aprieta}
            inputN.hide();
            botonP.hide();
            // guardar en DB
            var name = inputN.value();
            playerCount +=1;
            player.updateCount(playerCount);
            player.updateName(name);
            saludos.html('hola ' + name);
            saludos.position(630, 200);
        })
        

    }
}