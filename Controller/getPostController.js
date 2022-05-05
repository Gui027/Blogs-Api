const { BlogPosts } = require('../models');

const getBlogPosts = async (_req, res) => {
    const allBlogPosts = await BlogPosts.findAll();

    return res.status(200).json(allBlogPosts);
};

module.exports = getBlogPosts;