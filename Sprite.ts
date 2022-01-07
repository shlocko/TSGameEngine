import { Position } from "./Position";

export class Sprite{
    img: HTMLImageElement = null;
    index: number = null;
    type: string;
    private position: Position;
    /*constructor(path: string, x: number, y: number) {
        this.img = new Image();
        this.img.src = path;
        this.position = new Position(x, y);
    }*/
    private constructor() {
    }
    // Creates a sprite with a given image file
    static createSprite(path: string, x: number, y: number): Sprite{
        let sprite = new Sprite();
        sprite.type = "IMAGE";
        sprite.img.src = path;
        sprite.position = new Position(x, y);
        return sprite;
    }
    // Creates Animated sprite, private until implemented
    private createAnimatedSprite(){}
    // Crates a sprite with a given index from a sprite sheet
    static createSheetSprite(index: number, x: number, y: number){
        let sprite = new Sprite();
        sprite.type = "SHEET";
        sprite.index = index;
        sprite.position = new Position(x, y);
        return sprite;
    }
    // Creates Animated Sprite from a Sprite Sheet, private until implemented
    createAnimatedSheetSprite(){}
    
    
    // Sets the position of the Sprite Object
    setPosition(x: number, y: number){
        this.position.x = x;
        this.position.y = y;
    }
    setX(x: number){
        this.position.x = x;
    }
    setY(y: number){
        this.position.y = y;
    }
    // Returns the X coordinate of the Sprite Object's position
    getX(): number{
        return this.position.x;
    }
    // Returns the Y coordinate of the Sprite Object's position
    getY(): number{
        return this.position.y;
    }
    // Returns the Sprite Object's Position Object
    getPosition(): Position{
        return this.position;
    }

}