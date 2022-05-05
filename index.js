require('dotenv').config();
const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const UsersController = require('./Controller/postUsersController');
const usersMiddlewares = require('./Middleware/usersMiddlewares');
const Error = require('./Errors/errors');
const LoginController = require('./Controller/postLoginController');
const loginMiddlewares = require('./Middleware/loginMiddlewares');
const getUser = require('./Controller/getUserController');
const authToken = require('./Middleware/getUsersMiddlewares');
const getById = require('./Controller/getByIdController');
const postCategories = require('./Controller/postCategories');
const getCategories = require('./Controller/getCategoriesController');
const getPost = require('./Controller/getPostController');

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.post('/user', usersMiddlewares, UsersController);
app.post('/login', loginMiddlewares, LoginController);
app.get('/user', authToken, getUser);
app.get('/user/:id', authToken, getById);
app.post('/categories', authToken, postCategories);
app.get('/categories', authToken, getCategories);
app.post('/post');
app.get('/post', authToken, getPost);
app.use(Error);