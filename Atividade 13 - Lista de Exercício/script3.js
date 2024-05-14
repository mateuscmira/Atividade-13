function desconto(){
    var nome2 = document.getElementById("nome2").value;
    var salarioBruto2 = parseFloat(document.getElementById("bruto2").value);
    var inss;

    if (salarioBruto2<= 1000){
        inss = 0.08;
    }
    else if (salarioBruto2 > 1000 && salarioBruto2 <=1500) {
        inss = 0.085;
    }
    else{
        inss = 0.09;
    }
    descontoDoInss = salarioBruto2 * inss;
    salarioLiquido2 = salarioBruto2 - descontoDoInss;

    var resultadoDescontos = 
    "O seu nome é " + nome2 + "<br>" +
    "O salário bruto é R$" + salarioBruto2.toFixed(2) + "<br>" +
    "O salário descontado em decimais é " + inss.toFixed(3)+ "<br>"+
    "O valor de desconto do INSS é R$" + descontoDoInss.toFixed(2) + "<br>" +
    "O salário líquido é R$" + salarioLiquido2.toFixed(2);

    document.getElementById("resultadoDescontos").innerHTML = resultadoDescontos;
}