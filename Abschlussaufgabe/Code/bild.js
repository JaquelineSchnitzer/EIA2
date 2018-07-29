var L13_Test;
(function (L13_Test) {
    //Bild-Klasse (Klasse aller Bilder, die im Canvas verwendet werden)
    class Bild {
        constructor(x, y, scaleX, scaleY, imgsrc, moving) {
            this.x = x;
            this.y = y;
            this.scaleX = scaleX;
            this.scaleY = scaleY;
            this.image = new Image();
            this.image.src = imgsrc;
            this.moving = moving;
            this.speed = Math.random() + 1;
        }
        draw() {
            L13_Test.ctx.drawImage(this.image, this.x, this.y, this.scaleX, this.scaleY);
        }
        move(x, y) {
            if (this.moving) {
                this.y += this.speed;
                if (this.edges()) {
                    this.y = -50;
                    this.x = Math.random() * L13_Test.width;
                }
            }
            else {
                this.x = x;
                this.y = y;
            }
            this.draw();
        }
        edges() {
            return this.y > L13_Test.height;
        }
    }
    L13_Test.Bild = Bild;
})(L13_Test || (L13_Test = {}));
//# sourceMappingURL=bild.js.map