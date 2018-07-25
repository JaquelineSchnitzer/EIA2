var L12_Abschlussaufgabe;
(function (L12_Abschlussaufgabe) {
    // Variablen deklarieren
    var can = document.getElementsByTagName('canvas')[0];
    var ctx = can.getContext('2d');
    // Buttons zum Steuern des Hase
    var speedButtons = 6; //Geschwindigkeit der Buttons
    var speedKeys = 10; // Geschwinidkeit der Tastatur
    // Konstanten und Variablen f�r Buttons
    var bLinks = document.getElementById('buttonLeft');
    var bRechts = document.getElementById('buttonRight');
    var bLinksActive = false;
    var bRechtsActive = false;
    // Startpositionen
    var haseX = 50;
    var haseY = 380;
    var chocolateX = 50;
    var chocolateY = 50;
    var carrotX = 150;
    var carrotY = 50;
    //Bild-Klasse (Klasse aller Bilder, die im Canvas verwendet werden)
    var Bild = /** @class */ (function () {
        function Bild(x, y, scaleX, scaleY, imgsrc) {
            this.x = x;
            this.y = y;
            this.scaleX = scaleX;
            this.scaleY = scaleY;
            this.image = new Image();
            this.image.src = imgsrc;
        }
        Bild.prototype.draw = function () {
            ctx.drawImage(this.image, this.x, this.y, this.scaleX, this.scaleY);
        };
        Bild.prototype.move = function (x, y) {
            this.x = x;
            this.y = y;
            this.draw();
        };
        return Bild;
    }());
    //Erzeugung der Bilder im Canvas
    var hase = new Bild(50, 380, 120, 150, 'image/hase.png');
    var chocolate = new Bild(50, 200, 65, 65, 'image/Schoko.png');
    var carrot = new Bild(150, 50, 65, 65, 'image/karotte..png');
    //Canvas Gr��e
    window.onload = function () {
        can.height = window.innerHeight - 100; // -100, da Platz f�r Buttons ben�tigt wird.
        can.width = window.innerWidth;
        animateAll();
    };
    //Resize
    window.addEventListener('resize', function () {
        can.height = window.innerHeight - 100;
        can.width = window.innerWidth;
    });
    //Eventlistener zun Bewegen des Hasen
    window.addEventListener('keydown', down);
    bLinks.addEventListener('mousedown', function () {
        bLinksActive = true;
    });
    bRechts.addEventListener('mousedown', function () {
        bRechtsActive = true;
    });
    bLinks.addEventListener('mouseup', function () {
        bLinksActive = false;
    });
    bRechts.addEventListener('mouseup', function () {
        bRechtsActive = false;
    });
    bLinks.addEventListener('touchstart', function () {
        bLinksActive = true;
    });
    bRechts.addEventListener('touchstart', function () {
        bRechtsActive = true;
    });
    bLinks.addEventListener('touchend', function () {
        bLinksActive = false;
    });
    bRechts.addEventListener('touchend', function () {
        bRechtsActive = false;
    });
    /* down() wird in einer Dauerschleife ausgef�hrt.
    Wenn ein Key Press stattfindet, wird down() direkt aus dem Eventlistener aufgerufen. Wenn die Buttons
    auf der Seite gedr�ckt werden, wird ein boolean auf true gesetzt und der Hase wird bewegt. */
    function down(evt) {
        // Pfeiltasten
        if (evt != null) { //Ist eine Taste gedr�ckt?
            if (evt.keyCode === 39)
                if (haseX < innerWidth - 174)
                    haseX += speedKeys;
            if (evt.keyCode === 37)
                if (haseX >= 0)
                    haseX -= speedKeys;
        }
        // Buttons
        else { //Wenn nein, dann mache weiter mit Buttons auf der Website
            if (bLinksActive)
                if (haseX >= 0)
                    haseX -= speedButtons;
            if (bRechtsActive)
                if (haseX < innerWidth - 174)
                    haseX += speedButtons;
        }
        //console.log(haseX);
        //console.log("innerWidth: " + innerWidth);
    }
    //Animations-Funktion mit Endlos-Schleife
    function animateAll() {
        requestAnimationFrame(animateAll);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        down(undefined);
        hase.move(haseX, haseY);
        chocolate.move(chocolateX, chocolateY += 1);
        carrot.move(carrotX, carrotY += 2);
    }
})(L12_Abschlussaufgabe || (L12_Abschlussaufgabe = {}));
