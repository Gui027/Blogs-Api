const { BlogPost, User, Categories } = require('../models');

const getBlogPosts = async (_req, res) => {
    const allBlogPosts = await BlogPost.findAll({
        include: [
            { model: User,
              as: 'user', 
              attributes: { exclude: ['password', 'createdAt', 'updatedAt'] } },
            { model: Categories, 
            as: 'categories',
            attributes: { exclude: ['createdAt', 'updatedAt'] } },
        ],
    });
    console.log('allblogpost', allBlogPosts);
    return res.status(200).json(allBlogPosts);
};

module.exports = getBlogPosts;