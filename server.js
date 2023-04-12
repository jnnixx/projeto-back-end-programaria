//Servidor -> sua função é servir o cliente, vai servir as informações solicitadas pelo cliente
//usando o express é necessario importa-lo primeiro
const express = require('express');

const app = express();
const porta = 3333;

function mostraPorta(){
    console.log(`Servidor criado e rodando na porta ${porta}`);
}

/*chama a função
mostraPorta();
*/
//Neste caso, não é o nosso código que vai chamar a função mostraPorta. É o servidor que vai chamar quando estiver funcionando.
app.listen(porta, mostraPorta);
