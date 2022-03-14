const express = require('express');

const app = express();

app.use(express.json());

const usersRouter = require('./routers/usersRouter.js');

// ------
app.use('/', usersRouter);
// ------

require('dotenv').config();

app.listen(process.env.PORT, () => console.log(`Rodando na porta ${process.env.PORT}`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
