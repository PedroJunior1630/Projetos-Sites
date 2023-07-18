function msudaNum()
{
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("num-tela").textContent = 12;
    });
}

function mudaNum(num)
{
    var digito_um = num;
    document.getElementById("num-tela").textContent = num;
}

function mudaCal(operador)
{
    document.getElementById("operador-tela").textContent = operador;
}