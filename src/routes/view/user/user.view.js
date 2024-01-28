const express = require('express');
const router = express.Router();

//User routes
router.post('/login', userController.login);


module.exports = router