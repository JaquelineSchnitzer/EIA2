var L13_Test;
(function (L13_Test) {
    window.addEventListener("load", init);
    let canvas = document.getElementsByTagName("canvas")[0];
    // Hintergrund
    let imagedata;
    // Buttons zum Steuern des Hase
    const speedButtons = 6; //Geschwindigkeit der Buttons
    const speedKeys = 10; // Geschwindikeit der Tastatur
    // Konstanten und Variablen f�r Buttons
    const bLinks = document.getElementById('buttonLeft');
    const bRechts = document.getElementById('buttonRight');
    let bLinksActive = false;
    let bRechtsActive = false;
    // Startpositionen Kaninchen, Karotte und Schokolade
    let haseX = 50;
    let haseY = window.innerHeight - 250; // damit Hase immer im Canvas gezeichnet wird
    let chocolateX = Math.random() * canvas.width;
    let chocolateY = -100; //damit es breits �ber Canvas gezeichnet wird
    let carrotX = Math.random() * canvas.width;
    let carrotY = -100;
    // Init Funktion
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        L13_Test.ctx = canvas.getContext("2d");
        canvas.style.border = "2px solid black";
        // Hintergrund
        imagedata = L13_Test.ctx.getImageData(0, 0, canvas.width, canvas.height);
    }
    //Bild-Klasse (Klasse aller Bilder, die im Canvas verwendet werden)
    class Bild {
        constructor(x, y, scaleX, scaleY, imgsrc) {
            this.x = x;
            this.y = y;
            this.scaleX = scaleX;
            this.scaleY = scaleY;
            this.image = new Image();
            this.image.src = imgsrc;
        }
        draw() {
            L13_Test.ctx.drawImage(this.image, this.x, this.y, this.scaleX, this.scaleY);
        }
        move(x, y) {
            this.x = x;
            this.y = y;
            this.draw();
        }
    }
    //Erzeugung der Bilder im Canvas
    const hase = new Bild(50, canvas.height + 250, 120, 150, 'image/hase.png');
    const chocolate = new Bild(Math.random() * canvas.width, -100, 65, 65, 'image/Schoko.png');
    const carrot = new Bild(Math.random() * canvas.width, -100, 65, 65, 'image/karotte..png');
    //Canvas Gr��e
    window.onload = () => {
        canvas.height = window.innerHeight - 100; // -100, da Platz f�r Buttons ben�tigt wird.
        canvas.width = window.innerWidth - 20; // sonst reicht Bildschirm nicht?
        canvas.style.border = "2px solid black";
        animateAll();
    };
    //Resize
    window.addEventListener('resize', () => {
        canvas.height = window.innerHeight - 100;
        canvas.width = window.innerWidth;
    });
    //Eventlistener zun Bewegen des Hasen
    window.addEventListener('keydown', down);
    bLinks.addEventListener('mousedown', () => {
        bLinksActive = true;
    });
    bRechts.addEventListener('mousedown', () => {
        bRechtsActive = true;
    });
    bLinks.addEventListener('mouseup', () => {
        bLinksActive = false;
    });
    bRechts.addEventListener('mouseup', () => {
        bRechtsActive = false;
    });
    bLinks.addEventListener('touchstart', () => {
        bLinksActive = true;
    });
    bRechts.addEventListener('touchstart', () => {
        bRechtsActive = true;
    });
    bLinks.addEventListener('touchend', () => {
        bLinksActive = false;
    });
    bRechts.addEventListener('touchend', () => {
        bRechtsActive = false;
    });
    /* down() wird in einer Dauerschleife ausgef�hrt.
    Wenn ein Key Press stattfindet, wird down() direkt aus dem Eventlistener aufgerufen. Wenn die Buttons
    auf der Seite gedr�ckt werden, wird ein boolean auf true gesetzt und der Hase wird bewegt. */
    function down(evt) {
        // Pfeiltasten
        if (evt != null) {
            if (evt.keyCode === 39)
                if (haseX < innerWidth - 174)
                    haseX += speedKeys;
            if (evt.keyCode === 37)
                if (haseX >= 0)
                    haseX -= speedKeys;
        }
        else {
            if (bLinksActive)
                if (haseX >= 0)
                    haseX -= speedButtons;
            if (bRechtsActive)
                if (haseX < innerWidth - 174)
                    haseX += speedButtons;
        }
        console.log(haseX);
        console.log("innerWidth: " + innerWidth);
    }
    // Neue Position des Futters
    function updatePosition() {
        if (chocolateY > canvas.height) {
            chocolateY = -100;
            chocolateX = Math.random() * canvas.width;
        }
        if (carrotY > canvas.height) {
            carrotY = -100;
            carrotX = Math.random() * canvas.width;
        }
        if (carrotX >= canvas.width - 50) {
            carrotX = canvas.width - 55;
        }
    }
    //Animations-Funktion mit Endlos-Schleife
    function animateAll() {
        requestAnimationFrame(animateAll);
        L13_Test.ctx.clearRect(0, 0, innerWidth, innerHeight);
        down(undefined);
        hase.move(haseX, haseY);
        chocolate.move(chocolateX, chocolateY += 1.5);
        carrot.move(carrotX, carrotY += 2);
        updatePosition();
    }
})(L13_Test || (L13_Test = {}));
//# sourceMappingURL=test.js.map