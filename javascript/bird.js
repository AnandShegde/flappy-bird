class Bird{
    constructor(){
        this.positionX = 50;
        this.positionY = 150;
        this.velocity = 0;
        this.radius = 29
        this.image = loadImage('images/anand.png')
    }

    draw(){

        // image(this.image,this.positionX,this.positionY,20,20);
        ellipse(this.positionX,this.positionY,this.radius);

    }

    move(acc){
        
        if(this.positionY<300){
            
            this.velocity = this.velocity + acc;
            this.positionY = this.positionY + this.velocity;
        }
        else{
            // ball_velocity = 0;
            // ball_position = 0;
            this.velocity = 0;
            this.positionY = 0;
        }
    }

}