var L13_Test;
(function (L13_Test) {
    window.addEventListener("load", init);
    const canvas = document.getElementsByTagName("canvas")[0];
    // Hintergrund
    let imagedata;
    // Buttons zum Steuern des Hase
    const speedButtons = 6;
    const speedKeys = 10;
    // Konstanten und Variablen f�r Buttons
    const bLinks = document.getElementById('buttonLeft');
    const bRechts = document.getElementById('buttonRight');
    let bLinksActive = false;
    let bRechtsActive = false;
    // Startpositionen Kaninchen, Karotte und Schokolade
    let haseX = 50;
    let haseY = window.innerHeight - 240; // damit Hase immer im Canvas gezeichnet wird
    let chocolateX = Math.random() * canvas.width;
    let chocolateY = -150; //damit es bereits �ber Canvas gezeichnet wird
    let carrotX = Math.random() * canvas.width;
    let carrotY = -100;
    // Array f�r Schokost�cke und Karotten
    let vielSchokolade = [];
    let vielKarotte = [];
    // Score
    let score = 0;
    const showScore = document.getElementById('score');
    // H�he und Breite f�r bild.ts
    L13_Test.height = window.innerHeight - 100;
    ;
    L13_Test.width = window.innerWidth - 20;
    ;
    //Ist das Spiel vorbei?
    let msgOnlyOnes = false;
    let isGameOver = false;
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
        const gras1 = new L13_Test.Gras(500, canvas.height - 50);
        gras1.draw();
        const gras2 = new L13_Test.Gras(1000, canvas.height - 50);
        gras2.draw();
        const gras3 = new L13_Test.Gras(795, canvas.height - 17);
        gras3.draw();
        const gras4 = new L13_Test.Gras1(52, canvas.height - 102);
        gras4.draw();
        const gras5 = new L13_Test.Gras1(501, canvas.height - 53);
        gras5.draw();
        const gras6 = new L13_Test.Gras1(1002, canvas.height - 51);
        gras6.draw();
        const gras7 = new L13_Test.Gras1(800, canvas.height - 17);
        gras7.draw();
        const gras8 = new L13_Test.Gras1(795, canvas.height - 20);
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
            vielSchokolade.push(new L13_Test.Bild(Math.random() * canvas.width, -100, 65, 65, 'image/Schoko.png', true));
        }
        for (let i = 0; i < 3; i++) {
            vielKarotte.push(new L13_Test.Bild(Math.random() * canvas.width, -100, 65, 65, 'image/karotte..png', true));
        }
        animateAll();
    }
    // Init zu Ende
    alert("Helfe Rabbit seinen Hunger zu besiegen. Sammle mit den Pfeiltasten oder den Button die herunterfallenden Karotten ein. Doch Vorsicht! Schokolade ist nicht gut f�r Kaninchen, meide sie. Du hast zwei Minuten Zeit.");
    //Erzeugung Kaninchen im Canvas
    const hase = new L13_Test.Bild(50, canvas.height + 240, 120, 150, 'image/hase.png', false);
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
        if (!isGameOver) {
            requestAnimationFrame(animateAll);
            L13_Test.ctx.clearRect(0, 0, innerWidth, innerHeight);
            L13_Test.ctx.putImageData(imagedata, 0, 0);
            down(undefined);
            hase.move(haseX, haseY);
            showScore.innerText = `Score: ${score}`;
            // Viel Schokolade erzeugen und auffangen
            for (let i = 0; i < vielSchokolade.length; i++) {
                vielSchokolade[i].move(undefined, undefined);
                let distanceChocolate = Math.sqrt(Math.pow(vielSchokolade[i].x - haseX, 2) + Math.pow(vielSchokolade[i].y - haseY, 2));
                if (distanceChocolate < 50) {
                    score--;
                }
            }
            // Viele Karotten erzeugen und auffangen
            for (let i = 0; i < vielKarotte.length; i++) {
                vielKarotte[i].move(undefined, undefined);
                let distanceCarrot = Math.sqrt(Math.pow(vielKarotte[i].x - haseX, 2) + Math.pow(vielKarotte[i].y - haseY, 2));
                if (distanceCarrot < 50) {
                    score++;
                }
            }
            gameOver(false);
        }
        // Timer
        const time = setTimeout(() => { gameOver(true); }, 120000);
        // Game Over
        function gameOver(timeOut) {
            if (score < 0 && !timeOut) {
                isGameOver = true;
                if (!msgOnlyOnes) {
                    msgOnlyOnes = true;
                    alert("Oh oh. Rabbit hat zu viel Schokolade gefressen. Versuche es erneut. Viel Gl�ck!");
                    location.reload();
                }
            }
            else if (timeOut) {
                isGameOver = true;
                if (!msgOnlyOnes) {
                    msgOnlyOnes = true;
                    alert("Gut gemacht! Rabbit ist satt :)");
                    location.reload();
                }
            }
        }
    }
})(L13_Test || (L13_Test = {}));
//# sourceMappingURL=main.js.map