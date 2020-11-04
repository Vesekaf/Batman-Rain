const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



var bruce;
var maxDrops = 10;
var drops = [];
var thunder, thunderImg;


function preload(){

    thunderImg1 = loadImage("images/thunderbolt/1.png");
    thunderImg2 = loadImage("images/thunderbolt/2.png");
    thunderImg3 = loadImage("images/thunderbolt/3.png");
    thunderImg4 = loadImage("images/thunderbolt/4.png");

    
}

function setup(){
    
    createCanvas(1600, 1600);
    engine = Engine.create();
    world = engine.world;

    bruce = new Umbrella(800, 1150, 300);

    
    
    
    


    
}

function draw(){
    
    background("black");
    Engine.update(engine);

    for(var i = 0; i<maxDrops; i++){

        drops.push(new Drip(random(0, 1600), random(0, 400), 10));

    }

    for(var n = 0; n < drops.length; n++){

        drops[n].display();
      
      
      }

    bruce.display();

    

    if(frameCount % 70 === 0){

        var rand = Math.round(random(1,4));

        if(rand === 1){

            thunder = createSprite(800, 380);
            thunder.addImage(thunderImg1);
            thunder.lifetime = 10; 
            
        }
        if(rand === 2){

            thunder = createSprite(800, 380);
            thunder.addImage(thunderImg2);
            thunder.lifetime = 10; 
            
        }

        if(rand === 3){

            thunder = createSprite(800, 380);
            thunder.addImage(thunderImg3);
            thunder.lifetime = 10; 
            
        }
        if(rand === 4){

            thunder = createSprite(800, 380);
            thunder.addImage(thunderImg4);
            thunder.lifetime = 10; 
            
        }
       
      }

      


    drawSprites();

}   



    