import { Circle } from "./Circle";
import { drawBack } from "./drawBack";
import { drawCircling } from "./drawCircling";
import { drawMoving } from "./drawMoving";
import { drawRandColor } from "./drawRandColor";
import { drawZooming } from "./drawZooming";
import "./style.css";

const canvas = document.querySelector<HTMLCanvasElement>("#particules-canvas")!;

const ctx = canvas.getContext("2d")!;

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
let poscerc1: Circle = {posx: 50, posy: 50, col: "#FF0000", rad: 50, pha: 0, limith: width / 2, limitb: 50};
let poscerc2: Circle = {posx: width-50, posy: 50, col: "#FF0000", rad: 50, pha: 0, limith: 0, limitb: 0};
let poscerc3: Circle = {posx: width-100, posy: height-100, col: "#FF0000", rad: 50, pha: 0, limith: 100, limitb: 20};
let poscerc4: Circle = {posx: 150, posy: height-50, col: "#FF0000", rad: 50, pha: 0, limith: 250, limitb: 50};
setInterval(draw, 200);

function draw(){
    drawBack(ctx, width, height);
    drawMoving(ctx, poscerc1);
    drawRandColor(ctx, poscerc2);
    drawZooming(ctx, poscerc3);
    drawCircling(ctx, poscerc4, width, height);
}
