namespace L13_Test {

    export class Gras {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }
        
        draw(): void {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.quadraticCurveTo(this.x - 10, this.y - 10, this.x - 25, this.y - 20);
            ctx.quadraticCurveTo(this.x - 15, this.y - 5, this.x - 10, this.y);

            ctx.lineTo(this.x, this.y);
            ctx.fillStyle = "#17aa29";
            ctx.fill();
        }
    }
}