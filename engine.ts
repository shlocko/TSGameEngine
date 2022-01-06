/*export class Game{
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
    
    drawSprite(sprite: Sprite){
        this.ctx.drawImage(sprite.img, this.canvas.width/2-sprite.img.width/2, this.canvas.height/2-sprite.img.height/2);
    }
    
    drawSheet(index: number, xC: number, yC: number){
        
        if(this.sheet != null){
            let {x, y} = this.spriteCoordFromIndex(index);
            this.ctx.drawImage(this.sheet.img,x*this.sheet.spriteSize,y*this.sheet.spriteSize, this.sheet.spriteSize, this.sheet.spriteSize, xC-this.camera.offsetX, yC-this.camera.offsetY, this.sheet.spriteSize,this.sheet.spriteSize);
        }else{
            console.log("no sheet");
        }
    }
    spriteCoordFromIndex(index: number){
        let x, y: number;
        if(index >= this.sheet.width){
            x = (index % this.sheet.width);
            y = Math.floor(index/this.sheet.width);
            //console.log(xS + " " + yS);
        }else{
            x = index;
            y = 0;
            //console.log(xS + " " + yS);
        }
        return {x: x, y: y};
    }
    
    
}*/
/*export class Position{
    x: number;
    y: number;
    constructor(x:number, y: number) {
        this.x = x;
        this.y = y;
        
    }
}*/
/*export class Sprite{
    img: HTMLImageElement;
    private readonly position: Position;
    constructor(path: string, x: number, y: number) {
        this.img = new Image();
        this.img.src = path;
        this.position = new Position(x, y);
    }
    
    setPosition(x: number, y: number){
        this.position.x = x;
        this.position.y = y;
    }
    
    getX(): number{
        return this.position.x;
    }
    
    getY(): number{
        return this.position.y;
    }
    
    getPosition(): Position{
        return this.position;
    }
    
}*/

/*export class SpriteSheet{
    img: HTMLImageElement;
    spriteSize: number;
    width: number;
    height: number;
    constructor(path: string, spriteSize: number, width: number, height: number) {
        this.img = new Image();
        this.img.src = path;
        this.spriteSize = spriteSize;
        this.width = width;
        this.height = height;
        
    }
    
    
}*/

/*export class TileMap{
    width: number;
    height: number;
    
    constructor() {
    }
    
}*/

/*export class Camera{
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
    
}*/

/*
export class Vector{
    static deg(x1: number, y1: number, x2: number, y2: number){
        let x3 = x2 - x1;
        let y3 = y2 - y1;
        return Math.atan2(x3,y3)*180/Math.PI;
    }

    static rad(x1: number, y1: number, x2: number, y2: number){
        let x3 = x2-x1;
        let y3 = y2-y1;
        return Math.atan2(x3,y3);
    }
    
    static vec(speed: number, angle: number){
        let x = speed * Math.sin(angle);
        let y = speed * Math.cos(angle);
        return {dX: x, dY: y}
    }
}*/

import { Game } from './Game';
import { Position } from "./Position";
import { Sprite } from "./Sprite";
import { SpriteSheet } from "./SpriteSheet";
import { TileMap } from "./TileMap";
import { Camera } from "./Camera";
import { Vector } from "./Vector";

export {
    Game,
    Position,
    Sprite,
    SpriteSheet,
    TileMap,
    Camera,
    Vector,
    
}