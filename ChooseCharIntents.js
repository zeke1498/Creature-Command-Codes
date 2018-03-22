'klaki_chosen' : function(){
    // make a differnt intent for each of the characters following this logic!
    if(pselction == 1){
       var firstPlayerChar = "klaki"; 
       pselction = 2;
       this.emit(':ask',"Player one you chose Klaki ,Player two please choose a character!");
    }else{
        var secondPlayerChar = "klaki";
        this.emit('attack_handel');
    }
},

'varu_chosen' : function(){
    // make a differnt intent for each of the characters following this logic!
    if(pselction == 1){
       var firstPlayerChar = "varu"; 
       pselction = 2;
       this.emit(':ask',"Player one you chose Varu ,Player two please choose a character!");
    }else{
        var secondPlayerChar = "varu";
        this.emit('attack_handel');
    }
},

'momolt_chosen' : function(){
    // make a differnt intent for each of the characters following this logic!
    if(pselction == 1){
       var firstPlayerChar = "momolt"; 
       pselction = 2;
       this.emit(':ask',"Player one you chose Momolt ,Player two please choose a character!");
    }else{
        var secondPlayerChar = "momolt";
        this.emit('attack_handel');
    }
},

'babool_chosen' : function(){
    // make a differnt intent for each of the characters following this logic!
    if(pselction == 1){
       var firstPlayerChar = "babool"; 
       pselction = 2;
       this.emit(':ask',"Player one you chose Babool ,Player two please choose a character!");
    }else{
        var secondPlayerChar = "babool";
        this.emit('attack_handel');
    }
},
