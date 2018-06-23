namespace L10_Animation {

    export class Fish {
        x: number;
        y: number;

        // declare method without keyword function
        move(): void {
            this.x -= 1;

            if (this.x < -100) {
                this.x = 400;
            }
        }

        draw(): void {
            // Obere Hälfte
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - 10, this.y - 5);
            crc2.bezierCurveTo(this.x + 5, this.y - 15, this.x + 15, this.y - 25, this.x + 20, this.y - 25);
            crc2.bezierCurveTo(this.x + 25, this.y - 25, this.x + 25, this.y - 35, this.x + 75, this.y - 10);
            crc2.bezierCurveTo(this.x + 75, this.y - 15, this.x + 85, this.y - 20, this.x + 95, this.y - 30);
            crc2.lineTo(this.x + 95, this.y + 30);

            // Untere Hälfte
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - 10, this.y + 5);
            crc2.bezierCurveTo(this.x + 5, this.y + 15, this.x + 15, this.y + 25, this.x + 20, this.y + 25);
            crc2.bezierCurveTo(this.x + 25, this.y + 25, this.x + 25, this.y + 35, this.x + 75, this.y + 10);
            crc2.bezierCurveTo(this.x + 75, this.y + 15, this.x + 85, this.y + 20, this.x + 95, this.y + 30);
            crc2.moveTo(this.x + 95, this.y + 30);
            crc2.lineTo(this.x + 95, this.y + 30);
            crc2.closePath();

            // Fisch Auge
            crc2.moveTo(this.x + 20, this.y - 10);
            crc2.arc(this.x + 17, this.y - 10, 4, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.stroke();

            // Fisch Flosse
            crc2.moveTo(this.x + 40, this.y - 2);
            crc2.lineTo(this.x + 50, this.y - 5);
            crc2.lineTo(this.x + 50, this.y + 5);
            crc2.lineTo(this.x + 40, this.y + 2);
            crc2.stroke();

            crc2.moveTo(this.x + 43, this.y + 25);
            crc2.lineTo(this.x + 55, this.y + 30);
            crc2.lineTo(this.x + 63, this.y + 15);
            crc2.stroke();

            crc2.moveTo(this.x + 25, this.y - 20);
            crc2.bezierCurveTo(this.x + 30, this.y - 12, this.x + 32, this.y + 12, this.x + 25, this.y + 20);
            crc2.stroke();
            crc2.closePath();
        }
    }
}