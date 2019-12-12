class Bird{
  constructor(){
    this.y = height/2;
    this.velocity = 0
    this.size = 30;
    this.force = 1.1
    this.wight =  0.9
  }

  jump(){
    this.velocity = -15
  }

  update(){
    if (this.velocity > 17){
      this.velocity = 17
    }else{this.velocity += this.force * this.wight;}
    this.y += this.velocity / this.wight;
    if((this.y >= height - this.size/2) || (this.y <= this.size/2)){
      fill(0)
      textSize(60)
      text("Game Over", width/2-120, height/2)
      return true
    }
    return false
  }

  show(){
    fill(200, 100, 50)
    ellipse(70, this.y, this.size, this.size)
  }
}
