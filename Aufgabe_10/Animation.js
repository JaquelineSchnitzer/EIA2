var L10_Animation;
(function (L10_Animation) {
    window.addEventListener("load", init);
    let Fische = [];
    let Bubbles = [];
    let n = 5;
    let imagedata;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        L10_Animation.crc2 = canvas.getContext("2d");
        canvas.style.border = "2px solid black";
        // Objekte aufrufen
        // H�hle 
        drawCave(15, 500);
        // Sand
        drawSand(0, 500);
        // Sandkorn
        const height = L10_Animation.crc2.canvas.height;
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
        imagedata = L10_Animation.crc2.getImageData(0, 0, 400, 600);
        // Animation f�r Fische
        for (let i = 0; i < n; i++) {
            let fish = new L10_Animation.Fish();
            fish.x = Math.random() * L10_Animation.crc2.canvas.width;
            fish.y = Math.random() * 350;
            Fische.push(fish);
        }
        // Animation f�r Luftblasen
        for (let i = 0; i < n; i++) {
            let bubbles = new L10_Animation.Bubble();
            bubbles.x = Math.random() * (500 - 450) + 45;
            bubbles.y = Math.random() * 400;
            Bubbles.push(bubbles);
        }
        animate();
    }
    function animate() {
        window.setTimeout(animate, 25);
        L10_Animation.crc2.putImageData(imagedata, 0, 0);
        moveFish();
        drawFish();
        moveBubble();
        drawBubble();
    }
    function moveFish() {
        for (let i = 0; i < Fische.length; i++) {
            Fische[i].move();
        }
    }
    function drawFish() {
        for (let i = 0; i < Fische.length; i++) {
            Fische[i].draw();
        }
    }
    function moveBubble() {
        for (let i = 0; i < Bubbles.length; i++) {
            Bubbles[i].move();
        }
    }
    function drawBubble() {
        for (let i = 0; i < Bubbles.length; i++) {
            Bubbles[i].draw();
        }
    }
    // Objekte erzeugen
    // H�hle erzeugen
    function drawCave(_x, _y) {
        L10_Animation.crc2.beginPath();
        L10_Animation.crc2.moveTo(_x, _y);
        L10_Animation.crc2.bezierCurveTo(_x, _y - 100, _x + 50, _y - 350, _x + 100, _y - 360);
        L10_Animation.crc2.bezierCurveTo(_x + 200, _y - 400, _x + 220, _y - 100, _x + 280, _y + 20);
        L10_Animation.crc2.lineTo(_x, _y);
        L10_Animation.crc2.closePath();
        L10_Animation.crc2.fillStyle = "rgb(53, 70, 79)";
        L10_Animation.crc2.fill();
        // H�hleneingang erzeugen
        L10_Animation.crc2.beginPath();
        L10_Animation.crc2.moveTo(_x + 50, _y);
        L10_Animation.crc2.quadraticCurveTo(_x + 100, _y - 300, _x + 200, _y + 20);
        L10_Animation.crc2.closePath();
        L10_Animation.crc2.fillStyle = "rgb(33, 43, 48)";
        L10_Animation.crc2.fill();
    }
    // Sand
    function drawSand(_x, _y) {
        L10_Animation.crc2.fillStyle = "rgb(255,222,45)";
        L10_Animation.crc2.beginPath();
        L10_Animation.crc2.moveTo(_x, _y);
        L10_Animation.crc2.bezierCurveTo(_x + 50, _y - 60, _x + 100, _y - 50, _x + 200, _y);
        L10_Animation.crc2.bezierCurveTo(_x + 350, _y + 50, _x + 350, _y + 10, _x + 400, _y);
        L10_Animation.crc2.lineTo(_x + 400, _y + 100);
        L10_Animation.crc2.lineTo(_x, _y + 100);
        L10_Animation.crc2.lineTo(_x, _y);
        L10_Animation.crc2.fill();
        L10_Animation.crc2.closePath();
    }
    // Sandkorn 
    function drawSandkorn(_x, _y) {
        L10_Animation.crc2.beginPath();
        L10_Animation.crc2.arc(_x + 17, _y - 10, 4, 0, Math.PI * 2, true);
        L10_Animation.crc2.closePath();
        L10_Animation.crc2.fillStyle = "rgb(240, 211, 2)";
        L10_Animation.crc2.fill();
    }
    // Pflanzen erzeugen
    function drawPlant(_x, _y) {
        L10_Animation.crc2.beginPath();
        L10_Animation.crc2.moveTo(_x, _y);
        L10_Animation.crc2.quadraticCurveTo(_x - 40, _y - 100, _x - 60, _y - 300);
        L10_Animation.crc2.quadraticCurveTo(_x - 40, _y - 20, _x - 20, _y);
        L10_Animation.crc2.lineTo(_x, _y);
        L10_Animation.crc2.fillStyle = "rgb(57, 138, 86)";
        L10_Animation.crc2.fill();
    }
    function drawPlant2(_x, _y) {
        L10_Animation.crc2.beginPath();
        L10_Animation.crc2.moveTo(_x, _y);
        L10_Animation.crc2.quadraticCurveTo(_x - 10, _y - 200, _x + 60, _y - 400);
        L10_Animation.crc2.quadraticCurveTo(_x - 50, _y - 50, _x - 15, _y);
        L10_Animation.crc2.lineTo(_x, _y);
        L10_Animation.crc2.fillStyle = "rgb(57, 138, 48)";
        L10_Animation.crc2.fill();
    }
    function drawPlant3(_x, _y) {
        L10_Animation.crc2.beginPath();
        L10_Animation.crc2.moveTo(_x, _y);
        L10_Animation.crc2.bezierCurveTo(_x - 40, _y - 150, _x + 20, _y - 300, _x - 10, _y - 400);
        L10_Animation.crc2.stroke();
    }
    function drawPlant4(_x, _y) {
        L10_Animation.crc2.beginPath();
        L10_Animation.crc2.moveTo(_x, _y);
        L10_Animation.crc2.bezierCurveTo(_x + 40, _y - 150, _x - 20, _y - 300, _x + 10, _y - 500);
        L10_Animation.crc2.stroke();
    }
    // Steine erzeugen
    function drawStone(_x, _y) {
        L10_Animation.crc2.beginPath();
        L10_Animation.crc2.moveTo(_x, _y);
        L10_Animation.crc2.bezierCurveTo(_x + 5, _y - 10, _x + 115, _y - 150, _x + 115, _y + 30);
        L10_Animation.crc2.bezierCurveTo(_x + 110, _y + 50, _x - 50, _y + 80, _x, _y);
        L10_Animation.crc2.closePath();
        L10_Animation.crc2.fillStyle = "rgb(144, 137, 145)";
        L10_Animation.crc2.fill();
    }
    function drawStone2(_x, _y) {
        L10_Animation.crc2.beginPath();
        L10_Animation.crc2.moveTo(_x, _y);
        L10_Animation.crc2.bezierCurveTo(_x + 5, _y - 50, _x + 40, _y - 60, _x + 120, _y - 5);
        L10_Animation.crc2.bezierCurveTo(_x + 110, _y + 10, _x + 5, _y + 30, _x, _y);
        L10_Animation.crc2.closePath();
        L10_Animation.crc2.fillStyle = "rgb(140, 148, 156)";
        L10_Animation.crc2.fill();
    }
    function drawStone3(_x, _y) {
        L10_Animation.crc2.beginPath();
        L10_Animation.crc2.moveTo(_x, _y);
        L10_Animation.crc2.bezierCurveTo(_x + 5, _y - 30, _x + 60, _y - 80, _x + 170, _y + 30);
        L10_Animation.crc2.bezierCurveTo(_x + 90, _y + 45, _x - 50, _y + 80, _x, _y);
        L10_Animation.crc2.closePath();
        L10_Animation.crc2.fillStyle = "rgb(188, 188, 191)";
        L10_Animation.crc2.fill();
    }
})(L10_Animation || (L10_Animation = {}));
//# sourceMappingURL=Animation.js.map