const { BlogPost } = require('../models');

const BlogPostsController = async (req, res) => {
    const { title, content, categoryIds } = req.body;

    const userId = req.user.id;
    
    const blogpost = await BlogPost.create({ title, userId, content, categoryIds });
    
    return res.status(201).json(blogpost);
};

module.exports = BlogPostsController;