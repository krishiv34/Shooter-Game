var background,startscreen;
var playbutton
var aboutbutton
var gameState='wait'
function preload(){
    startScreen=loadImage("Shooter Game.gif")
    bg_play=loadImage("2d game.jpeg")
    Shooter=loadImage("Shooter.png")
    Robot1=loadImage("Robot.png")
    Robot2=loadImage("download-removebg-preview (1).png")
    Robot3=loadImage("download-removebg-preview.png")
}
function setup(){
    createCanvas(900,900)
    playbutton=createImg("start.png");
    playbutton.position(200,250)
    playbutton.size(170,100)
    aboutbutton=createImg("about.png");
    aboutbutton.position(500,250)
    aboutbutton.size(170,100)
    playbutton.hide() 
    aboutbutton.hide()
    player=createSprite(200,200)
    player.addImage(Shooter)
    player.visible=false
}

function draw(){
if(gameState=='wait'){
    background(startScreen);
    playbutton.show()
    aboutbutton.show()
}
aboutbutton.mousePressed(() => {
    playbutton.hide();
    aboutbutton.hide();
    gameState = "about";

})
playbutton.mousePressed(() => {
    playbutton.hide();
    aboutbutton.hide();
    gameState = "play";

})
if (gameState=='play'){
    background(bg_play)
    player.visible=true
    spawnRobot()
}
if (gameState=='about'){
    aboutgame()
}
}

function aboutgame() {

    swal({
        title: "About Game === How to Play!!",
        text: "Shoot the robots using space button !!",
        textAlign: "center",
        //imageUrl: "spaceImg.jpg",
        //imageSize: "200x200",
        confirmButtonText: "Lets destroy the robots!!",
        confirmButtonColor: "blue",
    },
        function () {
            gameState = "wait"
        }
  
    )
  
  
  }
  function spawnRobot()
  if (frameCount % 100 == 0) {

    var rand = Math.round(random(50, 600))
    enemy = createSprite(width, rand);
    enemy.scale = 0.25
    enemy.velocityX = -8;

    var randimg = Math.round(random(1,4))
    switch (randimg) {

        case 1:
            enemy.addImage(enemy1_img)
            enemy.setCollider("rectangle", 0, 0, 250, 300)
            break;

        case 2:
            enemy.addImage(enemy2_img)
            enemy.setCollider("rectangle", 0, 0, enemy.width, enemy.height)
                break;

                case 3:
                    enemy.addImage(enemy3_img)
                    enemy.setCollider("rectangle", 0, 0, 250, 300)
                    break;
    
                case 4:
                    enemy.addImage(enemy4_img)
                    enemy.setCollider("rectangle", 0, 0, enemy.width, enemy.height)
                    break;
            default: break;

        }

        enemy.depth