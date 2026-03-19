const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../models");

// POST /api/users - Register
router.post("/", async (req, res) => {
  try {
    const { email, userName, firstName, lastName, password, password2 } = req.body;

    if (password !== password2) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if email already exists
    const existingEmail = await User.findOne({ where: { email } });

    if (existingEmail) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Check if username already exists
    const existingUserName = await User.findOne({ where: { user_name: userName } });

    if (existingUserName) {
      return res.status(400).json({ message: "Username already taken" });
    }

    // Create new user (password hashing handled by model hooks)
    const newUser = await User.create({
      userName,
      firstName,
      lastName,
      email,
      password,
    });

    const token = jwt.sign(
      { id: newUser.id, userName: newUser.userName },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(201).json({
      user: {
        id: newUser.id,
        userName: newUser.userName,
      },
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Registration failed", error: err.message });
  }
});

// POST /api/users/login - Login
router.post("/login", async (req, res) => {
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

    const token = jwt.sign(
      { id: user.id, userName: user.userName },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(200).json({
      user: {
        id: user.id,
        username: user.userName,
      },
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Login failed", error: err.message });
  }
});

module.exports = router;

