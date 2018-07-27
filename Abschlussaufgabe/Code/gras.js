var L13_Test;
(function (L13_Test) {
    class Gras {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        draw() {
            L13_Test.ctx.beginPath();
            L13_Test.ctx.moveTo(this.x, this.y);
            L13_Test.ctx.quadraticCurveTo(this.x - 10, this.y - 10, this.x - 25, this.y - 20);
            L13_Test.ctx.quadraticCurveTo(this.x - 15, this.y - 5, this.x - 10, this.y);
            L13_Test.ctx.lineTo(this.x, this.y);
            L13_Test.ctx.fillStyle = "#17aa29";
            L13_Test.ctx.fill();
        }
    }
    L13_Test.Gras = Gras;
})(L13_Test || (L13_Test = {}));
//# sourceMappingURL=gras.js.map