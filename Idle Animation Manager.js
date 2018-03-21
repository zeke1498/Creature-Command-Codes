    
    'NowItsYourTurn' : function() {

        if (secondPlayerChar == varu && secondPlayerTurn == true){
            // VideoApp.Play directives can be added to the response
             if (this.event.context.System.device.supportedInterfaces.VideoApp) {
                 this.response.playVideo(/*Varu Idle (Right side)*/);
             } else {
                 this.response.speak("The video cannot be played on your device. " +
                 "To watch this video, try launching the skill from your echo show device.");
             }



        if (firstPlayerChar == varu && firstPlayerTurn == true){
            // VideoApp.Play directives can be added to the response
             if (this.event.context.System.device.supportedInterfaces.VideoApp) {
                 this.response.playVideo(/*Varu Idle (Left side)*/);
             } else {
                 this.response.speak("The video cannot be played on your device. " +
                 "To watch this video, try launching the skill from your echo show device.");
             }



     if (secondPlayerChar == Momolt && secondPlayerTurn == true){
            // VideoApp.Play directives can be added to the response
             if (this.event.context.System.device.supportedInterfaces.VideoApp) {
                 this.response.playVideo(/*Momolt Idle (Right side)*/);
             } else {
                 this.response.speak("The video cannot be played on your device. " +
                 "To watch this video, try launching the skill from your echo show device.");
             }




if (firstPlayerChar == Momolt && firstPlayerTurn == true){
            // VideoApp.Play directives can be added to the response
             if (this.event.context.System.device.supportedInterfaces.VideoApp) {
                 this.response.playVideo(/*Momolt Idle (Left side)*/);
             } else {
                 this.response.speak("The video cannot be played on your device. " +
                 "To watch this video, try launching the skill from your echo show device.");
             }



   if (secondPlayerChar == Klaki && secondPlayerTurn == true){
            // VideoApp.Play directives can be added to the response
             if (this.event.context.System.device.supportedInterfaces.VideoApp) {
                 this.response.playVideo(/*Klaki Idle (Right side)*/);
             } else {
                 this.response.speak("The video cannot be played on your device. " +
                 "To watch this video, try launching the skill from your echo show device.");
             }



if (firstPlayerChar == Klaki && firstPlayerTurn == true){
            // VideoApp.Play directives can be added to the response
             if (this.event.context.System.device.supportedInterfaces.VideoApp) {
                 this.response.playVideo(/*Klaki Idle (Left side)*/);
             } else {
                 this.response.speak("The video cannot be played on your device. " +
                 "To watch this video, try launching the skill from your echo show device.");
             }



   if (secondPlayerChar == Babool && secondPlayerTurn == true){
            // VideoApp.Play directives can be added to the response
             if (this.event.context.System.device.supportedInterfaces.VideoApp) {
                 this.response.playVideo(/*Babool Idle (Right side)*/);
             } else {
                 this.response.speak("The video cannot be played on your device. " +
                 "To watch this video, try launching the skill from your echo show device.");
             }




if (firstPlayerChar == Babool && firstPlayerTurn == true){
            // VideoApp.Play directives can be added to the response
             if (this.event.context.System.device.supportedInterfaces.VideoApp) {
                 this.response.playVideo(/*Babool Idle (Left side)*/);
             } else {
                 this.response.speak("The video cannot be played on your device. " +
                 "To watch this video, try launching the skill from your echo show device.");
             }


        this.emit(':responseReady');
}



}