import { Game } from "./Game";
import { UiComponent } from "./UiCompnent";

export class Ui{
    game: Game;
    components: UiComponent[];

    constructor(game: Game){
        this.game = game;
    }

    addComponent(component: UiComponent){
        this.components.push(component);
    }
    draw(){
        this.components.forEach((c) => {
            c.draw();
        });
    }
    handleMouseDown(event: MouseEvent){
        console.log("UIMouseDown" + event);
    }
    handleMouseUp(event: MouseEvent){
        console.log("UIMouseUp" + event);
    }
}
