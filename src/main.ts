import { Circle } from "./Circle"; // On importe la classe Circle du même dossier.
import { drawBack } from "./drawBack"; // On importe la fonction drawBack du même dossier.
import { createCircles } from "./createCircles"; // On importe la fonction createCircles du même dossier.
import "./style.css"; // On importe le CSS.

// On récupère le canvas du code HTML.
const canvas = document.querySelector<HTMLCanvasElement>("#particules-canvas")!; 

const ctx = canvas.getContext("2d")!; // On récupère le contexte 2D du canvas.

const width = (canvas.width = window.innerWidth); // On définit width comme la largeur de la fenêtre.
const height = (canvas.height = window.innerHeight); // On définit height comme la hauteur de la fenêtre.
let sta = false; // On définit le statut à 0. Cela correspondra à la valeur "N'a pas cliqué."
// const tab: Circle[] = [];
// On déclare et définit un cercle dans chaque coin de l'écran à l'aide du constructeur de la classe.
let cerc1 = new Circle(50, 50, "#00bfff", 50, 0, width / 2, 50); 
let cerc2 = new Circle(width-50, 50, "#000000", 50, 0, 0, 0);
let cerc3 = new Circle(width-100, height-100, "#1e90ff", 50, 0, 100, 20);
let cerc4 = new Circle(50, height-50, "#4682b4 ", 50, 0, 250, 50);
// setInterval(draw, 500);
drawBack(canvas, width, height, sta); // On appelle la fonction drawBack pour peindre l'écran.
setInterval(draw, 50); // On appelle la fonction draw toutes les 50 millisecondes.

// On définit la fonction draw.
function draw(){
    if(!sta){ // Si le statut est à false,
        drawBack(canvas, width, height, sta); // on appelle la fonction drawBack,
        cerc1.drawMoving(ctx); // puis la méthode drawMoving du cercle cerc1,
        cerc2.drawRandColor(ctx); // la méthode drawRandColor du cercle cerc2,
        cerc3.drawZooming(ctx); // et la méthode drawZooming du cercle cerc3.
    } else { // Si le statut est à false,
        createCircles(ctx, width, height); // on appelle la méthode createCircles.
    }
}

// On crée un event listener sur le canvas pour réagir au déplacement du curseur de la souris.
canvas.addEventListener('mousemove', (e) => {
    if(!sta){ // Si le statut est à false,
        cerc4.moveTowardCursor(e, width, height); // On appelle la méthode moveTowardCursor du cercle cerc4.
        ctx.beginPath(); // On crée un nouveau chemin.
        ctx.fillStyle = cerc4.col; // On prend la couleur définie pour le cercle.
        ctx.arc(cerc4.posx, cerc4.posy, cerc4.rad, 0, Math.PI*2); // On crée le cercle.
        ctx.fill(); // On remplit le dessin.
    }
})

// On crée un event listener sur le canvas pour réagir au clic de la souris.
canvas.addEventListener('mousedown', (e) => {
    sta = true; // On change le statut à "A cliqué.".
});
