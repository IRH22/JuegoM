var database;
var form, player, game;
var gameState = 0;
var playerCount;
var allplayers;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
   // form = new Form();
   // form.display();


    drawSprites();
}

