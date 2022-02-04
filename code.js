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

//creating objects and adding colors(car,boundary,sam)
var car1 = createSprite(72,108,20,20);
car1.shapeColor="red"
var car2 = createSprite(150,280,20,20);
car2.shapeColor="blue"
var car3 = createSprite(250,111,20,20);
car3.shapeColor="red"
var car4 = createSprite(300, 280,20,20);
car4.shapeColor="blue"

var boundary1 = createSprite(200,100,400,10);
boundary1.shapeColor="green"
var boundary2 = createSprite(200,300,400,10);
boundary2.shapeColor="green"

//start and end point 
var start = createSprite(20,200,50,190);
start.shapeColor="skyblue"

var end = createSprite(380,200,50,190);
end.shapeColor="skyblue"

var sam = createSprite(10,200,20,20);
sam.shapeColor="yellow"

//velocity to cars 
car1.setVelocity(0,9)
car2.setVelocity(0,-9)
car3.setVelocity(0,9)
car4.setVelocity(0,-9)
var lives=0
playSpeech("welcome to the worlds most difficult game", "female", "English");
function draw() {
background("white")
 
//bounce off 
car1.bounceOff(boundary1);
car2.bounceOff(boundary1);
car3.bounceOff(boundary1);
car4.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary2);
car3.bounceOff(boundary2);
car4.bounceOff(boundary2);

//moving sam 
if (keyDown("right")) {
sam.x+=5
}
if (keyDown("LEFT")) {
sam.x+=-5  
}
//adiing conditions 
if (sam.isTouching(car1) || sam.isTouching(car2)||sam.isTouching(car3)||sam.isTouching(car4)  ){
sam.x=10
sam.y=200
//lives
lives+=1    
}
textSize(25);
text("lives "+lives,197,97);
drawSprites();
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
