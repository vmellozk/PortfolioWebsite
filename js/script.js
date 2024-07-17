document.addEventListener('DOMContentLoaded', () => {
    const fields = [
        { id: 'message', maxLength: 500, counterId: 'charCounter' },
    ];

    fields.forEach(field => {
        const inputElement = document.getElementById(field.id);
        const counterElement = document.getElementById(field.counterId);

        inputElement.addEventListener('input', () => {
            const remaining = field.maxLength - inputElement.value.length;

            // Adicionando uma trava após chegar ao limite dos caracteres
            if (inputElement.value.length > field.maxLength) {
                inputElement.value = inputElement.value.slice (0, field.maxLength);
            }

            counterElement.textContent = `${remaining >=0? remaining:0} caracteres restantes`;
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const textareas = document.querySelectorAll('textarea');

    function adjustHeight(el) {
        el.style.height = 'auto';
        el.style.height = `${el.scrollHeight}px`;
    }

    textareas.forEach(textarea => {
        textarea.addEventListener('input', () => adjustHeight(textarea));
        adjustHeight(textarea);
    });
});