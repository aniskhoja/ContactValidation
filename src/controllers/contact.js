const UserModel = require('../models/users');
const ContactModel = require('../models/contact');
const logger = require('../logger');
const getBodyFilter = require('../utils/getBodyFilter');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const main = require('../utils/mailer');

const getUserContact = async (req, res) => {
    const id = req.params.id
    
     const user = new UserModel();
    const userDetails = await user.getById(id);
    if (!userDetails) return res.status(404).send("please login");

    const userContact = new ContactModel();
    const userAndContacts = await userContact.getAllContact(id);

    // const userContacts = []
    // for (const iterator of userAndContacts) {
    //     for (const key in iterator) {
    //         if (key === "contact_value") {
    //             userContacts.push(iterator[key])
                
    //         }
    //     }
    // }
    
    const body = [userDetails["id"], userDetails["firstname"], userDetails["lastname"], userDetails["username"], userAndContacts ]
    
    // userAndContacts["id"], userAndContacts["contact_value"], userAndContacts["contact_type"] ]
    res.status(200).send(body);
};

const createUserContact = async (req, res) => {
    //user validation .... jwt token

    const id = req.params.id
    //object destructuring
    const { contact_type, contact_value } = req.body;
    const columns = ['contact_type', 'contact_value'];
    
    try {
        const validateReq = await getBodyFilter(req.body, columns); 
        //throw an error
        if (!validateReq.valid) return res.status(400).send(validateReq.message);
    } catch (e) {
        //log error into logger
        logger.error(`createUser: controller failed ${e.message}`);
    }
    
    const user = new UserModel();
    //get existing user details
    const userDetails = await user.getById(id);
    if (!userDetails) return res.status(404).send("please login");
    
    const userContact = new ContactModel();
    const contactUser = await userContact.createContact(req.body, userDetails, process.env.EMAIL_SECRET);

    // const userContactFound = await userContact.getContact(id)
    // if(userContactFound) return res.status(404).send("user contact did not found")

    
    const emailToken = await jwt.sign(userDetails['username'], process.env.EMAIL_SECRET)
    const url = `http://localhost:9000/verification/${emailToken}`;
    
    try {
        main(contactUser.contact_value, url)
    } catch (e) {
        logger.error(`sending email failed exception thrown: ${e.message}`)
    }
    
    res.status(201).send("done");
};

const updateUserContact = async (req, res) => {
    const c_id = req.params.id;
    const u_id = req.params.userid;

    const { contact_type, contact_value } = req.body;
    const columns = ['contact_type', 'contact_value'];
    
    try {
        const validateReq = await getBodyFilter(req.body, columns); 
        //throw an error
        if (!validateReq.valid) return res.status(400).send(validateReq.message);
    } catch (e) {
        //log error into logger
        logger.error(`createUser: controller failed ${e.message}`);
    }

    const userContact = new ContactModel();
    const userUpdated = await userContact.updateContact(c_id, req.body);

    res.send(userUpdated);
};

const deleteUserContact = async (req, res) => {
    const c_id = req.params.id;
    const u_id = req.params.userid;

    const userContact = new ContactModel();

    try {
        const contactDeleted = await userContact.deleteContact(c_id)
        if(!contactDeleted) return res.status(404).send("Cannot find contact to delete")
    } catch (e) {
        logger.error(`contact delete failed Exception thrown: ${e.message}`)
    }

    res.send('delete user');
};

module.exports = { getUserContact, createUserContact, updateUserContact, deleteUserContact }