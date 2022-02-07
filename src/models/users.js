const { Model } = require('objection');
const logger = require('../logger')

class UserModel extends Model {
    static tableName = "users";
    
    async getById (id) {
        try{
            const user = await UserModel.query().findById(id)
            return user
        } catch(e) {
            //log error in logger
            logger.error(`Get User By Id Exception thrown: ${e.message}`);
            return undefined;
        }
    };
      
    async createUser (userInput) {
        try {
            const user = await UserModel.query().insert({
                firstname: userInput.firstname,
                lastname: userInput.lastname,
                username: userInput.username
            })
            return user;
        } catch (e) {
            //log error in logger
            logger.error(`Create User Failed Exception thrown: ${e.message}`);
            return undefined;
        }
    }
    
    async checkUserNameExist (username) {
        try{
            const user = await UserModel.query().findOne({ username: username })
            return user;
        } catch (e) {
            //log error in logger
            logger.error(`Check User Failed Exception thrown: ${e.message}`);
            return undefined;
        }
    };
  
    async getByIdAndUpdate (id, body) {
        try {
            const user = await UserModel.query()
            .patchAndFetchById(
                id,
                { 
                    firstname: body.firstname,
                    lastname: body.lastname,
                    username: body.username
                })
            return user
        } catch (e) {
            //log error in logger
            logger.error(`Get By User Id and Update Failed Exception thrown: ${e.message}`);
            return undefined;
        }
    }
    
    async deleteUser (id) {
        try {
            const userdelete = await UserModel.query().deleteById(id)
            return userdelete;
        } catch (e) {
            //log error in logger
            logger.error(`Delete User Failed Exception thrown: ${e.message}`);
            return undefined;
        }
    }
}

module.exports = UserModel;