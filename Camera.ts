import {Game} from "./Game";
import {Sprite} from "./Sprite";


export class Camera{
    game: Game;
    offsetX: number;
    offsetY: number;
    target: Sprite;
    targetCenter: boolean = true;

    constructor(x: number, y: number, game: Game) {
        this.offsetX = x;
        this.offsetY = y;
        this.game = game;
    }

    updateToTarget(){
        if(this.targetCenter) {
            this.offsetX = this.target.getX();
            this.offsetY = this.target.getY();
        }
    }

}