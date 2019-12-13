let ball;
let slider;
let blocks = [];
let xBlocks = 20;
let yBlocks = 10;
var score = 0;
//super
function setup() {
  createCanvas(displayWidth, displayHeight);
  frameRate(60);
  ball = new Ball();
  slider = new Slider();
  var mulX = (width-50)/xBlocks;
  var mulY = (height)/yBlocks;
  for(var x = 0; x < width; x+=mulX){
    for(var y = 0; y < height-300; y+=mulY){
      append(blocks, new Block(x, y, mulX, mulY, true))
    }
  }
}

function draw() {
  background(30, 20, 0);
  slider.update()
  slider.show()
  ball.update()
  ball.show()
  // console.log(blocks[0].up)
  for(let block = 0; block < blocks.length; block++){
    ball = blocks[block].update(ball)
    blocks[block].show()
  }
}

class Block{
  constructor(x, y, x2, y2, up){
    this.x = x;
    this.y = y;
    this.x2 = x2;
    this.y2 = y2;
    this.up = up;
  }

  show(){
    if(this.up){
      fill(255, 0, 0);
      rect(this.x, this.y, this.x2, this.y2);
    }
  }

  update(b){
    if(this.up){
      if(((b.y < this.y+this.y2) || b.y < this.y) && (((this.x < b.x) && (b.x < this.x + this.x2)))){// || b.x < this.x)){
        ball.setDiraction()
        this.up = false
        score += 1;
      }
    }
    return b
  }


}
class Slider{
  constructor(){
    this.x = mouseX;
    this.y = height - 10;
  }

  update(){
    this.x = mouseX;
    if((ball.y > slider.y-40 && ball.y < slider.y) && (this.x-150<ball.x && this.x+150>ball.x)){
      ball.setDiraction()
    }
  }

  show(){
    fill(255)
    rect(this.x-150, this.y-20, 300, 20)
  }


}

class Ball{
  constructor(){
    this.x = width/2;
    this.y = height-50;
    this.diraction = 50;
    this.Xspeed = 0;
    this.Yspeed = -6;
    this.radius = 10;
    }

  update(){
    this.x += this.Xspeed;
    this.y += this.Yspeed;
  }

  setDiraction(){      // 0 - 100 (left-up to right-up)
    this.Xspeed = random(-4, 4)
    this.Yspeed = -this.Yspeed;
    if(this.Yspeed<0){
      this.Yspeed = -(6+score/8);
    }
    else{
      this.Yspeed = 6+score/8;
    }
  }

  show(){
    fill(200);
    circle(this.x, this.y, this.radius*2);
  }
}
