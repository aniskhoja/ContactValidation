var express = require('express');

var usersRouter = require('./routes/users');
var contactRouter = require('./routes/contact');
const verification = require('./routes/validate')


const router = express.Router();

router.use('/users', usersRouter)
router.use('/contact', contactRouter)
router.use('/verification', verification)

module.exports = router;
