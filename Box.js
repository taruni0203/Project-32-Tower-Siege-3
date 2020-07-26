class Box {
    constructor(x, y, width, height,angle){
      this.visibility = 225;
        var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sad2.png");
        World.add(world, this.body);
    }

    display(){
        if(this.body.speed < 3){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
        }
        else{
            push();
            World.remove(world,this.body);
            tint(225,this.visibility);
            this.visibility = this.visibility - 4;
            imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
            pop();
        }
    }

    score(){
        if(this.visibility<50 && this.visibility>-50){
          score++
    }
  }
  
}
