// Procura o botão no HTML pelo id
const botao = document.getElementById("btnCarregar");
 
// Quando o botão for clicado,
// executa a função carregarBeneficiarios
botao.addEventListener(
    "click",
    carregarBeneficiarios
);
 
// Função responsável por buscar os beneficiários na API
async function carregarBeneficiarios() {
 
    // Faz uma requisição para a API
    const resposta = await fetch(
        "http://localhost:3000/beneficiarios"
    );
 
    // Converte a resposta JSON em objeto JavaScript
    const beneficiarios =
        await resposta.json();
    // Envia os dados para serem exibidos na tela
    renderizarBeneficiarios(
        beneficiarios
    );
}
 
// Função responsável por mostrar os beneficiários na página
function renderizarBeneficiarios(lista) {

    const container = document.getElementById("container");

    container.innerHTML = "";

    // Caso não existam beneficiários
    if (lista.length === 0) {
        container.innerHTML =
            '<p class="sem-dados">Nenhum beneficiário encontrado.</p>';
        return;
    }

    lista.forEach((beneficiario) => {

        const card = document.createElement("div");

        // Aplica a classe do CSS
        card.classList.add("beneficiario");

        card.innerHTML = `
            <h3>${beneficiario.nomeCompleto}</h3>
            <p><strong>CPF:</strong> ${beneficiario.cpf}</p>
            <p><strong>ID:</strong> ${beneficiario.id}</p>
        `;

        container.appendChild(card);
    });
}
 