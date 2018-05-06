namespace memory {

    window.addEventListener("load", main);


    // Variablen deklarieren
    let cardsArray: HTMLElement[] = [];

    let numCardPairs: number;

    let playerInfo: HTMLElement;
    let cardField: HTMLElement;

    let numCardsOpen: number = 0;

    let openCards: HTMLElement[] = [];
    let takenPairs: number = 0;

    let playerCount: number = 1;
    let playerScore: number = 0;

    let sliderStartValue: number = 1;


    // DOM abhängige Variablen initialisieren
    playerInfo = document.getElementById("playerInfo");
    cardField = document.getElementById("card-container");


    // *********************** Hauptfunktion Aufgabe 4 *****************************
    function main(): void {
        document.getElementById("start").addEventListener("click", startGame);
        document.getElementById("addPlayer").addEventListener("click", addPlayer);
        document.getElementById("removePlayer").addEventListener("click", removePlayer);
        document.getElementById("slider").addEventListener("change", createSlider);
    }


    //Spieler hinzufügen und entfernen
    function addPlayer(): void {
        if (playerCount < 4) {
            let player: HTMLElement = document.createElement("input");
            player.setAttribute("type", "text");
            player.setAttribute("placeholder", "Hier Spielername eingeben");
            player.setAttribute("name", "player");
            player.setAttribute("id", "player");
            document.getElementById("playerName").appendChild(player);
            playerCount++;
        }
    }

    function removePlayer(): void {
        document.getElementById("player").remove();
        playerCount--;
    }


    // Slider erstellen und definieren
    function createSlider(): void {
        if (sliderStartValue == 1) {
            let slider: HTMLElement = document.createElement("input");
            slider.setAttribute("type", "range");
            slider.setAttribute("value", "5");
            slider.setAttribute("min", "7");
            slider.setAttribute("max", Decks[document.getElementsByTagName("select").item(0).value].amount);
            slider.setAttribute("step", "1");
            slider.setAttribute("id", "slider");
            document.getElementById("sliderDiv").appendChild(slider);
            sliderStartValue++;

            let sliderValue: HTMLElement = document.createElement("p");
            sliderValue.setAttribute("id", "sliderValue");
            sliderValue.innerText = "Anzahl Kartenpaare: " + (<HTMLInputElement>document.getElementById("slider")).value;
            slider.oninput = function(): void {
                sliderValue.innerText = "Anzahl Kartenpaare: " + this.value;
            };
            document.getElementById("sliderDiv").appendChild(sliderValue);
        } else {
            sliderUpdate();
        }
    }

    function sliderUpdate(): void {
        document.getElementById("slider").remove();
        document.getElementById("sliderValue").remove();
        sliderStartValue--;
        createSlider();
    }


    // ***************** Spielfeld erzeugen ****************
    // Karten erzeugen
    function createCards(_cardContent: string): HTMLElement[] {
        for (let i: number = 0; i < 2; i++) {
            let card: HTMLElement = document.createElement("div");
            card.innerHTML = "<span>" + _cardContent + "</span>";
            card.setAttribute("class", "card hidden");
            cardsArray.push(card);
        }
        return cardsArray;
    }


    // Shuffle Array: Fisher-Yates Algorhitmus
    function shuffleArray(_array: any[]): any[] {
        for (let i: number = _array.length - 1; i > 0; i--) {
            const j: number = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;
    }


    // Karten mischen
    shuffleArray(cardsArray);


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
            setTimeout(compareCards, 1500);
        }
    }


    // Karten vergleichen
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



    //***************** Spiel starten******************************************
    function startGame(): void {
        document.getElementById("userInterface").style.display = "none";
        document.getElementById("playerInfo").style.display = "block";
        document.getElementById("cardField").style.display = "block";

        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let numCardPairs: number = parseInt((<HTMLInputElement>document.getElementById("slider")).value);


        // Spieleranzeige erstellen
        for (let i: number = 0; i < playerCount; i++) {
            let createPlayer: HTMLDivElement = document.createElement("div");
            document.getElementById("cardField").appendChild(createPlayer);
            createPlayer.innerHTML = inputs[i].value + ": " + playerScore + " Punkte";
        }


        // Karten erzeugen
        for (let i: number = 0; i < numCardPairs; i++) {
            createCards(Decks[document.getElementsByTagName("select").item(0).value].content[i]);
            createCards(Decks[document.getElementsByTagName("select").item(0).value].content[i]);
        }

        
        // Karten anzeigen
        for (let i: number = 0; i < cardsArray.length; i++) {
            document.getElementById("card-container").appendChild(cardsArray[i]);
        }
    }
}