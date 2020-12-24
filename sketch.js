const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var box1;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

    object= Bodies.rectangle(200,390,200,20,object_options);
    World.add(world,object);

    box1=new Box(200,100,50,50)

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    rectMode(CENTER);
    rect(object.position.x,object.position.y,50,50);   
}
