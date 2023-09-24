"use strict"

let nbrFeux=30;
let nbrChangements=0;
let mentalhp=10;

while (nbrFeux>0 && mentalhp>0) {
    nbrFeux--;

    const musiqueJouée = Math.floor(Math.random()* 5) + 1;

    if (musiqueJouée === 3){
        mentalhp--;
        nbrChangements++;
        console.log("La musique jouée à ce feu est Anissa de Wejdene, John change de taxi il lui reste " + nbrFeux + " feux avant d'arriver chez lui. Santé mentale actuelle: " + mentalhp);
    }else if (musiqueJouée === 1){
        console.log("La musique jouée est Another Love de Tom Odell, il lui reste " + nbrFeux + " feu avant d'arriver chez lui.")
    }else if (musiqueJouée === 2){
        console.log("La musique jouée est Shavkat de Freeze Corleone, il lui reste " + nbrFeux + " feu avant d'arriver chez lui.")
    }else if (musiqueJouée === 4){
        console.log("La musique jouée est Lovely de Billie Eilish, il lui reste " + nbrFeux + " feu avant d'arriver chez lui.")
    }else if (musiqueJouée === 5){
        console.log("La musique jouée est Stitches de Shawn Mendes, il lui reste " + nbrFeux + " feu avant d'arriver chez lui.")
    }
}

if (mentalhp===0){
    console.log("EXPLOSION");
}else if (nbrFeux === 0){
    console.log("John a réussi à arriver chez lui, il aura dû changer de taxi " + nbrChangements + " fois.")
}