const formulario = document.getElementById('formulario');
const nome = document.getElementById('nome');
const error = document.getElementById('error');

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Valida o campo nome
    if (name.value === "") {
        error.textContent = "Por favor, preencha o campo nome.";
        error.style.color = 'red';
    } else {
        error.textContent = "Formulário enviado com sucesso!";
        error.style.backgroundColor = 'green';
        error.style.color = 'white';
    }
});