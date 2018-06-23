var L10_Animation;
(function (L10_Animation) {
    class Bubble {
        // declare method without keyword function
        move() {
            this.x += 0;
            this.y -= 5;
            if (this.y < 0) {
                this.y = 600;
            }
        }
        // Luftblasen erzeugen
        draw() {
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.arc(this.x + 50, this.y, 6, 0, Math.PI * 2, true);
            L10_Animation.crc2.closePath();
            L10_Animation.crc2.fillStyle = "rgba(84, 185, 255, 0.3)";
            L10_Animation.crc2.fill();
        }
    }
    L10_Animation.Bubble = Bubble;
})(L10_Animation || (L10_Animation = {}));
//# sourceMappingURL=Bubble.js.map