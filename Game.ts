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


    update(deltaTime: number){}
    draw(){}
    loop(timestamp){
        let deltaTime: number = timestamp - this.lastRender;
        this.update(deltaTime);
        this.draw();



        this.lastRender = timestamp;
        requestAnimationFrame((timestamp)=>this.loop(timestamp/1000));
    }

    rect(color: string, x: number, y: number, width: number, height: number){
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x-this.camera.offsetX, y-this.camera.offsetY, width, height);
    }

    clear(color: string){
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0,0, this.canvas.width, this.canvas.height);
    }

    init(){
        requestAnimationFrame((timestamp)=>this.loop(timestamp/1000));

    }

    sprite(sprite: Sprite){
        this.ctx.drawImage(sprite.img, this.canvas.width/2-sprite.img.width/2, this.canvas.height/2-sprite.img.height/2);
    }

    sSprite(index: number, xC: number, yC: number){

        if(this.sheet != null){
            let {x, y} = this.sheetCoord(index);
            this.ctx.drawImage(this.sheet.img,x*this.sheet.spriteSize,y*this.sheet.spriteSize, this.sheet.spriteSize, this.sheet.spriteSize, xC-this.camera.offsetX, yC-this.camera.offsetY, this.sheet.spriteSize,this.sheet.spriteSize);
        }else{
            console.log("no sheet");
        }
    }
    sheetCoord(index: number){
        let x, y: number;
        if(index >= this.sheet.width){
            x = (index % this.sheet.width);
            y = Math.floor(index/this.sheet.width);
        }else{
            x = index;
            y = 0;
        }
        return {x: x, y: y};
    }


}