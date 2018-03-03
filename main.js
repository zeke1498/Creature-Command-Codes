//Sets the HP of each players
var playerOneHP = 100;
var playerTwoHP = 100;
//sets the crit multipler
var crit = 1.5;
//finds out what element the character is
var pOneElement = "water";
var pOneMove = "air";
var pTwoElement = "fire";
var pTwoMove = "air";
//sets what kind of stage it is unused for now :(
var stage = "";
//sets the turn for the players
var pOneTurn = true;
var pTwoTurn = false;

document.getElementById("myBtn").addEventListener("click", game);
//Crit chance for the fire character
function critChance(dmg){
  var chance = Math.floor(Math.random() * 100) + 1;
  //checks to see if chance is less than 6 out of 100
  if(chance < 10){
     return dmg * crit;
  }else{
    return dmg;
  }
}
//finds out what type the player one is playing as and finds crit methonds random
//proper damage output
function doDmgplayerOne(pOneElement,pOneMove){
  //fire element character
  if(pOneElement == "fire"){
    if(pOneMove == 'fire'){
      var dmg = Math.floor(Math.random() * (16 - 10 + 1)) + 10;
        console.log(critChance(dmg));
    }else if (pOneMove == 'earth') {
      var dmg = Math.floor(Math.random() * (12 - 10 + 1)) + 10;
        return critChance(dmg);
    }
  }
  //water type character
  if(pOneElement == "water"){
    if(pOneMove == 'water'){
      var dmg = Math.floor(Math.random() * (14 - 11 + 1)) + 11;
        return critChance(dmg);
    }else if (pOneMove == 'air') {
      var dmg = Math.floor(Math.random() * (9 - 6 + 1)) + 9;
        return critChance(dmg);
    }
  }
  if(pOneElement == "air"){
    if(pOneMove == 'air'){
      var dmg = Math.floor(Math.random() * (12 - 9 + 1)) + 12;
        return critChance(dmg);
    }else if (pOneMove == 'fire') {
      var dmg = Math.floor(Math.random() * (14 -  8 + 1 )) + 14;
        return critChance(dmg);
    }
  }
  if(pOneElement == "earth"){
    if(pOneMove == 'earth'){
      var dmg = Math.floor(Math.random() * (15 - 13 + 1)) + 15;
        return critChance(dmg);
    }else if (pOneMove == 'water') {
      var dmg = Math.floor(Math.random() * (11 -  8 + 1 )) + 11;
        return critChance(dmg);
    }
  }
}
function doDmgplayerTwo(pTwoElement,pTwoMove){
  //fire element character
  if(pOneElement == "fire"){
    if(pOneMove == 'fire'){
      var dmg = Math.floor(Math.random() * (16 - 10 + 1)) + 10;
        console.log(critChance(dmg));
    }else if (pOneMove == 'earth') {
      var dmg = Math.floor(Math.random() * (12 - 10 + 1)) + 10;
        return critChance(dmg);
    }
  }
  //water type character
  if(pOneElement == "water"){
    if(pOneMove == 'water'){
      var dmg = Math.floor(Math.random() * (14 - 11 + 1)) + 11;
        return critChance(dmg);
    }else if (pOneMove == 'air') {
      var dmg = Math.floor(Math.random() * (9 - 6 + 1)) + 9;
        return critChance(dmg);
    }
  }
  if(pOneElement == "air"){
    if(pOneMove == 'air'){
      var dmg = Math.floor(Math.random() * (12 - 9 + 1)) + 12;
        return critChance(dmg);
    }else if (pOneMove == 'fire') {
      var dmg = Math.floor(Math.random() * (14 -  8 + 1 )) + 14;
        return critChance(dmg);
    }
  }
  if(pOneElement == "earth"){
    if(pOneMove == 'earth'){
      var dmg = Math.floor(Math.random() * (15 - 13 + 1)) + 15;
        return critChance(dmg);
    }else if (pOneMove == 'water') {
      var dmg = Math.floor(Math.random() * (11 -  8 + 1 )) + 11;
        return critChance(dmg);
    }
  }
}
//main game method
function game(){
    if(pOneTurn == true){
        playerTwoHP -= doDmgplayerOne(pOneElement,pOneMove);
          pOneTurn = false;
          pTwoTurn = true;
            console.log("player two HP is : "+playerTwoHP);
            //Will not need for alexa..... at least no EXACTLY THIS that is
    }else if(pTwoTurn == true){
        playerOneHP -= doDmgplayerTwo(pTwoElement,pTwoMove);
          pOneTurn = true;
          pTwoTurn = false;
            console.log("player one HP is : "+playerOneHP);
            //Will not need for alexa..... at least no EXACTLY THIS that is
    }
}
