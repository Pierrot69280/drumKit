window.addEventListener('keydown', (event) => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if (!audio) return; // Arrêtez la fonction si la touche n'a pas de son associé
    audio.currentTime = 0; // Réinitialisez l'audio à zéro pour pouvoir le rejouer immédiatement
    audio.play();
    key.classList.add('playing');
});aa

const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
    key.addEventListener('transitionend', (event) => {
        if (event.propertyName === 'transform') {
            key.classList.remove('playing');
        }
    });
});
