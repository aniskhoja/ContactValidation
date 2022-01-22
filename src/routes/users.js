var express = require('express');
var router = express.Router();
var { getuser, createUser, updateUser, deleteUser } = require('../controllers/users')

/* users routes */
router.route('/').post(createUser)
router.route('/:id').get(getuser).put(updateUser).delete(deleteUser)

module.exports = router;
