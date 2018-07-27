namespace L13_Test {

    export class Sky {

        draw(): void {
            let gradient: CanvasGradient = ctx.createLinearGradient(0, 0, 0, height - 100);
            gradient.addColorStop(0, "rgb(0, 200, 250)");
            gradient.addColorStop(1, "white");

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        }

    }
}