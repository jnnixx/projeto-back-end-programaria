//imports
const express = require('express'); //aqui estou iniciando o express
const router = express.Router(); //aqui estou configurando a primeira parte da rota
//const { v4: uuidv4 } = require('uuid');


//cors
const cors = require('cors')

//Model
const Mulher = require('./mulherModel');


//banco de dados
const  conectaBancoDeDados = require('./bancoDeDados'); //aqui estou ligando ao arquivo banco de dados
conectaBancoDeDados()//chamando a função que conecta o banco de dados

const app = express(); //aqui estou iniciando o app
app.use(express.json());
app.use(cors()); //liberando a aplicação /api a ser usada a partir do front end


const porta = 3333; //aqui estou criando a porta


//criar a função de http (com mongoose)
//GET
async function mostrarMulheres(request, response){

    try{
    
        const mulheresVindasDoBancoDeDados = await Mulher.find();
        response.json(mulheresVindasDoBancoDeDados);
    
    }catch(error) {
        console.error(error);
    }
}


//POST (através do mongoDB)
async function criarMulher(request, response){
    const novaMulher = new Mulher({
         //id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        miniBio: request.body.miniBio,
        citacao: request.body.citacao
    });
    
    try{
        const mulherCriada = await novaMulher.save();
        response.status(201).json(mulherCriada); //passa a resposta com o status 201
    }catch(error){
        console.error(error);
    }
}

//PATCH
async function corrigeMulher(request, response){
    //primeiro pegamos o ID
    /**
     * function encontraMulher(mulher){
        if(mulher.id === request.params.id){
            return mulher
        }
    }
     */

    try{
    
        const mulherEncontrada = await Mulher.findById(request.params.id);
        if(request.body.nome){
            mulherEncontrada.nome = request.body.nome;
        }
        if(request.body.imagem){
            mulherEncontrada.imagem = request.body.imagem;
        }
        if(request.body.miniBio){
            mulherEncontrada.miniBio = request.body.miniBio;
        }
        if(request.body.citacao){
            mulherEncontrada.citacao = request.body.citacao;
        }

        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save();
        response.json(mulherAtualizadaNoBancoDeDados);
    
    }catch(error){
        console.error(error);
    }

    


}

//DELETE
async function deletaMulher(request, response){
    /**
     * function todasMenosEla(mulher){
        if(mulher.id !== request.params.id){
            return mulher;
        }
    }
     */

    try{

        await Mulher.findByIdAndDelete(request.params.id);
        response.json({ message: 'Deletado com sucesso!'})
    }catch(error){
        console.error(error);
    }

    /**
     * const mulheresQueFicam = mulheres.filter(todasMenosEla);
    response.json(mulheresQueFicam);
     */
}

//PORTA
function mostraPorta(){
    console.log(`Servidor criado e rodando na porta ${porta}`);
}


app.use(router.get('/mulheres', mostrarMulheres)) //é a segunda configuração da rota, onde configuro o método GET
app.use(router.post('/mulheres', criarMulher)) //configuração da rota POST
app.use(router.patch('/mulheres/:id',corrigeMulher)) //configuração da rota PATCH
app.use(router.delete('/mulheres/:id', deletaMulher)) //configuração da rota DELETE
app.listen(porta, mostraPorta); //servidor aqui estou "ouvindo" a porta+
