const ContactModel =  require('../../src/models/contact')
const UserModel =  require('../../src/models/users')

exports.up = async function(knex) {
    return await knex.schema.createTable(ContactModel.tableName, table => {
        table.increments();
        table.string('contact_value');
        table.string('contact_type');
        table.string('verify_code');
        table.string('verified').notNullable().defaultTo('0');
        table.timestamps(true, true);
        table.integer('userId').unsigned();
        table.foreign('userId').references('id').inTable(UserModel.tableName);
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists(ContactModel.tableName);
};