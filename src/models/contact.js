const { Model } = require('objection');
const logger = require('../logger');


class ContactModel extends Model {
static tableName = 'contact';
  async createContact(userInput, user, verify_code) {
    const userAlreadyExist = await this.getContact(userInput)
    if (userAlreadyExist) return userAlreadyExist
   
      try {
        const userContact = await ContactModel.query().insert({
          contact_type: userInput.contact_type,
          contact_value: userInput.contact_value,
          verify_code: verify_code,
          verified: false,
          userId: user.id
        })
        return userContact;
      } catch (e) {
        //log error in logger
        logger.error(`Create User Failed Exception thrown: ${e.message}`);
        return undefined;
      };
  };
  
  async getContact(userInput) {
    try {
      //what if user have multiple co
      const user = await ContactModel.query().findOne({ contact_value: userInput.contact_value });
      return user
    } catch (e) {
      logger.error(`get contact failed Exception thrown: ${e.message}`);
      return undefined;
    }
  };

  async getAllContact(id) {
    try {
      const userWithContact = await ContactModel.query().select().where("userId", id)
      return userWithContact  
    } catch (e) {
      logger.error(`get all contact failed Exception thrown: ${e.message}`)
      return undefined;
    }
  }

  async updateContact(contactid, body) {
    try {
      const contact = await ContactModel.query().patchAndFetchById(
                  contactid,
                  { 
                      contact_type: body.contact_type,
                      contact_value: body.contact_value
                  })
        return contact
    } catch (e) {
      logger.error(`update contact failed Exception thrown: ${e.message}`);
      return undefined;
    }
  }

  async deleteContact(id) {
   
    try {
      const contactDeleted = await ContactModel.query().deleteById(id);
      return contactDeleted;
        } catch (e) {
            //log error in logger
      logger.error(`Delete contact Failed Exception thrown: ${e.message}`);
      return undefined;
    }
  };
};



module.exports = ContactModel;