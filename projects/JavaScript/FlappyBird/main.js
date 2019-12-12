var pipes = [];
var bird;
var count = 0
var play = false
var notToManyPipes = true
var score = 0;
var record = 0;

function setup(){
  createCanvas(displayWidth, displayHeight)
}


function draw(){
  if(play){
    background(114, 175, 255)

    playGame()
    fail()

    fill(0)
    textSize(20)
    text("score: "+str(score), 10, 20)
  }
  else {
    newSetup()
  }
}

function fail(){

  for(var i = 0; i < pipes.length; i++){
    if(pipes[i].onXas(70) && pipes[i].betweenYas(bird.y)){
      play = false
    }
  }


}


function newSetup(){
  background(114, 175, 255)
  fill(255, 0, 20)
  textSize(60)
  text("Flappy Bird!", width/2-200, height/2-100)
  fill(0)
  textSize(40)
  text("press SpaseBar to begin", width/2-200, height/2)
  text("score: "+str(score), width/2-200, height/2+50)
  text("high score: "+str(record), width/2-200, height/2+100)
  bird = new Bird
  pipes = []
  pipes[0] = new Pipe()
  frameCount = 0
}

function playGame(){
  if(frameCount % 100 == 0 && notToManyPipes){
    if(notToManyPipes){pipes.push(new Pipe());}   // make new pipe per 100
  }

  for(var i = 0; i < pipes.length; i++){
    pipes[i].move()
    if(pipes[i].offScreen()){
      pipes[i] = new Pipe
      notToManyPipes = false
      score++
    }
  }

  if(bird.update()){play = false;}
  bird.show()
  if(count <= 2){count++;}
  else{count=0;}
}

function keyPressed(){
  if(key == " "){
    bird.jump()
    if(score > record){record = score;}
    if(play === false){score = 0; notToManyPipes = true; pipes = [];}
    play = true
  }
}

function touchStarted(){
  bird.jump()
  play = true
}
