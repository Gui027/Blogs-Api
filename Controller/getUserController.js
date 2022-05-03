const { User } = require('../models');

const getUser = async (_req, res) => {
        const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });
    
        return res.status(200).json(allUsers);
};

module.exports = getUser;