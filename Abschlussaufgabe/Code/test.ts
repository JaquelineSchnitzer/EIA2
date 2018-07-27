namespace L13_Test {
    window.addEventListener("load", init);

    // Variablen deklarieren   
    export let ctx: CanvasRenderingContext2D;
    const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    // Hintergrund
    let imagedata: ImageData;
    // Buttons zum Steuern des Hase
    const speedButtons: number = 6; //Geschwindigkeit der Buttons
    const speedKeys: number = 10; // Geschwindikeit der Tastatur
    // Konstanten und Variablen für Buttons
    const bLinks = document.getElementById('buttonLeft');
    const bRechts = document.getElementById('buttonRight');
    let bLinksActive: boolean = false;
    let bRechtsActive: boolean = false;

    // Startpositionen Kaninchen, Karotte und Schokolade
    let haseX: number = 50;
    let haseY: number = canvas.height + 240; // damit Hase immer im Canvas gezeichnet wird
    let chocolateX: number = Math.random() * canvas.width;
    let chocolateY: number = -150; //damit es breits über Canvas gezeichnet wird
    let carrotX: number = Math.random() * canvas.width;
    let carrotY: number = -100;
    // Array für Schokostücke und Karotten
    let vielSchokolade: Bild[] = [];
    let vielKarotte: Bild[] = [];


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
        const gras1 = new Gras1(52, canvas.height - 102);
        gras1.draw();
        const gras2 = new Gras2(500, canvas.height - 50);
        gras2.draw();
        const gras3 = new Gras2(1000, canvas.height - 50);
        gras3.draw();
        const gras7 = new Gras2(795, canvas.height - 17);
        gras7.draw();
        const gras4 = new Gras3(501, canvas.height - 53);
        gras4.draw();
        const gras5 = new Gras3(1002, canvas.height - 51);
        gras5.draw();
        const gras6 = new Gras3(800, canvas.height - 17);
        gras6.draw();
        const gras8 = new Gras3(795, canvas.height - 20);
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


    //Bild-Klasse (Klasse aller Bilder, die im Canvas verwendet werden)
    class Bild {
        x: number;
        y: number;
        scaleX: number;
        scaleY: number;
        image: HTMLImageElement;
        private speed: number;
        moving: boolean;

        constructor(x: number, y: number, scaleX: number, scaleY: number, imgsrc: string, moving: boolean) {
            this.x = x;
            this.y = y;
            this.scaleX = scaleX;
            this.scaleY = scaleY;
            this.image = new Image();
            this.image.src = imgsrc;
            this.moving = moving;

            this.speed = Math.random() + 1;
        }

        draw(): void {
            ctx.drawImage(this.image, this.x, this.y, this.scaleX, this.scaleY);
        }

        move(x: number, y: number): void {
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

        private edges(): boolean {
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
        requestAnimationFrame(animateAll);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        ctx.putImageData(imagedata, 0, 0);
        down(undefined);
        hase.move(haseX, haseY);

        for (let i: number = 0; i < vielSchokolade.length; i++)
            vielSchokolade[i].move(undefined, undefined);

        for (let i: number = 0; i < vielKarotte.length; i++)
            vielKarotte[i].move(undefined, undefined);

    }
}