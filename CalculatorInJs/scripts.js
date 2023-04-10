/**
 * Esta função serve para mudar o sinal da equação, apenas visual
 */

function sinalDeEquacao() {
  const section = document.querySelector("#selecao").value;

  if (section == "soma") {
    let label = (document.querySelector("label").innerHTML = "+");
  }
  if (section == "divisao") {
    let label = (document.querySelector("label").innerHTML = "/");
  }
  if (section == "subtracao") {
    let label = (document.querySelector("label").innerHTML = "-");
  }
  if (section == "multiplicacao") {
    let label = (document.querySelector("label").innerHTML = "*");
  }
}

/**
 * Esta função realiza o calculo
 */

function calcular() {
  let resultado = (document.querySelector("#res").innerHTML = "");

  const section = document.querySelector("#selecao").value;

  const valorUm = document.getElementById("valorUm").value;

  const valorDois = document.querySelector("#valorDois").value;

  if (valorDois == "" && valorUm == "") {
    resultado = document.querySelector("#res").innerHTML =
      "Por favor, insira um valor!";
  }

  if (section == "soma") {
    var result = parseInt(valorUm) + parseInt(valorDois);
  }

  if (section == "divisao") {
    var result = parseInt(valorUm) / parseInt(valorDois);
  }

  if (section == "subtracao") {
    var result = parseInt(valorUm) - parseInt(valorDois);
  }

  if (section == "multiplicacao") {
    var result = parseInt(valorUm) * parseInt(valorDois);
  }

  if (valorDois != "" && valorUm != "") {
    resultado = document.querySelector("#res");

    let resultado2 = document.createTextNode(result);

    resultado.appendChild(resultado2);
  }
}

/**
 * Esta função converte a quantia em dólares
 */

function converter() {
  let resultConvert = (document.querySelector("#res2").innerHTML = "");

  let reais = document.querySelector("#reais").value;

  let conversao = reais / 5.05;

  resultConvert = document.querySelector("#res2");

  let resultConvert2 = document.createTextNode(
    "Você possui " + conversao + " Dólares"
  );

  resultConvert.appendChild(resultConvert2);
}

let aux = 0;

function trocarDeCor() {
  let bgBody = document.querySelector("body");
  let form = document.querySelector("#form-light");
  aux++;
  if (aux == 1) {
    bgBody.setAttribute("style", "background:black;");
    form.setAttribute("id", "form-night");
  }

  if (aux == 2) {
    form = document.querySelector("#form-night");
    bgBody.setAttribute("style", "background:white;");
    form.setAttribute("id", "form-light");
    aux = 0;
  }
}
