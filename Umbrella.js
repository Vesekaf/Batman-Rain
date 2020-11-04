class Umbrella{

    constructor(x, y, radius) {
        var options = {
            isStatic: true, 
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        
        this.body = Bodies.circle(x, y, radius, options);
        
        this.image = loadImage("images/Walking Frame/walking_1.png");
        this.radius = radius;


        World.add(world, this.body);


    }

    display(){
        
        var pos = this.body.position;
        var angle = this.body.angle; 
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);

        this.image.scale = 0.10;
        pop();


}
}