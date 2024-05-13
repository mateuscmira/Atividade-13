function numeros() {

    var numero1 = parseInt(document.getElementById("num1").value);
    var numero2 = parseInt(document.getElementById("num2").value);

    if (numero1 === "" || numero2 === "" || isNaN(numero1) || isNaN(numero2)) {
        alert("Insira válores válidos.");
        return;
    }

    var num1 = parseInt(numero1);
    var num2 = parseInt(numero2);

    var diferenca = num1 - num2;

    var resultado1 = (2 * numero1) + (3 * numero2);

    var multiplicacao = numero1 * numero2;

    var mensagem =
        "A diferença entre as duas variáveis é: " + diferenca + "<br>"+ "<br>" +
        "O dobro da primeira mais o triplo da segunda é: " + resultado1 + "<br>" + "<br>"+
        "A multiplicação dos números resulta em: " + multiplicacao;

        document.getElementById("resultado").innerHTML = mensagem; 

    if (num1 > num2) {
        maiorParaMenor = "Número 1: " + numero1 + "<br>" + "Número 2: " + numero2;
    } else {
        maiorParaMenor = "Número 2: " + numero2 + "<br>" + "Número 1: " + numero1;
    }

    mensagem +="<br><br>" + "Números do maior para o menor: " + "<br>" + maiorParaMenor;

    document.getElementById("resultado").innerHTML = mensagem;
}