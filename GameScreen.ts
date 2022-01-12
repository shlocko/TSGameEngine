import {Game} from './engine';

export class GameScreen{
    game: Game;
    
    constructor(game: Game) {
        this.game = game;
    }
    
    show(){}
    update(deltaTime: number){this.game.update(deltaTime)};
    hide(){}
}