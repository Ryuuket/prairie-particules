import { Circle } from "./Circle";

export function drawRandColor(ctx: CanvasRenderingContext2D, cercle: Circle){
    ctx.beginPath();
    ctx.fillStyle = "#" + (Math.random()*0xffffff<<0).toString(16);
    ctx.moveTo(cercle.posx, cercle.posy);
    ctx.arc(cercle.posx, cercle.posy, cercle.rad, 0, Math.PI * 2);
    ctx.fill();
}