var bulletspeed,weight
var thickness,wall
var deformation
function setup() {
  createCanvas(1600,400);
  speed = random(223,321)
  weight = random(30,52)
  wall = createSprite(1200,200,thickness,height/2)
  bullet = createSprite(50,200,50,30)
  thickness = random(22,83)
}

function draw() {
  background("peachPuff");  
  wall.shapeColor = "black"
  bullet.velocityX = speed
 if (hasCollided(bullet,wall)){
  deformation = Math.round((0.5*weight*speed*speed)/(thickness*thickness*thickness))

  bullet.velocityX = 0

if (deformation < 10){
  wall.shapeColor = "green"
}

if (deformation > 10){
  wall.shapeColor = "red"
}
 }
  drawSprites();
}
function hasCollided(lBullet,lWall){
bulletRightEdge=lBullet.x+lBullet.width
wallLeftEdge=lWall.x
if (bulletRightEdge>=wallLeftEdge){
  return true
}
return false
}