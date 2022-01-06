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
}