document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('validation-form');
    var resultMessage = document.getElementById('result-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var fieldA = parseFloat(document.getElementById('fieldA').value);
        var fieldB = parseFloat(document.getElementById('fieldB').value);

        if (fieldB > fieldA) {
            resultMessage.textContent = 'Formulário válido! 🎉';
            resultMessage.style.color = 'green';
        } else {
            resultMessage.textContent = 'Número B deve ser maior que o número A. ❌';
            resultMessage.style.color = 'red';
        }
    });
});