var L11_Animation;
(function (L11_Animation) {
    window.addEventListener("load", init);
    let movingObjects = [];
    let n = 5;
    let imagedata;
    // Init Funktion
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        L11_Animation.crc2 = canvas.getContext("2d");
        canvas.style.border = "2px solid black";
        // Objekte aufrufen
        // H�hle 
        drawCave(15, 500);
        // Sand
        drawSand(0, 500);
        // Sandkorn
        const height = L11_Animation.crc2.canvas.height;
        for (let i = 0; i < 25; i++) {
            let x = Math.random() * 400 + 0;
            let y = Math.random() * (600 - 530) + 530;
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
        // Hintergrund
        imagedata = L11_Animation.crc2.getImageData(0, 0, 400, 600);
        // Animation f�r Fische
        for (let i = 0; i < n; i++) {
            let fish = new L11_Animation.Fish();
            movingObjects.push(fish);
            // Animation f�r Luftblasen
            let bubbles = new L11_Animation.Bubble();
            movingObjects.push(bubbles);
        }
        canvas.addEventListener("click", insertNewObject);
        animate();
    }
    // Neues Objekt erzeugen an der Stelle des Mausklicks
    function insertNewObject(_event) {
        let clickX = _event.clientX;
        let clickY = _event.clientY;
        for (let i = 0; i < 4; i++) {
            let food = new L11_Animation.Food();
            for (let i = 0; i < 3; i++) {
                let food = new L11_Animation.Food();
                movingObjects.push(food);
                clickX += Math.random() * 60;
                clickX -= Math.random() * 60;
                clickY += Math.random() * 50;
            }
        }
    }
    // Animate Funktion
    function animate() {
        window.setTimeout(animate, 25);
        L11_Animation.crc2.putImageData(imagedata, 0, 0);
        moveObjects();
        drawObjects();
    }
    // Animierte Objekte bewegen
    function moveObjects() {
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].move();
        }
    }
    // Animierte Objekte zeichnen
    function drawObjects() {
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].draw();
        }
    }
    // Nicht bewegte Objekte erzeugen
    // H�hle erzeugen
    function drawCave(_x, _y) {
        L11_Animation.crc2.beginPath();
        L11_Animation.crc2.moveTo(_x, _y);
        L11_Animation.crc2.bezierCurveTo(_x, _y - 100, _x + 50, _y - 350, _x + 100, _y - 360);
        L11_Animation.crc2.bezierCurveTo(_x + 200, _y - 400, _x + 220, _y - 100, _x + 280, _y + 20);
        L11_Animation.crc2.lineTo(_x, _y);
        L11_Animation.crc2.closePath();
        L11_Animation.crc2.fillStyle = "rgb(53, 70, 79)";
        L11_Animation.crc2.fill();
        // H�hleneingang erzeugen
        L11_Animation.crc2.beginPath();
        L11_Animation.crc2.moveTo(_x + 50, _y);
        L11_Animation.crc2.quadraticCurveTo(_x + 100, _y - 300, _x + 200, _y + 20);
        L11_Animation.crc2.closePath();
        L11_Animation.crc2.fillStyle = "rgb(33, 43, 48)";
        L11_Animation.crc2.fill();
    }
    // Sand
    function drawSand(_x, _y) {
        L11_Animation.crc2.fillStyle = "rgb(255,222,45)";
        L11_Animation.crc2.beginPath();
        L11_Animation.crc2.moveTo(_x, _y);
        L11_Animation.crc2.bezierCurveTo(_x + 50, _y - 60, _x + 100, _y - 50, _x + 200, _y);
        L11_Animation.crc2.bezierCurveTo(_x + 350, _y + 50, _x + 350, _y + 10, _x + 400, _y);
        L11_Animation.crc2.lineTo(_x + 400, _y + 100);
        L11_Animation.crc2.lineTo(_x, _y + 100);
        L11_Animation.crc2.lineTo(_x, _y);
        L11_Animation.crc2.fill();
        L11_Animation.crc2.closePath();
    }
    // Sandkorn 
    function drawSandkorn(_x, _y) {
        L11_Animation.crc2.beginPath();
        L11_Animation.crc2.arc(_x + 17, _y - 10, 4, 0, Math.PI * 2, true);
        L11_Animation.crc2.closePath();
        L11_Animation.crc2.fillStyle = "rgb(240, 211, 2)";
        L11_Animation.crc2.fill();
    }
    // Pflanzen erzeugen
    function drawPlant(_x, _y) {
        L11_Animation.crc2.beginPath();
        L11_Animation.crc2.moveTo(_x, _y);
        L11_Animation.crc2.quadraticCurveTo(_x - 40, _y - 100, _x - 60, _y - 300);
        L11_Animation.crc2.quadraticCurveTo(_x - 40, _y - 20, _x - 20, _y);
        L11_Animation.crc2.lineTo(_x, _y);
        L11_Animation.crc2.fillStyle = "rgb(57, 138, 86)";
        L11_Animation.crc2.fill();
    }
    function drawPlant2(_x, _y) {
        L11_Animation.crc2.beginPath();
        L11_Animation.crc2.moveTo(_x, _y);
        L11_Animation.crc2.quadraticCurveTo(_x - 10, _y - 200, _x + 60, _y - 400);
        L11_Animation.crc2.quadraticCurveTo(_x - 50, _y - 50, _x - 15, _y);
        L11_Animation.crc2.lineTo(_x, _y);
        L11_Animation.crc2.fillStyle = "rgb(57, 138, 48)";
        L11_Animation.crc2.fill();
    }
    function drawPlant3(_x, _y) {
        L11_Animation.crc2.beginPath();
        L11_Animation.crc2.moveTo(_x, _y);
        L11_Animation.crc2.bezierCurveTo(_x - 40, _y - 150, _x + 20, _y - 300, _x - 10, _y - 400);
        L11_Animation.crc2.stroke();
    }
    function drawPlant4(_x, _y) {
        L11_Animation.crc2.beginPath();
        L11_Animation.crc2.moveTo(_x, _y);
        L11_Animation.crc2.bezierCurveTo(_x + 40, _y - 150, _x - 20, _y - 300, _x + 10, _y - 500);
        L11_Animation.crc2.stroke();
    }
    // Steine erzeugen
    function drawStone(_x, _y) {
        L11_Animation.crc2.beginPath();
        L11_Animation.crc2.moveTo(_x, _y);
        L11_Animation.crc2.bezierCurveTo(_x + 5, _y - 10, _x + 115, _y - 150, _x + 115, _y + 30);
        L11_Animation.crc2.bezierCurveTo(_x + 110, _y + 50, _x - 50, _y + 80, _x, _y);
        L11_Animation.crc2.closePath();
        L11_Animation.crc2.fillStyle = "rgb(144, 137, 145)";
        L11_Animation.crc2.fill();
    }
    function drawStone2(_x, _y) {
        L11_Animation.crc2.beginPath();
        L11_Animation.crc2.moveTo(_x, _y);
        L11_Animation.crc2.bezierCurveTo(_x + 5, _y - 50, _x + 40, _y - 60, _x + 120, _y - 5);
        L11_Animation.crc2.bezierCurveTo(_x + 110, _y + 10, _x + 5, _y + 30, _x, _y);
        L11_Animation.crc2.closePath();
        L11_Animation.crc2.fillStyle = "rgb(140, 148, 156)";
        L11_Animation.crc2.fill();
    }
    function drawStone3(_x, _y) {
        L11_Animation.crc2.beginPath();
        L11_Animation.crc2.moveTo(_x, _y);
        L11_Animation.crc2.bezierCurveTo(_x + 5, _y - 30, _x + 60, _y - 80, _x + 170, _y + 30);
        L11_Animation.crc2.bezierCurveTo(_x + 90, _y + 45, _x - 50, _y + 80, _x, _y);
        L11_Animation.crc2.closePath();
        L11_Animation.crc2.fillStyle = "rgb(188, 188, 191)";
        L11_Animation.crc2.fill();
    }
})(L11_Animation || (L11_Animation = {}));
//# sourceMappingURL=Animation.js.map