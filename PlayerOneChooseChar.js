//Constants for all of the characters that can be stored inside the player variable (These are just placeholders)
const varu = 1;
const momolt = 2;
const babool = 3;
const klaki = 4;

//The first player character variable that will store the character chosen (Placeholders)
var firstPlayerChar;

var secondPlayerChar;

//Function to play video and ask for character
'PlayerOneCharSelect' : function() {
	if(this.event.context.System.device.supportedInterfaces.VideoApp){
		//This video tells the player to choose a character and shows the characters and names
		this.response.playVideo(/*Video URL goes here*/);
	} else {
        //Response if the video could not be played
        this.response.speak("The video cannot be played on your device. " +
        "To watch this video, try launching the skill from your echo show device.");
    }

    //Grabs the players character choice, 
    this.emit(':responseReady');

    //Plays either the next video here or starts the next intent
}

//
'FirstChosenCharIntent' : function(){
    firstPlayerChar = /*Whatever the player response is*/;
}