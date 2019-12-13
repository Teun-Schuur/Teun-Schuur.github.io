let characters = "âäàáãåçñ¢[.(+|&éêëèíîïìß]$*);-/ÂÄÀÁÃÅÇÑ¦,%_>?øÉÊËÈÍÎÏÌ`:#@=Øabcdefghi«»ðý±°jklmnopqrªºæ¸Æ¤µ~stuvwxyz¡¿ÐÝÞ¢£¥·©§¶¼½¾¬|¯¨'×{ABCDEFGHI-ôöòóõ}JKLMNOPQR¹ûüùú\÷STUVWXYZ²ÔÖÒÓ0134567"
// hay hay hay
console.log("afe")
console.log("je moeder!")
let line = [];

function setup() {
  createCanvas(displayWidth, displayHeight);
  frameRate(60);
  textSize(20)
  console.log(floor(map(random(0, width), 0, width, 0, 100))*(width/100))
}

function draw() {
  background(0);
  if(line.length < 50){
    append(line, new Line());
  }
  for (var i = 0; i < line.length; i++){
    line[i].update()
  }
}


class Line{
  constructor(){
    this.x = floor(floor(map(random(0, width), 0, width, 0, 60))*(width/60));
    this.y = 0;
    this.charset = []
  }

  update(){
    this.y += 20;
    append(this.charset, new Char(this.x, this.y))
    for(var i = 0; i < this.charset.length; i++){
      this.charset[i].show()
    }
    if (this.charset.length>30){
      this.charset.shift();
    }
    if(this.y > height){
      this.y = 0;
      this.x = floor(floor(map(random(0, width), 0, width, 0, 60))*(width/60));
    }
  }
}


class Char{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.full = 100;
    this.cr = characters.charAt(Math.floor(Math.random() * characters.length))
    fill(255)
    text(this.cr, x, y);
  }

  show(){
    this.full -= 3
    fill(0,255,65, this.full);
    text(this.cr, this.x, this.y);
  }
}
