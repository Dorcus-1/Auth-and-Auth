
const express = require('express');
const {signup,update} = require('../controllers/loginController');

const router = express.Router();
router.post('/register', signup());
router.put('/update/:id', update());

module.exports = router;