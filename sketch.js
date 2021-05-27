const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinImg, bin;



var ground;
var engine, world;


function preload() {

    dustbinImg = loadImage("images/dustbingreen.png");

}

function setup() {
    createCanvas(displayWidth, displayHeight);


    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    bin = createSprite(610, 595, 20, 20);
    bin.addImage(dustbinImg);
    bin.scale = 0.45

    paper = new Paper(100, 600, 11.8);

    ground = new Ground(400, 680, 800, 20);

    leftSide = new Dustbin(550, 595, 20, 150)
    bottom = new Dustbin(610, 660, 100, 20);
    rightSide = new Dustbin(670, 595, 20, 150);



    Engine.run(engine);

}


function draw() {
    rectMode(CENTER);
    background("skyblue");

    Engine.update(engine);

    paper.display();
    ground.display();
    leftSide.display();
    bottom.display();
    bin.display()
    rightSide.display();



    drawSprites();


}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(paper.body, paper.body.position, { x: 8, y: -8 })

    }

}