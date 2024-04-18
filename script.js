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

let botaoInverter = document.getElementById("botao-inverter")
botaoInverter.addEventListener("click", inverter)

let botaoAceitar = document.getElementById("aceita-mensagem-usuario");
botaoAceitar.addEventListener("click", aceitar)

function aceitar(){
    alert("Usuario aceitou os termos do site");
    
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
    paragrafoResultado.textContent = simbolo + conversao.toFixed(2);

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