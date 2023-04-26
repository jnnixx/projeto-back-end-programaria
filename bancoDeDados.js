//import o mongoose
const mongoose = require('mongoose');
require('dotenv').config();



//async -> O javascript é uma linguagem que resolve um problema por vez, e quando precisamos de uma série de instruções que possuem dependência das anteriores precisamos pedir para que a execução anterior seja atendida primeiro.
/*
    a primeira coisa que eu tenho que fazer
    para dizer para o JavaScript que eu vou começar a escrever um processo assíncrono é dizer que a
    minha função é async.
    try -> tentativa de um código, caso ocorra um problema, ele vai pegar coma  palavra reservada
    Catch e mostrar no console
*/ 
async function conectaBandoDeDados(){
    try{
        console.log("Conexão com o banco de dados iniciou");
    
    
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Conexão com o banco de dados feita com sucesso!");
    }catch(error){
        console.error(error);
    }
}

//exportar a função para usa-la em outros lugares do código
module.exports = conectaBandoDeDados;