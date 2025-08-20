let tarefas = []

function adicionarTarefa(){
    let tarefa = document.getElementById("nova-tarefa").value

    if (tarefa){
        //adicionando item A LISTA
        tarefas.push(tarefa)
        exibeTarefas()
        tarefa =   ""
    }

}

console.log(tarefas);


function exibeTarefas(){
    let listaTarefas = document.getElementById("lista-tarefas")
    listaTarefas.innerHTML = ""

// percorre a lista
    tarefas.forEach((tarefa) => {
// criando uma tag html dentro do javaScript
        let li = document.createElement("li")
        li.innerHTML = tarefa
        listaTarefas.appendChild(li)

    })

}