namespace L13_Test {
    window.addEventListener("load", init);

    // Variablen deklarieren   
    export let ctx: CanvasRenderingContext2D;
    const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

    // Hintergrund
    let imagedata: ImageData;

    // Buttons zum Steuern des Hase
    const speedButtons: number = 6;
    const speedKeys: number = 10;

    // Konstanten und Variablen für Buttons
    const bLinks = document.getElementById('buttonLeft');
    const bRechts = document.getElementById('buttonRight');
    let bLinksActive: boolean = false;
    let bRechtsActive: boolean = false;

    // Startpositionen Kaninchen, Karotte und Schokolade
    let haseX: number = 50;
    let haseY: number = window.innerHeight - 240; // damit Hase immer im Canvas gezeichnet wird
    let chocolateX: number = Math.random() * canvas.width;
    let chocolateY: number = -150; //damit es bereits über Canvas gezeichnet wird
    let carrotX: number = Math.random() * canvas.width;
    let carrotY: number = -100;

    // Array für Schokostücke und Karotten
    let vielSchokolade: Bild[] = [];
    let vielKarotte: Bild[] = [];

    // Score
    let score: number = 0;
    const showScore = document.getElementById('score');

    // Höhe und Breite für bild.ts
    export let height = window.innerHeight - 100;;
    export let width = window.innerWidth - 20;;

    //Ist das Spiel vorbei?
    let msgOnlyOnes: boolean = false;
    let isGameOver: boolean = false;


    // Init Funktion
    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        ctx = canvas.getContext("2d");

        // Canvas Größe
        canvas.height = window.innerHeight - 100; // -100, da Platz für Buttons benötigt wird.
        canvas.width = window.innerWidth - 20; // sonst reicht Bildschirm nicht

        // Hintergrund erstellen
        const sun = new Sun(canvas.width * 0.613, canvas.height * 0.387, 70);
        sun.draw();
        const wiese = new Wiese(0, canvas.height);
        wiese.draw();
        const gras = new Gras(50, canvas.height - 100);
        gras.draw();
        const gras1 = new Gras(500, canvas.height - 50);
        gras1.draw();
        const gras2 = new Gras(1000, canvas.height - 50);
        gras2.draw();
        const gras3 = new Gras(795, canvas.height - 17);
        gras3.draw();
        const gras4 = new Gras1(52, canvas.height - 102);
        gras4.draw();
        const gras5 = new Gras1(501, canvas.height - 53);
        gras5.draw();
        const gras6 = new Gras1(1002, canvas.height - 51);
        gras6.draw();
        const gras7 = new Gras1(800, canvas.height - 17);
        gras7.draw();
        const gras8 = new Gras1(795, canvas.height - 20);
        gras8.draw();
        const wolke = new Wolke(100, 100);
        wolke.draw();
        const wolke1 = new Wolke(500, 200);
        wolke1.draw();
        const wolke2 = new Wolke(900, 50);
        wolke2.draw();
        const wolke3 = new Wolke(650, 270);
        wolke3.draw();
        const wolke4 = new Wolke(1200, 200);
        wolke4.draw();

        // Hintergrund
        imagedata = ctx.getImageData(0, 0, canvas.width, canvas.height);

        // Mehr Futter erzeugen
        for (let i: number = 0; i < 5; i++) {
            vielSchokolade.push(new Bild(Math.random() * canvas.width, -100, 65, 65, 'image/Schoko.png', true));
        }

        for (let i: number = 0; i < 3; i++) {
            vielKarotte.push(new Bild(Math.random() * canvas.width, -100, 65, 65, 'image/karotte..png', true));
        }
        

        animateAll();
        
    }
    // Init zu Ende


alert("Helfe Rabbit seinen Hunger zu besiegen. Sammle mit den Pfeiltasten oder den Button die herunterfallenden Karotten ein. Doch Vorsicht! Schokolade ist nicht gut für Kaninchen, meide sie. Du hast zwei Minuten Zeit.");
    //Erzeugung Kaninchen im Canvas
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
    /* down() wird in einer Dauerschleife ausgeführt.
    Wenn ein Key Press stattfindet, wird down() direkt aus dem Eventlistener aufgerufen. Wenn die Buttons
    auf der Seite gedrückt werden, wird ein boolean auf true gesetzt und der Hase wird bewegt. */
    function down(evt: KeyboardEvent): void {
        // Pfeiltasten
        if (evt != null) { //Ist eine Taste gedrückt?
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
    }


    //Animations-Funktion mit Endlos-Schleife
    function animateAll(): void {
        if (!isGameOver) {
            requestAnimationFrame(animateAll);
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            ctx.putImageData(imagedata, 0, 0);

            down(undefined);
            hase.move(haseX, haseY);
            showScore.innerText = `Score: ${score}`;

            // Viel Schokolade erzeugen und auffangen
            for (let i: number = 0; i < vielSchokolade.length; i++) {
                vielSchokolade[i].move(undefined, undefined);
                let distanceChocolate: number = Math.sqrt(Math.pow(vielSchokolade[i].x - haseX, 2) + Math.pow(vielSchokolade[i].y - haseY, 2));
                if (distanceChocolate < 50) {
                    score--;
                }
            }
            // Viele Karotten erzeugen und auffangen
            for (let i: number = 0; i < vielKarotte.length; i++) {
                vielKarotte[i].move(undefined, undefined);
                let distanceCarrot: number = Math.sqrt(Math.pow(vielKarotte[i].x - haseX, 2) + Math.pow(vielKarotte[i].y - haseY, 2));
                if (distanceCarrot < 50) {
                    score++;
                }
            }
            gameOver(false);
        }

        // Timer
        const time = setTimeout(() => { gameOver(true); }, 120000);


        // Game Over
        function gameOver(timeOut: boolean): void {
            if (score < 0 && !timeOut) {
                isGameOver = true;
                if(!msgOnlyOnes) {
                    msgOnlyOnes = true;
                    alert("Oh oh. Rabbit hat zu viel Schokolade gefressen. Versuche es erneut. Viel Glück!");
                    location.reload();
                    }
            }
            else if (timeOut) {
                isGameOver = true;
                if(!msgOnlyOnes) {
                    msgOnlyOnes = true;
                    alert("Gut gemacht! Rabbit ist satt :)");
                    location.reload();
                    
                    }
            }
        }
    }
}