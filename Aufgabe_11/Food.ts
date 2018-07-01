namespace L11_Animation {

    export class Food extends MovingObjects {

        color: string;
        stopFood : number;

        constructor() {
            super();
            this.stopFood = Math.random() * (600 - 500) + 500;
        }
        
        setPosition(){
            }

        move(): void {
            this.y += 1;

            if (this.y > this.stopFood) {
                this.y = this.stopFood;
            }

        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle ="brown";
            crc2.fill();
        }
    }

}