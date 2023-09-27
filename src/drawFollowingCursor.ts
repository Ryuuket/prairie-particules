/*import { Circle } from "./Circle";

export function drawFollowingCursor(ctx: CanvasRenderingContext2D, cercle: Circle, width: number, height: number){
    ctx.beginPath();
    ctx.fillStyle = "#ff0000";
    ctx.moveTo(cercle.posx, cercle.posy);
    ctx.arc(cercle.posx, cercle.posy, cercle.rad, 0, Math.PI * 2);
    ctx.translate(150, height-150);
    ctx.rotate(Math.PI / 360);
    ctx.translate(-150, 50-height);
    switch(cercle.pha){
        case 0: {
            if(cercle.posx <= cercle.limitb){
                cercle.pha = 1;
            }
            cercle.posx--;
            cercle.posy--;
            break;
        }
        case 1: {
            if(cercle.posy <= cercle.limith){
                cercle.pha = 2;
            }
            cercle.posx++;
            cercle.posy--;
            break;
        }
        case 2: {
            if(cercle.posx <= cercle.limith){
                cercle.pha = 3;
            }
            cercle.posx++;
            cercle.posy++;
            break;
        }
        case 3: {
            if(cercle.posy <= cercle.limith){
                cercle.pha = 0;
            }
            cercle.posx--;
            cercle.posy++;
            break;
        }
    }
    ctx.fill();
}*/