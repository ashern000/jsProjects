var oper;
var valor = "";
const result = document.querySelector("#resultAccount");

function button1() {
  valor = valor + "1";
  result.innerHTML = valor;
}

function button2() {
  valor = valor + "2";
  result.innerHTML = valor;
}

function button3() {
  valor = valor + "3";
  result.innerHTML = valor;
}

function button4() {
  valor = valor + "4";
  result.innerHTML = valor;
}

function button5() {
  valor = valor + "5";
  result.innerHTML = valor;
}

function button6() {
  valor = valor + "6";
  result.innerHTML = valor;
}

function button7() {
  valor = valor + "7";
  result.innerHTML = valor;
}

function button8() {
  valor = valor + "8";
  result.innerHTML = valor;
}

function button9() {
  valor = valor + "9";
  result.innerHTML = valor;
}

function button0() {
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

  if (oper == "sum") {
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
  valor = "";
}

function sum() {
  oper = "sum";
  valorUm = valor;
  valor = "";
}

function div() {
  oper = "div";
  valorUm = valor;
  valor = "";
}

function mult() {
  oper = "mult";
  valorUm = valor;
  valor = "";
}

function pow() {
  oper = "pow";
  valorUm = valor;
  valor = "";
}

function clearCalc() {
  oper;
  valor = "";
  const result = document.querySelector("#resultAccount");
  result.innerHTML = " ";
}
