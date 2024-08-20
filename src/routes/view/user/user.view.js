const express = require('express');
const {userController} = require('../../controllers/user.controller');
const router = express.Router();

//User routes
router.post('/login', userController.login);
router.post('/register', userController.create);


module.exports = router;