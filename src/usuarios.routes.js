const express = require('express');
const router = express.Router();
const usuarios = require('../src/models/usuarios');

router.get('/', (req, res) => {
   
    res.json({mensagem: 'PEGAR TODOS OS REGISTROS'});
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json({mensagem: `PEGAR SOMENTE O REGISTRO COM O ID: ${id}` });
});

//CRIANDO UM REGISTRO 
router.post('/', async (req, res) => {
    try{
        const usuario = req.body;
        const response = await new usuarios(usuario).save();
        res.json({error: false, usuario: response});  
    }catch(err){
        res.json({error: true, message: err.mensage});  
    }
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    res.json({mensagem: `ATUALIZAR O REGISTRO SOMENTO COM O ID: ${id}`});
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({mensagem: `DELETAR SOMENTO COM O ID: ${id}`});
});



module.exports = router;