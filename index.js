/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a sample skill built with Amazon Alexa Skills nodejs
 * skill development kit.
 * This sample supports multiple languages (en-US, en-GB, de-GB).
 * The Intent Schema, Custom Slot and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-howto
 **/

'use strict';

const Alexa = require('alexa-sdk');
const recipes = require('./recipes');

const APP_ID = undefined; // TODO replace with your app ID (OPTIONAL).

//Constants for all of the characters that can be stored inside the player variable (These are just placeholders)
const varu = 1;
const momolt = 2;
const babool = 3;
const klaki = 4;

var pOneHp = 50;
var pTwoHp = 50;
var crit = 1.5;

var turn = 1;

//The first player character variable that will store the character chosen (Placeholders)
var firstPlayerChar;
var pselction = 1;
var secondPlayerChar;

const languageStrings = {
    'en': {
        translation: {
            RECIPES: recipes.RECIPE_EN_US,
            SKILL_NAME: 'Creature command',
            WELCOME_MESSAGE: "Welcome to creature command Please choose a character!",
            WELCOME_REPROMPT: 'For instructions on what you can say, please say help me.',
            DISPLAY_CARD_TITLE: 'Welcome to Creature command',
            HELP_MESSAGE: "You can ask questions such as, what\'s the recipe, or, you can say exit...Now, what can I help you with?",
            HELP_REPROMPT: "You can say things like, what\'s the recipe, or you can say exit...Now, what can I help you with?",
            STOP_MESSAGE: 'Goodbye!',
            RECIPE_REPEAT_MESSAGE: 'Try saying repeat.',
            RECIPE_NOT_FOUND_MESSAGE: "I\'m sorry, I currently do not know ",
            RECIPE_NOT_FOUND_WITH_ITEM_NAME: 'the recipe for %s. ',
            RECIPE_NOT_FOUND_WITHOUT_ITEM_NAME: 'that recipe. ',
            RECIPE_NOT_FOUND_REPROMPT: 'What else can I help with?',
        },
    },
    'en-US': {
        translation: {
            RECIPES: recipes.RECIPE_EN_US,
            SKILL_NAME: 'American Minecraft Helper',
        },
    },
    'en-GB': {
        translation: {
            RECIPES: recipes.RECIPE_EN_GB,
            SKILL_NAME: 'British Minecraft Helper',
        },
    },
    'de': {
        translation: {
            RECIPES: recipes.RECIPE_DE_DE,
            SKILL_NAME: 'Assistent für Minecraft in Deutsch',
            WELCOME_MESSAGE: 'Willkommen bei %s. Du kannst beispielsweise die Frage stellen: Welche Rezepte gibt es für eine Truhe? ... Nun, womit kann ich dir helfen?',
            WELCOME_REPROMPT: 'Wenn du wissen möchtest, was du sagen kannst, sag einfach „Hilf mir“.',
            DISPLAY_CARD_TITLE: '%s - Rezept für %s.',
            HELP_MESSAGE: 'Du kannst beispielsweise Fragen stellen wie „Wie geht das Rezept für“ oder du kannst „Beenden“ sagen ... Wie kann ich dir helfen?',
            HELP_REPROMPT: 'Du kannst beispielsweise Sachen sagen wie „Wie geht das Rezept für“ oder du kannst „Beenden“ sagen ... Wie kann ich dir helfen?',
            STOP_MESSAGE: 'Auf Wiedersehen!',
            RECIPE_REPEAT_MESSAGE: 'Sage einfach „Wiederholen“.',
            RECIPE_NOT_FOUND_MESSAGE: 'Tut mir leid, ich kenne derzeit ',
            RECIPE_NOT_FOUND_WITH_ITEM_NAME: 'das Rezept für %s nicht. ',
            RECIPE_NOT_FOUND_WITHOUT_ITEM_NAME: 'dieses Rezept nicht. ',
            RECIPE_NOT_FOUND_REPROMPT: 'Womit kann ich dir sonst helfen?',
        },
    },
};

const handlers = {
    'PlayVideoIntent' : function() {
    const cardTitle = 'PLayer 2 chose an attack!';
    const cardContent = 'PLayer1hp: 50/50,PLayer2hp 40/50';
    const imageObj = {
    	smallImageUrl: 'https://imgs.xkcd.com/comics/standards.png',
    	largeImageUrl: 'https://imgs.xkcd.com/comics/standards.png'
    };

    // VideoApp.Play directives can be added to the response
    if (this.event.context.System.device.supportedInterfaces.VideoApp) {
        this.response.playVideo('https://s3.amazonaws.com/creaturecommand/klaki_water_attack.mp4')
        .cardRenderer(cardTitle, cardContent, imageObj);
    }else {
        this.response.speak("The video cannot be played on your device. " +
        "To watch this video, try launching the skill from your echo show device.");
    }
    this.emit(':responseReady');
    
    },
    'dodmgIntent' : function(){
        //this.response.playVideo('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4');
    const videoSource = 'https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';
    const metadata = {
    	'title': 'Title for Sample Video',
    	'subtitle': 'Secondary Title for Sample Video'
    };
    this.response.playVideo(videoSource, metadata);
        this.emit(':responseReady');
    },
    'clacky_chosen' : function(){
        // make a differnt intent for each of the characters following this logic!
        if(pselction == 1){
           var firstPlayerChar = "klaki"; 
           pselction = 2;
           this.emit(':ask',"Player one you chose clacky ,Player two please choose a character!");
        }else{
            var secondPlayerChar = "klaki";
            this.emit('attack_handel');
        }
        
    },
    'attack_handel': function(){
        
        if(turn == 1 && firstPlayerChar == "klaki"){
            //atatck dmg's
        }
        // metric crap ton of if statements and attack values
        
    },
    'LaunchRequest': function () {
        this.emit(':ask', "Player one, Please select a character!", this.attributes.repromptSpeech);
    },
    'AMAZON.HelpIntent': function () {
        this.attributes.speechOutput = this.t('HELP_MESSAGE');
        this.attributes.repromptSpeech = this.t('HELP_REPROMPT');
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },
    'AMAZON.RepeatIntent': function () {
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },
    'AMAZON.StopIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'AMAZON.CancelIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'Unhandled': function () {
        this.attributes.speechOutput = this.t('HELP_MESSAGE');
        this.attributes.repromptSpeech = this.t('HELP_REPROMPT');
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
