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

    const resultado = {
        moedaOrigem: moeda1,
        moedaDestino: moeda2
    };
});