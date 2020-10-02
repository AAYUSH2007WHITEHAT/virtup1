//Create variables here
var dog;
var database;
var happyd,foodS,foodstack;
  

function preload()
{
  dogImg = loadImage("Dog.png");
  happydImg = loadImage("happydog.png")
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  dog = createSprite(400,350)
dog.addImage("dog",dogImg)
dog.addImage("happy",happydImg)
dog.scale = 0.2

foodstack = database.ref('food').on("value",function(data){ foodS = data.val(); })
console.log(foodS);
console.log(foodstack)
}


function draw() {  
  background(46, 139, 87);
  if(keyDown("enter"))
  { if(foodS > 0){
     foodS = foodS - 1;
      console.log("foodS"+foodS);
   database.ref('/').update(
     { food : foodS })
      dog.changeImage("happy",happydImg); 
    } 
    else{ 
      fill("white")
       textSize(20) 
       text("refill food",200,30) } 
      }


  








  drawSprites();


}



