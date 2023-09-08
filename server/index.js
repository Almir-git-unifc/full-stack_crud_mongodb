const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require( './models/Users');

const port = 3005;

// Isto vem antes do Mongoose
app.use(cors());
app.use(express.json());

// Adaptação
const pass = "Zbdac3r-1ex_zyk";
const initbco = 'mongodb+srv://admin:';
const finbco = '@cluster0.epsupyi.mongodb.net/crud?retryWrites=true&w=majority';
const conectbco = initbco + pass + finbco;

// Aqui podemos por as rotas ou endpoints ou a conexão com MongoDB
mongoose
.connect(
        // Abaixo temos a string de conexão com os dados em variáveis
        conectbco,
       {  // abaixo temos 1 configurações padrões do Banco MongoDB
                 useNewUrlParser: true,
       }
)

// Aqui vamos colocar as rotas da API
app.post('/createUser', (req, res) => {
    UserModel.create(req.body)
       .then(users => res.json(users))
       .catch(err => res.json(err))
} );



// Aqui podemos por as rotas ou endpoints que é a mesma coisa; vide AA PUC 10 A1

app.listen(port, () => {
   console.log(`Server app is listening at ${port}`)
});