class Box{
    constructor(x,y,width,height){
        var options={
            'restitution':1.0
        }
        this.body=bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
    }
    display(){
       rectMode(CENTER);
       rect(object.position.x,object.position.y,50,50);
    }
}