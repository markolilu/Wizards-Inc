// Import required packages
const sequelize = require("../config/connection");

// import models
const { Post, Category, User } = require("../models");

const userData = require("./users.json")

// add data and seeding for Category model
const categoryData = require("./categories.json");

// import seed data
const postData = require("./posts.json");


// Seed database
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true
  });
  await Category.bulkCreate(categoryData);

  for (const post of postData) {
  const createdPost = await Post.create({
    title: post.title,
    content: post.content,
    postedBy: post.postedBy,
    userId: post.userId
  });

  if (post.category_id) {
    await createdPost.addCategories([post.category_id]);
  }
};


  console.log(
        "\n\x1b[1m\x1b[42m\x1b[30m =====  Database seeded successfully!  ===== \x1b[0m\n"
      );
  process.exit(0);
};

// Call seedDatabase function
seedDatabase();

