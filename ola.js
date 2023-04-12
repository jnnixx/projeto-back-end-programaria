//Imports
const express = require('express');
const router = express.Router();

const app = express();
const porta = 3333;

//criando uma funcao que vai fazer uma requisição http e devolver uma respsta
function mostraOla(request, response){
    response.send("DEU CERTO!");
}

function mostraPorta(){
    console.log(`Servidor criado e rodando na porta ${porta}`);
}

//vamos usar o verbo get
app.use(router.get('/ola', mostraOla));
app.listen(porta, mostraPorta);
