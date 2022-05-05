const blogValidation = (req, res, next) => {
    if (!req.body.title) return res.status(400).json({ message: '"title" is required' });

    if (!req.body.content) return res.status(400).json({ message: '"content" is required' });
    
    if (!req.body.categoryIds) {
        return res.status(400).json({ message: '"categoryIds" is required' }); 
    }

    next();
};

module.exports = blogValidation;