class Division{
    constuctor(x,y,width,height){
        var option = {
            isStatic:true
        }
        this.body = Bodies(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode("CENTER");
        fill("white");
        rect(pos.x, pos.y, this.width, this.height);
    }
}