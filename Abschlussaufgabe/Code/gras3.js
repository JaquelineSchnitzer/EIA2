var L13_Test;
(function (L13_Test) {
    class Gras3 {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        draw() {
            L13_Test.ctx.beginPath();
            L13_Test.ctx.moveTo(this.x, this.y);
            L13_Test.ctx.quadraticCurveTo(this.x, this.y - 25, this.x + 20, this.y - 50);
            L13_Test.ctx.quadraticCurveTo(this.x - 5, this.y - 20, this.x - 2, this.y);
            L13_Test.ctx.lineTo(this.x, this.y);
            L13_Test.ctx.fillStyle = "rgb(57, 138, 48)";
            L13_Test.ctx.fill();
        }
    }
    L13_Test.Gras3 = Gras3;
})(L13_Test || (L13_Test = {}));
//# sourceMappingURL=gras3.js.map