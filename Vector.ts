export class Vector{
    // Returns the angle, in degrees, between two points
    static deg(x1: number, y1: number, x2: number, y2: number){
        let x3 = x2 - x1;
        let y3 = y2 - y1;
        return Math.atan2(x3,y3)*180/Math.PI;
    }
    // Returns the angle, in radians, between two points
    static rad(x1: number, y1: number, x2: number, y2: number){
        let x3 = x2-x1;
        let y3 = y2-y1;
        return Math.atan2(x3,y3);
    }
    // Returns an object, containing dX and dY, of the change in position in a single frame at a given speed and angle
    static vec(speed: number, angle: number){
        let x = speed * Math.sin(angle);
        let y = speed * Math.cos(angle);
        return {dX: x, dY: y}
    }
}