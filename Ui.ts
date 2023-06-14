import { Position } from "./Position";
import { Game } from "./engine";

export class Ui{
    type: string;
    private position: Position;
    onclick: Function;
    onrelease: Function;
    visible: boolean = true;
    color: string;
    text: string;

    private constructor() {}
    // Create UI Button
    static createButton(x: number,
                        y: number,
                        color: string,
                        text: string,
                        onclick: Function = function(){},
                        onrelease: Function = function(){}){
            let button = new Ui();
            button.position = new Position(x,y);
            button.color = color;
            button.text = text;
            button.onclick = onclick;
            button.onrelease = onrelease;
    }

}
