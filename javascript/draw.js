
var bird;
var mytime = 0;
var acc = 0.1;
var canvasHeight = 300;
var canvasWidth = 600;
var walls = []
var playing = false
var score = 0;
var highScore=0;

function setup(){
    walls = []
    

    createCanvas(canvasWidth,canvasHeight);
    background(100);
    bird = new Bird();

    // newWall = new Wall(canvasWidth,canvasHeight,real=false,60,100);
    // walls.push(newWall);
    
    writeScore();
    // writeHighScore();
    // textAlign(CENTER, CENTER);
}

function gameOver(){
    playing = false;
    setup();


}

function draw(){

    background(100);

    noStroke();
    fill(0,230,0);

if(playing){


    if(frameCount%100==0){

    clickwall = new Wall(canvasWidth,canvasHeight);
    walls.push(clickwall);
    if(walls.length>6){
        walls.shift();
    }
    
    }

    if(mouseIsPressed){
        fill(230);
    }

    bird.move(acc);
    bird.draw();

    for (const wall of walls){

        if(wall.collide(bird.positionX,bird.positionY)) {
            bird = new Bird();
            gameOver();
        }
        wall.draw();
        wall.update();
        console.log(score)
        
        if(wall.positionX==32){
            score++;
            console.log("changed")
        }
    }
    writeScore()
    writeHighScore()
}

}

function writeScore(){
    
    document.getElementById('Score').innerText ='Your score is '+ score;
    
}

function writeHighScore(){
    highScore = max(score,highScore);
    document.getElementById("HighScore").innerText = 'High Score:'+ highScore;
}   


function mouseClicked(){
    if(!playing){
        
    playing = true;
    score = 0;

    }
    else{
        bird.velocity = -3;
    }
    
    
}