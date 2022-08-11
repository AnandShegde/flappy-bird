class Wall{
    constructor(canvasWidth,canvasHeight,real=true){
        this.canvasHeight = this.canvasHeight;
        this.canvasWidth = this.canvasWidth;
        this.width = 60;
     
        this.gap = random(50,100);

        this.height = random(30,canvasHeight-this.gap);    
        
    
        this.positionX = canvasWidth;
        this.top = this.height;
        this.bottom = this.top+this.gap;
        this.real = real

    }

    draw()
    {

        fill(0,256,0);
        stroke(256,0,0);
        rect(this.positionX,0,this.width,this.height);
        rect(this.positionX,this.bottom,this.width,500)
    }

    update()
    {
        this.positionX -= 2
    }
    collide(positionX,positionY){
        if(positionX>=this.positionX&&positionX<=this.positionX+this.width)
        {
            if(positionY>this.top&&positionY<this.bottom)
            {
                return false;
            }
            else if(this.real==true){
                return true;
            }
        }
        
        return false;
    }
}