namespace L13_Test {

    export class Wolke {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.y = _y;
            this.x = _x;
        }

        draw(): void {

            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.bezierCurveTo(this.x - 40, this.y + 20, this.x - 40, this.y + 70, this.x + 60, this.y + 70);
            ctx.bezierCurveTo(this.x + 80, this.y + 100, this.x + 150, this.y + 100, this.x + 170, this.y + 70);
            ctx.bezierCurveTo(this.x + 250, this.y + 70, this.x + 250, this.y + 40, this.x + 220, this.y + 20);
            ctx.bezierCurveTo(this.x + 260, this.y - 40, this.x + 200, this.y - 50, this.x + 170, this.y - 30);
            ctx.bezierCurveTo(this.x + 150, this.y - 75, this.x + 80, this.y - 60, this.x + 80, this.y - 30);
            ctx.bezierCurveTo(this.x + 30, this.y - 75, this.x - 20, this.y - 60, this.x, this.y);
            ctx.closePath();

            ctx.fillStyle = "white";
            ctx.fill();
        }
    }
}