import { Position } from "./Position";
import { Game } from "./Game";

export class UiComponent{
    game: Game;
    type: string;
    private position: Position;
    onclick: Function;
    onrelease: Function;
    draw: Function;
    visible: boolean = true;
    color: string;

    private constructor() {}
    // Create UI Button
    static createButton(
        game: Game,
        x: number,
        y: number,
        color: string,
        draw: Function,
        onclick: Function = function(){},
        onrelease: Function = function(){}){
            let button = new UiComponent();
            button.game = game;
            button.position = new Position(x,y);
            button.color = color;
            button.draw = draw;
            button.onclick = onclick;
            button.onrelease = onrelease;
            return button;
    }
    setX(x: number){
        this.position.x = x;
    }
    getX(){
        return this.position.x;
    }
}
