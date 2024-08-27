const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require( './models/Users');

const port = 3005;

// Isto vem antes do Mongoose
app.use(cors());
app.use(express.json());

// Adaptation: Config User
const initbco = 'mongodb+srv://admin:';
const yourPassw = "your-password";
const yourConnectionString = '@cluster0.epsupyi.mongodb.net/crud?retryWrites=true&w=majority';
const conectbco = initbco + yourPassw + yourConnectionString;

// Aqui podemos por a conexão com MongoDB
mongoose
.connect(
        // Abaixo temos a string de conexão com os dados em variáveis
        conectbco,
       {  // abaixo temos 1 configurações padrões do Banco MongoDB
                 useNewUrlParser: true,
       }
)
.then((res) => console.log(`Connection Success in DB Cloud ${res}`))
.catch((err) => console.log(`Error in connection with DataBase MongoDB ${err}`));



// Aqui vamos colocar as rotas ou endpoints da API
app.get('/', (req, res) => {
   UserModel.find({})
      .then(users => res.json(users))
      .catch(err => res.json(err))
} );

app.get('/getUser/:id', (req, res) => {
   const id = req.params.id; // ponha na variavel id o valor que está no corpo da URL
   UserModel.findById({_id:id})
      .then(users => res.json(users))
      .catch(err => res.json(err))
} );

app.put('/updateUser/:id', (req, res) => {
   const id = req.params.id;
     UserModel.findByIdAndUpdate({_id:id}, {
       name: req.body.name, 
       email: req.body.email,
       age: req.body.age
    })
      .then(users => res.json(users))
      .catch(err => res.json(err))
} );

app.delete('/deleteUser/:id', (req, res) => {
   const id = req.params.id;
     UserModel.findByIdAndDelete({_id:id})
  .then(res  => res.json(res))
  .catch(err => res.json(err))
} );

app.post('/createUser', (req, res) => {
    UserModel.create(req.body)
       .then(users => res.json(users))
       .catch(err => res.json(err))
} );

// Aqui vem o servidor
app.listen(port, () => {
   console.log(`Server app is listening at ${port}`)
});
