const { Categories } = require('../models');

const blogValidation = async (req, res, next) => {
    const { categoryIds } = req.body;
    if (!req.body.title) return res.status(400).json({ message: '"title" is required' });

    if (!req.body.content) return res.status(400).json({ message: '"content" is required' });
    
    if (!req.body.categoryIds) {
        return res.status(400).json({ message: '"categoryIds" is required' }); 
    }

    const findCategory = await Categories.findOne({ where: { id: categoryIds } });

    if (!findCategory) return res.status(400).json({ message: '"categoryIds" not found' });

    next();
};

module.exports = blogValidation;