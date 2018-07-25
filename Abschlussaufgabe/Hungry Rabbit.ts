namespace L12_Abschlussaufgabe {

    // Variablen deklarieren
    let can: HTMLCanvasElement = document.getElementsByTagName('canvas')[0];
    let ctx = can.getContext('2d');

    // Buttons zum Steuern des Hase
    const speedButtons: number = 6; //Geschwindigkeit der Buttons
    const speedKeys: number = 10; // Geschwinidkeit der Tastatur

    // Konstanten und Variablen f�r Buttons
    const bLinks = document.getElementById('buttonLeft');
    const bRechts = document.getElementById('buttonRight');
    let bLinksActive: boolean = false;
    let bRechtsActive: boolean = false;


    // Startpositionen
    let haseX: number = 50;
    let haseY: number = 380;
    let chocolateX: number = 50;
    let chocolateY: number = 50;
    let carrotX: number = 150;
    let carrotY: number = 50;


    //Bild-Klasse (Klasse aller Bilder, die im Canvas verwendet werden)
    class Bild {
        x: number;
        y: number;
        scaleX: number;
        scaleY: number;
        image: HTMLImageElement;

        constructor(x: number, y: number, scaleX: number, scaleY: number, imgsrc: string) {
            this.x = x;
            this.y = y;
            this.scaleX = scaleX;
            this.scaleY = scaleY;
            this.image = new Image();
            this.image.src = imgsrc;
        }
        draw() {
            ctx.drawImage(this.image, this.x, this.y, this.scaleX, this.scaleY);
        }
        move(x: number, y: number) {
            this.x = x;
            this.y = y;
            this.draw();
        }
    }

    //Erzeugung der Bilder im Canvas
    const hase = new Bild(50, 380, 120, 150, 'image/hase.png');
    const chocolate = new Bild(50, 200, 65, 65, 'image/Schoko.png');
    const carrot = new Bild (150, 50, 65, 65, 'image/karotte..png');

    //Canvas Gr��e
    window.onload = () => {
        can.height = window.innerHeight - 100; // -100, da Platz f�r Buttons ben�tigt wird.
        can.width = window.innerWidth;
        animateAll();
    };


    //Resize
    window.addEventListener('resize', () => {
        can.height = window.innerHeight - 100;
        can.width = window.innerWidth;
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
    function down(evt: KeyboardEvent): void {
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
    function animateAll(): void {
        requestAnimationFrame(animateAll);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        down(undefined);
        hase.move(haseX, haseY);
        chocolate.move(chocolateX, chocolateY += 1);
        carrot.move(carrotX, carrotY += 2);
    }
}
