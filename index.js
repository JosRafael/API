const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
   //PEGAR TODOS OS REGISTROS
    res.json({mensagem: 'PEGAR TODOS OS REGISTROS'});
});

app.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json({mensagem: `PEGAR SOMETE O REGISTRO COM O ID: ${id}` });
});

//CRIANDO UM REGISTRO 
app.post('/', (req, res) => {
    const body = req.body;
    res.json({mensagem: 'Criar usuario'});
});

app.put('/:id', (req, res) => {
    const id = req.params.id;
    res.json({mensagem: `ATUALIZAR O REGISTRO SOMENTO COM O ID: ${id}`});
});

app.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({mensagem: `DELETAR SOMENTO COM O ID: ${id}`});
});

app.listen(4200, () => {
    console.log('Meu servidor está funcionando');
});


