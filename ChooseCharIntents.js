'klaki_chosen' : function(){
    // make a differnt intent for each of the characters following this logic!
    if(pselction == 1){
       firstPlayerChar = klaki; 
       pselction = 2;
       this.emit(':ask',"Player one you chose clacky ,Player two please choose a character!");
    }else{
        secondPlayerChar = klaki;
        turn = 1;
        this.emit(':ask',"Player two you chose clacky ,Player one choose an attack");
    }
},

'varu_chosen' : function(){
    // make a differnt intent for each of the characters following this logic!
    if(pselction == 1){
       firstPlayerChar = varu; 
       pselction = 2;
       this.emit(':ask',"Player one you chose Varu ,Player two please choose a character!");
    }else{
        secondPlayerChar = varu;
        turn = 1;
        this.emit(':ask',"Player two you chose Varu ,Player one choose an attack");
    }
},

'momolt_chosen' : function(){
    // make a differnt intent for each of the characters following this logic!
    if(pselction == 1){
       firstPlayerChar = momolt; 
       pselction = 2;
       this.emit(':ask',"Player one you chose Momolt ,Player two please choose a character!");
    }else{
        secondPlayerChar = momolt;
        turn = 1;
        this.emit(':ask',"Player two you chose Momolt ,Player one choose an attack");
    }
},

'babool_chosen' : function(){
    // make a differnt intent for each of the characters following this logic!
    if(pselction == 1){
       firstPlayerChar = babool; 
       pselction = 2;
       this.emit(':ask',"Player one you chose Babool ,Player two please choose a character!");
    }else{
        secondPlayerChar = babool;
        turn = 1;
        this.emit(':ask',"Player two you chose Babool ,Player one choose an attack");
    }
},
