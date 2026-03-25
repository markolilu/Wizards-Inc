// import all models
const Post = require("./post");
const Category = require("./category");
const User = require("./user");

Post.belongsToMany(Category, {
  through: "PostCategory",
  foreignKey: "postId",
  otherKey: "categoryId",
  as: "categories",
});

Category.belongsToMany(Post, {
  through: "PostCategory",
  foreignKey: "categoryId",
  otherKey: "postId",
  as: "posts",
});

User.hasMany(Post, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = {
  Post,
  Category,
  User,
};
