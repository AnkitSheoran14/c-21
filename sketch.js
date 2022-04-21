var galaxy, galaxyImg;
var asteroid, asteroidImg, asteroidGroup;
var rocket, rocketImg; 
var star, starImg, starGroup;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
  
function preload(){
galaxyImg = loadImage("galaxy.jpg");
asteroidImg = loadImage("asteroid.jpg");
rocketImg = loadImage("rocket.jpg");
starImg = loadImage("star.jpg");


}

function setup() {
 createCanvas(800,800);
 galaxy = createSprite(600,600);
 galaxy.addImage("galaxy", galaxyImg);
galaxy.velocity = 1;


asteroidGroup = new Group();
starGroup = new Group();
invisibleBlockGroup = new Group();

rocket = createSprite(200, 200, 50, 50);
rocket.scale = 0.3;
rocket.addImage("rocket", rocketImg);

}

function draw() {
 background(255);
 if (galaxy.y > 400){
   galaxy.y = 300

 }

if (gameState === "play"){
  if (keyDown("left_arrow")){
   
     rocket.x = rocket.x - 3;
    // write a code to move left when left arrow is pressed
  }
  if (keyDown("right_arrow")) {

    rocket.x = rocket.x + 3; 

// write a code to move left when right arrow is pressed

}
if (keyDown("space")) {

  rocket.velocityY = -10;

  // write a code to move up when space arrow is pressed

}

rocket.velocityY = rocket.velocityY + 0.8;
 
//write a condition for infinte scrolling galaxy

spawnasteroid();
  

//write a code to make invisibleBlockGroup collide with rocket destory the rocket and make gamestate to end.
if (asteroidGroup.isTouching(rocket)){
rocket.velocityY = 0;

} 
if (invisibleBlockGroup.isTouching(rocket) || rocket.y >  600){
   rocket.destroy();
   gameState = "end"
}

drawSprites();
}
if (gameState === "end") {
  stroke("red");
  fill("red");
  textSize(50);
  text("Game Over", 230, 250)
}
}

function spawnasteroid() {
//write code here to spawn the asteroid
if (frameCount % 240 === 0) {
  var asteroid = createSprite(200, 50);
  var star = createSprite(200, 10);
  var invisibleBlock = createSprite(200, 15);
  invisibleBlock.width = climber.width;
  invisibleBlock.height = 2;
  //add the random function
  asteroid.addImage(asteroidImg);
  star.addImage(starImg);
   asteroid.velocityY = 1;
   star.velocityY = 1;
   invisibleBlock.velocityY = 1;

//change the depth of the rocket and asteroid

rocket.depth = asteroid.depth;
rocket.depth += 1;

//assing lifetime for the asteroid, star and invisible block
asteroid.lifetime = 800;
star.lifetime = 800;
invisibleBlock.lifetime = 800;

//add each obstacle to the group obstaclesGroup.add(obstacle);here  obstacle are asteroid, star and invisible block
asteroidGroup.add(asteroid);
invisibleBlock.debug = true;
starGroup.add(star);
invisibleBlockGroup.add(invisibleBlock);

}
}