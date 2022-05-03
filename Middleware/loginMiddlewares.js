const Joi = require('joi');

const loginValidation = (req, _res, next) => {
    const { error } = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().length(6).required(),
    }).validate(req.body);
    
    if (error) next(error);

    next();
};

module.exports = loginValidation;