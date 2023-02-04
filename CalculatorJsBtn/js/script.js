var oper;
var valor = '';
var result = document.querySelector("#resultAccount");

function btn1() {
    valor = valor + "1";
    result.innerHTML = valor;
}

function btn2() {
    valor = valor + "2";
    result.innerHTML = valor;

}

function btn3() {
    valor = valor + "3";
    result.innerHTML = valor;
}

function btn4() {
    valor = valor + "4";
    result.innerHTML = valor;
}

function btn5() {
    valor = valor + "5";
    result.innerHTML = valor;
}

function btn6() {
    valor = valor + "6";
    result.innerHTML = valor;
}

function btn7() {
    valor = valor + "7";
    result.innerHTML = valor;
}

function btn8() {
    valor = valor + "8";
    result.innerHTML = valor;
}

function btn9() {
    valor = valor + "9";
    result.innerHTML = valor;
}

function btn0() {
    valor = valor + "0";
    result.innerHTML = valor;
}

function calc() {
    if (oper == "sub") {
        var result = document.querySelector("#resultAccount");
        valorDois = valor;
        rsu = parseInt(valorUm) - parseInt(valorDois);
        result.innerHTML = rsu;
    }

    if (oper == "soma") {
        var result = document.querySelector("#resultAccount");
        valorDois = valor;
        rsu = parseInt(valorUm) + parseInt(valorDois);
        result.innerHTML = rsu;
    }


    if (oper == "div") {
        var result = document.querySelector("#resultAccount");
        valorDois = valor;
        rsu = parseInt(valorUm) / parseInt(valorDois);
        result.innerHTML = rsu;
    }
    if (oper == "mult") {
        var result = document.querySelector("#resultAccount");
        valorDois = valor;
        rsu = parseInt(valorUm) * parseInt(valorDois);
        result.innerHTML = rsu;
    }

    if (oper == "pow") {
        var result = document.querySelector("#resultAccount");
        valorDois = valor;
        rsu = Math.pow(parseInt(valorUm), parseInt(valorDois));
        result.innerHTML = rsu;
        
    }
}

function sub() {
    oper = "sub";
    valorUm = valor;
    valor = '';
}

function soma() {
    oper = "soma";
    valorUm = valor;
    valor = '';
}

function div() {
    oper = "div";
    valorUm = valor;
    valor = '';
}

function mult() {
    oper = "mult";
    valorUm = valor;
    valor = '';
}

function pow() {
    oper = "pow";
    valorUm = valor;
    valor = '';
}

function clearCalc(){
    oper;
    valor = '';
    var result = document.querySelector("#resultAccount");
    result.innerHTML = " ";
}