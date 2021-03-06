let colaboradores = [
    {
        nome: "Pedro"
    },
    {
        nome: "Ana"
    },
    {
        nome: "Leandro"
    }
];

let mensagem = document.querySelector("span");
let btAdd = document.querySelector("#btAdd");

btAdd.addEventListener("click", () => {
    let campoNome = document.querySelector("#txtColab");
    let nomeColab = campoNome.value;

    // Adiciona como prmeiro item do array um colaborador com nome
    colaboradores.unshift(
        {
            nome: nomeColab
        }
    );

    campoNome.value = " ";

    // Exibir mensagem de confirmação
    setTimeout(() => {
        mensagem.classList.remove("ocultar");
        mensagem.innerHTML = "Colaborador adicionado!";
    }, 500);

    // Exibe no console as semanas e os nomes
    defineSemanas(colaboradores);

    // Ocultar a mensagem de confirmação e faz a listagem das semanas com os nomes
    setTimeout(() => { mensagem.classList.add("ocultar"); }, 2000);

    listarSemanas(colaboradores);

});

let btExibir = document.querySelector("#btExibir");

btExibir.addEventListener("click", () => {
    setTimeout(() => { listarSemanas(colaboradores); }, 300);
});

function defineSemanas(colaboradores) {
    console.log("Definindo semana e colaborador...");
    for (var i = 0; i < colaboradores.length; i++) {
        console.log("Semana: " + (i + 1) + ", colaborador: " + colaboradores[i].nome);
    }
};

let lista = document.querySelector("ol");

function listarSemanas(colaboradores) {
    console.log("Listando as semanas...")
    lista.innerHTML = ''
    colaboradores.forEach((colab) => {
        let item = document.createElement("li");
        item.textContent = `Semana > ${colab.nome}`;
        lista.appendChild(item);
    })
};

function adiarColaborador(colaboradores){
    console.log("Adiando semana do coloborador...");
    let posicao = colaboradores.indexOf(colaboradores[1]); // Pega a posição do colab antes de remove-lo com o splice
    let removido = colaboradores.splice(1,1); // remove o colab e guarda na variavel
    colaboradores.splice(posicao+1,0, {nome:removido[0].nome}); 
    listarSemanas(colaboradores);
}
