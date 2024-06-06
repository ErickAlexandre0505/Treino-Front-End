const express = require("express");

const aplicacao = express();

aplicacao.get("/", (req, res) => {
    res.send("Meu backend está funcionando !");
});

aplicacao.post("/", (req, res) => {
    res.send("Meu backend está funcionando com método POST");
});

aplicacao.get("/moedas",  (req, res) => {
    const moedas = {
        BRL: "real",
        USD: "dolar",
        EUR: "euro"
    }

    res.status(200).json(moedas);

})

aplicacao.listen(4000, () => {
    console.log("Estou escutando a porta 4000");
});

aplicacao.get("/conversao/:moedas", "/moedas",  (req, res) => {
    // console.log(req.params.moedas);
    let moedas = req.params.moedas.split("-");

    let moeda1 = moedas[0];
    let moeda2 = moedas[1];

    console.log(moeda1);
    console.log(moeda2);

    // Fazer o processo de conversão e retornar o frontend
    converter = {};
    req.status(200).json(converter);

});

function buscaConversaoAPI(moedaOrigem, moedaDestino){
    let urlApi = "https://economia.awesomeapi.com.br/last/";
    urlApi = urlApi + moedaOrigem + "-" + moedaDestino;

    // Recuperar o valor dado fora da função 
    // Pode passar o fetch como retorno da função 
    // return antes do fetch 

    return fetch(urlApi).then(function(response){
        if(response.status = 200){
            console.log("A chamada foi feita com sucesso");
        }
        return response.json();
    }).then(function(data){
        let objetoEmJson = JSON.stringify(data);
        responseAPI = data[moedaOrigem + moedaDestino]["ask"];
        return responseAPI;
    }).catch(function(error){
        console.log(error);
    })
}

aplicacao.METODO('/historico', (req, res) => {

    // Logica da rota aqui

    

});