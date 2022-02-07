var express = require('express');
var router = express.Router();
var { updateValidateStatus } = require('../controllers/validate')

/* users routes */
router.route('/:token').put(updateValidateStatus)

module.exports = router;