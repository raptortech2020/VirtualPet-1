var dog,dog_img;
var happy_dog,happy_dog_img;
var foodS,foodStock,served;
var database;

function preload()
{
dog_img = loadImage("dogImg.png");	
happy_dog_img = loadImage("dogImg1.png");

}

function setup() {
 createCanvas(500, 500);
 
 database = firebase.database();

 dog = createSprite(250,250);
 dog.addImage("dog",dog_img);
 dog.scale = 0.5;

 happy_dog = createSprite(250,250);
 happy_dog.addImage("happy_dog",happy_dog_img);
 happy_dog.scale = 0.5;
 happy_dog.visible = false;

 foodStock = database.ref('food');
 foodStock.on("value",readStock);
}

function draw() {  
 background(46, 139, 87);

if (keyDown("UP_ARROW"))
{
  served-1;
  happy_dog.visible = true;
  dog.visible = false;

}
 drawSprites();

 textSize(20);
 fill("white");
 text("Remaining Milk Bottles: "+foodS,100,75);
 text("Note: Press up arrow key to feed dog",100,50);
   //add styles here
}
function readStock(){
 foodS= database.ref('food');
 foodS.on("value",function(data)
 {
   food = data.val();
 })  
}
function writeStock(x){
 
 database.ref('/').set({
   food:x
 })
 served = food;

}
