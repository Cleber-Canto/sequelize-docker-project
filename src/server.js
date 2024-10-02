const express = require('express');
const routes = require('./routes');

require('./database');

const app = express();

app.use(express.json());
app.use(routes);

// Iniciar o servidor e mostrar a porta no terminal
app.listen(3333, () => {
  console.log('Servidor rodando na porta 3333');
});
