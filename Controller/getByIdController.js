const { User } = require('../models');

const getById = async (req, res) => {
    const { id } = req.params;
    const userById = await User.findByPk(id);

    if (!userById) {
        return res.status(404).json({ message: 'User does not exist' });
    }
    
    return res.status(200).json(userById);
};

module.exports = getById;