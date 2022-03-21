const express = require('express');

const app = express();

app.use(express.json());

require('dotenv').config();

// ------
const usersRouter = require('./routers/usersRouter.js');
const categoriesRouter = require('./routers/categoriesRouter.js');
const postRouter = require('./routers/postRouter.js');

app.use('/', usersRouter);
app.use('/', categoriesRouter);
app.use('/', postRouter);
// ------

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
