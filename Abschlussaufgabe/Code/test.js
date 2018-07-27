var L13_Test;
(function (L13_Test) {
    window.addEventListener("load", init);
    const canvas = document.getElementsByTagName("canvas")[0];
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
    let haseY = canvas.height + 240; // damit Hase immer im Canvas gezeichnet wird
    let chocolateX = Math.random() * canvas.width;
    let chocolateY = -150; //damit es breits �ber Canvas gezeichnet wird
    let carrotX = Math.random() * canvas.width;
    let carrotY = -100;
    // Array f�r Schokost�cke und Karotten
    let vielSchokolade = [];
    let vielKarotte = [];
    // Init Funktion
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        L13_Test.ctx = canvas.getContext("2d");
        // Canvas Gr��e
        canvas.height = window.innerHeight - 100; // -100, da Platz f�r Buttons ben�tigt wird.
        canvas.width = window.innerWidth - 20; // sonst reicht Bildschirm nicht
        // Hintergrund erstellen
        const sun = new L13_Test.Sun(canvas.width * 0.613, canvas.height * 0.387, 70);
        sun.draw();
        const wiese = new L13_Test.Wiese(0, canvas.height);
        wiese.draw();
        const gras = new L13_Test.Gras(50, canvas.height - 100);
        gras.draw();
        const gras1 = new L13_Test.Gras1(52, canvas.height - 102);
        gras1.draw();
        const gras2 = new L13_Test.Gras2(500, canvas.height - 50);
        gras2.draw();
        const gras3 = new L13_Test.Gras2(1000, canvas.height - 50);
        gras3.draw();
        const gras7 = new L13_Test.Gras2(795, canvas.height - 17);
        gras7.draw();
        const gras4 = new L13_Test.Gras3(501, canvas.height - 53);
        gras4.draw();
        const gras5 = new L13_Test.Gras3(1002, canvas.height - 51);
        gras5.draw();
        const gras6 = new L13_Test.Gras3(800, canvas.height - 17);
        gras6.draw();
        const gras8 = new L13_Test.Gras3(795, canvas.height - 20);
        gras8.draw();
        const wolke = new L13_Test.Wolke(100, 100);
        wolke.draw();
        const wolke1 = new L13_Test.Wolke(500, 200);
        wolke1.draw();
        const wolke2 = new L13_Test.Wolke(900, 50);
        wolke2.draw();
        const wolke3 = new L13_Test.Wolke(650, 270);
        wolke3.draw();
        const wolke4 = new L13_Test.Wolke(1200, 200);
        wolke4.draw();
        // Hintergrund
        imagedata = L13_Test.ctx.getImageData(0, 0, canvas.width, canvas.height);
        // Mehr Futter erzeugen
        for (let i = 0; i < 5; i++) {
            vielSchokolade.push(new Bild(Math.random() * canvas.width, -100, 65, 65, 'image/Schoko.png', true));
        }
        for (let i = 0; i < 3; i++) {
            vielKarotte.push(new Bild(Math.random() * canvas.width, -100, 65, 65, 'image/karotte..png', true));
        }
        animateAll();
    }
    //Bild-Klasse (Klasse aller Bilder, die im Canvas verwendet werden)
    class Bild {
        constructor(x, y, scaleX, scaleY, imgsrc, moving) {
            this.x = x;
            this.y = y;
            this.scaleX = scaleX;
            this.scaleY = scaleY;
            this.image = new Image();
            this.image.src = imgsrc;
            this.moving = moving;
            this.speed = Math.random() + 1;
        }
        draw() {
            L13_Test.ctx.drawImage(this.image, this.x, this.y, this.scaleX, this.scaleY);
        }
        move(x, y) {
            if (this.moving) {
                this.y += this.speed;
                if (this.edges()) {
                    this.y = -50;
                    this.x = Math.random() * canvas.width;
                }
            }
            else {
                this.x = x;
                this.y = y;
            }
            this.draw();
        }
        edges() {
            return this.y > canvas.height;
        }
    }
    //Erzeugung der Bilder im Canvas
    const hase = new Bild(50, canvas.height + 240, 120, 150, 'image/hase.png', false);
    //Resize
    window.addEventListener('resize', () => {
        canvas.height = window.innerHeight - 100;
        canvas.width = window.innerWidth - 20;
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
    }
    //Animations-Funktion mit Endlos-Schleife
    function animateAll() {
        requestAnimationFrame(animateAll);
        L13_Test.ctx.clearRect(0, 0, innerWidth, innerHeight);
        L13_Test.ctx.putImageData(imagedata, 0, 0);
        down(undefined);
        hase.move(haseX, haseY);
        for (let i = 0; i < vielSchokolade.length; i++)
            vielSchokolade[i].move(undefined, undefined);
        for (let i = 0; i < vielKarotte.length; i++)
            vielKarotte[i].move(undefined, undefined);
    }
})(L13_Test || (L13_Test = {}));
//# sourceMappingURL=test.js.map