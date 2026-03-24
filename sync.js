const { Post, Category, User } = require('./models/index');

const sequelize = require('./config/connection');

(async () => {
  try {
    await sequelize.authenticate(); 
    console.log('Database connected!');

    await sequelize.sync({ force: true });
    console.log('Category table created!');

    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
  }
})();