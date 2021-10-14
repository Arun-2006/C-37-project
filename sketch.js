var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();

}

function draw() {

  background("red");
  textSize(55);
  text("Quiz", width / 2, height / 2 -200)
  textSize(25)
  text("Which is the seventh largest Country in the world?", width / 2 - 250, height / 2 -130)
  textSize(20);
  text("India", width / 2 - 250, height / 2 -100)
  textSize(20)
  text("China", width / 2 - 250, height / 2 -65)
  textSize(20)
  text("USA", width / 2 - 250, height / 2 -35)
  textSize(20)
  text("Australia", width / 2 - 250, height / 2 -5)
  textSize(20)

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
