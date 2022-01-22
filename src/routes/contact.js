var express = require('express');
var router = express.Router();
var { getUserContact, createUserContact, updateUserContact, deleteUserContact } = require('../controllers/contact')

/* user contact routes */
router.route('/user/:id').get(getUserContact).post(createUserContact)
router.route('/:id/user/:id').put(updateUserContact).delete(deleteUserContact)

module.exports = router;
