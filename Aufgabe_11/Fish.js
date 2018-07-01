var L11_Animation;
(function (L11_Animation) {
    class Fish extends L11_Animation.MovingObjects {
        constructor() {
            super();
        }
        setPosition() {
            this.x = Math.random() * L11_Animation.crc2.canvas.width;
            this.y = Math.random() * 350;
        }
        // declare method without keyword function
        move() {
            this.x -= 1;
            if (this.x < -100) {
                this.x = 400;
            }
        }
        draw() {
            // Obere H�lfte
            L11_Animation.crc2.moveTo(this.x, this.y);
            L11_Animation.crc2.lineTo(this.x - 10, this.y - 5);
            L11_Animation.crc2.bezierCurveTo(this.x + 5, this.y - 15, this.x + 15, this.y - 25, this.x + 20, this.y - 25);
            L11_Animation.crc2.bezierCurveTo(this.x + 25, this.y - 25, this.x + 25, this.y - 35, this.x + 75, this.y - 10);
            L11_Animation.crc2.bezierCurveTo(this.x + 75, this.y - 15, this.x + 85, this.y - 20, this.x + 95, this.y - 30);
            L11_Animation.crc2.lineTo(this.x + 95, this.y + 30);
            // Untere H�lfte
            L11_Animation.crc2.moveTo(this.x, this.y);
            L11_Animation.crc2.lineTo(this.x - 10, this.y + 5);
            L11_Animation.crc2.bezierCurveTo(this.x + 5, this.y + 15, this.x + 15, this.y + 25, this.x + 20, this.y + 25);
            L11_Animation.crc2.bezierCurveTo(this.x + 25, this.y + 25, this.x + 25, this.y + 35, this.x + 75, this.y + 10);
            L11_Animation.crc2.bezierCurveTo(this.x + 75, this.y + 15, this.x + 85, this.y + 20, this.x + 95, this.y + 30);
            L11_Animation.crc2.moveTo(this.x + 95, this.y + 30);
            L11_Animation.crc2.lineTo(this.x + 95, this.y + 30);
            L11_Animation.crc2.closePath();
            // Fisch Auge
            L11_Animation.crc2.moveTo(this.x + 20, this.y - 10);
            L11_Animation.crc2.arc(this.x + 17, this.y - 10, 4, 0, Math.PI * 2, true);
            L11_Animation.crc2.closePath();
            L11_Animation.crc2.stroke();
            // Fisch Flosse
            L11_Animation.crc2.moveTo(this.x + 40, this.y - 2);
            L11_Animation.crc2.lineTo(this.x + 50, this.y - 5);
            L11_Animation.crc2.lineTo(this.x + 50, this.y + 5);
            L11_Animation.crc2.lineTo(this.x + 40, this.y + 2);
            L11_Animation.crc2.stroke();
            L11_Animation.crc2.moveTo(this.x + 43, this.y + 25);
            L11_Animation.crc2.lineTo(this.x + 55, this.y + 30);
            L11_Animation.crc2.lineTo(this.x + 63, this.y + 15);
            L11_Animation.crc2.stroke();
            L11_Animation.crc2.moveTo(this.x + 25, this.y - 20);
            L11_Animation.crc2.bezierCurveTo(this.x + 30, this.y - 12, this.x + 32, this.y + 12, this.x + 25, this.y + 20);
            L11_Animation.crc2.stroke();
        }
    }
    L11_Animation.Fish = Fish;
})(L11_Animation || (L11_Animation = {}));
//# sourceMappingURL=Fish.js.map