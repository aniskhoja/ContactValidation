var express = require('express');

var usersRouter = require('./routes/users');
var contactRouter = require('./routes/contact');


const router = express.Router();

router.use('/users', usersRouter)
router.use('/contact', contactRouter)

module.exports = router;
