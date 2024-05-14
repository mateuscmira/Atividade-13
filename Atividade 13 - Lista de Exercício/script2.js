function salario() {
    var nome = document.getElementById("nome").value;
    var salarioBruto = parseFloat(document.getElementById("bruto").value);

    var desconto = salarioBruto * 0.08;
    var salarioLiquido = salarioBruto - desconto;

    var resultadoSalario =
        "O seu nome é " + nome + "<br>" +
        "O salário bruto é R$" + salarioBruto + ",00" + "<br>" +
        "O valor de desconto do INSS é R$" + desconto + ",00" + "<br>" +
        "O salário líquido é R$" + salarioLiquido + ",00";

    document.getElementById("resultadoSalario").innerHTML = resultadoSalario;

    if (salarioBruto === 0) {
        document.getElementById("resultadoSalario").innerHTML = "DESEMPREGADO.";
        return;
    }
}