namespace L13_Test {
    export class Sun {

        x: number;
        y: number;
        radius: number;

        constructor(_x: number, _y: number, _radius: number) {
            this.x = _x;
            this.y = _y;
            this.radius = _radius;
        }

        draw(): void {
            let gradient: CanvasGradient = ctx.createRadialGradient(this.x, this.y, 10, this.x, this.y, 180);
            gradient.addColorStop(0, "yellow");
            gradient.addColorStop(1, "#ffe066");

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.fillStyle = gradient;
            ctx.fill();
        }
    }
}