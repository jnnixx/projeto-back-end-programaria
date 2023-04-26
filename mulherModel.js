//criaremos o nosso modelo/interface

//primeiro importamos o mongoose 
const mongoose = require('mongoose');

const MulherSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    imagem: {
        type: String,
        require: true,
    },
    citacao: {
        type: String,
        require: true,
    },
    miniBio:{
        type: String,
        require: true,
    }
});

// vamos exportar nosso model, para usar-lo em outros arquivos
//export da maneira mongoose
module.exports = mongoose.model('diva', MulherSchema);