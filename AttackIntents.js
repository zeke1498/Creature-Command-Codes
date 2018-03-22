

'Fireball' : function() {
        if (secondPlayerChar == varu && secondPlayerTurn == true){
            // VideoApp.Play directives can be added to the response
             if (this.event.context.System.device.supportedInterfaces.VideoApp) {
                 pOneHp -= doDmgPlayerTwo(varu, fireball);
                 this.response.playVideo(/*Plays the Fireball attack animation (Right side)*/);
             } else {
                 this.response.speak("The video cannot be played on your device. " +
                 "To watch this video, try launching the skill from your echo show device.");
             }
        }
    

        if (firstPlayerChar == varu && firstPlayerTurn == true){
            if (this.event.context.System.device.supportedInterfaces.VideoApp) {
                pTwoHp -= doDmgPlayerOne(varu, fireball);
                this.response.playVideo(/*Play fireball animation (Left side)*/);
            } else {
                  this.response.speak("The video cannot be played on your device. " +
                  "To watch this video, try launching the skill from your echo show device.");
             }
        }

        this.emit(':responseReady');
}

'Tornado' : function() {
        if (secondPlayerChar == varu && secondPlayerTurn == true){
          // VideoApp.Play directives can be added to the response
         if (this.event.context.System.device.supportedInterfaces.VideoApp) {
             pOneHp -= doDmgPlayerTwo(varu, tornado);
             this.response.playVideo(/*Plays the Tornado attack animation (Right side)*/);
         } else {
             this.response.speak("The video cannot be played on your device. " +
             "To watch this video, try launching the skill from your echo show device.");
         }
        }
    

        if (firstPlayerChar == varu && firstPlayerTurn == true){
          if (this.event.context.System.device.supportedInterfaces.VideoApp) {
              pTwoHp -= doDmgPlayerOne(varu, tornado);
              this.response.playVideo(/*Play Tornado animation (Left side)*/);
        } else {
              this.response.speak("The video cannot be played on your device. " +
              "To watch this video, try launching the skill from your echo show device.");
         }
        }

        this.emit(':responseReady');
}

'Waterpump' : function() {
        if (secondPlayerChar == babool && secondPlayerTurn == true){
          // VideoApp.Play directives can be added to the response
         if (this.event.context.System.device.supportedInterfaces.VideoApp) {
             pOneHp -= doDmgPlayerTwo(babool, waterpump);
             this.response.playVideo(/*Plays the Waterpump attack animation (Right side)*/);
         } else {
             this.response.speak("The video cannot be played on your device. " +
             "To watch this video, try launching the skill from your echo show device.");
         }
        }
    

        if (firstPlayerChar == babool && firstPlayerTurn == true){
          if (this.event.context.System.device.supportedInterfaces.VideoApp) {
              pTwoHp -= doDmgPlayerOne(babool, waterpump);
              this.response.playVideo(/*Play Waterpump animation (Left side)*/);
        } else {
              this.response.speak("The video cannot be played on your device. " +
              "To watch this video, try launching the skill from your echo show device.");
         }
        }

        this.emit(':responseReady');
}

'Rocks' : function() {
        if (secondPlayerChar == babool && secondPlayerTurn == true){
          // VideoApp.Play directives can be added to the response
         if (this.event.context.System.device.supportedInterfaces.VideoApp) {
             pOneHp -= doDmgPlayerTwo(babool, rocks);
             this.response.playVideo(/*Plays the Rocks attack animation (Right side)*/);
         } else {
             this.response.speak("The video cannot be played on your device. " +
             "To watch this video, try launching the skill from your echo show device.");
         }
        }
    

        if (firstPlayerChar == babool && firstPlayerTurn == true){
          if (this.event.context.System.device.supportedInterfaces.VideoApp) {
              pTwoHp -= doDmgPlayerOne(babool, rocks);
              this.response.playVideo(/*Play Rocks animation (Left side)*/);
        } else {
              this.response.speak("The video cannot be played on your device. " +
              "To watch this video, try launching the skill from your echo show device.");
         }
        }

        this.emit(':responseReady');
}

'Waterblast' : function() {
        if (secondPlayerChar == klaki && secondPlayerTurn == true){
          // VideoApp.Play directives can be added to the response
         if (this.event.context.System.device.supportedInterfaces.VideoApp) {
             pOneHp -= doDmgPlayerTwo(kalki, waterBlast);
             this.response.playVideo(/*Plays the Waterblast attack animation (Right side)*/);
         } else {
             this.response.speak("The video cannot be played on your device. " +
             "To watch this video, try launching the skill from your echo show device.");
         }
        }
    

        if (firstPlayerChar == klaki && firstPlayerTurn == true){
          if (this.event.context.System.device.supportedInterfaces.VideoApp) {
              pTwoHp -= doDmgPlayerOne(klaki, waterBlast);
              this.response.playVideo(/*Play Waterblast animation (Left side)*/);
        } else {
              this.response.speak("The video cannot be played on your device. " +
              "To watch this video, try launching the skill from your echo show device.");
         }
        }

        this.emit(':responseReady');
}

'IceSpin' : function() {
        if (secondPlayerChar == klaki && secondPlayerTurn == true){
          // VideoApp.Play directives can be added to the response
         if (this.event.context.System.device.supportedInterfaces.VideoApp) {
             pOneHp -= doDmgPlayerTwo(klaki, iceSpin);
             this.response.playVideo(/*Plays the IceSpin attack animation (Right side)*/);
         } else {
             this.response.speak("The video cannot be played on your device. " +
             "To watch this video, try launching the skill from your echo show device.");
         }
        }
    

        if (firstPlayerChar == klaki && firstPlayerTurn == true){
          if (this.event.context.System.device.supportedInterfaces.VideoApp) {
              pTwoHp -= doDmgPlayerOne(klaki, iceSpin);
              this.response.playVideo(/*Play IceSpin animation (Left side)*/);
        } else {
              this.response.speak("The video cannot be played on your device. " +
              "To watch this video, try launching the skill from your echo show device.");
         }
        }

        this.emit(':responseReady');
}

