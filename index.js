const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const routes = require('./src/usuarios.routes');
mongoose.connect('mongodb://localhost:27017/LavaJato',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.json())
app.use(morgan('dev'));
app.use('/', routes);



app.listen(4200, () => {
    console.log('Meu servidor está funcionando');
});


