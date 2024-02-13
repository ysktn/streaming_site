function validateForm() {
    // Récupérer la valeur de l'adresse e-mail
    var emailInput = document.getElementById('email');
    var emailValue = emailInput.value;

    // Expression régulière pour valider une adresse e-mail simple
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Vérifier si l'adresse e-mail est valide
    if (!emailRegex.test(emailValue)) {
        // Afficher un message d'erreur
        var errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Adresse e-mail invalide.';
        // Empêcher l'envoi du formulaire
        return false;
    }

    // Réinitialiser le message d'erreur s'il était affiché précédemment
    document.getElementById('Invalid mail or password').textContent = '';

    // Si tout est valide, permettre l'envoi du formulaire
    return true;
}
