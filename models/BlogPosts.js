// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class BlogPosts extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   BlogPosts.init({
//     title: DataTypes.STRING,
//     content: DataTypes.STRING,
//     userId: DataTypes.NUMBER,
//     published: DataTypes.STRING,
//     updated: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'BlogPosts',
//   });
//   return BlogPosts;
// };

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, { timestamps: false, tableName: 'BlogPosts' });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
    { foreignKey: 'id', as: 'user', through: BlogPost, otherKey: 'id' }); // foreignKey: id do users, otherKey: id do BlogPosts
  };

  return BlogPost;
};