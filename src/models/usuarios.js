const mongoose = require('mongoose');

const usuarios = mongoose.model('usuarios',{
    email:{
        type: String,
        required: true
    },
    nome: String,
    telefone: String,
    password: String
});

module.exports = usuarios;