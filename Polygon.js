class Polygon{
    constructor(x,y){
        var options = {
            isStatic: false,
            density: 1.0
        }
        this.body = Bodies.circle(x,y,25,options);
        World.add(world,this.body);
        this.image = loadImage("hexagon.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,60,50);
    }
}