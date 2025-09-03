// Coletando os dados via prompt
const nome = prompt("Digite seu nome:");
const rg = prompt("Digite seu RG:");
const cpf = prompt("Digite seu CPF:");
const idade = prompt("Digite sua idade:");

// Exibindo os dados na tela
const resultado = document.getElementById("resultado");

resultado.innerHTML = `
    <h3>Dados Informados:</h3>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>RG:</strong> ${rg}</p>
    <p><strong>CPF:</strong> ${cpf}</p>
    <p><strong>Idade:</strong> ${idade} anos</p>
`;
