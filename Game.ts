import {Camera, Sprite, SpriteSheet} from "./engine";

export class Game{
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    private lastRender: number;
    sheet: SpriteSheet;
    camera: Camera;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.lastRender = 0;
        this.canvas.height = 800;
        this.canvas.width = 800;
        //this.canvas.width = 1344;
        this.camera = new Camera(0, 0, this);
    }

    // Runs once per game loop cycle, 60fps by default
    update(deltaTime: number){}
    // Runs once per game loop cycle, 60fps by default
    draw(){}
    private loop(timestamp){
        let deltaTime: number = timestamp - this.lastRender;
        this.update(deltaTime);
        this.draw();



        this.lastRender = timestamp;
        requestAnimationFrame((timestamp)=>this.loop(timestamp/1000));
    }
    // Initiates the game loop
    init(){
        requestAnimationFrame((timestamp)=>this.loop(timestamp/1000));

    }
    // Draws a rectangle of a given color, position, and dimensions
    rect(color: string, x: number, y: number, width: number, height: number){
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x-this.camera.offsetX, y-this.camera.offsetY, width, height);
    }
    // Clears the screen to a given color
    clear(color: string){
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0,0, this.canvas.width, this.canvas.height);
    }
    // Draws a Sprite object to the screen at its stored position
    sprite(sprite: Sprite){
        this.ctx.drawImage(sprite.img, this.canvas.width/2-sprite.img.width/2, this.canvas.height/2-sprite.img.height/2);
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