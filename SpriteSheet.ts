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
    // Returns the coordinates within the Sprite Sheet of a given index, intended for internal engine use only, but can be used to manually call canvas draw calls on the sprite sheet
    index(index: number){
        let x, y: number;
        if(index >= this.width){
            x = (index % this.width);
            y = Math.floor(index/this.width);
        }else{
            x = index;
            y = 0;
        }
        return {x: x, y: y};
    }

}