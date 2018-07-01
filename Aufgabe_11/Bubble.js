var L11_Animation;
(function (L11_Animation) {
    class Bubble extends L11_Animation.MovingObjects {
        constructor() {
            super();
        }
        setPosition() {
            this.x = Math.random() * (500 - 450) + 45;
            this.y = Math.random() * 400;
        }
        // declare method without keyword function
        move() {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 365;
            }
        }
        // Luftblasen erzeugen
        draw() {
            L11_Animation.crc2.beginPath();
            L11_Animation.crc2.arc(this.x + 50, this.y, 6, 0, Math.PI * 2, true);
            L11_Animation.crc2.closePath();
            L11_Animation.crc2.fillStyle = "rgba(84, 185, 255, 0.3)";
            L11_Animation.crc2.fill();
        }
    }
    L11_Animation.Bubble = Bubble;
})(L11_Animation || (L11_Animation = {}));
//# sourceMappingURL=Bubble.js.map