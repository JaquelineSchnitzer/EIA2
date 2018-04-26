namespace Memory {
    document.addEventListener("DOMContentLoaded", main);

    //Variablen deklarieren
    let words: string[] = ["Haus", "Baum", "Wolke", "Blume", "Hase", "Regenbogen", "Zwerg", "Sommer", "Katze", "Kekse"];

    let cards: HTMLElement[] = [];

    let numberCardPairs: number;
    let numberPlayers: number;

    let gameInfo: HTMLElement;
    let gameBoard: HTMLElement;

    let numCardsOpen: number = 0; // Z‰hlt wie viele Karten offen sind.

    function main(): void {

        // Anzahl der Kartenpaare erfragen
        numberCardPairs = parseInt(prompt("Bitte die Anzahl der Kartenpaare eingeben", "5 - 10 Kartenpaare"), 10); // parseInt("string", basisZahlensystem);
        if (numberCardPairs < 5 || numberCardPairs > 10) {
            numberCardPairs = 6;
        }

        // Anzahl der Spieler erfragen
        numberPlayers = parseInt(prompt("Bitte die Anzahl der Spieler eingeben", "nicht mehr als 4 Spieler"), 10);
        if (numberPlayers < 0 || numberPlayers > 4) {
            numberPlayers = 2;
        }

        // DOM abh√§ngige Variablen initialisieren
        gameInfo = document.getElementById("game-info");
        gameBoard = document.getElementById("card-container");

        // Karten erzeugen
        for (let i: number = 0; i < numberCardPairs; i++) {
            createCards(words[i]);
        }

        // Karten mischen
        shuffleArray(cards);

        // Karten anzeigen
        for (let i: number = 0; i < cards.length; i++) {
            gameBoard.appendChild(cards[i]);
        }

        // Spieler Anzeige generieren
        for (let i: number = 0; i < numberPlayers; i++) {
            createPlayer(`${i + 1}`); // Alt: "" + (i + 1) => Umgekehrt zu parseInt();
        }
    }

    // Karten erzeugen
    function createCards(_cardContent: string): HTMLElement[] {
        for (let i: number = 0; i < 2; i++) {
            let card: HTMLElement = document.createElement("div");
            card.innerHTML = `<span>${_cardContent}</span>`; // Alt: card.innerHTML = "<span>" + _cardContent + "</span>";
            card.setAttribute("class", "card hidden"); // Zweiter "" = zwei einzelne Klassen.
            cards.push(card);
        }
        return cards;
    }

    // Spieler erzeugen
    function createPlayer(_name: string): void {
        let player: HTMLElement = document.createElement("div");
        player.innerHTML = `
      <span class="player-name">Spieler: ${_name}</span>
      <span class="player-score">Punkte: 0</span>`;
        gameInfo.appendChild(player); // F¸gt Spieler der Seitenleiste hinzu
    }

    // Shuffle Array: Fisher-Yates Algorhitmus
    function shuffleArray(_array: any[]): any[] {
        for (let i: number = _array.length - 1; i > 0; i--) {
            const j: number = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;
    }
}