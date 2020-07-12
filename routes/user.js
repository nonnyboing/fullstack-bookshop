const express = require('express');
const router = express.Router();

const userCTRL = require('../contollers/user')

const User = require('../models/user');

router.post('/register', userCTRL.addUser);
router.get('/login', userCTRL.login);

module.exports = router;