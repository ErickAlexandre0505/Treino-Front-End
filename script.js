 let valoresConversao = {
    real: {
        dolar: 0.27,
        euro: 0.18
    },
    dolar: {
        real: 5.03,
        euro: 1.09
    },
    euro: {
        real: 5.47,
        dolar:  0.92
    }
}

valoresConversao["real"]["dolar"][""]

let botaoConverter = document.getElementById("botao-converter");
botaoConverter.addEventListener("click", converter);

let botaoLimpar = document.getElementById("botao-limpar");
botaoLimpar.addEventListener("click", limpar)

let botaoInverter = document.getElementById("botao-inverter");
botaoInverter.addEventListener("click", inverter)

let botaoAceitar = document.getElementById("aceita-mensagem-usuario");
botaoAceitar.addEventListener("click", aceitar)

if(localStorage.getItem("aceitouCookie") == "1"){
    aceitar();
}

function salvaResultadoHistorico(conversao){
    // Adicionar resultado ao array de historico e salvar o array de historico
    let historico = recuperaHistoricoDeConversoes();

    historico.push(conversao);

    let conversaoEmJson = JSON.stringify(historico);
    localStorage.setItem("Historico", historico);

}

function recuperaHistoricoDeConversoes(){
    let historico = localStorage.getItem("historico");

    if(!historico){
        return [];
    }


    let historicoConvertido = JSON.parse(historico);
    return historicoConvertido;

    // Retornar o array com historico de conversões 

    historico.push(historicoConvertido);
    return historicoConvertido;

}

function aceitar(){
    let divMensagemUsuario = document.getElementById("container-mensagem-usuario");
    divMensagemUsuario.classList.add("oculto");
    localStorage.setItem("aceitouCookie", "1")
}


function converter(){
    let valorUsuario = document.getElementById("valor-usuario").value;

    let moedaOrigem  = document.getElementById("moeda1").value;
    let moedaDestino  = document.getElementById("moeda2").value;

    if (valorUsuario == ""){
        alert("Valor não pode ser vazio")
        return;
    }

    if(moedaOrigem == moedaDestino){
        alert("As moedas são iguais, selecione dois tipos de moedas diferentes")
        return;
    }

    let conversao = valorUsuario * valoresConversao[moedaOrigem][moedaDestino]

    let simbolo = "";
    if(moedaDestino == "real"){
        simbolo = "R$"
    }

    if(moedaDestino == "dolar"){
        simbolo = "US$"
    }

    if(moedaDestino == "euro"){
        simbolo = "€"
    }

    let paragrafoResultado = document.getElementById("resultado");
    paragrafoResultado.textContent = simbolo + " " + conversao.toFixed(2);

    let resultadoDaConversao = {
        valor: valorUsuario,
        moeda1: moedaOrigem,
        moeda2: moedaDestino,
        resultado: conversao
    }

    salvaResultadoHistorico(resultadoDaConversao);

}

let valorUsuario = document.getElementById("valor-usuario")
valorUsuario.addEventListener("keypress", function(event){
    if(event.key == "Enter"){
        converter();
    }

    if(event.ctrlKey == true && event.code == "KeyI"){
        inverter();
    }

    if(event.ctrlKey == true && event.code == "KeyL"){
        limpar();
    }
})

function inverter(){
    let moeda1 = document.getElementById("moeda1").value;
    let moeda2 = document.getElementById("moeda2").value;

    document.getElementById("moeda1").value = moeda2;
    document.getElementById("moeda2").value = moeda1;

    console.log(moeda1);
    console.log(moeda2);
}

function limpar(){
    let valorUsuario = document.getElementById("valor-usuario");
    let resultado = document.getElementById("resultado");

    valorUsuario.value = "";
    
    resultado.textContent = "";

}

function buscarAPI(){
    let url = "https://economia.awesome.com.br/json/last/USD-BRL"
    fetch(url).then(function (data){
        if(data.status == 200){
            console.log("retorno ok!");
        }
        console.log(data);
    }).catch();
}