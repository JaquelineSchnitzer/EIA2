var L13_Test;
(function (L13_Test) {
    class Wolke {
        constructor(_x, _y) {
            this.y = _y;
            this.x = _x;
        }
        draw() {
            L13_Test.ctx.beginPath();
            L13_Test.ctx.moveTo(this.x, this.y);
            L13_Test.ctx.bezierCurveTo(this.x - 40, this.y + 20, this.x - 40, this.y + 70, this.x + 60, this.y + 70);
            L13_Test.ctx.bezierCurveTo(this.x + 80, this.y + 100, this.x + 150, this.y + 100, this.x + 170, this.y + 70);
            L13_Test.ctx.bezierCurveTo(this.x + 250, this.y + 70, this.x + 250, this.y + 40, this.x + 220, this.y + 20);
            L13_Test.ctx.bezierCurveTo(this.x + 260, this.y - 40, this.x + 200, this.y - 50, this.x + 170, this.y - 30);
            L13_Test.ctx.bezierCurveTo(this.x + 150, this.y - 75, this.x + 80, this.y - 60, this.x + 80, this.y - 30);
            L13_Test.ctx.bezierCurveTo(this.x + 30, this.y - 75, this.x - 20, this.y - 60, this.x, this.y);
            L13_Test.ctx.closePath();
            L13_Test.ctx.fillStyle = "white";
            L13_Test.ctx.fill();
        }
    }
    L13_Test.Wolke = Wolke;
})(L13_Test || (L13_Test = {}));
//# sourceMappingURL=wolke.js.map