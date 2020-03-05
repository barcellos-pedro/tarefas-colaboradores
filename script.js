let colaboradores = [];

let mensagem = document.querySelector("span");
let btAdd = document.querySelector("#btAdd");

btAdd.addEventListener("click", function () {
    //preciso inserir os objetos, cada objeto será uma pessoa com seus atributos, nome, idade, dtadimissao, status, ferias
    //aqui vai codigo do cesar
    let campoNome = document.querySelector("#txtColab");
    let nomeColab = campoNome.value;

    colaboradores.unshift(
        {
            nome: nomeColab
        }
    );

    campoNome.value = " ";

    setTimeout(()=>{
        mensagem.classList.remove("ocultar");
        mensagem.innerHTML = "Colaborador adicionado!";
    }, 500);


    defineSemanas(colaboradores);

    setTimeout(()=>{ mensagem.classList.add("ocultar"); }, 2000);
});

function defineSemanas(colaboradores) {
    console.log("Definindo semana e colaborador");
    for (var i = 0; i < colaboradores.length; i++) {
        console.log("Semana: " + (i + 1) + ", colaborador: " + colaboradores[i].nome);
    }
};
