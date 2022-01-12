import {Camera, GameScreen, Sprite, SpriteSheet} from "./engine";

export class Game{
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    private lastRender: number;
    sheet: SpriteSheet;
    camera: Camera;
    defaultScreen: GameScreen;
    screen: GameScreen;
    input = {
    }

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.lastRender = 0;
        this.canvas.height = 800;
        this.canvas.width = 800;
        //this.canvas.width = 1344;
        //this.canvas.height = 768;
        this.camera = new Camera(0, 0, this);
        this.defaultScreen = new GameScreen(this);
        this.screen = this.defaultScreen;
    }
    
    // Runs once per game loop cycle, 60fps by default
    update(deltaTime: number){}
    // Runs on keyboard events to keep internal tracking accurate
    inputEvent(input: inputEvent){
        let {type, event} = input;
        if(type === 'keydown'){
            this.input[event.key] = true;
        }
        if(type === 'keyup'){
            this.input[event.key] = false;
        }
    }
    // Define this method to create logic surrounding key down events
    keyDown(input: KeyboardEvent){}
    // Define this method to create logic surrounding key up events
    keyUp(input: KeyboardEvent){}
    private loop(timestamp){
        let deltaTime: number = timestamp - this.lastRender;
        this.screen.update(deltaTime);



        this.lastRender = timestamp;
        requestAnimationFrame((timestamp)=>this.loop(timestamp/1000));
    }
    // Initiates the game loop
    init(){
        requestAnimationFrame((timestamp)=>this.loop(timestamp/1000));
        document.addEventListener('keydown', (e) => {
            this.inputEvent({type: 'keydown', event: e});
            this.keyDown(e);
        })
        document.addEventListener('keyup', (e) => {
            this.inputEvent({type: 'keyup', event: e});
            this.keyUp(e);
        })
    }
    
    // Sets the game's screen, runs your current screens Hide() method and your new screens Show() method
    setScreen(screen: GameScreen){
        this.screen.hide();
        this.screen = screen;
        this.screen.show();
    }
    
    // Draws a rectangle of a given color, position, and dimensions
    rect(color: string, x: number, y: number, width: number, height: number){
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x-this.camera.offsetX, y-this.camera.offsetY, width, height);
    }
    // Clears the screen to a given color
    clear(color?: string){
        this.ctx.fillStyle = color || "white";
        this.ctx.fillRect(0,0, this.canvas.width, this.canvas.height);
    }
    // Draws a Sprite object to the screen at its stored position
    sprite(sprite: Sprite){
        if(sprite.type == "IMAGE") {
            this.ctx.drawImage(sprite.img, this.canvas.width / 2 - sprite.img.width / 2, this.canvas.height / 2 - sprite.img.height / 2);
        }else if(sprite.type == "SHEET"){
            this.sSprite(sprite.index, sprite.getX(), sprite.getY());
        }
    }
    // Draws the sprite of the given index from the sprite sheet
    sSprite(index: number, xC: number, yC: number){
        if(this.sheet != null){
            let {x, y} = this.sheet.index(index);
            this.ctx.drawImage(this.sheet.img,x*this.sheet.spriteSize,y*this.sheet.spriteSize, this.sheet.spriteSize, this.sheet.spriteSize, xC-this.camera.offsetX, yC-this.camera.offsetY, this.sheet.spriteSize,this.sheet.spriteSize);
        }else{
            console.log("no sheet");
        }
    }
    


}

interface inputEvent{
    type: string;
    event: KeyboardEvent;
}