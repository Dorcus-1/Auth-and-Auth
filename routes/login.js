
const express = require('express');
const {signup,update} = require('../controllers/loginController');
const {deleteUser} = require('../controllers/loginController');

const router = express.Router();
router.post('/register', signup());
router.put('/update/:_id', update());
router.delete('/delete/:_id', deleteUser());

module.exports = router;