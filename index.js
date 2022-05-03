require('dotenv').config();
const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const UsersController = require('./Controller/postUsersController');
// const usersMiddlewares = require('./Middleware/usersMiddlewares');
// const Error = require('./Errors/errors');
// const LoginController = require('./Controller/postLoginController');
// const loginMiddlewares = require('./Middleware/loginMiddlewares');
// const getUser = require('./Controller/getUserController');
// const authToken = require('./Middleware/getUsersMiddlewares');

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.post('/user', /* usersMiddlewares */ UsersController);
// app.post('/login', loginMiddlewares, LoginController);
// app.get('/user', /* authToken */ getUser);
// app.use(Error);