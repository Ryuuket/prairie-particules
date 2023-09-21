import { Circle } from "./Circle";

export function drawMoving(ctx: CanvasRenderingContext2D, cercle: Circle){
    ctx.beginPath();
    ctx.fillStyle = "#ff0000";
    ctx.moveTo(cercle.posx, cercle.posy);
    ctx.arc(cercle.posx, cercle.posy, cercle.rad, 0, Math.PI * 2);
    console.log(cercle.pha);
    if(cercle.pha == 0){
        if(cercle.posx >= cercle.limith){
            cercle.pha = 1;
        }
        cercle.posx++;
    } else {
        if(cercle.posx <= cercle.limitb){
            cercle.pha = 0;
        }
        cercle.posx--;
    }
    ctx.fill();
}