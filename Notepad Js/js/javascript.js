// Select input

input = document.querySelector("input");

input.addEventListener("keydown", function (e) {
  if (e.keyCode == 13) {
    var text = input.value;
    if (text.length == 0) {
      alert("Please put a text!");
    }
    var tasks = document.querySelector(".tasks");
    var activity = document.createElement("div");
    var campText = document.createElement("p");

    campText.setAttribute("class", "texto-tarefa");
    activity.appendChild(campText);
    activity.setAttribute("id", "tarefas-anotada");

    var buttonDelete = document.createElement("button");
    buttonDelete.setAttribute("onclick", "deleteFunction()");
    buttonDelete.setAttribute("class", "btnExcluir");

    var btnEditar = document.createElement("button");
    btnEditar.setAttribute("onclick", "concluir()");
    btnEditar.setAttribute("class", "btnEditar ");

    activity.appendChild(btnEditar);
    activity.appendChild(buttonDelete);
    campText.innerHTML = text;
    activity.appendChild(campText);
    tasks.appendChild(activity);
  }
});

/**
 * This function deletes tasks
 */

function deleteFunction() {
  var tarefasAnotadas = document.querySelector("#tarefas-anotada");
  tarefasAnotadas.parentNode.removeChild(tarefasAnotadas);
}

function concluir() {
  var taf = document.getElementById("tarefas-anotada");
  var taf2 = (taf.style.cssText = "text-decoration: line-through; color:gray;");
}
