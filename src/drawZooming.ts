import { Circle } from "./Circle";

export function drawZooming(ctx: CanvasRenderingContext2D, cercle: Circle){
    ctx.beginPath();
    ctx.fillStyle = "#ff0000";
    ctx.moveTo(cercle.posx, cercle.posy);
    ctx.arc(cercle.posx, cercle.posy, cercle.rad, 0, Math.PI * 2);
    if(cercle.pha == 0){
        if(cercle.rad >= cercle.limith){
            cercle.pha = 1;
        }
        cercle.rad++;
    } else {
        if(cercle.rad <= cercle.limitb){
            cercle.pha = 0;
        }
        cercle.rad--;
    }
    ctx.fill();
}