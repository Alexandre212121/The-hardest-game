var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 5;
var calvicie1, calvicie2, calvicie3, calvicie4;
var barreira1, barreira2;
var lucalvo;
var chegada;

  chegada = createSprite(374, 190 ,52,140);
  chegada.shapeColor = "yellow";

  barreira1 = createSprite(190,120,420,3);
  barreira2 = createSprite(190,260,420,3);
  
  lucalvo = createSprite(20,190,13,13);
  lucalvo.shapeColor = "green";
  
  calvicie1 = createSprite(100,130,10,10);
  calvicie1.shapeColor = "red";
  calvicie2 = createSprite(215,130,10,10);
  calvicie2.shapeColor = "red";
  calvicie3 = createSprite(165,250,10,10);
  calvicie3.shapeColor = "red";
  calvicie4 = createSprite(270,250,10,10);
  calvicie4.shapeColor = "red";
  
 
 
//adicione velocidade para fazer o carro se mover.
calvicie1.velocityY = 7;
calvicie2.velocityY = 7;
calvicie3.velocityY = 7;
calvicie4.velocityY = 7;

function draw() {
   background("white");
  textSize(19);
  text("Vidas: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  
  


//crie a função rebater, para fazer o carro rebater nos limites
calvicie1.bounceOff(barreira1);
calvicie1.bounceOff(barreira2);

calvicie2.bounceOff(barreira1);
calvicie2.bounceOff(barreira2);

calvicie3.bounceOff(barreira1);
calvicie3.bounceOff(barreira2);

calvicie4.bounceOff(barreira1);
calvicie4.bounceOff(barreira2);



//Adicione a condição para fazer Sam se mover para a esquerda e para a direita
if(keyDown("right")) {
  lucalvo.x = lucalvo.x + 5;
}
if(keyDown("left")) {
  lucalvo.x = lucalvo.x - 5;
}



//Adicione a condição para reduzir a vida de Sam quando ele encostar no carro.
if(lucalvo.isTouching(calvicie1) || lucalvo.isTouching(calvicie2) || lucalvo.isTouching(calvicie3) || lucalvo.isTouching(calvicie4)) {
  life = life - 1 ;
}



//Condição para se life = 0 acabar o jogo
if(life <= 0){
  textAlign(CENTER, TOP);
  fill("black");
  textSize(17);
  text("A calvície afetou o lucalvo", 200, 150);
  calvicie1.velocityY = 0;
  calvicie2.velocityY = 0;
  calvicie3.velocityY = 0;
  calvicie4.velocityY = 0;
  calvicie1.x = 100;
  calvicie1.y = 130;
  calvicie2.x = 215;
  calvicie2.y = 130;
  calvicie3.x = 165;
  calvicie3.y = 250;
  calvicie4.x = 270;
  calvicie4.y = 250;
  lucalvo.x = 20;
  lucalvo.y = 190;
  
  if(keyDown("space")) {
    resetGame();
  }
}

if(lucalvo.isTouching(chegada)) {
  fill("black");
  textSize(17);
  text("Lucalvo escapou da calvície!", 120, 150);
  calvicie1.destroy();
  calvicie2.destroy();
  calvicie3.destroy();
  calvicie4.destroy();
  textAlign(CENTER, TOP);
  
}


 drawSprites();
}

function resetGame() {
  life = 5;
  calvicie1.velocityY = 7;
  calvicie2.velocityY = 7;
  calvicie3.velocityY = 7;
  calvicie4.velocityY = 7;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
