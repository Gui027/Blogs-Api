const Joi = require('joi');
require('express-async-errors');

const error = (err, _req, res, _next) => {
    console.log('errormessage', err.message);
    if (Joi.isError(err)) return res.status(400).json({ message: err.message });

    return res.status(500).json({ message: 'Ops, algo deu errado' });
};

module.exports = error;