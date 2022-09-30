
const express = require('express');
const {signup}= require('../controllers/loginController');

const router = express.Router();
router.post('/register', signup());

module.exports = router;