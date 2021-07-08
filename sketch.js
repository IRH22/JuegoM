var database;
var form, player, game;
var gameState = 0;
var playerCount;
var allplayers;
var carI1, carI2, carI3, carI4, car1, car2, car3, car4;
var piso;
var cars = [];
var trackI, track;

function preload(){
    carI1 = loadImage("../images/car1.png");
    carI2 = loadImage("../images/car2.png");
    carI3 = loadImage("../images/car3.png");
    carI4 = loadImage("../images/car4.png");

    piso = loadImage("../images/ground.png");

    trackI = loadImage("../images/track.jpg");
}


function setup(){
    database = firebase.database();
    createCanvas(500,500);
    game = new Game();
    game.getState();
    game.start();

    canvas = createCanvas(displayWidth-25, displayHeight-178);
    
}

function draw(){
   // form = new Form();
   // form.display();

   if(playerCount === 2){
       game.updateState(1);
   }

   if(gameState === 1){
       clear();
       game.play();
   }

   if(gameState === 2){
       game.end();
       //ajustar que no se vea doble
   }

    drawSprites();
}

