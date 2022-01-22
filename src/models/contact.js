const { Model } = require('objection');

class ContactModel extends Model {
  static tableName ='contact';
}



module.exports = ContactModel;