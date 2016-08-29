'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Pokemon Facts';

/**
 * Array containing Pokemon facts.
 */
var FACTS = [
    "The Pokédex entries for Drifloon state that the Pokémon tricks children into thinking it’s a balloon and carries them away.",
    "The Pokémon Drowzee is based on the tapir. According to Japanese folklore, tapirs eat dreams and nightmares.",
    "Poliwag’s signature swirl pattern is meant to look like the visible intestines of tadpoles.",
    "The move “Splash” is a mistranslation of the Japanese word “hop,” which is why it’s a normal-type move and not a water-type.",
    "When Paras evolves into Parasect, the parasitic mushroom on its back actually takes over the host, which explains the Pokémon’s blank, white eyes.",
    "The electric-type sheep Pokémon Mareep is thought to be a reference to Do Androids Dream of Electric Sheep?",
    "The Pokémon Koffing and Weezing were originally going to be named “Ny” and “La” because of the smog that New York and Los Angeles are known for.",
    "Ditto is a failed attempt at cloning Mew. The Pokémon share similar moves, stats, and coloring, and are found in the same cave as the successful clone of Mew, Mewtwo.",
    "Pikachu’s name is a combination of the Japanese onomatopoeia for sparkle, pikapika, and the sound of squeaking, which is expressed as chūchū.",
    "Magneton is made up of three Magnemites and should logically weigh three times as much, but Magnemite weighs in at 13.2 pounds and Magneton weighs 132 pounds.",
    "Slowbro is the only Pokémon that can de-evolve. Its pokédex entry says that if the Shellder on its tail is removed, it will revert back into a Slowpoke.",
    "It’s thought that psychic-type Pokémon are weak to bug-type, ghost-type, and dark-type Pokémon because they are common fears.",
    "Hitmonchan and Hitmonlee are based on Jackie Chan and Bruce Lee, respectively.",
    "If a Pokemon existed that had every type, it would be weak only to Rock types.",
    "Ekans spells Snake backwards, and Arbok spells Kobra.",
    "Rhydon Was The First Pokemon Ever Created",
    "Professor Oak’s Nidorino Has The Cry Of A Nidorina",
    "Slowbro Is The Only Pokemon That Can Devolve",
    "Meowth And Pikachu Are Opposite Pokemon",
    "Arcanine was originally intended to be a legendary Pokemon, but was replaced by Moltres.",
    "Tangela Originally Couldn’t Use Vine Whip",
    "Mewtwo Comes Before Mew In The Pokedex",
    "Clefairy Was Almost The Face Of Pokemon",
    "Poliwag’s swirls actually resemble a real-life tadpole’s intestines."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random Pokemon fact from the Pokemon facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your Pokemon fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a pokemon fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};