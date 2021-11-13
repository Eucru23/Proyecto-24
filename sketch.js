const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height-20,1200,40)

    martillo = new Martillo(10,100);

    hule = new Hule(1000,530,20);
    piedra = new Piedra(600,400,70,40);
    hierro = new Hierro(200,500,100,100);

}

function draw(){
    
    background("lightBlue");

    Engine.update(engine);
     //console.log(piedra.x);

    plane.display();
    martillo.display();
    hule.display();
    piedra.display();
    hierro.display();

    
 
}