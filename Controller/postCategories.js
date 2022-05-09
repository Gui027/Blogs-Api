const { Categories } = require('../models');

const categoriesController = async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: '"name" is required' });
    }

    const categories = await Categories.create({ name });

    return res.status(201).json(categories);
};    

module.exports = categoriesController;