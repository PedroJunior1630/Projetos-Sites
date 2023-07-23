
var num1 = document.getElementById("num1-tela");
var num2 = document.getElementById("num2-tela");
var operador = document.getElementById("operador-tela");

var n1 = num1.innerText;
var n2 = num2.innerText;
var op = operador.innerText;

function mudaNum(num)
{   
    var operador = document.getElementById("operador-tela");
    var op = operador.innerText;
    if (op != "")
    {
        var digito_dois = num;
        document.getElementById("num2-tela").textContent = num; 
    }
    else
    {
        var digito_um = num;
        document.getElementById("num1-tela").textContent = num;
    }
    
}

function mudaCal(operador)
{
    document.getElementById("operador-tela").textContent = operador;
}

function mudaTudo()
{
    document.getElementById("num1-tela").textContent = "";
    document.getElementById("num2-tela").textContent = "";
    document.getElementById("operador-tela").textContent = "";
    document.getElementById("resultado").textContent = "";
}

function retornaOperador(operador)
{
    document.getElementById("operador-tela").textContent = operador;
}

function retornaCalculo()
{
    var num1 = document.getElementById("num1-tela");
    var num2 = document.getElementById("num2-tela");
    var operador = document.getElementById("operador-tela");

    var n1 = num1.innerText;
    var n2 = num2.innerText;
    var op = operador.innerText;


    if (op === "+")
    {
        var soma = parseInt(n1) + parseInt(n2);
        document.getElementById("resultado").textContent = soma;
        document.getElementById("num1-tela").textContent = "";
        document.getElementById("num2-tela").textContent = "";
        document.getElementById("operador-tela").textContent = "";
    }

    if (op === "x")
    {
        var mult = parseInt(n1) * parseInt(n2);
        document.getElementById("resultado").textContent = mult;
        document.getElementById("num1-tela").textContent = "";
        document.getElementById("num2-tela").textContent = "";
        document.getElementById("operador-tela").textContent = "";
    }

    if (op === "/")
    {
        var div = parseInt(n1) / parseInt(n2);
        document.getElementById("resultado").textContent = div;
        document.getElementById("num1-tela").textContent = "";
        document.getElementById("num2-tela").textContent = "";
        document.getElementById("operador-tela").textContent = "";
    }

    if (op === "-")
    {
        var menos = parseInt(n1) - parseInt(n2);
        document.getElementById("resultado").textContent = menos;
        document.getElementById("num1-tela").textContent = "";
        document.getElementById("num2-tela").textContent = "";
        document.getElementById("operador-tela").textContent = "";
    }

    if (op === "²")
    {
        var quadrado = parseInt(n1) ** 2;
        document.getElementById("resultado").textContent = quadrado;
        document.getElementById("num1-tela").textContent = "";
        document.getElementById("num2-tela").textContent = "";
        document.getElementById("operador-tela").textContent = "";
    }

    if (op === "√")
    {
        var raiz = parseInt(n2) ** (1/2);
        document.getElementById("resultado").textContent = raiz.toFixed(2);
        document.getElementById("num1-tela").textContent = "";
        document.getElementById("num2-tela").textContent = "";
        document.getElementById("operador-tela").textContent = "";
    }
}

function mudaDel(parametro)
{
    var num1 = document.getElementById("num1-tela");
    var num2 = document.getElementById("num2-tela");
    var operador = document.getElementById("operador-tela");

    var n1 = num1.innerText;
    var n2 = num2.innerText;
    var op = operador.innerText;

    if(n2 != "" && op != "" && n2 != "")
    {
        document.getElementById("num2-tela").textContent = "";
    }

    if(n2 === "" && op != "" && n1 != "")
    {
        document.getElementById("operador-tela").textContent = "";
    }

    if(n2 === "" && op === "" && n1 != "")
    {
        document.getElementById("num1-tela").textContent = "";
    }
}
