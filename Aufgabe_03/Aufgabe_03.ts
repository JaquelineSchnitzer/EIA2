namespace MemoryEvents {

    document.addEventListener("DOMContentLoaded", main);

    // Variablen deklarieren
    let cardText: string[] = ["Hund", "Panda", "Seepferdchen", "Wolf", "Reh", "Tiger", "Koala", "Affe", "Jaguar", "Luchs"];

    let cardsArray: HTMLElement[] = [];

    let numCardPairs: number;
    let numPlayers: number;

    let playerInfo: HTMLElement;
    let cardField: HTMLElement;

    let numCardsOpen: number = 0;

    let openCards: HTMLElement[] = [];
    let takenPairs: number = 0;



    // Hauptfunktion
    function main(): void {

        // Anzahl Kartenpaare
        numCardPairs = parseInt(prompt("Wie viele Kartenpaare soll es geben?", "Bitte eine Zahl zwischen 5 und 10 eingeben"), 10);
        if (numCardPairs < 5 || numCardPairs > 10) {
            numCardPairs = 7;
        }

        // Anzahl Spieler
        numPlayers = parseInt(prompt("Wie viele Spieler gibt es?", "Bitte eine Zahl zwischen 1 und 4 eingeben"), 10);
        if (numPlayers < 1 || numPlayers > 4) {
            numPlayers = 2;
        }

        // DOM abhängige Variablen initialisieren
        playerInfo = document.getElementById("playerInfo");
        cardField = document.getElementById("card-container");

        // Karten erzeugen
        for (let i: number = 0; i < numCardPairs; i++) {
            createCards(cardText[i]);
        }

        // Karten mischen
        shuffleArray(cardsArray);

        // Karten anzeigen
        for (let i: number = 0; i < cardsArray.length; i++) {
            cardField.appendChild(cardsArray[i]);
        }

        // Spieler Anzeige generieren
        for (let i: number = 0; i < numPlayers; i++) {
            createPlayer("" + (i + 1));
        }

        // Funkiton - Karten erzeugen
        function createCards(_cardContent: string): HTMLElement[] {
            for (let i: number = 0; i < 2; i++) {
                let card: HTMLElement = document.createElement("div");
                card.innerHTML = "<span>" + _cardContent + "</span>";
                card.setAttribute("class", "card hidden");
                cardsArray.push(card);
            }
            return cardsArray;
        }

        // Funktion - Spieler erzeugen
        function createPlayer(_name: string): void {
            let player: HTMLElement = document.createElement("div");
            player.innerHTML = `
            <span class="player-name">Spieler: ${_name}</span>
            <span class="player-score">Punkte: 0</span>`;
            playerInfo.appendChild(player);
        }


        // Shuffle Array: Fisher-Yates Algorhitmus
        function shuffleArray(_array: any[]): any[] {
            for (let i: number = _array.length - 1; i > 0; i--) {
                const j: number = Math.floor(Math.random() * (i + 1));
                [_array[i], _array[j]] = [_array[j], _array[i]];
            }
            return _array;
        }

        // Cards Array filtern und neues Array zurückgeben
        /*function filterCardsBy(_filter: string): HTMLElement[] {
            let array: HTMLElement[] = [];
            let cardsArray: any;

            for (let i: number = 0; i < cardsArray; i++) {
                if (cardsArray[i].classList.contains(_filter)) {
                    array.push(cardsArray[i]);
                }
            }
            return array
        }*/

        // Karte aufdecken
        function showCards(_event: Event): void {

            let target: HTMLElement = <HTMLElement>_event.target;
            if (target.classList.contains("card")) {

                if (numCardsOpen < 2) {
                    numCardsOpen++;
                    let target: HTMLElement = <HTMLElement>_event.target;
                    openCards.push(target);
                    if (target.classList.contains("hidden")) {
                        target.classList.remove("hidden");
                        target.classList.add("visible");
                    }
                }
            }
            if (numCardsOpen == 2) {
                setTimeout(compareCards, 2000);
            }
        }

        // Funktion - Karten vergleichen
        function compareCards(): void {

            if (openCards[0].innerHTML == openCards[1].innerHTML) {
                for (let i = 0; i < openCards.length; i++) {
                    openCards[i].classList.remove("visible");
                    openCards[i].classList.add("taken");
                }
                takenPairs++;
            } else {
                for (let i: number = 0; i < openCards.length; i++) {
                    openCards[i].classList.remove("visible");
                    openCards[i].classList.add("hidden");
                }
            }
            checkCardArray();
            openCards = [];
            numCardsOpen = 0;
        }

        function checkCardArray(): void {
            if (takenPairs == numCardPairs) {
                alert("Gewonnen!");
            }

        }

        // Spielmechanik
        cardField.addEventListener("click", showCards);

    }
}