const express = require('express');

const app = express();

app.get('/teste', (req, res) => {
    console.log('Achou minha rota')//regra de negocio
    res.json({mensagem: 'Rota Funcionando'})
});

app.listen(4200, () => {
    console.log('Meu servidor está funcionando');
});


