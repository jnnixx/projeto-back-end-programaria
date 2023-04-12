const express = require('express');
const router = express.Router();


const app = express();
const porta = 3333;


//uma função que se refere a um verbo precisa dos parametros request e response
function mostrarJogo(request, response){
    response.json({
        nome: "Alice Madness Return",
        imagem: "https://static.gamevicio.com/imagens_itens/big/12/alice-madness-returns-cover-011324.webp",
        miniBio: "Em Alice: Madness Returns, 11 anos se passaram desde a morte de seus pais e sua irmã. Ela agora reside em um orfanato na Londres da era vitoriana sob os cuidados do Dr. Angus Bumby, um psiquiatra que usa a hipnose para ajudar os pacientes e crianças a esquecerem suas memórias e traumas dolorosos."
    });
}

function mostraPorta(){
    console.log(`Servidor criado e rodando na porta ${porta}`);
}

app.use(router.get('/jogo', mostrarJogo))
app.listen(porta, mostraPorta);
