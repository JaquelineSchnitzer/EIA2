namespace L09_Canvas {
    window.addEventListener("load", init);

    // Variablen deklarieren     
    let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        // Höhe und Breite des Canvas bestimmen
        document.getElementById("can").height = 600;
        document.getElementById("can").width = 400;

        // Objekte aufrufen
        // Höhle 
        drawCave(15, 500);

        // Luftblasen
        for (let i: number = 0; i < 12; i++) {
            let x: number = Math.random() * (400 - 350) + 25;
            let y: number = Math.random() * (600 - 250) + 50;
            drawBubble(x, y);
        }

        // Sand
        drawSand(0, 500);

        // Sandkorn
        const height = crc2.canvas.height;
        for (let i: number = 0; i < 25; i++) {
            let x: number = Math.random() * 400 + 0;
            let y: number = Math.random() * (600 - 530) + 530;
            drawSandkorn(x, y);
        }

        // Position Pflanze
        drawPlant(330, 500);
        drawPlant2(350, 450);
        drawPlant3(320, 450);
        drawPlant4(350, 450);

        // Position Steine
        drawStone(290, 450);
        drawStone2(250, 520);
        drawStone3(320, 500);

        // Postition Fisch
        drawFish(50, 50);

        // Schleife für zufällige Anordnung der Fische
        for (let i: number = 0; i < 3; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * 400;
            drawFish(x, y);
        }
    }
    
    // Objekte erzeugen
    // Höhle erzeugen
    function drawCave(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x, _y - 100, _x + 50, _y - 350, _x + 100, _y - 360);
        crc2.bezierCurveTo(_x + 200, _y - 400, _x + 220, _y - 100, _x + 280, _y + 20);
        crc2.lineTo(_x, _y);
        crc2.closePath();

        crc2.fillStyle = "rgb(53, 70, 79)";
        crc2.fill();

        // Höhleneingang erzeugen
        crc2.beginPath();
        crc2.moveTo(_x + 50, _y);
        crc2.quadraticCurveTo(_x + 100, _y - 300, _x + 200, _y + 20);
        crc2.closePath();
        crc2.fillStyle = "rgb(33, 43, 48)";
        crc2.fill();
    }


    // Luftblasen erzeugen
    function drawBubble(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.arc(_x + 50, _y, 6, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fillStyle = "rgba(84, 185, 255, 0.3)";
        crc2.fill();
    }


    // Sand
    function drawSand(_x: number, _y: number): void {
        crc2.fillStyle = "rgb(255,222,45)";
        crc2.beginPath();

        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x + 50, _y - 60, _x + 100, _y - 50, _x + 200, _y);
        crc2.bezierCurveTo(_x + 350, _y + 50, _x + 350, _y + 10, _x + 400, _y);
        crc2.lineTo(_x + 400, _y + 100);
        crc2.lineTo(_x, _y + 100);
        crc2.lineTo(_x, _y);

        crc2.fill();
        crc2.closePath();
    }


    // Sandkorn 
    function drawSandkorn(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.arc(_x + 17, _y - 10, 4, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fillStyle = "rgb(240, 211, 2)";
        crc2.fill();
    }


    // Pflanzen erzeugen
    function drawPlant(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x - 40, _y - 100, _x - 60, _y - 300);
        crc2.quadraticCurveTo(_x - 40, _y - 20, _x - 20, _y);

        crc2.lineTo(_x, _y);
        crc2.fillStyle = "rgb(57, 138, 86)";
        crc2.fill();
    }

    function drawPlant2(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x - 10, _y - 200, _x + 60, _y - 400);
        crc2.quadraticCurveTo(_x - 50, _y - 50, _x - 15, _y);
        crc2.lineTo(_x, _y);

        crc2.fillStyle = "rgb(57, 138, 48)";
        crc2.fill();
    }

    function drawPlant3(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x - 40, _y - 150, _x + 20, _y - 300, _x - 10, _y - 400);
        crc2.stroke();
    }

    function drawPlant4(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x + 40, _y - 150, _x - 20, _y - 300, _x + 10, _y - 500);
        crc2.stroke();
    }


    // Steine erzeugen
    function drawStone(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x + 5, _y - 10, _x + 115, _y - 150, _x + 115, _y + 30);
        crc2.bezierCurveTo(_x + 110, _y + 50, _x - 50, _y + 80, _x, _y);
        crc2.closePath();

        crc2.fillStyle = "rgb(144, 137, 145)";
        crc2.fill();
    }

    function drawStone2(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x + 5, _y - 50, _x + 40, _y - 60, _x + 120, _y - 5);
        crc2.bezierCurveTo(_x + 110, _y + 10, _x + 5, _y + 30, _x, _y);
        crc2.closePath();

        crc2.fillStyle = "rgb(140, 148, 156)";
        crc2.fill();
    }

    function drawStone3(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x + 5, _y - 30, _x + 60, _y - 80, _x + 170, _y + 30);
        crc2.bezierCurveTo(_x + 90, _y + 45, _x - 50, _y + 80, _x, _y);
        crc2.closePath();

        crc2.fillStyle = "rgb(188, 188, 191)";
        crc2.fill();
    }


    // Fisch kreieren
    function drawFish(_x: number, _y: number): void {
        crc2.beginPath();

        // Obere Hälfte
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x - 10, _y - 5);
        crc2.bezierCurveTo(_x + 5, _y - 15, _x + 15, _y - 25, _x + 20, _y - 25);
        crc2.bezierCurveTo(_x + 25, _y - 25, _x + 25, _y - 35, _x + 75, _y - 10);
        crc2.bezierCurveTo(_x + 75, _y - 15, _x + 85, _y - 20, _x + 95, _y - 30);
        crc2.lineTo(_x + 95, _y + 30);

        // Untere Hälfte
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x - 10, _y + 5);
        crc2.bezierCurveTo(_x + 5, _y + 15, _x + 15, _y + 25, _x + 20, _y + 25);
        crc2.bezierCurveTo(_x + 25, _y + 25, _x + 25, _y + 35, _x + 75, _y + 10);
        crc2.bezierCurveTo(_x + 75, _y + 15, _x + 85, _y + 20, _x + 95, _y + 30);
        crc2.moveTo(_x + 95, _y + 30);
        crc2.lineTo(_x + 95, _y + 30);
        crc2.closePath();

        // Fisch Auge
        crc2.moveTo(_x + 20, _y - 10);
        crc2.arc(_x + 17, _y - 10, 4, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.stroke();

        // Fisch Flosse
        crc2.moveTo(_x + 40, _y - 2);
        crc2.lineTo(_x + 50, _y - 5);
        crc2.lineTo(_x + 50, _y + 5);
        crc2.lineTo(_x + 40, _y + 2);
        crc2.stroke();

        crc2.moveTo(_x + 43, _y + 25);
        crc2.lineTo(_x + 55, _y + 30);
        crc2.lineTo(_x + 63, _y + 15);
        crc2.stroke();

        crc2.moveTo(_x + 25, _y - 20);
        crc2.bezierCurveTo(_x + 30, _y - 12, _x + 32, _y + 12, _x + 25, _y + 20);
        crc2.stroke();

        /*crc2.fillStyle = "rgb(255, 237, 210)"; // Wenn ich die Fische ausfülle, deformieren sie sich :(
        crc2.fill();*/
    }

}