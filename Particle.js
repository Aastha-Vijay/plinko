class Particle{
    constructor(x, y, radius){
        var options = {
            restitution:0.4
        }
    this.radius = radius;
    this.body = Bodies.circle(x,y, this.radius,options);
    this.colour = colour(random(0,255), random(0, 255), random(0, 225));
    World.add(world, this.body);
    }
    display(){
        var pos= this.body.position;
        var angle = ths.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(this.colour);
        pop();
    }
}