   'clacky_chosen' : function(){
        // make a differnt intent for each of the characters following this logic!
        if(pselection == 1){
            firstPlayerChar = 4; 
            pselection = 2;
           this.emit(':ask',"Player one you chose clacky ,Player two please choose a character!");
        }else{
            secondPlayerChar = 4;
            turn = 1;
                const cardTitle = 'CURRENT HP';
                const cardContent = 'Player1hp: '+pOneHp+'/50  PLayer2hp'+pTwoHp+'/50';
                const imageObj = {
                       smallImageUrl: 'https://s3.amazonaws.com/creaturecommand/KlakiChooseAttack.jpg',
                       largeImageUrl: 'https://s3.amazonaws.com/creaturecommand/KlakiChooseAttack.jpg'
                    };
            this.emit(':askWithCard',"Player two you chose clacky ,Player one choose an attack", cardTitle, cardContent, imageObj);


            //this.emit('attack_handel');
        }
        
    },
        'varu_chosen' : function(){
        // make a differnt intent for each of the characters following this logic!
        if(pselection == 1){
            firstPlayerChar = 1; 
           pselection = 2;
           this.emit(':ask',"Player one you chose varu ,Player two please choose a character!");
        }else{
            secondPlayerChar = 1;
           const cardTitle = 'CURRENT HP';
                const cardContent = 'Player1hp: '+pOneHp+'/50  PLayer2hp'+pTwoHp+'/50';
                const imageObj = {
                      smallImageUrl: 'https://s3.amazonaws.com/creaturecommand/VaruChooseAttack.jpg',
                      largeImageUrl: 'https://s3.amazonaws.com/creaturecommand/VaruChooseAttack.jpg'
                    };
            this.emit(':askWithCard',"Player two you chose varu ,Player one choose an attack", cardTitle, cardContent, imageObj);
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
                const cardTitle = 'CURRENT HP';
                const cardContent = 'Player1hp: '+pOneHp+'/50  PLayer2hp'+pTwoHp+'/50';
                const imageObj = {
                      smallImageUrl: "https://s3.amazonaws.com/creaturecommand/MomoltChooseAttack.jpg",
                      largeImageUrl: "https://s3.amazonaws.com/creaturecommand/MomoltChooseAttack.jpg"
                    };
            this.emit(':askWithCard',"Player two you chose momolt ,Player one choose an attack", cardTitle, cardContent, imageObj);
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
           const cardTitle = 'CURRENT HP';
           const cardContent = 'Player1hp: '+pOneHp+'/50  PLayer2hp'+pTwoHp+'/50';
           const imageObj = {
                      smallImageUrl: "https://s3.amazonaws.com/creaturecommand/BaboolChooseAttack.jpg",
                      largeImageUrl: "https://s3.amazonaws.com/creaturecommand/BaboolChooseAttack.jpg"
                    };
            this.emit(':askWithCard',"Player two you chose babool ,Player one choose an attack", cardTitle, cardContent, imageObj);
    }
},
