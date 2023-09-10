document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(event) {
        event.preventDefault(); // Evite o envio do formulário padrão

        // Obtenha o valor do campo "Número máximo"
        let numeroMaximoInput = document.getElementById('numero-maximo');
        let numeroMaximo = parseInt(numeroMaximoInput.value);

        if (isNaN(numeroMaximo) || numeroMaximo <= 0) {
        } else {
            let numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1;
            document.getElementById('resultado-valor').innerText = numeroAleatorio;
            document.querySelector('.resultado').style.display = 'block';
        }
    });
});
