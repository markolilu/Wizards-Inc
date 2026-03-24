const { Model, Sequelize, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const sequelize = require("../config/connection");

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // user_name is 'online handle' e.g. GardenSlayer24
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    //first_name
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    //last_name
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: { args: [8, 100], msg: "Password must be at least 8 characters" },
        // below is a regex expression to check if password contains: lowercase, UPPERCASE, number (0-9) and Special character (!, $, @ etc.)
        // is: /^(?=.*[a-z])(?=.*[A_Z])(?=.*[.*\d])(?=.*[\W_]).+$/
      },
    },
    //created_on
    createdOn: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    //user_id
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

// Export User model
module.exports = User;
