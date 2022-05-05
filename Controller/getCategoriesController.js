const { Categories } = require('../models');

const getCategories = async (_req, res) => {
    const allCategories = await Categories.findAll();

    return res.status(200).json(allCategories);
};

module.exports = getCategories;