const express = require('express');
require('dotenv').config();

const charactersRoute = require('./routes/charactersRoute');

const PORT = process.env.PORT || 3000;
const app = express();

// verificar para que serve
app.use(express.json());

app.use('/characters', charactersRoute);

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`)
})