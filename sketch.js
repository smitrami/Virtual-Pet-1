//Create variables here
var dog, happyDog, foods, foodStoke;
var dogImg, happyDogImg;
var feed, AddFood, position;
var database;
function preload() {
  //load images here
  dogImg = loadImage("dogImg.png");
  happyDogImg = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStoke = database.ref('ball/position');
  foodStoke.on("value", readStoke);
  feed = createButton("FEED DRAGO");
  feed.position(500, 50);
  feed.mousePressed(FeedDog);
  AddFood = createButton("ADD FOOD");
  AddFood.position(600, 50);
  AddFood.mousePressed(Addfood);
  console.log(foodStoke);
  dog = createSprite(400, 300, 50, 50);
  dog.addImage("dg", dogImg);
  dog.scale = 0.3;

}



function draw() {
  background(color(46, 139, 87));
  if (keyDown(UP_ARROW)) {
    dog.addImage("dg", happyDogImg);
  }
  //add styles here.
  fill("white");
  textSize(15);
  stroke("black");
  text("UP_ARROW KEY TO FEED DRAGE MILK!!", 100, 50);
  drawSprites();

}
function readStoke(data) {
  foods = data.val();
}
function writeStoke(x) {

  database.ref('/').update(
    { foods: x })
}
function FeedDog() {
  dog.addImage("dg", happyDogImg);
}
function Addfood() {
  database.ref('/').update({
  })
}