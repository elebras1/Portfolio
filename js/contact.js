// Sélectionne tous les conteneurs de lien de contact
const contactLinks = document.querySelectorAll('.contact_link');

// Fonction pour ajouter une lettre à la fois
function animateIn(link, text, index, callback) {
    link.textContent = text.substring(0, index + 1);
    if (index < text.length - 1) {
        requestAnimationFrame(() => {
            animateIn(link, text, index + 1, callback);
        });
    } else {
        callback();
    }
}

// Fonction pour supprimer une lettre à la fois
function animateOut(link, linkText, index, callback) {
    link.textContent = linkText.substring(0, linkText.length - index);
    if (index < linkText.length) {
        requestAnimationFrame(() => {
            animateOut(link, linkText, index + 1, callback);
        });
    } else {
        callback();
    }
}

// Parcourt chaque lien et ajoute les gestionnaires d'événements
contactLinks.forEach((linkContainer) => {
    const link = linkContainer.querySelector('span[data-value]');
    const linkText = link.getAttribute('data-value');

    let animationInProgress = false;
    let animationType = ''; // Ajout d'un drapeau pour suivre le type d'animation en cours
    let timeoutId; // ID de temporisation

    linkContainer.addEventListener('mouseenter', () => {
        if (window.innerWidth >= 850 && !animationInProgress) {
            timeoutId = setTimeout(() => {
                animationInProgress = true;
                animationType = 'in'; // Marque l'animation d'ajout en cours
                animateIn(link, linkText, 0, () => {
                    animationInProgress = false;
                });
            }, 100);
        }
    });

    linkContainer.addEventListener('mouseleave', () => {
        clearTimeout(timeoutId); // Annule la temporisation si l'utilisateur quitte avant 300 ms

        if (animationType === 'in') {
            animationInProgress = true;
            animationType = 'out'; // Marque l'animation de suppression en cours
            animateOut(link, linkText, 1, () => {
                animationInProgress = false;
                animationType = ''; // Réinitialise le type d'animation
            });
        }
    });
});






