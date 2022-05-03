const { User } = require('../models');
const { generateToken } = require('../Auth/jwt');

const UsersController = async (req, res) => {
    const { displayName, email, password, image } = req.body;

    const emailExist = await User.findOne({ where: { email } });

    if (emailExist) {
        return res.status(409).json({ message: 'User already registered' });
    }

    const user = await User.create({ displayName, email, password, image });

    const token = generateToken(user);

    return res.status(201).json({ token });
};

module.exports = UsersController;