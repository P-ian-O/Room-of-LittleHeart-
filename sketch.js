const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const ground= 550;
let littleHeart;
let littleHeartAnim;
let BG;
let slpdog;
let coffee;



function preload(){
    const littleHeartSpritesheet = loadSpriteSheet("img/32littleHeart.png", 32,32,6);
    littleHeartAnim = loadAnimation(littleHeartSpritesheet);
    littleHeart = createSprite(CANVAS_WIDTH / 2, ground, 64, 64);
    littleHeart.moveSpeed = 6;
    littleHeart.scle = (2,0);

    const slpdogSpriteSheet= loadSpriteSheet("img/littleWhite.png", 32, 32, 6);
    slpdog= loadAnimation(slpdogSpriteSheet)
   

    const coffeeSpriteSheet= loadSpriteSheet("img/coffee.png",32, 32, 6);
    coffee= loadAnimation(coffeeSpriteSheet)

    BG = loadImage('img/Room.jpg');
}

function setup(){
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    littleHeart.addAnimation("moveR", littleHeartAnim);
    littleHeart.addAnimation("moveL", littleHeartAnim);
    littleHeart.addImage("still",loadImage("img/littleHeartSingle.png"));
    littleHeart.setDefaultCollider();


}

function update(object) {
    if ( keyDown("left") || keyDown("right")) {
  
      if (keyDown("left")) {
        object.addSpeed(2, 180);
        object.mirrorX(-1);
      }
      if (keyDown("right")) {
        object.addSpeed(2, 0);
        object.mirrorX(1);
      }
    } else {
      object.setSpeed(0);
    }
    drawObject(object);
  }

  function drawObject(object) {
      if (object.getSpeed()> 0.0001) {
          object.changeAnimation("moveR");
      } else {
          object.changeImage("still");
      }
      littleHeart.limitSpeed(littleHeart.moveSpeed);
      drawSprite(object);
  }

  function draw() {
    background(BG);
    update(littleHeart);
    animation(slpdog, 300, 100);
    animation(coffee, 400, 150);
  }
  
