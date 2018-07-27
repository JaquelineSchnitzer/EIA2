namespace L13_Test {
    window.addEventListener("load", init);

    // Variablen deklarieren   
    export let ctx: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
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
    let haseY: number = window.innerHeight - 250; // damit Hase immer im Canvas gezeichnet wird
    let chocolateX: number = Math.random() * canvas.width;
    let chocolateY: number = -100; //damit es breits über Canvas gezeichnet wird
    let carrotX: number = Math.random() * canvas.width;
    let carrotY: number = -100;
    
    
        
    // Init Funktion
    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        ctx = canvas.getContext("2d");
        canvas.style.border = "2px solid black";

        // Hintergrund
        imagedata = ctx.getImageData(0, 0, canvas.width, canvas.height);
    }
    
    
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
    const hase = new Bild(50, canvas.height + 250, 120, 150, 'image/hase.png');
    const chocolate = new Bild(Math.random() * canvas.width, -100, 65, 65, 'image/Schoko.png');
    const carrot = new Bild(Math.random() * canvas.width, -100, 65, 65, 'image/karotte..png');

    //Canvas Größe
    window.onload = () => {
        canvas.height = window.innerHeight - 100; // -100, da Platz für Buttons benötigt wird.
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
        console.log(haseX);
        console.log("innerWidth: " + innerWidth);
    }

    // Neue Position des Futters
    function updatePosition(): void {
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
    function animateAll(): void {
        requestAnimationFrame(animateAll);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        down(undefined);
        hase.move(haseX, haseY);
        chocolate.move(chocolateX, chocolateY += 1.5);
        carrot.move(carrotX, carrotY += 2);
        updatePosition();
    }
}