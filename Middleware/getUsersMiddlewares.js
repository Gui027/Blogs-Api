require('dotenv').config();
// const { User } = require('../models');
const { validateToken } = require('../Auth/jwt');

const authToken = async (req, res, next) => {
const { token } = req.headers.authorization;
const infosToken = validateToken(token);

if (!token) {
    return res.status(401).json({ message: 'Token not found' });
}

if (!infosToken) {
    return res.status(401).json({ message: 'Expired or invalid token' });
}

// const tokenExist = await User.findOne({ where: { infosToken } });

next();
};

module.exports = authToken;