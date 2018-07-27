var L13_Test;
(function (L13_Test) {
    class Sky {
        draw() {
            let gradient = L13_Test.ctx.createLinearGradient(0, 0, 0, L13_Test.height - 100);
            gradient.addColorStop(0, "rgb(0, 200, 250)");
            gradient.addColorStop(1, "white");
            L13_Test.ctx.fillStyle = gradient;
            L13_Test.ctx.fillRect(0, 0, L13_Test.width, L13_Test.height);
        }
    }
    L13_Test.Sky = Sky;
})(L13_Test || (L13_Test = {}));
//# sourceMappingURL=sky.js.map