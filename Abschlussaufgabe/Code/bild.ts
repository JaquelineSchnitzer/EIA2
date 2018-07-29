namespace L13_Test {

//Bild-Klasse (Klasse aller Bilder, die im Canvas verwendet werden)
   export class Bild {
        x: number;
        y: number;
        scaleX: number;
        scaleY: number;
        image: HTMLImageElement;
        private speed: number;
        moving: boolean;

        constructor(x: number, y: number, scaleX: number, scaleY: number, imgsrc: string, moving: boolean) {
            this.x = x;
            this.y = y;
            this.scaleX = scaleX;
            this.scaleY = scaleY;
            this.image = new Image();
            this.image.src = imgsrc;
            this.moving = moving;

            this.speed = Math.random() + 1;
        }

        draw(): void {
            ctx.drawImage(this.image, this.x, this.y, this.scaleX, this.scaleY);
        }

        move(x: number, y: number): void {
            if (this.moving) {
                this.y += this.speed;

                if (this.edges()) {
                    this.y = -50;
                    this.x = Math.random() * width;
                }
            }
            else {
                this.x = x;
                this.y = y;

            }
            this.draw();
        }

        private edges(): boolean {
            return this.y > height;
        }
    }
    }