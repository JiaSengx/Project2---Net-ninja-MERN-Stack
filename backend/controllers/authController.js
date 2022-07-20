const AuthModel = require('../models/AuthModel');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Get All user --- not use in frontend only for development
const getUsers = async (req, res) => {
  const users = await AuthModel.find({});

  res.status(200).json(users);
};

// Login - Get Single user
const getUser = async (req, res) => {
  const { email, password } = req.params;
  const user = await AuthModel.findOne({ email });

  if (!user) {
    return res.status(404).json({ error: 'No such user' });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword)
    return res.status(400).json({ error: 'Invalid email and password' });

  res.status(200).json(user);
};

// Signup - Create new user
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  let emptyFields = [];

  if (!name) emptyFields.push('name');
  if (!email) emptyFields.push('email');
  if (!password) emptyFields.push('password');
  if (emptyFields.length > 0)
    return res
      .status(400)
      .json({ error: 'Please fill in all the fields', emptyFields });

  try {
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    const user = await AuthModel.create({
      name,
      email,
      password: encryptedPassword,
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
};
