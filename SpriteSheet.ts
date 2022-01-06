export class SpriteSheet{
    img: HTMLImageElement;
    spriteSize: number;
    width: number;
    height: number;
    constructor(path: string, spriteSize: number, width: number, height: number) {
        this.img = new Image();
        this.img.src = path;
        this.spriteSize = spriteSize;
        this.width = width;
        this.height = height;

    }


}