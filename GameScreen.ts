import {Game} from './engine';

export class GameScreen{
    game: Game;
    input = {};

    constructor(game: Game) {
        this.game = game;
    }

    inputHandler = (event: KeyboardEvent) => {
        if(event.type === 'keydown'){
            this.keyDown(event);
            this.input[event.key] = true;
        }
        if(event.type === 'keyup'){
            this.keyUp(event);
            this.input[event.key] = false;
        }
    }
    mouseHandler = (event: MouseEvent) => {
        console.log(event);
        if(event.type === 'mousedown'){
            this.mouseDown(event);
            this.input["mouse"] = true;
        }
        if(event.type === 'mouseup'){
            this.mouseUp(event);
            this.input["mouse"] = false;
        }
    }

    // Define this method to create logic surrounding key down events
    keyDown(event: KeyboardEvent){}
    // Define this method to create logic surrounding key up events
    keyUp(event: KeyboardEvent){}
    // Define this method to create logic surrounding mouse down events
    mouseDown(event: MouseEvent){}
    // Define this method to create logic surrounding mouse up events
    mouseUp(event: MouseEvent){}
    readonly listener = e => this.inputHandler(e);
    show(){
        document.addEventListener('keydown', this.inputHandler);
        document.addEventListener('keyup', this.inputHandler);
        document.addEventListener('mousedown', this.mouseHandler);
        document.addEventListener('mouseup', this.mouseHandler);
    }
    update(deltaTime: number){};
    hide(){
        document.removeEventListener('keydown', this.inputHandler);
        document.removeEventListener('keyup', this.inputHandler);
        document.removeEventListener('mousedown', this.mouseHandler);
        document.removeEventListener('mouseup', this.mouseHandler);
    }
}
