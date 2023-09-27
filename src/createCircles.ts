import { Circle } from "./Circle"; // On importe la classe Circle du dossier.

// Fonction qui crée des cercles de position, couleur et taille aléatoire sur l'écran, 4 par 4.
export function createCircles(ctx: CanvasRenderingContext2D, width: number, height: number){
    for(let i = 0; i < 4; i++){ // Boucle 4 fois.
        // Définition d'une instance de Cercle avec position, couleur et taille aléatoires.
        let cercle = new Circle(Math.random()*width, Math.random()*height, "#" 
        + (Math.random()*0xffffff<<0).toString(16), Math.random()*10 + 10, 0, 0, 0); 
        ctx.beginPath(); // On crée un nouveau chemin.
        ctx.fillStyle = cercle.col; // On récupère la couleur du cercle de cette boucle.
        ctx.arc(cercle.posx, cercle.posy, cercle.rad + 10, 0, Math.PI*2); // On dessine le cercle.
        // tab.push(cercle); // On pousse le cercle dans le tableau.
        ctx.fill(); // On remplit le dessin.
        // console.log("Pos x :" + cercle.posx + ", Pos y :" + cercle.posy + ", Rayon : " + cercle.rad + ",Couleur : " + cercle.col);
    }
    
}