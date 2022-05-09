// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class PostsCategories extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   PostsCategories.init({
//     postId: DataTypes.STRING,
//     categoryId: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'PostsCategories',
//   });
//   return PostsCategories;
// };

// const associations = (models) => {
//   models.BlogPost.belongsToMany(models.Categories, {
//     as: 'categories',
//     through: models.PostCategories,
//     forengKey: 'categoryId',
//     otherKey: 'postId',
//   });

//   models.Categories.belongsToMany(models.BlogPost, {
//     as: 'posts',
//     through: models.PostCategories,
//     forengKey: 'postId',
//     otherKey: 'categoryId',
//   });
// };

module.exports = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define('PostCategories', {
    postId: DataTypes.STRING,
    categoryId: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  PostCategories.associate = (models) => {
    models.Categories.belongsToMany(models.BlogPost, {
      as: 'blogposts',
      through: PostCategories,
      foreignKey: 'id',
      otherKey: 'id',
    });

    models.BlogPost.belongsToMany(models.Categories, {
      as: 'categories', through: PostCategories, foreignKey: 'id', otherKey: 'id',
    });
  };
  // PostCategories.associate = associations;
  return PostCategories;
};