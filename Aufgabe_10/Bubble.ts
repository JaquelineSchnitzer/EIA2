namespace L10_Animation {

    export class Bubble {
        x: number;
        y: number;

        // declare method without keyword function
        move(): void {
            this.x += 0;
            this.y -= 2;

            if (this.y < 0) {
                this.y = 365;
            }
        }

        // Luftblasen erzeugen
        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x + 50, this.y, 6, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fillStyle = "rgba(84, 185, 255, 0.3)";
            crc2.fill();
        }

    }
}