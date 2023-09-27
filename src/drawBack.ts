// Une fonction qui dessine un rectangle en fond et efface les positions précédentes des cercles.
export function drawBack(canvas: HTMLCanvasElement, width: number, height: number, pha: boolean){
    const ctx = canvas.getContext("2d")!; // On recrée le contexte 2D pour récupérer les dimensions de l'écran.
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); // On nettoie le rectangle.
    if(!pha){ // Si on n'a pas encore cliqué,
        ctx.fillStyle = "#def3fa"; // on affiche un fond bleu pâle.
    } else {
        ctx.fillStyle = "#ffffff"; // Sinon, on affiche un fond blanc.
    }
    ctx.fillRect(0, 0, width, height); // On remplit le rectangle en fond de fenêtre.
}