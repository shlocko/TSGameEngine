import { Position } from "./Position";

export class Sprite{
    img: HTMLImageElement;
    private readonly position: Position;
    constructor(path: string, x: number, y: number) {
        this.img = new Image();
        this.img.src = path;
        this.position = new Position(x, y);
    }
    // Sets the position of the Sprite Object
    setPosition(x: number, y: number){
        this.position.x = x;
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