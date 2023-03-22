  let pizzaX, pizzaY
  let notEaten
 
let cashX,cashY
function setup() {
  createCanvas(400, 400);
 cashX= random (10,360)
 cashY= random (10,360)  
  pizzaY=50
  pizzaX=50
}

function draw() {
  background(220);
 pizza(pizzaX,pizzaY,1) 
pizzaCash(cashX,cashY,1)
}

function pizza(x,y,size) {
  push();
  translate(x,y)
  scale(size)
   fill ("wheat")
triangle(20,0,0,20,60,60)
  fill("gold")
  triangle(20,4,5,20,60,60)
  fill("firebrick")
  ellipse (24,20,5)
   ellipse (10,20,5)
  ellipse (40,40,5)
  ellipse (30,30,5)
  pop();
}

function pizzaCash(x,y,size){
  push();
  translate(x,y)
  scale(size)
  fill("darkolivegreen")
  rect(0,0,50,25)
  fill("yellowgreen")
  ellipse(25,13,20)
  pizza(18,5,0.25)
  pop();
}



function keyPressed(){
  if (keyCode== UP_ARROW){
  pizzaY +=-7
}  
    if (keyCode== DOWN_ARROW){
  pizzaY +=7
} 
if (keyCode== RIGHT_ARROW){
  pizzaX +=7
}
    if (keyCode== LEFT_ARROW){
  pizzaX +=-7
} 
  
}
