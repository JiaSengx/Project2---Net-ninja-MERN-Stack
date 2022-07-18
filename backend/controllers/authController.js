const AuthModel = require('../models/AuthModel');
const mongoose = require('mongoose');

// Get All user
const getUsers = async (req, res) => {
  const users = await AuthModel.find({});

  res.status(200).json(users);
}

// Get Single user
const getUser = async (req, res) => {
  const { email } = req.params;
  const user = await AuthModel.findOne({email});

  if (!user) {
    return res.status(404).json({ error: 'No such user' });
  }

  res.status(200).json(user);
};

// Create new user
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
    const user = await AuthModel.create({ name, email, password });
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
