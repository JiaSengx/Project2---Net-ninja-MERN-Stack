const express = require('express');
const {
  getUser,
  createUser,
  getUsers,
} = require('../controllers/authController');

const router = express.Router();

router.get('/', getUsers);
router.get('/:email', getUser);
router.post('/', createUser);

module.exports = router;
