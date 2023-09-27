export class Circle {
    public posx: number; // Position du cercle sur l'axe des abscisses.
    public posy: number; // Position du cercle sur l'axe des ordonnées.
    public col: string; // Couleur du cercle.
    public rad: number; // Rayon du cercle.
    public pha: number; // Phase du cercle. Sert à changer le comportement du cercle pendant l'animation.
    public limith: number; // Limite haute, permettant le changement vers la seconde phase.
    public limitb: number; // Limite basse, permettant le retour vers la première phase.

    // Constructeur de la classe. Permet l'initialisation d'une instance de la classe.
    constructor(posx: number, posy: number, col: string, rad: number, pha: number, 
        limith: number, limitb: number) {
        this.posx = posx;
        this.posy = posy;
        this.col = col;
        this.rad = rad;
        this.pha = pha;
        this.limitb = limitb;
        this.limith = limith;
    }

    // Comportement d'un cercle se déplaçant de gauche à droite entre le coin et le milieu de l'écran.
    public drawMoving(ctx: CanvasRenderingContext2D){
        ctx.beginPath(); // On crée un nouveau chemin.
        ctx.fillStyle = this.col; // On prend la couleur définie pour le cercle.
        ctx.moveTo(this.posx, this.posy); // On pose le crayon au centre de la position du cercle.
        ctx.arc(this.posx, this.posy, this.rad, 0, Math.PI * 2); //On crée le cercle.
        if(this.pha == 0){ // Si on est dans la première phase du cercle,
            this.posx++; // on décale le centre du cercle d'un pixel vers la droite,
            if(this.posx >= this.limith){ // et si le pixel a atteint la limite haute,
                this.pha = 1; // on passe en seconde phase.
            }
        } else { // Si on est dans la seconde phase du cercle,
            this.posx--; // on déplace le cercle d'un pixel vers la gauche,
            if(this.posx <= this.limitb){ // et si le cercle a atteint la limite basse,
                this.pha = 0; // on repasse en première phase.
            }
        }
        ctx.fill(); // On remplit le dessin.
    }

    // Dessine un cercle d'une couleur aléatoire.
    public drawRandColor(ctx: CanvasRenderingContext2D){
        ctx.beginPath(); // On crée un nouveau chemin.
        ctx.fillStyle = "#" + (Math.random()*0xffffff<<0).toString(16); // On crée une couleur aléatoire
        // en multipliant un nombre entre 0 et 1 et la valeur maximale d'une couleur (ffffff), 
        // puis transforme le résultat du produit en hexadécimal.
        ctx.moveTo(this.posx, this.posy); // On pose le crayon au centre de la position du cercle.
        ctx.arc(this.posx, this.posy, this.rad, 0, Math.PI * 2); // On crée le cercle.
        ctx.fill(); // On remplit le dessin.
    }

    // Comportement d'un cercle qui change de taille
    public drawZooming(ctx: CanvasRenderingContext2D){
        ctx.beginPath(); // On crée un nouveau chemin.
        ctx.fillStyle = this.col; // On prend la couleur définie pour le cercle.
        ctx.moveTo(this.posx, this.posy); // On pose le crayon au centre de la position du cercle.
        ctx.arc(this.posx, this.posy, this.rad, 0, Math.PI * 2); // On crée le cercle.
        if(this.pha == 0){ // Si on est dans la première phase du cercle,
            this.rad++; // on augmente le rayon d'un pixel,
            if(this.rad >= this.limith){ // et si le cercle a atteint la limite haute de son rayon,
                this.pha = 1; // on passe en seconde phase.
            }
        } else { // Si on est dans la seconde phase du cercle, 
            this.rad--; // on diminue le rayon d'un pixel,
            if(this.rad <= this.limitb){ // et si le cercle a atteint la limite basse de son rayon,
                this.pha = 0; // on repasse en première phase.
            }
        }
        ctx.fill(); // On remplit le dessin.
    }

    /* Fonction partiellement dysfonctionnelle visant à déplacer un cercle de manière relativement 
    fluidre vers le curseur. Une fois que le cercle touche le curseur (,actuellement, il faut l'aider),
    le cercle se met à fuir le curseur, à une vitesse dépendant de sa proximité avec lui. Plus
    le curseur est près du cercle, plus le cercle doit fuir rapidement.*/
    public moveTowardCursor(mou: MouseEvent, width: number, height: number): TimerHandler{
        console.log("Move Toward Cursor."); // Affiche "Move Toward Cursor" dans la console.
        if(this.pha == 0){ // Si le cercle n'a pas encore touché le curseur,
            // On déplace le cercle entre sa position actuelle et celle du curseur, 32 fois plus
            // près de sa position que du curseur. 
            this.posx = (31*this.posx + mou.clientX)/32;
            this.posy = (31*this.posy + mou.clientY)/32;
            // Si le cercle est sur le curseur,
            if(Math.round(this.posx) == mou.clientX && Math.round(this.posy) == mou.clientY){
                this.pha = 1; // on change de phase,
                console.log("Too close!") // et on affiche "Too close!" dans la console.
            }
        } else { // Si le cercle a touché le curseur,
            if(this.posx < mou.clientX){ // et si le cercle est à gauche du curseur,
                // on déplace le cercle de 256 pixels vers la gauche, et on divise ce déplacement par
                // la distance qui sépare le cercle du curseur.
                this.posx -= 256/(mou.clientX-this.posx); 
            } else if (this.posx > mou.clientX){ // Si le cercle est à droite du curseur,
                this.posx += 256/(mou.clientX-this.posx); // on déplace le cercle vers la droite.
            }
            if(this.posy < mou.clientY){ // Si le cercle est au dessus du curseur,
                this.posy -= 256/(mou.clientY-this.posy); // on déplace le cercle vers le haut.
            } else if (this.posy > mou.clientY){ // Si le cercle est sous le curseur,
                this.posy += 256/(mou.clientY-this.posy); // on déplace le cercle vers le bas.
            }
            if(this.posx < this.rad){ // Si le cercle sort de l'écran à gauche,
                this.posx = this.rad; // on le ramène dans l'écran.
            } else if (this.posx > width - this.rad){ // S'il sort à droite,
                this.posx = width - this.rad; // on le ramène dans l'écran.
            }
            if(this.posy < this.rad){ // Si le cercle sort de l'écran en haut,
                this.posy = this.rad; // on le ramène dans l'écran.
            } else if (this.posy > height - this.rad){ // S'il sort en bas,
                this.posy = height - this.rad; // on le ramène dans l'écran.
            }
        }
        return "";
    }
}