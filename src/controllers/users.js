const UserModel = require('../models/users');
const getBodyFilter = require('./../utils/getBodyFilter');
const logger = require('../logger');


// PR: add try..catch to all controller, return json error and add logger if possible

const getuser = async (req, res) => {
    const id = req.params.id;
    //throw error Not a number
    if(isNaN(id)) return res.status(400).send('Not a number, id should be integer');
    
    //create user object
    const user = new UserModel();

    try {
        const result = await user.getById(id);
        //throw an error
        if(result === undefined) return res.status(404).send("User Not found");
    } catch (e) {
        //log error into logger
        logger.error(`getById: controller failed ${e.message}`);
    }

    //output success
    res.status(200).send(result);
}

const createUser = async (req, res) => {
    //object destructuring
    const { firstname, lastname, username } = req.body;
    const columns = [ 'firstname', 'lastname', 'username' ];

    //create user object
    const user = new UserModel();

    try {
        const validateReq = await getBodyFilter(req.body, columns); 
        //throw an error
        if (!validateReq.valid) return res.status(400).send(validateReq.message);
    } catch (e) {
        //log error into logger
        logger.error(`createUser: controller failed ${e.message}`);
    }
    
    try {
        //check if username is unique
        const userExist = await user.checkUserNameExist(username);
        //user exist check
        if (userExist) return res.status(422).send("Username already exist");
    } catch (e) {
        //log error into logger
        logger.error(`UserExist: controller failed ${e.message}`);
    }
    
    const userCreated = await user.createUser(req.body);
    
    //output success
    res.status(201).send(userCreated);
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    //object destructuring
    const { firstname, lastname, username } = req.body;
    
    const user = new UserModel();
    
    try {
        const validateReq = await user.getBodyFilter(req.body); 
        //throw an error
        if (!validateReq.valid) return res.status(400).send(validateReq.message);
    } catch (e) {
        //log error into logger
        logger.error(`createUser: controller failed ${e.message}`);
    }
    
    try {
        //check if username is unique
        const userExist = await user.checkUserNameExist(username);
        if (!userExist.id === id) {
            if (userExist) {
                return res.send("Username already exist");
            }
        }
    } catch (e) {
        //log error into logger
        logger.error(`checkUserNameExist: controller failed ${e.message}`);
    }
    
    try {
        const result = await user.getByIdAndUpdate(req.params.id, req.body);
    } catch (e) {
        //log error into logger
        logger.error(`getByIdAndUpdate: controller failed ${e.message}`);
    }

    res.status(200).send(result + "Updated");
}

const deleteUser = async (req, res) => {
    const { id } =  req.params.id;
    const user = new UserModel();

    try {
        // check if user exists
        const userExist = await user.getById(id); 
        if (!userExist) return res.status(404).send("User Not Found");
    } catch (e) {
        //log error into logger
        logger.error(`getById: controller failed ${e.message}`);
    }
    
    try {
        const userToDelete = await user.deleteUser(id);
        if (!userToDelete) return res.status(404).send("cannot found the user");
    } catch (e) {
        //log error into logger
        logger.error(`deleteUser: controller failed ${e.message}`);
    }

    res.send('delete user');
}

module.exports = { getuser, createUser, updateUser, deleteUser } 