'Earthquake' : function() {
        if (secondPlayerChar == momolt && secondPlayerTurn == true){
          // VideoApp.Play directives can be added to the response
         if (this.event.context.System.device.supportedInterfaces.VideoApp) {
             pOneHp -= doDmgPlayerTwo(momolt, earthquake);
             this.response.playVideo(/*Plays the Earthquake attack animation (Right side)*/);
         } else {
             this.response.speak("The video cannot be played on your device. " +
             "To watch this video, try launching the skill from your echo show device.");
         }
        }
    

        if (firstPlayerChar == momolt && firstPlayerTurn == true){
          if (this.event.context.System.device.supportedInterfaces.VideoApp) {
              pTwoHp -= doDmgPlayerOne(momolt, earthquake);
              this.response.playVideo(/*Play Earthquake animation (Left side)*/);
        } else {
              this.response.speak("The video cannot be played on your device. " +
              "To watch this video, try launching the skill from your echo show device.");
         }
        }

        this.emit(':responseReady');
}

'Punch' : function() {
        if (secondPlayerChar == momolt && secondPlayerTurn == true){
          // VideoApp.Play directives can be added to the response
         if (this.event.context.System.device.supportedInterfaces.VideoApp) {
             pOneHp -= doDmgPlayerTwo(momolt, punch);
             this.response.playVideo(/*Plays the Punch attack animation (Right side)*/);
         } else {
             this.response.speak("The video cannot be played on your device. " +
             "To watch this video, try launching the skill from your echo show device.");
         }
        }
    

        if (firstPlayerChar == momolt && firstPlayerTurn == true){
          if (this.event.context.System.device.supportedInterfaces.VideoApp) {
              pTwoHp -= doDmgPlayerOne(momolt, punch);
              this.response.playVideo(/*Play Punch animation (Left side)*/);
        } else {
              this.response.speak("The video cannot be played on your device. " +
              "To watch this video, try launching the skill from your echo show device.");
         }
        }

        this.emit(':responseReady');
}

    function doDmgPlayerOne(pOneElement,pOneMove){
  //fire element character
  if(pOneElement == momolt){
    if(pOneMove == "punch"){
      var dmg = Math.floor(Math.random() * (16 - 10 + 1)) + 10;
        console.log(critChance(dmg));
    }else if (pOneMove == "earthquake") {
      var dmg = Math.floor(Math.random() * (12 - 10 + 1)) + 10;
        return critChance(dmg);
    }
  }
  //water type character
  if(pOneElement == klaki){
    if(pOneMove == "waterBlast"){
      var dmg = Math.floor(Math.random() * (14 - 11 + 1)) + 11;
        return critChance(dmg);
    }else if (pOneMove == "iceSpin") {
      var dmg = Math.floor(Math.random() * (9 - 6 + 1)) + 9;
        return critChance(dmg);
    }
  }
  if(pOneElement == varu){
    if(pOneMove == "tornado"){
      var dmg = Math.floor(Math.random() * (12 - 9 + 1)) + 12;
        return critChance(dmg);
    }else if (pOneMove == "fireball") {
      var dmg = Math.floor(Math.random() * (14 -  8 + 1 )) + 14;
        return critChance(dmg);
    }
  }
  if(pOneElement == "babool"){
    if(pOneMove == "rocks"){
      var dmg = Math.floor(Math.random() * (15 - 13 + 1)) + 15;
        return critChance(dmg);
    }else if (pOneMove == "waterpump") {
      var dmg = Math.floor(Math.random() * (11 -  8 + 1 )) + 11;
        return critChance(dmg);
    }
  }
}


function doDmgPlayerTwo(pTwoElement,pTwoMove){
    //fire element character
  if(pTwoElement == momolt){
    if(pTwoMove == "punch"){
      var dmg = Math.floor(Math.random() * (16 - 10 + 1)) + 10;
        console.log(critChance(dmg));
    }else if (pTwoMove == "earthquake") {
      var dmg = Math.floor(Math.random() * (12 - 10 + 1)) + 10;
        return critChance(dmg);
    }
  }
  //water type character
  if(pTwoElement == klaki){
    if(pTwoMove == "waterBlast"){
      var dmg = Math.floor(Math.random() * (14 - 11 + 1)) + 11;
        return critChance(dmg);
    }else if (pTwoMove == "iceSpin") {
      var dmg = Math.floor(Math.random() * (9 - 6 + 1)) + 9;
        return critChance(dmg);
    }
  }
  if(pTwoElement == varu){
    if(pTwoMove =="'tornado"){
      var dmg = Math.floor(Math.random() * (12 - 9 + 1)) + 12;
        return critChance(dmg);
    }else if (pTwoMove == "fireball") {
      var dmg = Math.floor(Math.random() * (14 -  8 + 1 )) + 14;
        return critChance(dmg);
    }
  }
  if(pTwoElement == "babool"){
    if(pTwoMove == "rocks"){
      var dmg = Math.floor(Math.random() * (15 - 13 + 1)) + 15;
        return critChance(dmg);
    }else if (pTwoMove == "waterpump") {
      var dmg = Math.floor(Math.random() * (11 -  8 + 1 )) + 11;
        return critChance(dmg);
    }
  }

}

  function critChance(dmg){
  var chance = Math.floor(Math.random() * 100) + 1;
  //checks to see if chance is less than 6 out of 100
  if(chance < 10){
     return dmg * crit;
  }else{
    return dmg;
  }
}
