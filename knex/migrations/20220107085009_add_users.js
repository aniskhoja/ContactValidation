const UserModel =  require('../../src/models/users')

exports.up = async function(knex) {
    return await knex.schema.createTable(UserModel.tableName, table => {
        table.increments();
        table.string('firstname');
        table.string('lastname');
        table.string('username');
        table.timestamps(true, true);
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists(UserModel.tableName);
};