require('dotenv').config();
const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const UsersController = require('./Controller/postUsersController');
const usersMiddlewares = require('./Middleware/usersMiddlewares');
const Error = require('./Errors/errors');
const LoginController = require('./Controller/loginController');
const loginMiddlewares = require('./Middleware/loginMiddlewares');

app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.post('/user', usersMiddlewares, UsersController);
app.post('/login', loginMiddlewares, LoginController);
app.use(Error);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
