const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = 3005;

const app = express();
app.use(cors());
app.use(express.json());

// Aqui podemos por as rotas ou endpoints que é a mesma coisa; vide AA PUC 10 A1

app.listen(port, () => {
   console.log(`Server app is listening at ${port}`)
});