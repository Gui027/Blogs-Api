const { User } = require('../models');

const getUser = async (req, res) => {
    const allUsers = await User.findAll();

    return res.status(200).json(allUsers);
};

module.exports = getUser;