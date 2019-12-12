

class Pipe{
  constructor(){
    this.gap = floor(random(130, floor(random(200, 400))));
    this.x = width;
    this.up_y = floor(random(height - this.gap));
    this.down_y = this.up_y + this.gap
    this.speed = 3;
    this.diameter = 40;
  }

  move(){
    fill(180, 73, 220)
    rect(this.x, 0, this.diameter, this.up_y)
    rect(this.x, this.down_y, this.diameter, height)
    this.x -= this.speed
  }

  offScreen(){
    if(this.x < 0){
      return true;
    }else{
      return false;
    }
  }

  onXas(point){
    if(this.x == point-2 || this.x == point-1 || this.x == point || this.x == point+1 || this.x == point+2 || this.x == point+3){
      return true
    }else{return false;}
  }

  betweenYas(point){
    if(point >= this.up_y && point <= this.down_y){
      return false
    }else{return true;}

  }
}
