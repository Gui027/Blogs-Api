const Joi = require('joi');

const usersValidation = (req, _res, next) => {
    const { error } = Joi.object({
        displayName: Joi.string().min(8),
        email: Joi.string().email().required(),
        password: Joi.string().length(6).required(),
        image: Joi.string(),
    }).validate(req.body);

    if (error) next(error);

    next();
};

module.exports = usersValidation;