var L11_Animation;
(function (L11_Animation) {
    class Food extends L11_Animation.MovingObjects {
        constructor() {
            super();
            this.color = "brown";
            this.stopFood = Math.random() * (600 - 500) + 500;
        }
        setPosition() {
        }
        move() {
            this.y += 1;
            if (this.y > this.stopFood) {
                this.y = this.stopFood;
            }
        }
        draw() {
            L11_Animation.crc2.beginPath();
            L11_Animation.crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            L11_Animation.crc2.closePath();
            L11_Animation.crc2.fill();
        }
    }
    L11_Animation.Food = Food;
})(L11_Animation || (L11_Animation = {}));
//# sourceMappingURL=Food.js.map