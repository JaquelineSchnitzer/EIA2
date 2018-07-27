namespace L13_Test {
    export class Wiese {

        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        draw(): void {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y -150);
            ctx.bezierCurveTo(this.x, this.y - 170, this.x + 700, this.y - 250, this.x + 900, this.y - 50);
            ctx.bezierCurveTo(this.x + 500, this.y - 100, this.x + 1200, this.y - 150, this.x + 1500, this.y);
            ctx.lineTo(this.x, this.y);
            ctx.closePath();

            ctx.fillStyle = "#5dd55d";
            ctx.fill();
        }
    }
}