const logger = require('../logger');
const jwt = require('jsonwebtoken')
const UserModel = require('../models/users');
const ContactModel = require('../models/contact');

const updateValidateStatus = async (req, res) => {
    const token = req.params.token
    const userName = await jwt.verify(token, process.env.EMAIL_SECRET)
    const user = await UserModel.query().findOne({ username: userName })
    const { id } = await ContactModel.query().findOne({ userId: user.id })
    const updatedUser = await ContactModel.query().patchAndFetchById(id, { verified: "1" });
    res.send(updatedUser);
};

module.exports = { updateValidateStatus } 