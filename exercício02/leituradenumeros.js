// Solicitando o número inteiro ao usuário
let numero = parseInt(prompt("Digite um número inteiro:"));

//Calculando a raiz quadrada do número
let raiz = Math.sqrt(numero);

resultado.innerHTML = `
    <h3>Dados Informados:</h3>
    <p><strong>Número inteiro digitado:</strong> ${numero}</p>
    <p><strong>Raiz quadrada desse número:</strong> ${raiz}</p>
`;
