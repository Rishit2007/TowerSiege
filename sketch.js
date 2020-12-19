
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload(){

}

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;
    

  ground1 = new Ground(400,680,800,20);

    Engine.run(engine);
}

function draw(){
    ground1.display();
}