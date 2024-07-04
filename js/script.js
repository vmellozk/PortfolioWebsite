document.addEventListener('DOMContentLoaded', function() {
    const readMoreButton = document.querySelector('.read-more');
    const overlayContent = document.querySelector('.overlay1-content');

    readMoreButton.addEventListener('click', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        if (overlayContent.style.display === 'none' || overlayContent.style.display === '') {
            overlayContent.style.display = 'block';
        } else {
            overlayContent.style.display = 'none';
        }
    });
});
