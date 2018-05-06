var memory;
(function (memory) {
    window.addEventListener("load", main);
    // Variablen deklarieren
    var cardsArray = [];
    var numCardPairs;
    var playerInfo;
    var cardField;
    var numCardsOpen = 0;
    var openCards = [];
    var takenPairs = 0;
    var playerCount = 1;
    var playerScore = 0;
    var sliderStartValue = 1;
    // DOM abh�ngige Variablen initialisieren
    playerInfo = document.getElementById("playerInfo");
    cardField = document.getElementById("card-container");
    // *********************** Hauptfunktion Aufgabe 4 *****************************
    function main() {
        document.getElementById("start").addEventListener("click", startGame);
        document.getElementById("addPlayer").addEventListener("click", addPlayer);
        document.getElementById("removePlayer").addEventListener("click", removePlayer);
        document.getElementById("slider").addEventListener("change", createSlider);
    }
    //Spieler hinzuf�gen und entfernen
    function addPlayer() {
        if (playerCount < 4) {
            var player = document.createElement("input");
            player.setAttribute("type", "text");
            player.setAttribute("placeholder", "Hier Spielername eingeben");
            player.setAttribute("name", "player");
            player.setAttribute("id", "player");
            document.getElementById("playerName").appendChild(player);
            playerCount++;
        }
    }
    function removePlayer() {
        document.getElementById("player").remove();
        playerCount--;
    }
    // Slider erstellen und definieren
    function createSlider() {
        if (sliderStartValue == 1) {
            var slider = document.createElement("input");
            slider.setAttribute("type", "range");
            slider.setAttribute("value", "5");
            slider.setAttribute("min", "7");
            slider.setAttribute("max", memory.Decks[document.getElementsByTagName("select").item(0).value].amount);
            slider.setAttribute("step", "1");
            slider.setAttribute("id", "slider");
            document.getElementById("sliderDiv").appendChild(slider);
            sliderStartValue++;
            var sliderValue_1 = document.createElement("p");
            sliderValue_1.setAttribute("id", "sliderValue");
            sliderValue_1.innerText = "Anzahl Kartenpaare: " + document.getElementById("slider").value;
            slider.oninput = function () {
                sliderValue_1.innerText = "Anzahl Kartenpaare: " + this.value;
            };
            document.getElementById("sliderDiv").appendChild(sliderValue_1);
        }
        else {
            sliderUpdate();
        }
    }
    function sliderUpdate() {
        document.getElementById("slider").remove();
        document.getElementById("sliderValue").remove();
        sliderStartValue--;
        createSlider();
    }
    // ***************** Spielfeld erzeugen ****************
    // Karten erzeugen
    function createCards(_cardContent) {
        for (var i_1 = 0; i_1 < 2; i_1++) {
            var card = document.createElement("div");
            card.innerHTML = "<span>" + _cardContent + "</span>";
            card.setAttribute("class", "card hidden");
            cardsArray.push(card);
        }
        return cardsArray;
    }
    // Shuffle Array: Fisher-Yates Algorhitmus
    function shuffleArray(_array) {
        for (var i_2 = _array.length - 1; i_2 > 0; i_2--) {
            var j = Math.floor(Math.random() * (i_2 + 1));
            _a = [_array[j], _array[i_2]], _array[i_2] = _a[0], _array[j] = _a[1];
        }
        return _array;
        var _a;
    }
    // Karten mischen
    shuffleArray(cardsArray);
    // Karte aufdecken
    function showCards(_event) {
        var target = _event.target;
        if (target.classList.contains("card")) {
            if (numCardsOpen < 2) {
                numCardsOpen++;
                var target_1 = _event.target;
                openCards.push(target_1);
                if (target_1.classList.contains("hidden")) {
                    target_1.classList.remove("hidden");
                    target_1.classList.add("visible");
                }
            }
        }
        if (numCardsOpen == 2) {
            setTimeout(compareCards, 1500);
        }
    }
    // Karten vergleichen
    function compareCards() {
        if (openCards[0].innerHTML == openCards[1].innerHTML) {
            for (var i_3 = 0; i_3 < openCards.length; i_3++) {
                openCards[i_3].classList.remove("visible");
                openCards[i_3].classList.add("taken");
            }
            takenPairs++;
        }
        else {
            for (var i_4 = 0; i_4 < openCards.length; i_4++) {
                openCards[i_4].classList.remove("visible");
                openCards[i_4].classList.add("hidden");
            }
        }
        checkCardArray();
        openCards = [];
        numCardsOpen = 0;
    }
    function checkCardArray() {
        if (takenPairs == numCardPairs) {
            alert("Gewonnen!");
        }
    }
    // Spielmechanik
    cardField.addEventListener("click", showCards);
    //***************** Spiel starten******************************************
    function startGame() {
        document.getElementById("userInterface").style.display = "none";
        document.getElementById("playerInfo").style.display = "block";
        document.getElementById("cardField").style.display = "block";
        var inputs = document.getElementsByTagName("input");
        var numCardPairs = parseInt(document.getElementById("slider").value);
        // Spieleranzeige erstellen
        for (var i_5 = 0; i_5 < playerCount; i_5++) {
            var createPlayer = document.createElement("div");
            document.getElementById("cardField").appendChild(createPlayer);
            createPlayer.innerHTML = inputs[i_5].value + ": " + playerScore + " Punkte";
        }
        // Karten erzeugen
        for (var i_6 = 0; i_6 < numCardPairs; i_6++) {
            createCards(memory.Decks[document.getElementsByTagName("select").item(0).value].content[i_6]);
            createCards(memory.Decks[document.getElementsByTagName("select").item(0).value].content[i_6]);
        }
        // Karten anzeigen
        for (var i_7 = 0; i_7 < cardsArray.length; i_7++) {
            document.getElementById("card-container").appendChild(cardsArray[i_7]);
        }
    }
})(memory || (memory = {}));
//# sourceMappingURL=Aufgabe_04.2.js.map