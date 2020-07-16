var dice;
var d1, d1I, D1, D1I;
var d2, d2I, D2, D2I;
var d3, d3I, D3, D3I;
var d4, d4I, D4, D4I;
var d5, d5I, D5, D5I;
var d6, d6I, D6, D6I;

var diceAnimation1,diceAnimation2, move1, move2;


function preload(){
  d1I = loadAnimation("1.png");
  d2I = loadAnimation("2.png");
  d3I = loadAnimation("3.png");
  d4I = loadAnimation("4.png");
  d5I = loadAnimation("5.png");
  d6I = loadAnimation("6.png");
  diceAnimation1 = loadAnimation("1.png", "2.png", "3.png", "4.png", "5.png", "6.png");

  D1I = loadAnimation("1COPY.png");
  D2I = loadAnimation("2COPY.png");
  D3I = loadAnimation("3COPY.png");
  D4I = loadAnimation("4COPY.png");
  D5I = loadAnimation("5COPY.png");
  D6I = loadAnimation("6COPY.png");
  diceAnimation2 = loadAnimation("1COPY.png", "2COPY.png", "3COPY.png", "4COPY.png", "5COPY.png", "6COPY.png");
}

function setup() {
  createCanvas(displayWidth - 200,displayHeight - 200);

  title = createElement('h1');
  input = createInput("");


  title.html("Guess the number on the dice");
  console.log(title);
  title.position(450,50);

  input.position(550,270); 
  

  move1 = createSprite(200,200,50,50);
  move1.addAnimation("dice", diceAnimation1);
  move1.addAnimation("dice1", d1I);
  move1.addAnimation("dice2", d2I);
  move1.addAnimation("dice3", d3I);
  move1.addAnimation("dice4", d4I);
  move1.addAnimation("dice5", d5I);
  move1.addAnimation("dice6", d6I);

  move2 = createSprite(200,300,50,50);
  move2.addAnimation("diceC", diceAnimation2);
  move2.addAnimation("diceC1", D1I);
  move2.addAnimation("diceC2", D2I);
  move2.addAnimation("diceC3", D3I);
  move2.addAnimation("diceC4", D4I);
  move2.addAnimation("diceC5", D5I);
  move2.addAnimation("diceC6", D6I);

  
}


function draw() {
  background("white");  

 

  drawSprites();
}