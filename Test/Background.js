var L13_Test;
(function (L13_Test) {
    class Sun {
        constructor(_x, _y, _radius) {
            this.x = _x;
            this.y = _y;
            this.radius = _radius;
        }
        draw() {
            let gradient = L13_Test.ctx.createRadialGradient(this.x, this.y, 10, this.x, this.y, this.radius);
            gradient.addColorStop(0, "yellow");
            gradient.addColorStop(1, "rgb(255, 198, 0)");
            L13_Test.ctx.beginPath();
            L13_Test.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            L13_Test.ctx.fillStyle = gradient;
            L13_Test.ctx.fill();
        }
    }
    L13_Test.Sun = Sun;
})(L13_Test || (L13_Test = {}));
//# sourceMappingURL=Background.js.map