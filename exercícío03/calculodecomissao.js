// Lê os dados do vendedor
let nome = prompt("Qual o nome do vendedor?");
let salarioFixo = parseFloat(prompt("Digite o salário fixo desse vendedor:"));
let totalVendas = parseFloat(
  prompt("Digite o valor total das vendas desse vendedor:")
);
let percentual = parseFloat(
  prompt("Digite o percentual de comissão por cada venda(%):")
);

// Calcula a comissão e o salário total
let comissao = totalVendas * (percentual / 100);
let salarioTotal = salarioFixo + comissao;

// Exibe os resultados na tela
document.getElementById("resultado").innerHTML = `
    <h3>Resultado:</h3>
    O(a) vendedor(a): <strong>${nome}</strong> <br>
    Receberá os seguintes valores: <br><br>
    Salário Fixo: R$ ${salarioFixo.toFixed(2)} <br>
    Total de Vendas: R$ ${totalVendas.toFixed(2)} <br>
    Comissão (${percentual}%): R$ ${comissao.toFixed(2)} <br>
    <strong>Salário Total: R$ ${salarioTotal.toFixed(2)}</strong>
`;
