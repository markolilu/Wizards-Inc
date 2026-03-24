
const bcrypt = require("bcrypt");
const { User } = require("../models");
const { signToken } = require("../utils/auth");
const { ValidationError } = require("sequelize");

// POST /api/users - Register
const register = async (req, res) => {
  try {
    const { email, userName, firstName, lastName, password, password2 } = req.body;

    if (password !== password2) {
      console.log('heyy')
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const existingEmail = await User.findOne({ where: { email } });
    if (existingEmail) {
      console.log('hi')

      return res.status(400).json({ message: "Email already in use" });
    }

    const existingUserName = await User.findOne({ where: { user_name: userName } });
    if (existingUserName) {
      console.log('helllooo')

      return res.status(400).json({ message: "Username already taken" });
    }

    const newUser = await User.create({
      userName,
      firstName,
      lastName,
      email,
      password,
    });

    const token = signToken(newUser);

    res.status(201).json({ token, user: { id: newUser.id, userName: newUser.userName } });
  } catch (err) {
    console.error(err);
    if (err instanceof ValidationError) {
      return res.status(400).json({ message: err.errors[0].message });
    }
    res.status(500).json({ message: "Registration failed", error: err.message });
  }
};

// POST /api/users/login - Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const validPassword = user.checkPassword(password);
    if (!validPassword) {

      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = signToken(user);

    res.status(200).json({ token, user: { id: user.id, userName: user.userName } });
  } catch (err) {

    console.error(err);
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};

module.exports = { register, login };

