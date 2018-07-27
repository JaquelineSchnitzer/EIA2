namespace L13_Test {

    export class Gras1 {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        draw(): void {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.quadraticCurveTo(this.x, this.y - 25, this.x + 20, this.y - 50);
            ctx.quadraticCurveTo(this.x - 5, this.y -20, this.x - 2, this.y);
            ctx.lineTo(this.x, this.y);

            ctx.fillStyle = "rgb(57, 138, 48)";
            ctx.fill();
        }
    }
}