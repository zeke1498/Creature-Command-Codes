    
    'Player2CharSelect' : function() {

    // VideoApp.Play directives can be added to the response
    if (this.event.context.System.device.supportedInterfaces.VideoApp) {
        this.response.playVideo('https://bradleyinteractive.com/assets/videos/Pre-FUSE-2016.mp4');
    } else {
        this.response.speak("The video cannot be played on your device. " +
        "To watch this video, try launching the skill from your echo show device.");
    }
    
// This is when Alexa is ready to listen to a response from the users
    this.emit('responseReady');
    }    
       
    // Triggers when player 2 chooses a character and it will store who is chosen.
    'SecondChooseCharIntent' : function(){
      secondPlayer = //whenever the player responds. 
    }
