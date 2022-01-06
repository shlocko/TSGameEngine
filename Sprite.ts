import { Position } from "./Position";

export class Sprite{
    img: HTMLImageElement;
    private readonly position: Position;
    constructor(path: string, x: number, y: number) {
        this.img = new Image();
        this.img.src = path;
        this.position = new Position(x, y);
    }

    setPosition(x: number, y: number){
        this.position.x = x;
        this.position.y = y;
    }

    getX(): number{
        return this.position.x;
    }

    getY(): number{
        return this.position.y;
    }

    getPosition(): Position{
        return this.position;
    }

}