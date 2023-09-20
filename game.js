var buttonColor =["red", "blue", "green", "yellow"];

var userClickPattern= []
var gamePattern =[];

var gameStart = false;

var level = 0;



 function nextSequence(){

   level++
   document.querySelector("h1").innerHTML = "level " + level;
   randomNumber = Math.floor((Math.random()*buttonColor.length)) ;
   randomColor = buttonColor[randomNumber];
   gamePattern.push(randomColor);
   console.log(gamePattern);

   return randomColor


 }






function sequenceCall(){
  var randomColor = nextSequence();
  var animatedRandomColor = document.querySelector("#" + randomColor);
  var buttonColor = animatedRandomColor.id;
  var sound = new Audio("sounds/" + buttonColor + ".mp3");

  sound.play();
  animatedRandomColor.classList.add("pressed");
  setTimeout(function(){
   animatedRandomColor.classList.remove("pressed");
 },100);

}

document.querySelector(".play-button").addEventListener("click",function(){
if (!gameStart){
   document.querySelector("h1").innerHTML = "level " + level;
  sequenceCall();
  gameStart = true

}

})




  var buttons = document.querySelectorAll(".btn");

  for (var i =0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
    userChosenColor =  this.id


    userClickPattern.push(userChosenColor);
    var sound = new Audio("sounds/" +userChosenColor+".mp3")
    sound.play();
    checkAnswer(userClickPattern.length-1);

   })
  }




function checkAnswer(currentLevel){

  if (gamePattern[currentLevel] === userClickPattern[currentLevel]){
    if (gamePattern.length === userClickPattern.length){
      setTimeout(function(){
       sequenceCall();
     },500);
    }
  }
  else {
      var gameOver =  document.querySelector("body");
      gameOver.classList.add("game-over");
      setTimeout(function(){
         gameOver.classList.remove("game-over");
         var gameOverSound = new Audio("sounds/wrong.mp3");
         gameOverSound.play();
          document.querySelector("h1").innerHTML = "Game Over "


     },500);
      start();

  }

}

function start(){
  userClickPattern= []
  gamePattern =[];

  gameStart = false;

  level = 0;
  document.querySelector("h1").innerHTML = "Level 0";

}
