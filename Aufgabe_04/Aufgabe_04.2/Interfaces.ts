namespace memory {
    
    /* Spieleranzeige aus Aufgabe 3*/
    export interface Scoreboard {
        player: string;
        score: number;
    }

    let scoreboard: Scoreboard[] = [];


    /* Interface Kartendecks */
    export interface cardDeck {
        name: string;
        content: string[];
        cardColor: string;
        cardFont: string;
        cardPairs: string;
    }


    // Kartendecks definieren
    let deck: cardDeck;
    export interface selcectionOfCardDecks {
        [cardName: string]: cardDeck;
    
        
   export let Decks: selectionOfCardDecks = {};
    deck = {
        name: "Tiere",
        content: ["Hund", "Panda", "Seepferdchen", "Wolf", "Reh", "Tiger", "Koala", "Affe", "Jaguar", "Luchs"],
        cardColor: "blue",
        cardFont: "sans-serif",
        cardPairs: 10,
    };

    deck["Tiere"] = deck;


    deck = {
        name: "Farben",
        content: ["Blau", "Lila", "Grün", "Rot", "Gelb", "Orange", "Weiß", "Schwarz", "Türkis"],
        cardColor: "yellow",
        cardFont: "sans-serif",
        cardPairs: 9,
    };

    deck["Farben"] = deck;


    deck = {
        name: Namen,
        content: ["Ben", "Leia", "Luca", "Phoebe", "Lucian", "Johanna", "Mia", "Kira"],
        cardColor: "green",
        cardFont: "sans-serif",
        cardPairs: 8,
    };

    deck["Namen"] = deck;
}
