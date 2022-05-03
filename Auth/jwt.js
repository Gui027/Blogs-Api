const jwt = require('jsonwebtoken');

const SECRET = '12345';

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const generateToken = (data) => {
    const payload = {
        user: data,
    }; 

    const token = jwt.sign(payload, SECRET, jwtConfig);
    
    return token;
};

const validateToken = (token) => {
    try {
        const verifiedToken = jwt.verify(token, SECRET);
    
        return verifiedToken;
    } catch (err) {
        return false;
    }
};

module.exports = {
    generateToken,
    validateToken,
};