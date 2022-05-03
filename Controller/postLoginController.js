const { User } = require('../models');
const { generateToken } = require('../Auth/jwt');

const LoginController = async (req, res) => {
    const { email, password } = req.body;

    const loginExist = await User.findOne({ where: { email, password } });
    
    if (!loginExist) {
        return res.status(400).json({ message: 'Invalid fields' });
    }
    const token = generateToken(loginExist);
    
    return res.status(200).json({ token });
};

module.exports = LoginController;