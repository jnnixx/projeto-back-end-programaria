//imports
const express = require('express');
const router = express.Router();

const app = express();
const porta = 3333;
const mulheres = [
    {
        nome: "Ellie",
        imagem: "https://s2.glbimg.com/dZPbXfGcEqRpbTSwQxfzhaoPYwE=/0x0:768x479/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/z/m/KMAlnARmy1dQivmUpN1w/ellie.jpeg",
        jogo: "The Last of Us"
    },
    {
        nome: "Aloy",
        imagem: "https://clubedovideogame.com.br/wp-content/uploads/2022/06/Aloy-Horizon-DD-Build.jpg",
        jogo: "Horizon Zero Dawn"
    },
    {
        nome: "Lara Croft",
        imagem: "https://s2.glbimg.com/dXpalibmtA4znEEu_kw8cXuaJRQ=/0x0:1400x788/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/B/q/f7vgSIQLeJJBWAMvtbDA/eidos.jpeg",
        jogo: "Tomb Raider"
    },
    {
        nome: "Kassandra",
        imagem: "https://static.gamevicio.com/imagens_up/big/32/031784.jpg",
        jogo: "Assassins Creed Odyssey"
    },
    {
        nome: "Kassandra",
        imagem: "https://static.gamevicio.com/imagens_up/big/32/031784.jpg",
        jogo: "Assassins Creed Odyssey"
    },

];

//criar a função de http
function mostrarMulheres(request, response){
    response.json(mulheres);
}

function mostraPorta(){
    console.log(`Servidor criado e rodando na porta ${porta}`);
}

app.use(router.get('/mulheres', mostrarMulheres))
app.listen(porta, mostraPorta);
