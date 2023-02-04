function sinalDeEquacao() {
  section = document.querySelector("#selecao").value;

  if (section == "soma") {
    let label = document.querySelector("label").innerHTML = "+";
  }
  if (section == "divisao") {
    let label = document.querySelector("label").innerHTML = "/";
  }
  if (section == "subtracao") {
    let label = document.querySelector("label").innerHTML = "-";
  }
  if (section == "multiplicacao") {
    let label = document.querySelector("label").innerHTML = "*";
  }

}

function calcular() {

  resultado = document.querySelector("#res").innerHTML = "";

  var section = document.querySelector("#selecao").value;

  var valorUm = document.getElementById("valorUm").value;

  var valorDois = document.querySelector("#valorDois").value;

  if (valorDois == '' && valorUm == '') {
    resultado = document.querySelector("#res").innerHTML = "Por favor, insira um valor!";
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

  if (valorDois != '' && valorUm != '') {
    resultado = document.querySelector("#res");

    resultado2 = document.createTextNode(result);

    resultado.appendChild(resultado2);
  }
}


function converter() {
  resultConvert = document.querySelector("#res2").innerHTML = "";

  let reais = document.querySelector("#reais").value;

  conversao = reais / 5.05;


  resultConvert = document.querySelector("#res2");

  resultConvert2 = document.createTextNode("Você possui " + conversao + " Dolares");

  resultConvert.appendChild(resultConvert2);


}

aux = 0;

function trocarDeCor() {

  let bgBody = document.querySelector("body");
  let form = document.querySelector("#form-light");
  console.log("askkasdh")
  aux++;
  if (aux == 1) {
    bgBody.setAttribute("style", "background:black;")
    form.setAttribute("id", "form-night")
  }

  if (aux == 2) {
    form = document.querySelector("#form-night");
    bgBody.setAttribute("style", "background:white;")
    form.setAttribute("id", "form-light")
    aux = 0;
  }
}