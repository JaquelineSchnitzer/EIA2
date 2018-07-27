var L13_Test;
(function (L13_Test) {
    class Wiese {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        draw() {
            L13_Test.ctx.beginPath();
            L13_Test.ctx.moveTo(this.x, this.y - 150);
            L13_Test.ctx.bezierCurveTo(this.x, this.y - 170, this.x + 700, this.y - 250, this.x + 900, this.y - 50);
            L13_Test.ctx.bezierCurveTo(this.x + 500, this.y - 100, this.x + 1200, this.y - 150, this.x + 1500, this.y);
            L13_Test.ctx.lineTo(this.x, this.y);
            L13_Test.ctx.closePath();
            L13_Test.ctx.fillStyle = "#5dd55d";
            L13_Test.ctx.fill();
        }
    }
    L13_Test.Wiese = Wiese;
})(L13_Test || (L13_Test = {}));
//# sourceMappingURL=wiese.js.map