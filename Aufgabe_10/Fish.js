var L10_Animation;
(function (L10_Animation) {
    class Fish {
        // declare method without keyword function
        move() {
            this.x -= 1;
            if (this.x < -100) {
                this.x = 400;
            }
        }
        draw() {
            // Obere H�lfte
            L10_Animation.crc2.moveTo(this.x, this.y);
            L10_Animation.crc2.lineTo(this.x - 10, this.y - 5);
            L10_Animation.crc2.bezierCurveTo(this.x + 5, this.y - 15, this.x + 15, this.y - 25, this.x + 20, this.y - 25);
            L10_Animation.crc2.bezierCurveTo(this.x + 25, this.y - 25, this.x + 25, this.y - 35, this.x + 75, this.y - 10);
            L10_Animation.crc2.bezierCurveTo(this.x + 75, this.y - 15, this.x + 85, this.y - 20, this.x + 95, this.y - 30);
            L10_Animation.crc2.lineTo(this.x + 95, this.y + 30);
            // Untere H�lfte
            L10_Animation.crc2.moveTo(this.x, this.y);
            L10_Animation.crc2.lineTo(this.x - 10, this.y + 5);
            L10_Animation.crc2.bezierCurveTo(this.x + 5, this.y + 15, this.x + 15, this.y + 25, this.x + 20, this.y + 25);
            L10_Animation.crc2.bezierCurveTo(this.x + 25, this.y + 25, this.x + 25, this.y + 35, this.x + 75, this.y + 10);
            L10_Animation.crc2.bezierCurveTo(this.x + 75, this.y + 15, this.x + 85, this.y + 20, this.x + 95, this.y + 30);
            L10_Animation.crc2.moveTo(this.x + 95, this.y + 30);
            L10_Animation.crc2.lineTo(this.x + 95, this.y + 30);
            L10_Animation.crc2.closePath();
            // Fisch Auge
            L10_Animation.crc2.moveTo(this.x + 20, this.y - 10);
            L10_Animation.crc2.arc(this.x + 17, this.y - 10, 4, 0, Math.PI * 2, true);
            L10_Animation.crc2.closePath();
            L10_Animation.crc2.stroke();
            // Fisch Flosse
            L10_Animation.crc2.moveTo(this.x + 40, this.y - 2);
            L10_Animation.crc2.lineTo(this.x + 50, this.y - 5);
            L10_Animation.crc2.lineTo(this.x + 50, this.y + 5);
            L10_Animation.crc2.lineTo(this.x + 40, this.y + 2);
            L10_Animation.crc2.stroke();
            L10_Animation.crc2.moveTo(this.x + 43, this.y + 25);
            L10_Animation.crc2.lineTo(this.x + 55, this.y + 30);
            L10_Animation.crc2.lineTo(this.x + 63, this.y + 15);
            L10_Animation.crc2.stroke();
            L10_Animation.crc2.moveTo(this.x + 25, this.y - 20);
            L10_Animation.crc2.bezierCurveTo(this.x + 30, this.y - 12, this.x + 32, this.y + 12, this.x + 25, this.y + 20);
            L10_Animation.crc2.stroke();
            L10_Animation.crc2.closePath();
        }
    }
    L10_Animation.Fish = Fish;
})(L10_Animation || (L10_Animation = {}));
//# sourceMappingURL=Fish.js.map