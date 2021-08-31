var snow ;
var backgroundImg;
function preload(){
  backgroundImg = loadImage("s.png");
}
function setup() {
  createCanvas(800,650);
 
}

function draw() {
  background(backgroundImg);  
  drawSprites();
  if(frameCount%60===0){
    snow.push(new Particle(random(width/2-30,width/2+30),10,10));
  }


  //display the particles 
  for(var k = 0; k < snow.length; k++){
    snow[k].display();
  }
}