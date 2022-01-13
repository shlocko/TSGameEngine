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
    
    // Define this method to create logic surrounding key down events
    keyDown(event: KeyboardEvent){}
    // Define this method to create logic surrounding key up events
    keyUp(event: KeyboardEvent){}
    readonly listener = e => this.inputHandler(e);
    show(){
        document.addEventListener('keydown', this.inputHandler);
        document.addEventListener('keyup', this.inputHandler);
    }
    update(deltaTime: number){};
    hide(){
        document.removeEventListener('keydown', this.inputHandler);
        document.removeEventListener('keyup', this.inputHandler);
    }
}