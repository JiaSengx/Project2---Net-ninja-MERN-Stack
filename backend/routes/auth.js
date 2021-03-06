const express = require('express');
const {
  getUser,
  createUser,
  getUsers,
} = require('../controllers/authController');

const router = express.Router();

router.get('/', getUsers);
router.get('/:email/:password', getUser);
router.post('/', createUser);

module.exports = router;
