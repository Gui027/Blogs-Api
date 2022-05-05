const { BlogPost } = require('../models');

const BlogPostsController = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    console.log('infos', title, content, categoryIds);
    const userId = req.user.id;

    const blogpost = await BlogPost.create({ title, userId, content, categoryIds });
    console.log('blogpost', blogpost);
    return res.status(201).json(blogpost);
};

module.exports = BlogPostsController;