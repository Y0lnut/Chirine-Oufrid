document.addEventListener('DOMContentLoaded', () => {
    const letters = [
        {
            title: "La Rencontre",
            text: "Chirine, notre rencontre grâce à notre 'ami en commun' a été l'une des meilleures choses qui me soient arrivées ces derniers temps."
        },
        {
            title: "Les Jeux",
            text: "Bon, carrément à cause de moi, on a dû arrêter tellement je te ratatinais aux points. Mettre ta santé mentale en jeu et, au passage, la seule game de Uno que tu as gagnée, je t'avais laissé la victoire pour pas que tu repartes énervée."
        },
        {
            title: "Les Soirées Cinéma",
            text: "Comme deux Golmons, on attendait un câble depuis tout ce temps, juste pour que tu te décides à me dire que tu voulais voir ce film sur l'ordi. Mais bon, t'inquiète pas, j'arrive très vite pour voir ta tête affolée devant un film d'horreur."
        },
        {
            title: "Les Fous Rires",
            text: "Chirine, tu es vraiment la personne avec qui je peux le plus rigoler. On se retrouve comme des golmons à se taquiner et rigoler jusqu'à 4h du matin."
        },
        {
            title: "Les Projets Futurs",
            text: "On a tellement de choses à faire ensemble et on s'aligne sur tellement d'aspects de la vie que le temps en est devenu mon ennemi à cause de l'impatience que j'ai de vieillir avec toi."
        },
        {
            title: "Les Petits Bonheurs",
            text: "Chirine, chaque petit message, surnom, voire même le simple 'bonne nuit' de ta part me suffit pour me laisser un sourire aux lèvres jusqu'à la prochaine interaction que j'aurai avec toi."
        },
        {
            title: "La Complicité",
            text: "On en est au point où je commence à penser que tu recopies ma personnalité pour être moi en fille."
        },
        {
            title: "Les Surprises",
            text: "Fais gaffe, à tout moment je viens te choquer en débarquant sans prévenir, comme ces fleurs que je t'ai offertes."
        },
        {
            title: "Les Singes",
            text: "Sah, je voulais juste parler des singes et du fait qu'à défaut d'en avoir un, j'ai le plaisir de t'avoir à la place."
        },
        {
            title: "Les Avocats",
            text: "J'ai fait un sacré braquage en chopant ma future avocate à frais gratuits pour la prochaine fois que je me ferai choper avec mes cargaisons à la frontière (je suis dans le trafic de ficello)."
        }
    ];

    const letterBox = document.getElementById('letter-box');
    const letterContent = document.getElementById('letter-content');
    const letterTitle = document.getElementById('letter-title');
    const letterText = document.getElementById('letter-text');
    const nextButton = document.getElementById('next-button');
    let currentIndex = 0;

    function showLetter(index) {
        const letter = letters[index];
        letterTitle.textContent = letter.title;
        letterText.textContent = letter.text;
        letterContent.style.opacity = 1;
    }

    nextButton.addEventListener('click', () => {
        letterContent.style.opacity = 0;
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % letters.length;
            showLetter(currentIndex);
        }, 500);
    });

    showLetter(currentIndex);
});
